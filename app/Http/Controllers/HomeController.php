<?php

namespace App\Http\Controllers;

use App\Database;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

//use App\Database;
//use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->except('login');
    }

    /**
     * Show the application dashboard with the Database connected status.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     * @return Boolean $db_status
     */
    public function index()
    {
        $rows = Database::where('user_id', Auth::user()->id)->get();
        $db_status = $rows->count() ? true : false ;
        return view('dashboard', compact('db_status'));
    }
}
