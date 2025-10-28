import { Zap, Shield, Rocket, Code, Palette, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Vite 7 and optimized for maximum performance with React Compiler.',
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description: 'Fully typed with TypeScript 5.7+ for better developer experience and fewer bugs.',
  },
  {
    icon: Rocket,
    title: 'Modern Stack',
    description: 'React 19, Tailwind 4.0, Zustand, TanStack Query - all the latest technologies.',
  },
  {
    icon: Code,
    title: 'Best Practices',
    description: 'Following 2025 standards with server components, actions, and optimistic updates.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Stunning UI with Tailwind CSS 4.0 and dark mode support out of the box.',
  },
  {
    icon: Globe,
    title: 'Accessible',
    description: 'Built with accessibility in mind, following WCAG guidelines and ARIA standards.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern web applications in 2025
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
