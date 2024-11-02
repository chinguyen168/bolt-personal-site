import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const FeaturedPosts = () => {
  const posts = [
    {
      title: 'Building a Modern Web Application with Next.js 13',
      excerpt: 'Learn how to leverage the latest features in Next.js 13 to build scalable web applications.',
      date: '2024-03-20',
      slug: 'building-modern-web-app-nextjs-13',
    },
    {
      title: 'The Power of Server Components in React',
      excerpt: 'Exploring how React Server Components can improve your application performance.',
      date: '2024-03-15',
      slug: 'power-of-server-components-react',
    },
    {
      title: 'Mastering TypeScript: Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for writing maintainable code.',
      date: '2024-03-10',
      slug: 'mastering-typescript-best-practices',
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-2xl font-light mb-8">Latest Writing</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-1">
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;