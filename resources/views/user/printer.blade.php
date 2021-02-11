<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Title</title>
    <style type="text/css">
            tr td {
                border: 1px solid black;
                border-collapse: collapse;
                height: 35px;
                vertical-align: bottom;
                padding-left: 8px;
                padding-right: 8px;
            }
            th{
                border: 1px solid black;
                border-collapse: collapse;
                text-align: left;
                font-weight: bold;
                height: 35px;
                vertical-align: bottom;
                padding-left: 8px;
                padding-right: 8px;
            }
            .tbl{
                border-collapse: collapse;
                font-size: 14px;
                border: none;
            }
            .tbl-5{
                margin: auto auto 50px auto;
            }
            .tbl-5 tr th{
                text-align: center;
                vertical-align: middle;
                width: 19%;
            }
            .tbl-5 tr td{
                text-align: center;
                vertical-align: middle;
            }
            .center{
                margin: auto;
            }
            .w-8 {
                width: 10%;
            }
            .title {
                text-align: center;
                text-decoration: underline;
            }
    </style>
</head>
<body>
<div class="container center">
    <div class="title">
        <h2> Shipping Labels </h2>
    </div>
    <table class="tbl tbl-5 w-8" style="max-width: 1000px !important;">
        <thead>
        <tr>
            <th>#</th>
            <th>Order Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address_1</th>
            <th>ZIP</th>
            <th>City</th>
            <th>Country</th>
            <th>State</th>
            <th>Mobile Phone</th>
        </tr>
        </thead>
        <tbody>
        @for($i = 0; $i < count($data); $i++)
            <tr>
                <th scope="row">{{$i+1}}</th>
                <td>{{utf8_encode($data[$i]['order_number'])}}</td>
                <td>{{utf8_encode($data[$i]['first_name'])}}</td>
                <td>{{utf8_encode($data[$i]['last_name'])}}</td>
                <td>{{utf8_encode($data[$i]['address_1'])}}</td>
                <td>{{utf8_encode($data[$i]['zip'])}}</td>
                <td>{{utf8_encode($data[$i]['city'])}}</td>
                <td>{{utf8_encode($data[$i]['country'])}}</td>
                <td>{{utf8_encode($data[$i]['state'])}}</td>
                <td>{{utf8_encode($data[$i]['mobile_phone'])}}</td>
            </tr>
        @endfor
        </tbody>
    </table>
</div>
</body>
</html>
