<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'body'];
    protected $perPage = 6;

    public function scopeSearchByTitle(Builder $query, string $needle)
    {
        return $query->Where('title', 'like', "%{$needle}%");;
    }

}
