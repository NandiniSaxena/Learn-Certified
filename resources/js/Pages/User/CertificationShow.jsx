import React from 'react';
import { Head } from '@inertiajs/react';

export default function CertificationShow({ certification }) {
  return (
    <>
      <Head title={`${certification.name} Certification - Global Training & Certifications`} />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">{certification.name} Certification Support</h1>
        <p className="text-xl mb-6">
          Get expert online training and preparation guidance for {certification.name} certifications.
        </p>
        <p className="text-lg">
          Contact us via WhatsApp or email for more details and enrollment.
        </p>
        {/* Add more content like features, syllabus outline, etc. */}
        <div className="mt-12">
          <a href="https://wa.me/918603516998?text=Interested%20in%20" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold">
            WhatsApp Now
          </a>
        </div>
      </div>
    </>
  );
}
