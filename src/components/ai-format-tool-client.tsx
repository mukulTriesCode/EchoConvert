'use client';

import { useState, useTransition, DragEvent } from 'react';
import {
  recommendAudioFormat,
  RecommendAudioFormatOutput,
} from '@/ai/flows/ai-format-tool';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  UploadCloud,
  FileAudio,
  X,
  Loader2,
  WandSparkles,
  Settings,
  Lightbulb,
  RotateCcw,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const fileToDataUri = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export function AIFormatToolClient() {
  const [file, setFile] = useState<File | null>(null);
  const [useCase, setUseCase] = useState('');
  const [result, setResult] = useState<RecommendAudioFormatOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      if (!selectedFile.type.startsWith('audio/')) {
        toast({
          variant: 'destructive',
          title: 'Invalid File Type',
          description: 'Please upload a valid audio file.',
        });
        return;
      }
      setFile(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleReset = () => {
    setFile(null);
    setUseCase('');
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!file || !useCase) {
      setError('Please upload a file and describe the use case.');
      return;
    }
    setError(null);

    startTransition(async () => {
      try {
        const audioFileDataUri = await fileToDataUri(file);
        const response = await recommendAudioFormat({
          audioFileDataUri,
          useCase,
        });
        setResult(response);
      } catch (e) {
        const errorMessage =
          e instanceof Error ? e.message : 'An unknown error occurred.';
        setError(errorMessage);
        toast({
          variant: 'destructive',
          title: 'Recommendation Failed',
          description: errorMessage,
        });
      }
    });
  };

  return (
    <Card className="w-full shadow-lg">
      {isPending ? (
        <CardContent className="flex flex-col items-center justify-center p-24 space-y-4">
          <Loader2 className="w-16 h-16 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground font-medium">
            Analyzing your audio...
          </p>
          <p className="text-sm text-muted-foreground">
            This may take a moment.
          </p>
        </CardContent>
      ) : result ? (
        <>
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="p-2 bg-primary/10 rounded-full">
                <WandSparkles className="w-6 h-6 text-primary" />
              </span>
              <div>
                <CardTitle className="text-2xl">AI Recommendation</CardTitle>
                <CardDescription>
                  Based on your file and use case, here's our suggestion.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50 border">
              <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mb-1">
                <FileAudio className="w-4 h-4" /> Recommended Format
              </h3>
              <p className="text-xl font-bold text-primary">
                {result.recommendedFormat}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border">
              <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mb-1">
                <Settings className="w-4 h-4" /> Recommended Settings
              </h3>
              <p className="text-lg font-medium">
                {result.recommendedSettings}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border">
              <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mb-1">
                <Lightbulb className="w-4 h-4" /> Reasoning
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.reasoning}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleReset} variant="outline" className="ml-auto">
              <RotateCcw className="mr-2 h-4 w-4" />
              Start Over
            </Button>
          </CardFooter>
        </>
      ) : (
        <>
          <CardHeader>
            <CardTitle>Audio Analysis</CardTitle>
            <CardDescription>
              Upload your audio file and tell us what you'll use it for.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="audio-upload">1. Upload Audio File</Label>
              {file ? (
                <div className="flex items-center justify-between p-3 pl-4 rounded-lg border bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <FileAudio className="w-6 h-6 text-primary" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm truncate max-w-xs">
                        {file.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setFile(null)}
                    className="h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className={cn(
                    'relative flex flex-col items-center justify-center p-10 rounded-lg border-2 border-dashed transition-colors',
                    isDragging
                      ? 'border-primary bg-primary/10'
                      : 'hover:border-primary/50'
                  )}
                >
                  <UploadCloud className="w-12 h-12 text-primary" />
                  <p className="text-center text-muted-foreground">
                    <label
                      htmlFor="file-upload"
                      className="font-semibold text-primary cursor-pointer hover:underline"
                    >
                      Click to upload
                    </label>{' '}
                    or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    MP3, WAV, OGG, AAC, etc.
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="audio/*"
                    onChange={(e) =>
                      handleFileChange(e.target.files?.[0] ?? null)
                    }
                  />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="use-case">2. Describe Use Case</Label>
              <Textarea
                id="use-case"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="e.g., 'This is for a podcast that will be streamed online.' or 'High-quality master for music production.'"
                rows={4}
                className="resize-none"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            {error && (
              <p className="w-full text-sm text-destructive text-center p-2 bg-destructive/10 rounded-md">
                {error}
              </p>
            )}
            <Button onClick={handleSubmit} disabled={!file || !useCase}>
              <WandSparkles className="mr-2 h-4 w-4" />
              Get Recommendation
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
