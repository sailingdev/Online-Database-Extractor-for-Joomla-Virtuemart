<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Database extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id','host_name', 'database_name', 'table_prefix', 'user_name', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        //
    ];
}
