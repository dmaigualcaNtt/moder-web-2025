import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/ui/Hero'
import { Features } from '@/components/ui/Features'
import { About } from '@/components/ui/About'
import { Contact } from '@/components/ui/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
