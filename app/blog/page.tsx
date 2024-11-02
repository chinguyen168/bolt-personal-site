import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: 'Building a Modern Web Application with Next.js 13',
      excerpt: 'Learn how to leverage the latest features in Next.js 13 to build scalable web applications.',
      date: '2024-03-20',
      category: 'Next.js',
      slug: 'building-modern-web-app-nextjs-13',
    },
    {
      title: 'The Power of Server Components in React',
      excerpt: 'Exploring how React Server Components can improve your application performance.',
      date: '2024-03-15',
      category: 'React',
      slug: 'power-of-server-components-react',
    },
    {
      title: 'Mastering TypeScript: Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for writing maintainable code.',
      date: '2024-03-10',
      category: 'TypeScript',
      slug: 'mastering-typescript-best-practices',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-light mb-12">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-medium">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}