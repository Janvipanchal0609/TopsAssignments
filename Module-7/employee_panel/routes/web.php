<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



/*Route::get('index', function () {
    return view('website/index');
});

Route::get('contact', function () {
    return view('website/contact');
});

Route::get('shop', function () {
    return view('website/shop');
});

Route::get('testimonial', function () {
    return view('website/testimonial');
});

Route::get('why', function () {
    return view('website/why');
});*/




Route::get('ad-index ', function () {
    return view('admin/ad-index');
});

Route::get('dashboard',function () {
    return view('admin/dashboard');
});

Route::get('form', function () {
    return view('admin/form');
});

Route::get('table', function () {
    return view('admin/table');
});

Route::get('tab-panel', function () {
    return view('admin/tab-panel');
});

Route::get('chart', function () {
    return view('admin/chart');
});

