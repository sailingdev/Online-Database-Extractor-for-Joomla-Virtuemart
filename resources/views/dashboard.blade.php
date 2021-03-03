@extends('layouts.vertical', ['title' => 'Dashboard'])

@section('css')
    <link href="{{asset('assets/libs/datatables/datatables.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/sweetalert2/sweetalert2.min.css')}}" rel="stylesheet" type="text/css" />
    <style>
        #dataTable tbody tr td {
            vertical-align: middle;
        }
    </style>
@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <form class="form-inline">
                            <div class="form-group">
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control border" id="dash-daterange">
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-blue border-blue text-white">
                                            <i class="mdi mdi-calendar-range"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <a href="javascript: void(0);" class="btn btn-blue btn-sm ml-2">
                                <i class="mdi mdi-autorenew"></i>
                            </a>
                            <a href="javascript: void(0);" class="btn btn-blue btn-sm ml-1">
                                <i class="mdi mdi-filter-variant"></i>
                            </a>
                        </form>
                    </div>
                    <h4 class="page-title">Dashboard</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-sm-12">
                @if($db_status)
                <div class="card-box">
                    <div class="float-left mb-4">
                        <a href="{{route('database.create')}}"><button class="btn btn-info waves-effect waves-light" type="button">Connect DataBase</button></a>
                    </div>
                    <div class="float-right mb-4">
                            <form id="print" method="GET" target="_blank">

                            </form>
                            <a href="javascript: print();">
                                <i class="icon-printer font-28"></i>
                            </a>
                    </div>
                    <div class="float-right mb-4 mr-2">
                        <select id="paper" class="form-control" >
                            <option value="1" >A4</option>
                            <option value="2" >56 * 25</option>
                        </select>
                    </div>
                    <!-- start dataTable -->
                     <div class="table-responsive">
                        <table id="dataTable" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th style="vertical-align: middle;"><input type="checkbox" id="checkall" style="vertical-align:middle" /></th>
                                <th>Order ID</th>
                                <th>Order Number / Invoice</th>
                                <th class="mdi-border-vertical">Name / Email</th>
                                <th>Payment Method</th>
                                <th>Shipment</th>
                                <th>Order Date</th>
                                <th>Last Modified</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!-- end dataTable -->
                </div>
                @endif
            </div>
        </div>
        <!-- end row -->

    </div> <!-- container -->
@endsection

@section('script')
    <script src="{{asset('assets/libs/datatables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/libs/sweetalert2/sweetalert2.min.js')}}"></script>
    <script>
        @if($db_status)
        $('#dataTable').DataTable({
            'processing': true,
            'serverSide': true,
            'ajax': {
                'url': "{{ url('database') }}",
                'type': "GET"
            },
            'columns':[
                {data: 'check_box', name:'check_box',  orderable: false, searchable: false},
                {data: 'order_id', name: 'order_id'},
                {data: 'order_number', name: 'order_number'},
                {data: 'name_email', name: 'name_email'},
                {data: 'payment_method', name: 'payment_method'},
                {data: 'shipment', name: 'shipment'},
                {data: 'order_date', name: 'order_date'},
                {data: 'last_modified', name: 'last_modified'},
                {data: 'status', name: 'status'},
                {data: 'total', name: 'total'},
            ],
        });
        $(document).ready(function () {
            $('#checkall').click(function(){
                $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
            });
        });
        function print(){
            let checked = $('input[name=order_id]:checked').map(function(){
                return this.value;
            }).get();
            if(!checked.length){
                Swal.fire({
                    title: "Print Warning!",
                    text: "Please check what you want to print.sss",
                    type: 'info',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "OK",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }else {
                let paper = $('#paper').val();
                $('#print').attr('action', '/printer/'+checked+'/'+paper);
                $('#print').submit();
            }
        }
        @else
        window.location = "{{route('database.create')}}";
        @endif
    </script>

@endsection
