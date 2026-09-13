'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import InstagramIcon from './InstagramIcon';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/work/', label: 'WORK' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="border-b hairline bg-ink/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.35em] text-paper transition-colors duration-300 hover:text-blush"
          >
            ER
          </Link>

          <div className="flex items-center gap-6 md:gap-10">
            {links.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname.startsWith('/work');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`label transition-colors duration-300 ${
                    active ? 'text-blush' : 'text-paper/70 hover:text-paper'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <span className="hidden h-3 w-px bg-paper/20 sm:block" aria-hidden />
            <InstagramIcon className="h-4 w-4 text-paper/70 transition-colors duration-300 hover:text-blush sm:block" />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
