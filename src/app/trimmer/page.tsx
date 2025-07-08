import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audio Trimmer',
  description: 'Trim or cut your audio files by selecting start and end times to create the perfect clip.',
};

export default function TrimmerPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Audio Trimmer</h1>
          <p className="text-muted-foreground">
            This tool is under construction and will be available soon.
          </p>
        </div>
      </div>
    </main>
  );
}
