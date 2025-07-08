import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audio Converter',
  description: 'Convert your audio files to different formats like MP3, WAV, OGG, and AAC quickly and easily.',
};

export default function ConverterPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Audio Converter</h1>
          <p className="text-muted-foreground">
            This tool is under construction and will be available soon.
          </p>
        </div>
      </div>
    </main>
  );
}
