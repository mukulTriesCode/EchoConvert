'use server';

/**
 * @fileOverview An AI-powered tool that analyzes audio files and recommends optimal formats and settings.
 *
 * - recommendAudioFormat - A function that handles the audio format recommendation process.
 * - RecommendAudioFormatInput - The input type for the recommendAudioFormat function.
 * - RecommendAudioFormatOutput - The return type for the recommendAudioFormat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendAudioFormatInputSchema = z.object({
  audioFileDataUri: z
    .string()
    .describe(
      "The audio file data as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  useCase: z.string().describe("The intended use case for the audio file (e.g., podcasting, music production, mobile playback)."),
});
export type RecommendAudioFormatInput = z.infer<typeof RecommendAudioFormatInputSchema>;

const RecommendAudioFormatOutputSchema = z.object({
  recommendedFormat: z.string().describe("The recommended audio format (e.g., MP3, WAV, AAC)."),
  recommendedSettings: z.string().describe("The recommended audio settings (e.g., bitrate, sample rate)."),
  reasoning: z.string().describe("The AI's reasoning for the recommendation."),
});
export type RecommendAudioFormatOutput = z.infer<typeof RecommendAudioFormatOutputSchema>;

export async function recommendAudioFormat(input: RecommendAudioFormatInput): Promise<RecommendAudioFormatOutput> {
  return recommendAudioFormatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendAudioFormatPrompt',
  input: {schema: RecommendAudioFormatInputSchema},
  output: {schema: RecommendAudioFormatOutputSchema},
  prompt: `You are an AI expert in audio formats and settings. Analyze the provided audio file and use case to recommend the optimal audio format and settings.

  Consider factors like compression, quality, compatibility, and intended use.

  Provide a detailed reasoning for your recommendation.

  Audio File: {{media url=audioFileDataUri}}
  Use Case: {{{useCase}}}
  `,
});

const recommendAudioFormatFlow = ai.defineFlow(
  {
    name: 'recommendAudioFormatFlow',
    inputSchema: RecommendAudioFormatInputSchema,
    outputSchema: RecommendAudioFormatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
