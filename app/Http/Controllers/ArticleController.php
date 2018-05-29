<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    //
    protected $article;

    public function __construct(Article $article)
    {
        $this->article = $article;
    }
    public function index(Request $request)
    {
        $search = $request->search ?? '';
        $articles = $this->article->searchByTitle($search);
        return response()->json($articles->paginate(), 200);
     }
}
