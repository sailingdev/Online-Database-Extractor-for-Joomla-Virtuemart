<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Database;
use App\Rules\ValidPrefix;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Throwable;
use Yajra\DataTables\DataTables;
use mysqli;

class DatabaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws ValidationException
     */
    public function index()
    {
        $info = Database::where('user_id', Auth::user()->id)->firstOrFail();
        $mysql = @new mysqli(
            $info['host_name'], $info['user_name'], $info['password'], $info['database_name']
        );
        $this->check_db($mysql);
        $tables = $this->check_tbl($mysql, $info['table_prefix']);
        $data = $this->check_query($mysql, $tables);
        if (request()->ajax()){
            return DataTables::of($data)
                ->editColumn('check_box', function($row) {
                    $el = '<input type="checkbox" name="order_id" style="vertical-align:middle" value="'.$row['order_id'].'" />';
                    return $el;
                })
                ->addColumn('name_email', function($row){
                    $elements =explode("/", $row['name_email']);
                    $btn = $elements[0]."<br>".$elements[1];
                    return utf8_encode($btn);
                })
                ->addColumn('status', function($row){
                    $btn = str_replace("COM_VIRTUEMART_ORDER_STATUS_", "", $row['status']);
                    return $btn;
                })
                ->addColumn('order_date', function ($row){
                    $btn = date_format(date_create($row['order_date']), "l, d F Y H:i");
                    return $btn;
                })
                ->addColumn('last_modified', function ($row){
                    $btn = date_format(date_create($row['last_modified']), "l, d F Y H:i");
                    return $btn;
                })
                ->escapeColumns([])
                ->make(true);
        }
        $mysql->close();
        return view('dashboard');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('user.connect_db');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            'host_name' => 'required',
            'database_name' => 'required',
            'table_prefix' => ['required', new ValidPrefix],
            'user_name' => 'required',
            'password' => 'nullable'
        ]);
        $validated = Arr::prepend($validated, Auth::user()->id, 'user_id');
        $mysql = @new mysqli(
            $validated['host_name'], $validated['user_name'], $validated['password'], $validated['database_name']
        );
        $this->check_db($mysql);
        $tables = $this->check_tbl($mysql, $validated['table_prefix']);
        try {
            $database = Database::where('user_id', Auth::user()->id)->firstOrFail();
            $database->update($validated);
        } catch (Throwable  $e) {
            Database::create($validated);
        }
        $mysql->close();
        return redirect()->route('index')
            ->with('success', 'linked new database.');
    }

    /**
     * Check the database status.
     *
     * @param object $db
     * @return void
     * @throws ValidationException
     */
    public function check_db($db){
        if ($db->connect_errno){
            throw ValidationException::withMessages(['db_error' => $db->connect_error]);
        }
    }

    /**
     * Check the table status.
     *
     * @param object $db
     * @param String $prefix
     * @return array $result
     * @throws ValidationException
     */
    public function check_tbl($db, $prefix){
        $tables = ['orders', 'order_userinfos', 'paymentmethods_es_es', 'shipmentmethods_es_es', 'orderstates', 'countries', 'states'];
        $prefix .= 'virtuemart_';
        $tbls = [];
        foreach ($tables as $tbl){
            $temp = $tbl;
            $tbl     = $prefix.$tbl;
            $result  = $db->query("SHOW TABLES LIKE '{$tbl}'");
            if (!$result->num_rows){
                throw ValidationException::withMessages(['db_error' => 'Table "'.$tbl.'" is not found']);
            }
            switch ($temp){
                case $tables[0]:
                    $tbls['orders'] = $tbl;
                    break;
                case $tables[1]:
                    $tbls['userinfos'] = $tbl;
                    break;
                case $tables[2]:
                    $tbls['payment'] = $tbl;
                    break;
                case $tables[3]:
                    $tbls['shipment'] = $tbl;
                    break;
                case $tables[4]:
                    $tbls['orderstates'] = $tbl;
                    break;
                case $tables[5]:
                    $tbls['countries'] = $tbl;
                    break;
                default:
                    $tbls['states'] = $tbl;
            }
        }
        return $tbls;
    }

    /**
     *  Check the query status.
     *
     * @param object $db
     * @param array $tbls
     * @return array $result
     */

    public function check_query($db, $tbls){
        $query =    'SELECT '.$tbls['orders'].'.`order_number` AS \'order_number\','.
                    'CONCAT('.$tbls['userinfos'].'.`first_name`, \' \', '.$tbls['userinfos'].'.`last_name`, \'/\', '.$tbls['userinfos'].'.`email`) AS \'name_email\','.
                            $tbls['payment'].'.`payment_name` AS \'payment_method\','.
                            $tbls['shipment'].'.`shipment_name` AS \'shipment\','.
                            $tbls['orders'].'.`created_on` AS \'order_date\','.
                            $tbls['orders'].'.`modified_on` AS \'last_modified\','.
                            $tbls['orderstates'].'.`order_status_name` AS \'status\','.
                            $tbls['orders'].'.`order_total` AS \'total\','.
                            $tbls['orders'].'.`virtuemart_order_id` AS \'order_id\''.
                    ' FROM `'.$tbls['orders'].'`'.
                    ' LEFT JOIN '.$tbls['userinfos'].
                    ' ON '.$tbls['userinfos'].'.`virtuemart_order_id` = '.$tbls['orders'].'.`virtuemart_order_id` '.
                    'LEFT JOIN '.$tbls['payment'].
                    ' ON '.$tbls['payment'].'.`virtuemart_paymentmethod_id` = '.$tbls['orders'].'.`virtuemart_paymentmethod_id` '.
                    'LEFT JOIN '.$tbls['shipment'].
                    ' ON '.$tbls['shipment'].'.`virtuemart_shipmentmethod_id` =  '.$tbls['orders'].'.`virtuemart_shipmentmethod_id` '.
                    'LEFT JOIN '.$tbls['orderstates'].
                    ' ON '.$tbls['orderstates'].'.`order_status_code` = '.$tbls['orders'].'.`order_status` '.
                    'ORDER BY  '.$tbls['orders'].'.`virtuemart_order_id` ';
        $data = [];
        if ($result = $db->query($query)){
            while ($row = $result->fetch_assoc()){
                $data[] = $row;
            }
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
