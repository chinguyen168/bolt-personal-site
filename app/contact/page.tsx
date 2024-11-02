import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-light mb-12">Contact</h1>
      <Card>
        <CardContent className="p-6 space-y-6">
          <p className="text-muted-foreground">
            I am always open to discussing new projects, opportunities, or partnerships.
            Feel free to reach out through any of the following channels:
          </p>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="mailto:contact@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>contact@example.com</span>
            </Link>
            
            <Link 
              href="https://github.com"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            
            <Link 
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
          </div>

          <div className="pt-6">
            <Button asChild>
              <Link href="mailto:contact@example.com">Send Email</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}