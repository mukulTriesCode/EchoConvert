import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the AudioForge team. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <PageHeader
        title="Contact Us"
        description="Have a question or feedback? Drop us a line!"
      />
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Send us a Message</CardTitle>
            <CardDescription>We'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                <User className="mr-2 h-4 w-4" /> Name
              </Label>
              <Input id="name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" /> Message
              </Label>
              <Textarea id="message" placeholder="Your message..." rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
