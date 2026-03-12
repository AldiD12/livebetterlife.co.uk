import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy | Live Better Life"
        description="Privacy Policy for Live Better Life - NW London Home Renovation Specialists"
        canonicalUrl="https://livebetterlife.co.uk/privacy"
      />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6 sm:text-4xl">
              PRIVACY POLICY
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-6">
                Company Information
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 font-light mb-4">
                  <strong>Live Better Life</strong><br />
                  General Contractor & Home Remodeler
                </p>
                <p className="text-gray-700 font-light mb-4">
                  <strong>Registered Office:</strong><br />
                  Unit 1.04 The Light Box<br />
                  111 Power Road<br />
                  London W4 5PY<br />
                  United Kingdom
                </p>
                <p className="text-gray-700 font-light mb-4">
                  <strong>Operations Area:</strong><br />
                  North West London (NW6, NW9, HA3, W14)
                </p>
                <p className="text-gray-700 font-light">
                  <strong>Contact:</strong><br />
                  Phone: 07387 844751<br />
                  Email: info@livebetterlife.co.uk
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-6">
                Information We Collect
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                When you contact us for renovation services, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>Your name and contact information (phone, email, address)</li>
                <li>Details about your renovation project</li>
                <li>Property information and postcode</li>
                <li>Budget and timeline preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-6">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>Provide renovation consultation and quotes</li>
                <li>Schedule site visits and project work</li>
                <li>Communicate about your project progress</li>
                <li>Send project updates and completion photos</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-6">
                Data Protection
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                We are committed to protecting your personal information and comply with UK GDPR requirements. 
                Your data is stored securely and only shared with trusted subcontractors and suppliers as necessary 
                to complete your renovation project.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please contact us at info@livebetterlife.co.uk or call 07387 844751.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;