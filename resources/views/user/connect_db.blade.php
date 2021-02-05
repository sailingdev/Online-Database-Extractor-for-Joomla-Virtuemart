@extends('layouts.vertical', ['title'=>'Connect DataBase'])

@section('css')

@endsection

@section('content')
    <!-- Start Content -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{route('index')}}">Dashboard</a></li>
                            <li class="breadcrumb-item active">Connect New Database</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Connect New Database</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row justify-content-center">
            <div class="col-lg-6 ">
                <div class="card">
                    <div class="card-body">
                        <form action="{{url('database')}}" method="POST" novalidate>
                            @csrf
                            @method('POST')

                            <div class="form-group">
                                <label for="host_name">Host Name<span class="text-danger">*</span></label>
                                <input class="form-control @if($errors->has('host_name')) is-invalid @endif" name="host_name" type="text"
                                       id="host_name" placeholder="Enter Host Name" required
                                       value="{{ old('host_name') }}"/>
                                @if($errors->has('host_name'))
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('host_name') }}</strong>
                                        </span>
                                @endif
                            </div>
                            <!-- end Host Name -->

                            <div class="form-group">
                                <label for="database_name">Database Name<span class="text-danger">*</span></label>
                                <input class="form-control @if($errors->has('database_name')) is-invalid @endif" name="database_name" type="text"
                                       id="database_name" placeholder="Enter Database Name" required
                                       value="{{ old('database_name') }}"/>
                                @if($errors->has('database_name'))
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('database_name') }}</strong>
                                        </span>
                                @endif
                            </div>
                            <!-- end Database Name -->

                            <div class="form-group">
                                <label for="table_prefix">Table Prefix<span class="text-danger">*</span></label>
                                <input class="form-control @if($errors->has('table_prefix')) is-invalid @endif" name="table_prefix" type="text"
                                       id="table_prefix" placeholder="Ex: tortu_" required
                                       value="{{ old('table_prefix') }}"/>
                                @if($errors->has('table_prefix'))
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('table_prefix') }}</strong>
                                        </span>
                                @endif
                            </div>
                            <!-- end Table Prefix -->

                            <div class="form-group">
                                <label for="user_name">User Name<span class="text-danger">*</span></label>
                                <input class="form-control @if($errors->has('user_name')) is-invalid @endif" name="user_name" type="text"
                                       id="user_name" placeholder="Enter User Name" required
                                       value="{{ old('user_name') }}"/>
                                @if($errors->has('user_name'))
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('user_name') }}</strong>
                                        </span>
                                @endif
                            </div>
                            <!-- end User Name -->

                            <div class="form-group">
                                <label for="password">Password<span class="text-danger">*</span></label>
                                <input class="form-control @if($errors->has('password')) is-invalid @endif" name="password" type="password" required id="password" placeholder="Enter your password" value="{{old('password')}}" />
                                @if($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                @endif
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
