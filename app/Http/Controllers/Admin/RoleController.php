<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Yajra\DataTables\DataTables;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::with(['permissions' => function($permission){
            $permission->select('id', 'name')->latest();
        }])->select(['id','name'])->get();
//        dd($roles[0]->permissions);
        if (request()->ajax()){
            return Datatables::of($roles)
                ->addIndexColumn()
                ->addColumn('permissions', function ($row) {
                    $btn = '';
                    foreach ($row->permissions as $val){
                        $btn .= '<span class="badge label-table badge-primary mr-1 ">'.$val->name.'</span>';
                    }
                    return $btn;
                })
                ->addColumn('action', function ($row) {
                    $btn = '<a href="" class="edit btn btn-warning btn-sm mr-1">Edit</a>';
                    $btn .= '<a href="" class="remove btn btn-danger btn-sm ">Delete</a>';
                    return $btn;
                })
                ->escapeColumns([])
                ->make(true);
        }
        return view('admin.roles.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
