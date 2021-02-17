<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Title</title>
    <style type="text/css">
        html{
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 5px;
        }
            tr td {
                border: 1px solid black;
                border-collapse: collapse;
                padding-left: 4px;
                padding-right: 4px;
                text-align: left;
                vertical-align: middle;
                height:  80px;
                width: 192px;
            }
            .tbl{
                border-collapse: collapse;
                font-size: 10px;
                border: none;
            }
            .pagebreak {
                page-break-after: always;
            }
    </style>
</head>
<body>
    @for($i = 0; $i < count($data); $i++)
    <table class="tbl pagebreak">
        <tr>
            <td>
                {{utf8_encode($data[$i]['order_number'])}} <br>
                {{utf8_encode($data[$i]['first_name'])}} {{utf8_encode($data[$i]['last_name'])}} <br>
                {{utf8_encode($data[$i]['address_1'])}} <br>
                {{utf8_encode($data[$i]['zip'])}} {{utf8_encode($data[$i]['city'])}} ({{utf8_encode($data[$i]['state'])}}) <br>
                {{utf8_encode($data[$i]['country'])}} <br>
                T: {{utf8_encode($data[$i]['mobile_phone'])}}
            </td>
        </tr>
    </table>
    @endfor
</body>
</html>
