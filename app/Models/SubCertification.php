<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SubCertification extends Model
{
    // Allow these fields to be filled by your Controller
    protected $fillable = [
        'certification_id',
        'name',
        'slug',
        'description',
        'image',
    ];

    /**
     * Get the parent Certification (Vendor) that owns this sub-cert.
     */
    public function certification(): BelongsTo
    {
        return $this->belongsTo(Certification::class);
    }
}
