<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Certification extends Model
{
    //
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
    ];

    public function subCertifications(): HasMany
    {
        // This assumes your other model is named 'SubCertification'
        // and has a 'certification_id' column.
        return $this->hasMany(SubCertification::class);
    }

}
