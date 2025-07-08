import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audio Compressor',
  description: 'Reduce the file size of your audio files by compressing them, with various quality presets available.',
};

export default function CompressorPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Audio Compressor</h1>
          <p className="text-muted-foreground">
            This tool is under construction and will be available soon.
          </p>
        </div>
      </div>
    </main>
  );
}
