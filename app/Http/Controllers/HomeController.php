<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use RakibDevs\Weather\Weather;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if(Auth::user()->admin){ 
            return view('adminhomepage');
        }
        return view('home');
    }
}
