<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;
use Yajra\DataTables\DataTables;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::with(['roles' => function($role){
            $role->select('name')->latest();
        }])->select(['id', 'name', 'created_at'])->get();

        if (request()->ajax()){
            return DataTables::of($users)
                ->addIndexColumn()
                ->addColumn('role', function ($row){
                    $btn = '';
                    foreach ($row->roles as $val){
                        $btn .= '<span class="badge label-table badge-primary mr-1">'.$val->name.'</span>';
                    }
                    return $btn;
                })
                ->editColumn('created_at', function ($row){
                    return Carbon::parse($row->created_at)->toDateTimeString();
                })
                ->addColumn('action', function ($row){
                    if ($row->id == 1){
                        $btn = '<a href="" class="disabled btn btn-warning btn-sm mr-1" disabled="">Edit</a>';
                        $btn .= '<a href="" class="disabled btn btn-danger btn-sm " disabled="">Delete</a>';
                    } else {
                        $btn = '<a href="'.url("users/".$row->id."/edit" ).'" class="edit btn btn-warning btn-sm mr-1">Edit</a>';
                        $btn .= '<a href="javascript:deleteUser('.$row->id.')" class="remove btn btn-danger btn-sm ">Delete</a>';
                        $btn .= '<form id="deleteForm'.$row->id.'" action="'.url("users/".$row->id).'" method="POST" style="display:none">
                                '.csrf_field().'
                                '.method_field("DELETE").'
                            </form>';
                    }
                    return $btn;
                })

                ->escapeColumns([])
                ->make(true);
        }
        return view('admin.users.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View Admin/Users/Create
     */
    public function create()
    {
        $roles = Role::all();
        return view('admin.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            'name' => 'required|min:2|max:100',
            'email' => 'required|email|max:200|unique:users,email',
            'password' => 'required|required_with:confirm_password|same:confirm_password',
            'confirm_password' => 'required',
            'roles' => 'required'
        ]);
        $validated['password'] = Hash::make($validated['password']);
        $user = User::create($validated);
        $user->assignRole($validated['roles']);
        return redirect()->route('users.index')
            ->with('success', 'User created successfully');
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
     * @return \Illuminate\View\View Admin/Users/Edit
     */
    public function edit($id)
    {
        $user = User::with('roles')->where('id', $id)->first();
        $roles = Role::get();
        return view('admin.users.edit', compact('user', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        $user = User::with('roles')->where('id', $id)->firstOrFail();
        $validated = $this->validate($request, [
            'name' => 'required|min:2|max:100',
            'email' => 'required|email|max:200|unique:users,email,'.$user->id,
            'password' => 'required|required_with:confirm_password|same:confirm_password',
            'confirm_password' => 'required',
            'roles' => 'required'
        ]);
        $validated['password'] = Hash::make($validated['password']);
        $user->update($validated);
        $user->syncRoles($validated['roles']);
        return redirect()->route('users.index')
            ->with('success', 'User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $user = User::whereid($id)->firstOrFail();
        $user->delete();

        return redirect('users')
            ->with('success', 'User deleted successfully.');
    }
}
