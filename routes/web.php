<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	return response()->file(public_path('index.html'));
})->name('home');

Route::get('/about-us', function () {
	return response()->file(public_path('about.html'));
})->name('about');

Route::get('/software-development-services', function () {
	return response()->file(public_path('services.html'));
})->name('services');

Route::get('/cloud-automation-services', function () {
	return response()->file(public_path('cloud.html'));
})->name('cloud');

Route::get('/data-analytics-services', function () {
	return response()->file(public_path('data-services.html'));
})->name('data-services');

Route::get('/custom-application-development', function () {
	return response()->file(public_path('app-development.html'));
})->name('app-development');

Route::get('/web-development-seo-services', function () {
	return response()->file(public_path('web-development.html'));
})->name('web-development');

Route::get('/30-day-proof-of-concept', function () {
	return response()->file(public_path('30day-pocs.html'));
})->name('30day-pocs');

Route::get('/contact-linkhipu', function () {
	return response()->file(public_path('contact.html'));
})->name('contact');

Route::get('/privacy-policy', function () {
	return response()->file(public_path('privacy-policy.html'));
})->name('privacy-policy');

Route::get('/terms-and-conditions', function () {
	return response()->file(public_path('terms.html'));
})->name('terms');

Route::get('/cookies-policy', function () {
	return response()->file(public_path('cookies.html'));
})->name('cookies');

Route::get('/gdpr-compliance', function () {
	return response()->file(public_path('gdpr.html'));
})->name('gdpr');

Route::get('/code-of-conduct', function () {
	return response()->file(public_path('conduct.html'));
})->name('conduct');

Route::get('/legal-disclaimer', function () {
	return response()->file(public_path('disclaimer.html'));
})->name('disclaimer');
