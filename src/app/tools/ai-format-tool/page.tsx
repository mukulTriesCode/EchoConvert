import { AIFormatToolClient } from '@/components/tools/ai-format-tool-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Audio Format Recommender',
  description:
    'Get AI-powered recommendations for the best audio format and settings for your specific use case, from podcasting to music production.',
};

export default function AIFormatToolPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="space-y-2 mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">AI Format Tool</h1>
          <p className="text-lg text-muted-foreground">
            Let our AI find the perfect format and settings for your audio.
          </p>
        </div>
        <AIFormatToolClient />
      </div>
    </main>
  );
}
