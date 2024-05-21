<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TagController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// routes/web.php
// Route::group(['middleware' => 'web', 'cors'], function () {
//     Route::get('/csrf-token', function() {
//         return response()->json(['token' => csrf_token()]);
//     });
// });






Route::post('/dashboard/posts', [PostController::class, 'store']);
Route::resource('posts', PostController::class);
Route::post('/posts/{postId}/comments', [PostController::class, 'postComment']);
Route::get('dashboard/posts/{postId}/comments', [CommentController::class, 'getCommentsAndRepliesByPost']);
Route::put('dashboard/posts/{postId}/update-comments-status', [CommentController::class, 'isCommentable']);
Route::delete('dashboard/posts/comments/{commentId}', [CommentController::class, 'deleteComment']);
Route::post('/posts/{postId}/comments/{commentId}/reply', [CommentController::class, 'replyToComment']);
Route::put('dashboard/comments/{commentId}/update-approval-status', [CommentController::class, 'updateApprovalStatus']);
Route::put('dashboard/posts/{postId}/update-comments-status', [CommentController::class, 'isCommentable']);
Route::put('/dashboard/comments/replies/{reply}', [CommentController::class, 'updateApproval']);
Route::get('posts', [PostController::class, 'index']);
Route::get('get-all-posts', [PostController::class, 'getAllPosts']);

Route::resource('/categories', CategoryController::class);

Route::resource('tags', TagController::class);

Route::get('posts/search', [PostController::class, 'searchPosts']);

Route::get('/categories/{categoryId}/posts', [PostController::class, 'searchByCategory']);

Route::get('/tags/{tagId}/posts', [PostController::class, 'searchByTag']);

Route::get('/comments', [CommentController::class, 'index']);

Route::get('/posts/{postId}/comments', [CommentController::class, 'getCommentsAndRepliesByPost']);

Route::get('dashboard/blog-admin/posts', [PostController::class, 'adminPosts']);

Route::get('posts/{id}/related-posts', [PostController::class, 'relatedPosts']);
