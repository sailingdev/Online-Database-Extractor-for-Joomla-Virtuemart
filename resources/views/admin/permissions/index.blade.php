@extends('layouts.vertical', ['title' => 'Permissions'])

@section('css')
    <link href="{{asset('public/assets/libs/datatables/datatables.min.css')}}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    <!-- Start Content-->
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Permissions</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="float-left mb-4">
                        <button class="btn btn-info waves-effect waves-light" type="button">Add New</button>
                    </div>
                    <div class="table-responsive">
                        <table id="dataTable" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
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
    <script src="{{asset('public/assets/libs/datatables/datatables.min.js')}}"></script>
    <script>
        $('#dataTable').DataTable({
            'processing': true,
            'serverSide': true,
            'ajax': {
                'url': "{{ url('permissions') }}",
                'type': 'GET'
            },
            'columns': [
                {'data': 'id'},
                {'data': 'name'},
                {'data': 'action', orderable: false, searchable: false},
            ],
        });
    </script>
@endsection
