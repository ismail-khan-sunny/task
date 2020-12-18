<?php

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
    // return redirect('/login');
    return view('layouts.web');
});
Route::get('/clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    return "Cleared!";
});
Route::resource('Customer', 'CustomerController');
Route::resource('Service', 'ServiceController');
Route::post('service_detail_delete', 'ServiceController@service_detail_delete')->name('Service.service_detail_delete');
Route::post('CustomerServicePost/{customer_id}', 'ServiceController@CustomerServicePost')->name('Service.CustomerServicePost');