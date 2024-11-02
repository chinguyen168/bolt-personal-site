import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Doe
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;