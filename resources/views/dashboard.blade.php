@extends('layouts.vertical', ['title' => 'Dashboard'])

@section('css')
    <link href="{{asset('assets/libs/datatables/datatables.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/sweetalert2/sweetalert2.min.css')}}" rel="stylesheet" type="text/css" />
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
                <div class="card-box">
                    <div class="float-left mb-4">
                        <a href="{{route('database.create')}}"><button class="btn btn-info waves-effect waves-light" type="button">Connect DataBase</button></a>
                    </div>

                    <!-- start dataTable -->
                    <div class="table-responsive">
                        <table id="dataTable" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Roles</th>
                                <th>Created at</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- end dataTable -->
                </div>
            </div>
        </div>
        <!-- end row -->

    </div> <!-- container -->
@endsection

@section('script')
    <script src="{{asset('assets/libs/datatables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/libs/sweetalert2/sweetalert2.min.js')}}"></script>
{{--    <script>--}}
    {{--    $('#dataTable').DataTable({--}}
    {{--        'processing': true,--}}
    {{--        'serverSide': true,--}}
    {{--        'ajax': {--}}
    {{--            'url': "{{ url('users') }}",--}}
    {{--            'type': "GET"--}}
    {{--        },--}}
    {{--        'columns':[--}}
    {{--            {data: 'id'},--}}
    {{--            {data: 'name'},--}}
    {{--            {data: 'role'},--}}
    {{--            {data: 'created_at'},--}}
    {{--            {data: 'action', orderable: false, searchable: false},--}}
    {{--        ],--}}
    {{--    });--}}
    {{--</script>--}}
@endsection
