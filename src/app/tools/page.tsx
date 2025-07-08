import { PageHeader } from '@/components/page-header';
import { ToolCard } from '@/components/tool-card';
import { ArrowRightLeft, Scissors, Shrink, Volume2, WandSparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Tools',
  description: 'Explore our full suite of online audio tools. Convert, trim, compress, boost, and get AI recommendations for your audio files.',
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

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="All Tools"
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
    </div>
  );
}
