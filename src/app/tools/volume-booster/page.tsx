import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Construction } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Volume Booster',
  description: 'Increase the volume of your audio files with our simple and effective volume booster tool.',
};

export default function BoosterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Volume Booster"
        description="Increase the volume of your audio files."
      />
      <div className="mt-8 flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Construction className="w-16 h-16 text-muted-foreground" />
              <h2 className="mt-4 text-2xl font-semibold">Under Construction</h2>
              <p className="mt-2 text-muted-foreground">
                This tool is being built and will be available soon.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
