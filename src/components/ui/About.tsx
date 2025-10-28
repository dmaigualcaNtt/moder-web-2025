import { CheckCircle } from 'lucide-react'

const technologies = [
  'React 19 with React Compiler',
  'Tailwind CSS 4.0 (Oxide Engine)',
  'Vite 7 for blazing fast builds',
  'TypeScript 5.7+ with strict mode',
  'Zustand for state management',
  'TanStack Query for data fetching',
  'Zod for schema validation',
  'React Hook Form for forms',
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Built for the{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Modern Web
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              This project showcases the latest and greatest in web development for 2025.
              Every component is crafted with performance, accessibility, and developer
              experience in mind.
            </p>
            <p className="text-lg text-muted-foreground">
              We leverage cutting-edge features like React 19's use() hook, Actions,
              and Server Components, combined with Tailwind CSS 4.0's revolutionary
              Oxide engine for unparalleled styling performance.
            </p>

            {/* Technology list */}
            <div className="space-y-3 pt-4">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-blue-400/20 to-purple-400/20 p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
              <div className="h-full w-full rounded-xl bg-card/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                    2025
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    Next-Gen Web Development
                  </div>
                  <div className="text-muted-foreground">
                    Performance. Accessibility. Excellence.
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blur elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
