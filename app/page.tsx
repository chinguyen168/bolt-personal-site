import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import FeaturedPosts from '@/components/featured-posts';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-20 space-y-8">
        <h1 className="text-4xl font-light">
          John Doe
          <span className="block text-lg text-muted-foreground mt-2">Full Stack Developer</span>
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          I build exceptional digital experiences that make life easier and more enjoyable.
          Specializing in React, Node.js, and Cloud Architecture.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@example.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <Projects />

      {/* Featured Blog Posts */}
      <FeaturedPosts />
    </div>
  );
}