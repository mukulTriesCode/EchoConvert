import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volume Booster',
  description: 'Increase the volume of your audio files with our simple and effective volume booster tool.',
};

export default function BoosterPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Volume Booster</h1>
          <p className="text-muted-foreground">
            This tool is under construction and will be available soon.
          </p>
        </div>
      </div>
    </main>
  );
}
