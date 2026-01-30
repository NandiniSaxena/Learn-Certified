<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Certification;

class CertificationSeeder extends Seeder
{
    public function run(): void
    {
        $vendors = [
            ['name' => 'Cisco', 'slug' => 'cisco'],
            ['name' => 'Microsoft', 'slug' => 'microsoft'],
            ['name' => 'AWS', 'slug' => 'aws'],
            ['name' => 'CompTIA', 'slug' => 'comptia'],
            ['name' => 'VMware', 'slug' => 'vmware'],
            ['name' => 'Google', 'slug' => 'google'],
            ['name' => 'Oracle', 'slug' => 'oracle'],
            ['name' => 'PMI', 'slug' => 'pmi'],
            ['name' => 'ISACA', 'slug' => 'isaca'],
            ['name' => 'Fortinet', 'slug' => 'fortinet'],
            ['name' => 'EC-Council', 'slug' => 'ec-council'],
            ['name' => 'ITIL', 'slug' => 'itil'],
            ['name' => 'Prince2', 'slug' => 'prince2'],
            ['name' => 'Juniper', 'slug' => 'juniper'],
            ['name' => 'Salesforce', 'slug' => 'salesforce'],
            ['name' => 'ServiceNow', 'slug' => 'servicenow'],
            ['name' => 'Scrum', 'slug' => 'scrum'],
            ['name' => 'Six Sigma', 'slug' => 'six-sigma'],
            ['name' => 'IBM', 'slug' => 'ibm'],
            ['name' => 'SAP', 'slug' => 'sap'],
            ['name' => 'Splunk', 'slug' => 'splunk'],
            ['name' => 'Palo Alto', 'slug' => 'palo-alto'],
            ['name' => 'Kubernetes', 'slug' => 'kubernetes'],
            ['name' => 'TOGAF', 'slug' => 'togaf'],
            ['name' => 'DevOps', 'slug' => 'devops'],
            ['name' => 'ISTQB', 'slug' => 'istqb'],
            ['name' => 'IIBA', 'slug' => 'iiba'],

        ];

        foreach ($vendors as $vendor) {
            Certification::create($vendor);
        }
    }
}
