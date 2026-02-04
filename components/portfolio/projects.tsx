'use client';

import { ExternalLink, Github, FolderPlus } from 'lucide-react';
import { projects, type Project } from '@/lib/portfolio-data';

export default function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects that showcase my skills in full-stack development, 
            system automation, and creative problem-solving.
          </p>
        </div>

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyProjectsState />
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-background hover:border-accent/50 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FolderPlus className="w-16 h-16 text-muted-foreground/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View Live
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Code
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyProjectsState() {
  return (
    <div className="text-center py-16 px-4 rounded-xl border border-dashed border-border bg-secondary/10">
      <FolderPlus className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Projects Coming Soon</h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        Featured projects will be showcased here. Check back soon to see my latest work 
        in full-stack development, machine learning, and more.
      </p>
    </div>
  );
}
