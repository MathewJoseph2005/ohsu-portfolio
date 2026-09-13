import { INSTAGRAM_URL } from '@/lib/site';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="label">Designed &amp; built by Rosangela Shaijan</p>

        <div className="flex items-center gap-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label inline-flex items-center gap-2 text-paper/70 transition-colors duration-300 hover:text-blush"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            @evrista_prod
          </a>
          <span className="label">© {new Date().getFullYear()} EVRISTA</span>
          <span className="label hidden md:inline">ALL RIGHTS RESERVED</span>
        </div>
      </div>
      <div className="px-6 pb-6 md:px-10">
        <p className="label md:hidden">ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
