'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface TOCMinimapProps {
  items: TOCItem[];
}

export function TOCMinimap({ items }: TOCMinimapProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Trigger point near the top of viewport
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <motion.nav
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col py-6 px-4 bg-transparent",
        "overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
      animate={{
        width: isHovered ? 260 : 48,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 1
      }}
    >
      <div className="flex flex-col gap-2 w-full">
        {items.map((item, index) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="relative group flex items-center h-8 w-full text-left outline-none cursor-pointer"
              aria-label={`Scroll to ${item.title}`}
            >
              <motion.div 
                className="flex items-center w-full relative z-10 origin-left"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {/* The Dot / Active Indicator */}
                <motion.div
                  className={cn(
                    "rounded-full transition-colors duration-300 origin-left",
                    isActive ? "bg-black" : "bg-black/10 group-hover:bg-black/30"
                  )}
                  initial={false}
                  animate={{
                    width: isHovered ? (isActive ? 18 : 8) : "100%",
                    height: isHovered ? (isActive ? 4 : 2) : 2,
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: isActive ? 12 : 25, 
                    mass: 0.8 
                  }}
                />

                {/* The Label */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 12, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: 8, filter: "blur(4px)", transition: { duration: 0.2 } }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.03,
                      }}
                      className="ml-4 flex items-center justify-between w-full"
                    >
                      <span
                        className={cn(
                          "whitespace-nowrap text-xs font-medium transition-colors duration-200",
                          isActive ? "text-black" : "text-black/50 group-hover:text-black/80"
                        )}
                      >
                        {item.title}
                      </span>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
