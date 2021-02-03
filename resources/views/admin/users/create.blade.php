@extends('layouts.vertical', ['title' => 'Add New User'])

@section('css')
    <!-- Plugins css -->
    <link href="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/multiselect/multiselect.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/select2/select2.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/selectize/selectize.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.css')}}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    <!-- Start Content -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">User Management</a></li>
                            <li class="breadcrumb-item active"><a href="javascript: void(0);">Users</a></li>
                            <li class="breadcrumb-item active">Add New User</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Add New User</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row justify-content-center">
            <div class="col-lg-6 ">
                <div class="card">
                    <div class="card-body">
                        <form class="needs-validation" novalidate method="POST" action="{{url('users')}}">
                            @csrf
                            @method('POST')
                            <div class="form-group mb-3">
                                <label for="validationFullName">User name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="validationFullName" name="name" placeholder="User name" value="" required>
                                <div class="invalid-feedback">
                                    Please enter a full name.
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="validationEmail">Email<span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <input type="email" class="form-control" id="validationEmail" name="email" placeholder="Email address" aria-describedby="inputGroupPrepend"
                                           required>
                                    <div class="invalid-feedback">
                                        Please enter a email address.
                                    </div>
                                    @if($errors->first('email'))
                                        <div class="invalid-feedback" style="display: block">
                                            {{$errors->first('email')}}
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="selectize-select" >Select User Role<span class="text-danger">*</span></label> <br/>
                                <select id="selectize-select" class="form-control" name="roles" required>
                                    <option value="">Choose...</option>
                                @foreach($roles as $role)
                                        @if($role->id == 1)
                                            <option value="{{$role->name}}" disabled>{{$role->name}}</option>
                                        @else
                                            <option value="{{$role->name}}" >{{$role->name}}</option>
                                        @endif
                                @endforeach
                                </select>
                                <div class="invalid-feedback" id="select_invalid">
                                    Please choose a role.
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="pass1">Password<span class="text-danger">*</span></label>
                                <input id="pass1" name="password" type="password" placeholder="Password" required
                                       class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="pass2">Confirm Password <span class="text-danger">*</span></label>
                                <input data-parsley-equalto="#pass1" type="password" required
                                       placeholder="Confirm Password" class="form-control" id="pass2" name="confirm_password">
                                <div class="invalid-feedback" id="pass_invalide">
                                    Password Invalid.
                                </div>
                            </div>

                            <div class="form-group text-right m-b-0">
                                <button id="btn_submit" class="btn btn-primary waves-effect waves-light" type="submit">
                                    Submit form
                                </button>
                                <a href="{{url('users')}}">
                                    <button type="button" class="btn btn-secondary waves-effect m-l-5">
                                    Cancel
                                    </button>
                                </a>
                            </div>
                        </form>

                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col-->
        </div>
    </div>
    <!-- container -->
@endsection

@section('script')
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/parsleyjs/parsleyjs.min.js')}}"></script>
    <!-- Plugins js-->
    <script src="{{asset('assets/libs/selectize/selectize.min.js')}}"></script>
    <script src="{{asset('assets/libs/mohithg-switchery/mohithg-switchery.min.js')}}"></script>
    <script src="{{asset('assets/libs/multiselect/multiselect.min.js')}}"></script>
    <script src="{{asset('assets/libs/select2/select2.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-select/bootstrap-select.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-touchspin/bootstrap-touchspin.min.js')}}"></script>
    <script src="{{asset('assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js')}}"></script>
    <script src="{{asset('assets/libs/devbridge-autocomplete/devbridge-autocomplete.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery-mockjax/jquery-mockjax.min.js')}}"></script>

    <!-- Page js-->
    <script src="{{asset('assets/js/pages/form-advanced.init.js')}}"></script>

    <script>
        $(document).ready(function(){
            $('#btn_submit').click(function () {
                if (!$('#selectize-select').find(':selected').text()){
                    $('#select_invalid').show();
                }
            });
            $('#selectize-select').change(function(){
                $('#select_invalid').hide();
            });
            $('#pass1, #pass2').focusout(function(){
                let pass1 = $('#pass1').val();
                let pass2 = $('#pass2').val();
                if(pass1 != pass2){
                    $('#pass_invalide').show();
                } else
                    $('#pass_invalide').hide();
            })
        });
    </script>
@endsection
