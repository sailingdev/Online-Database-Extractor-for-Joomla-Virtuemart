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

        @if($data['paperId'] != 1)
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
        @else
            tr td {
                border: 1px solid black;
                border-collapse: collapse;
                padding-left: 4px;
                padding-right: 4px;
                text-align: left;
                vertical-align: middle;
                height:  145px;
                width: 300px;
            }
            .tbl {
                margin: auto;
                margin-top: 50px;
                font-size: 17px;
                border: none;
                border-collapse: collapse;
            }
        @endif
            .pagebreak {
                page-break-after: always;
            }
    </style>
</head>
<body>
@if($data['paperId'] == 1)

    <table class="tbl">
        @for($i = 0; $i < count($data['result']); $i += 2)
            @if($i%14==0)
                <table class="tbl pagebreak">
            @endif
            <tr>
            <td>
                {{utf8_encode($data['result'][$i]['order_number'])}} <br>
                {{utf8_encode($data['result'][$i]['first_name'])}} {{utf8_encode($data['result'][$i]['last_name'])}} <br>
                {{utf8_encode($data['result'][$i]['address_1'])}} <br>
                {{utf8_encode($data['result'][$i]['zip'])}} {{utf8_encode($data['result'][$i]['city'])}} ({{utf8_encode($data['result'][$i]['state'])}}) <br>
                {{utf8_encode($data['result'][$i]['country'])}} <br>
                T: {{utf8_encode($data['result'][$i]['mobile_phone'])}}
            </td>
            <td>
                {{utf8_encode($data['result'][$i+1]['order_number'])}} <br>
                {{utf8_encode($data['result'][$i+1]['first_name'])}} {{utf8_encode($data['result'][$i+1]['last_name'])}} <br>
                {{utf8_encode($data['result'][$i+1]['address_1'])}} <br>
                {{utf8_encode($data['result'][$i+1]['zip'])}} {{utf8_encode($data['result'][$i+1]['city'])}} ({{utf8_encode($data['result'][$i+1]['state'])}}) <br>
                {{utf8_encode($data['result'][$i+1]['country'])}} <br>
                T: {{utf8_encode($data['result'][$i+1]['mobile_phone'])}}
            </td>
        </tr>
        @endfor
    </table>
@else
    @for($i = 0; $i < count($data['result']); $i++)
        <table class="tbl pagebreak">
            <tr>
                <td>
                    {{utf8_encode($data['result'][$i]['order_number'])}} <br>
                    {{utf8_encode($data['result'][$i]['first_name'])}} {{utf8_encode($data['result'][$i]['last_name'])}} <br>
                    {{utf8_encode($data['result'][$i]['address_1'])}} <br>
                    {{utf8_encode($data['result'][$i]['zip'])}} {{utf8_encode($data['result'][$i]['city'])}} ({{utf8_encode($data['result'][$i]['state'])}}) <br>
                    {{utf8_encode($data['result'][$i]['country'])}} <br>
                    T: {{utf8_encode($data['result'][$i]['mobile_phone'])}}
                </td>
            </tr>
        </table>
    @endfor
@endif
</body>
</html>
