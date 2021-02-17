<?php

namespace App\Http\Controllers\User;

use App\Database;
use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use mysqli;

class PrinterController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    function index($ids){
        $database = new DatabaseController();
        $info = Database::where('user_id', Auth::user()->id)->firstOrFail();
        $mysql = @new mysqli(
            $info['host_name'], $info['user_name'], $info['password'], $info['database_name']
        );
        $database->check_db($mysql);
        $tables = $database->check_tbl($mysql, $info['table_prefix']);
        $data = $this->check_query($mysql, $tables, $ids);
//        return view('user.printer', compact('data'));

        $pdf = PDF::loadView('user.printer', compact('data'))->setPaper([0,0, 70.8661, 158.74], 'landscape');
        return $pdf->stream('shipping_label.pdf');
    }

    function check_query($db, $tbls, $ids){
        $query = 'SELECT '.$tbls['orders'].'.`order_number` AS order_number,'.
            $tbls['userinfos'].'.`first_name` AS first_name,'.
            $tbls['userinfos'].'.`last_name` AS last_name,'.
            $tbls['userinfos'].'.`address_1` AS address_1,'.
            $tbls['userinfos'].'.`zip` AS zip,'.
            $tbls['userinfos'].'.`city` AS city,'.
            $tbls['countries'].'.`country_name` AS country,'.
            $tbls['states'].'.`state_name` AS state,'.
            $tbls['userinfos'].'.`phone_2` AS mobile_phone'.
            ' FROM '.$tbls['userinfos'].
            ' LEFT JOIN '. $tbls['orders'].
            ' ON '. $tbls['orders'].'.`virtuemart_order_id` = '.$tbls['userinfos'].'.`virtuemart_order_id`'.
            ' LEFT JOIN '.$tbls['countries'].
            ' ON '.$tbls['countries'].'.`virtuemart_country_id` = '.$tbls['userinfos'].'.`virtuemart_country_id`'.
            ' LEFT JOIN '.$tbls['states'].
            ' ON ' .$tbls['states'].'.`virtuemart_state_id` = '.$tbls['userinfos'].'.`virtuemart_state_id`'.
            ' WHERE '.$tbls['orders'].'.`virtuemart_order_id` IN ('.$ids.')'.
            ' ORDER BY '.$tbls['orders'].'.`virtuemart_order_id`';
        $data = [];
        if ($result = $db->query($query)) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }
        return $data;
    }
}
