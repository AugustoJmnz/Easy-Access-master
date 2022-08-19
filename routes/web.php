<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function (){
    if(Auth::user()->admin){ 
        return view('auth/register');
    }
    return view('home');
});

//Ruta al home de administrador usando controlador home
Route::get('/adminhomepage', [App\Http\Controllers\HomeController::class, 'index'])->name('adminhomepage');

//rutas de autenticacion
Auth::routes();

//Ruta al home de usuario usando controlador home
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/userslist', [App\Http\Controllers\Auth\RegisterEstController::class, 'index'])->name('users');

