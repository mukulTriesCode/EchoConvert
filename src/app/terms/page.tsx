import { PageHeader } from '@/components/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms of service for using AudioForge.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our service."
      />
      <div className="prose dark:prose-invert mt-8">
        <h2>1. Agreement to Terms</h2>
        <p>
          By using our services, you agree to be bound by these Terms. If you
          disagree with any part of the terms, then you do not have permission
          to access the service.
        </p>

        <h2>2. Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes. You are
          responsible for any content you upload and process through our tools.
          You must not use our service to process any material that is illegal,
          harmful, or infringing on the rights of others.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          You retain full ownership of the files you upload and the resulting
          processed files. We claim no intellectual property rights over the
          material you provide to the service.
        </p>

        <h2>4. Disclaimer</h2>
        <p>
          Our services are provided "as is." We make no warranty that the
          services will meet your requirements or be available on an
          uninterrupted, secure, or error-free basis.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. We will provide notice of any changes by
          posting the new Terms on this page.
        </p>
      </div>
    </div>
  );
}
