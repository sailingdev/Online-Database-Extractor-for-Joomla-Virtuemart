@extends('layouts.vertical', ['title' => 'User Manage'])

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
                    <h4 class="page-title">Roles</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="float-left mb-4">
                        <a href="{{url('users/create')}}"><button class="btn btn-info waves-effect waves-light" type="button">Add New</button></a>
                    </div>
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
                            </tbody>
                        </table>
                    </div>
                </div> <!-- end card-box-->
            </div> <!-- end col-->
        </div>
        <!-- end row-->
    </div> <!-- container -->
@endsection

@section('script')
    <script src="{{asset('assets/libs/datatables/datatables.min.js')}}"></script>
    <script src="{{asset('assets/libs/sweetalert2/sweetalert2.min.js')}}"></script>

    <script>
        $('#dataTable').DataTable({
            'processing': true,
            'serverSide': true,
            'ajax': {
                'url': "{{ url('users') }}",
                'type': "GET"
            },
            'columns':[
                {data: 'id'},
                {data: 'name'},
                {data: 'role'},
                {data: 'created_at'},
                {data: 'action', orderable: false, searchable: false},
            ],
        });

        function addNew(){

        }

        function deleteUser(userId) {
            Swal.fire({
                title: "Delete User.",
                text: "Do you want to delete selected user?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "Success",
                confirmButtonClass: 'btn btn-primary',
                cancelButtonClass: 'btn btn-danger ml-1',
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    $('#deleteForm'+userId).submit();
                }
            })
        }
    </script>
@endsection
