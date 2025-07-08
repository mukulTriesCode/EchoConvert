import { PageHeader } from '@/components/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy outlines how we handle your data at AudioForge.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader
        title="Privacy Policy"
        description="Last updated: "
      />
      <div className="prose dark:prose-invert mt-8">
        <p>
          Welcome to AudioForge. We are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The
          information we may collect on the Site includes:
        </p>
        <ul>
          <li>
            <strong>Uploaded Files:</strong> We temporarily store audio files you
            upload for processing. These files are automatically deleted from our
            servers after a short period.
          </li>
          <li>
            <strong>Usage Data:</strong> We may automatically collect information
            about your use of the site, such as pages visited and tools used, to
            help us improve our services. This data is anonymized.
          </li>
        </ul>

        <h2>2. Use of Your Information</h2>
        <p>
          Having accurate information permits us to provide you with a smooth,
          efficient, and customized experience. Specifically, we may use
          information collected about you via the Site to:
        </p>
        <ul>
          <li>Process your audio files as requested.</li>
          <li>Monitor and analyze usage and trends to improve your experience.</li>
          <li>Ensure the security and operational functionality of our services.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties. Your uploaded files are
          processed securely and are not shared with any third parties.
        </p>

        <h2>4. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information and uploaded files. While we
          have taken reasonable steps to secure the information you provide to us,
          please be aware that despite our efforts, no security measures are
          perfect or impenetrable.
        </p>
      </div>
    </div>
  );
}
