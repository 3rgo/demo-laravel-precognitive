<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UsersController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/users', UsersController::class);

Route::post('/register', RegisterController::class)
    ->middleware([
        Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests::class
    ]);
