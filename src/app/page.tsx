import { AIFormatToolClient } from '@/components/ai-format-tool-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Audio Format Recommender',
  description:
    'Get AI-powered recommendations for the best audio format and settings for your specific use case, from podcasting to music production.',
};

export default function Home() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">AI Format Tool</h1>
          <p className="text-muted-foreground">
            Upload your audio file and describe its use case to get an expert
            recommendation on the best format and settings.
          </p>
        </div>
        <AIFormatToolClient />
      </div>
    </main>
  );
}
