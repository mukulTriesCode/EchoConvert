import { PageHeader } from '@/components/page-header';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About AudioForge',
  description: 'Learn more about AudioForge, our mission, and our team.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader
        title="About AudioForge"
        description="Your Ultimate Online Audio Toolkit"
      />
      <div className="mt-8 prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed">
          At AudioForge, we believe that everyone should have access to high-quality, easy-to-use audio editing tools. Whether you're a podcaster, a musician, a student, or just someone who needs to quickly tweak an audio file, our suite of tools is designed to make your life easier.
        </p>
        <p>
          Our mission is to democratize audio editing by providing powerful, browser-based tools that are both free and accessible to all. We started AudioForge because we saw a need for a simple, all-in-one solution for common audio tasks. We were tired of downloading clunky software or dealing with complicated interfaces for simple jobs like converting a file format or trimming a clip.
        </p>
        <figure>
            <Image
            src="https://placehold.co/800x400.png"
            alt="AudioForge team working"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
            data-ai-hint="team collaboration"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">The AudioForge Team</figcaption>
        </figure>
        <h2>Our Commitment</h2>
        <p>
          We are committed to providing a seamless experience. That means:
        </p>
        <ul>
          <li><strong>No Ads or Trackers:</strong> We respect your privacy and your focus. Our site is free of distracting ads and invasive trackers.</li>
          <li><strong>Simplicity:</strong> Our tools are designed to be intuitive. You don't need to be an audio engineer to get great results.</li>
          <li><strong>Quality:</strong> We use robust technology like FFmpeg on the backend to ensure your audio is processed with the highest quality.</li>
          <li><strong>Security:</strong> Your files are your own. We process them on our secure servers and delete them automatically after a short period.</li>
        </ul>
        <p>
          Thank you for choosing AudioForge. We're excited to see what you create!
        </p>
      </div>
    </div>
  );
}
