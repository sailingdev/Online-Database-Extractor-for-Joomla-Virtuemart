<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use http\Message;
use Illuminate\Http\Request;
use App\Database;
use App\Rules\ValidPrefix;
use Illuminate\Validation\ValidationException;
use mysqli;

class DatabaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        ]);
        $mysql = @new mysqli(
            $validated['host_name'], $validated['user_name'], '', $validated['database_name']
        );
        $this->check_db($mysql);
        $this->check_tbl($mysql, $validated['table_prefix']);


        return redirect(route('index'))
            ->with('success', 'Database connected successfully.');
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
     * @param object $db , String $prefix
     * @return void
     * @throws ValidationException
     */
    public function check_tbl($db, $prefix){
        $tbls = ['virtuemart_orders', 'virtuemart_orderstate'];
        foreach ($tbls as $tbl){
            $tbl = $prefix.$tbl;
            $result = $db->query("SHOW TABLES LIKE '{$tbl}'");
            if (!$result->num_rows){
                throw ValidationException::withMessages(['db_error' => 'Table "'.$tbl.'" is not found']);
            }
        }
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
