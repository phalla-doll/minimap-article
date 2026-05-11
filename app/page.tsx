'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { TOCMinimap } from '@/components/TOCMinimap';
import { ThemeToggle } from '@/components/ThemeToggle';

const SECTIONS = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'foundations', title: 'The Foundations' },
  { id: 'rise-of-complexity', title: 'Rise of Complexity' },
  { id: 'architecting-scale', title: 'Architecting for Scale' },
  { id: 'the-human-element', title: 'The Human Element' },
  { id: 'future-horizons', title: 'Future Horizons' },
  { id: 'conclusion', title: 'Conclusion' }
];

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#0a0a0a] text-[#1A1A1A] dark:text-[#EAEAEA] font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black pb-12 transition-colors duration-300">
      {/* Theme Toggle Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* TOC Minimap Fixed Component */}
      <TOCMinimap items={SECTIONS} />

      {/* Hero Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-0.5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-wider transition-colors duration-300">Design</span>
            <span className="text-xs text-black/40 dark:text-white/40 font-mono transition-colors duration-300">12 Min Read</span>
          </div>
          <h1 className="text-5xl font-serif leading-tight tracking-tight mb-6">
            The Shape of Things: <br className="hidden md:block" />
            <span className="italic text-black/60 dark:text-white/60 transition-colors duration-300">Navigating UI Complexity</span>
          </h1>
          <div className="flex items-center gap-4 text-sm border-b border-black/5 dark:border-white/5 pb-8 mb-10 transition-colors duration-300">
            <span className="font-semibold">Engineering</span>
            <span className="text-black/30 dark:text-white/30 transition-colors duration-300">/</span>
            <span className="text-black/50 dark:text-white/50 transition-colors duration-300">Nov 14, 2023</span>
          </div>
          <p className="text-xl text-black/60 dark:text-white/60 font-serif leading-relaxed max-w-2xl transition-colors duration-300">
            As applications grow more complex, the lines between spatial design, 
            information architecture, and temporal interactions begin to blur.
          </p>
        </motion.div>
      </header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl mx-auto px-6 mb-24"
      >
        <div className="relative aspect-[21/9] rounded-sm overflow-hidden border border-black/5 dark:border-white/5 transition-colors duration-300">
          <Image
            src="https://picsum.photos/seed/gradient/1920/1080"
            alt="Abstract gradients representing UI complexity"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Article Content */}
      <article className="max-w-2xl mx-auto px-6 pb-32 text-lg leading-relaxed text-black/80 dark:text-white/80 font-serif transition-colors duration-300">
        
        <section id="introduction" className="scroll-mt-32 mb-20">
          <h2 className="text-3xl font-sans font-semibold tracking-tight mb-6">Introduction</h2>
          <p className="mb-8">
            We are living in an era of unprecedented computational power. Yet, as we wrap this power 
            in layers of abstraction to make it usable, we often inadvertently create labyrinthine user interfaces. 
            The goal of modern interaction design is not to expose all functionality at once, but to create 
            a progressive disclosure of capability.
          </p>
          <p className="mb-8">
            This article explores how we can structure interfaces that scale gracefully from the simplest 
            task to the most complex professional workflows, utilizing space, motion, and typography.
          </p>
        </section>

        <section id="foundations" className="scroll-mt-32 mb-20">
          <h2 className="text-3xl font-sans font-semibold tracking-tight mb-6">The Foundations</h2>
          <p className="mb-8">
            Every great piece of software starts with a foundational grid. Whether implicit or explicit, 
            grids give order to chaos. They tell the eye where to go, and establish rhythm in an otherwise 
            blank canvas. But grids in software are not static; they breathe.
          </p>
          <div className="p-10 bg-black/5 dark:bg-white/5 border-l-4 border-black dark:border-white my-8 transition-colors duration-300">
            <span className="block text-xs font-mono uppercase text-black/40 dark:text-white/40 mb-2 font-sans tracking-wider transition-colors duration-300">Key Principle</span>
            <p className="text-xl italic">
              &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
            </p>
          </div>
          <p className="mb-8">
            By establishing clear visual hierarchies—using size, weight, color, and proximity—we can offload 
            cognitive processing from the user&apos;s conscious mind to their subconscious perception.
          </p>
        </section>

        <section id="rise-of-complexity" className="scroll-mt-32 mb-20">
          <h2 className="text-3xl font-sans font-semibold tracking-tight mb-6">Rise of Complexity</h2>
          <p className="mb-8">
            As user needs mature, so does the tooling. A text editor becomes an IDE. A photo viewer 
            becomes a non-linear editor. This transition is known as the &quot;capability creep&quot; and it&apos;s 
            the silent killer of elegant user experiences.
          </p>
          <div className="grid grid-cols-2 gap-6 my-12 font-sans">
            <div className="bg-[#F9F8F6] dark:bg-[#111111] border border-black/5 dark:border-white/5 rounded-sm p-6 transition-colors duration-300">
              <h3 className="font-semibold mb-2">Linear Flow</h3>
              <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed transition-colors duration-300">Predictable, step-by-step progressions. Easy to learn, but painfully slow for experts.</p>
            </div>
            <div className="bg-[#F9F8F6] dark:bg-[#111111] border border-black/5 dark:border-white/5 rounded-sm p-6 transition-colors duration-300">
              <h3 className="font-semibold mb-2">Spatial Flow</h3>
              <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed transition-colors duration-300">Dashboard-like layouts showing all capabilities simultaneously. High cognitive load.</p>
            </div>
          </div>
          <p className="mb-8">
            Finding the balance often requires building contextual UI—interfaces that only show you what 
            you need, precisely when you need it, and quietly step out of the way otherwise.
          </p>
        </section>

        <section id="architecting-scale" className="scroll-mt-32 mb-20">
          <h2 className="text-3xl font-sans font-semibold tracking-tight mb-6">Architecting for Scale</h2>
          <p className="mb-8">
            To hold up under the weight of hundreds of features, an interface must act less like a document 
            and more like a room. Users spatial memory is incredibly powerful. Just as you know where the lights 
            are in your kitchen, users expect tools to remain in expected physical locations on screen.
          </p>
          <Image
            src="https://picsum.photos/seed/architecture/1000/600"
            alt="Structural architecture"
            width={1000}
            height={600}
            className="rounded-sm my-10 object-cover border border-black/5 dark:border-white/5 transition-colors duration-300"
            referrerPolicy="no-referrer"
          />
          <p className="mb-8">
            This introduces the concept of the <strong>Minimap</strong>—a navigational aid that allows users 
            to understand their absolute position in the document topology, while allowing rapid traversal. 
            (Take a look at the right side of your screen right now).
          </p>
        </section>

        <section id="the-human-element" className="scroll-mt-32 mb-20">
          <h2 className="text-3xl font-sans font-semibold tracking-tight mb-6">The Human Element</h2>
          <p className="mb-8">
            Designing systems that scale elegantly isn&apos;t just about managing pixels; it&apos;s about respecting 
            the psychological bandwidth of the humans using them. Motion plays a critical part in this. 
            When elements disappear instantaneously, it creates a break in reality. When they slide, fade, 
            or morph, they preserve context.
          </p>
          <div className="p-8 bg-[#F9F8F6] dark:bg-[#111111] border border-black/5 dark:border-white/5 text-[#1A1A1A] dark:text-[#EAEAEA] rounded-sm my-10 font-sans shadow-sm transition-colors duration-300">
            <h3 className="text-xl font-medium mb-4">Three Rules of Motion</h3>
            <ul className="space-y-4 text-black/60 dark:text-white/60 transition-colors duration-300">
              <li className="flex items-start">
                <span className="w-1 h-1.5 mt-2 bg-black/40 dark:bg-white/40 mr-4 shrink-0 transition-colors duration-300" />
                <p><strong>Purposeful:</strong> Animation should only exist to explain state change or establish spatial relations.</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 mt-2 bg-black/40 dark:bg-white/40 mr-4 shrink-0 transition-colors duration-300" />
                <p><strong>Snappy:</strong> UIs should react exactly as quickly as human thought. Ideally 200-300ms.</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 mt-2 bg-black/40 dark:bg-white/40 mr-4 shrink-0 transition-colors duration-300" />
                <p><strong>Unobtrusive:</strong> It should never force the user to wait for it before they can interact.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="future-horizons" className="scroll-mt-32 mb-20">
          <h2 className="text-3xl font-sans font-semibold tracking-tight mb-6">Future Horizons</h2>
          <p className="mb-8">
            In the coming years, we will see static grids further eroded by AI and generative UI. 
            Interfaces will actively mold themselves around the user&apos;s intent. The components won&apos;t just 
            respond to clicks; they will respond to goals. 
          </p>
          <p className="mb-8">
            Even so, the fundamental principles of spatial mapping, typography, and hierarchy will remain 
            our best tools for making sense of the digital frontier.
          </p>
        </section>

        <section id="conclusion" className="scroll-mt-32 mb-20 pb-16 border-b border-black/5 dark:border-white/5 transition-colors duration-300">
          <h2 className="text-3xl font-sans font-semibold tracking-tight mb-6">Conclusion</h2>
          <p className="mb-8">
            We build tools to build the future. By maintaining extreme discipline over how we introduce 
            complexity to a screen, we ensure our users can focus entirely on the work they woke up to do. 
          </p>
          <p className="mb-8 italic text-black/40 dark:text-white/40 transition-colors duration-300">
            End of transmission. Keep building beautiful things.
          </p>
        </section>
      </article>
      
      <footer className="text-center pb-24 text-black/40 dark:text-white/40 text-sm font-sans transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} AI Studio Engineering. All rights reserved.</p>
      </footer>
    </div>
  );
}
