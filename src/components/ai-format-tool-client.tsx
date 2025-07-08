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
} from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import { AdPlaceholder } from './ad-placeholder';

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

  const handleSubmit = async () => {
    if (!file || !useCase) {
      setError('Please upload a file and describe the use case.');
      return;
    }
    setError(null);
    setResult(null);

    startTransition(async () => {
      try {
        const audioFileDataUri = await fileToDataUri(file);
        const response = await recommendAudioFormat({
          audioFileDataUri,
          useCase,
        });
        setResult(response);
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Audio Analysis</CardTitle>
            <CardDescription>
              Upload your file and provide details to get your recommendation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="audio-upload">Audio File</Label>
              {file ? (
                <div className="flex items-center justify-between p-3 rounded-md border bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileAudio className="w-6 h-6 text-primary" />
                    <span className="font-medium text-sm truncate max-w-xs">{file.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setFile(null)}
                    className="h-7 w-7"
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
                    "relative flex flex-col items-center justify-center p-8 rounded-lg border-2 border-dashed transition-colors",
                    isDragging ? "border-primary bg-accent/50" : "hover:border-primary/50"
                  )}
                >
                  <UploadCloud className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground">
                    <label htmlFor="file-upload" className="font-semibold text-primary cursor-pointer hover:underline">
                      Click to upload
                    </label> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">MP3, WAV, OGG, AAC, etc.</p>
                  <input
                    id="file-upload"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="audio/*"
                    onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                  />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="use-case">Use Case Description</Label>
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
          <CardFooter className="flex justify-between items-center">
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button onClick={handleSubmit} disabled={isPending || !file || !useCase} className="ml-auto">
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <WandSparkles className="mr-2 h-4 w-4" />
              )}
              Recommend
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:col-span-1 space-y-8">
        {isPending ? (
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-8 w-1/2" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-8 w-3/4" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-12 w-full" />
              </div>
            </CardContent>
          </Card>
        ) : result ? (
          <Card className="bg-accent/20 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <WandSparkles className="w-6 h-6 text-primary" />
                AI Recommendation
              </CardTitle>
              <CardDescription>
                Based on your file and use case, here's our suggestion.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mb-1">
                  <FileAudio className="w-4 h-4" /> Recommended Format
                </h3>
                <p className="text-lg font-bold text-primary">
                  {result.recommendedFormat}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mb-1">
                  <Settings className="w-4 h-4" /> Recommended Settings
                </h3>
                <p className="text-md font-medium">
                  {result.recommendedSettings}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mb-1">
                  <Lightbulb className="w-4 h-4" /> Reasoning
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {result.reasoning}
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>Awaiting Input</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your AI-powered audio format recommendation will appear here once
                you upload a file and describe its intended use.
              </p>
            </CardContent>
          </Card>
        )}
        <AdPlaceholder className="h-64" />
      </div>
    </div>
  );
}
