import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js and Stripe',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management application with team collaboration features',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'AI Content Generator',
      description: "AI-powered content generation tool using OpenAI's GPT-3",
      technologies: ['Python', 'FastAPI', 'React', 'OpenAI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-2xl font-light mb-8">Selected Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card key={index} className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link href={project.github} target="_blank">
                    <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </Link>
                  <Link href={project.demo} target="_blank">
                    <LinkIcon className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;