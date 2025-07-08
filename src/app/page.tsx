import { PageHeader } from '@/components/page-header';
import { ToolCard } from '@/components/tool-card';
import { ArrowRightLeft, Scissors, Shrink, Volume2, WandSparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AudioForge - Your All-in-One Audio Toolkit',
  description:
    'Welcome to AudioForge. The ultimate destination for all your audio needs. Convert, trim, compress, boost volume, and get AI-powered format recommendations.',
};

const tools = [
  {
    href: '/tools/ai-format-tool',
    title: 'AI Format Tool',
    description: 'Get AI recommendations for the best audio format and settings.',
    icon: <WandSparkles className="w-8 h-8" />,
  },
  {
    href: '/tools/audio-converter',
    title: 'Audio Converter',
    description: 'Convert audio files between MP3, WAV, AAC, and more.',
    icon: <ArrowRightLeft className="w-8 h-8" />,
  },
  {
    href: '/tools/audio-trimmer',
    title: 'Audio Trimmer',
    description: 'Cut and trim your audio files to the perfect length.',
    icon: <Scissors className="w-8 h-8" />,
  },
  {
    href: '/tools/audio-compressor',
    title: 'Audio Compressor',
    description: 'Reduce audio file size without losing quality.',
    icon: <Shrink className="w-8 h-8" />,
  },
  {
    href: '/tools/volume-booster',
    title: 'Volume Booster',
    description: 'Increase the volume of your quiet audio files.',
    icon: <Volume2 className="w-8 h-8" />,
  },
];


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          The Ultimate Online Audio Toolkit
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Effortlessly convert, trim, compress, and enhance your audio files.
          All the tools you need, right in your browser.
        </p>
        <div className="mt-8">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center h-12 px-8 font-medium text-lg text-primary-foreground bg-primary rounded-md shadow hover:bg-primary/90 transition-colors"
          >
            Explore All Tools
          </Link>
        </div>
      </section>

      <section className="py-16">
        <PageHeader
          title="Our Tools"
          description="A suite of powerful, easy-to-use tools to handle any audio task."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tools.map((tool) => (
            <ToolCard
              key={tool.href}
              href={tool.href}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
