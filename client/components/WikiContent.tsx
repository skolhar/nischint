'use client';

import { usePathname } from 'next/navigation';
import { WikiEntry } from './WikiSidebar';

interface WikiContentProps {
  entries: WikiEntry[];
}

export default function WikiContent({ entries }: WikiContentProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split('/').pop();
  const currentEntry = entries.find((entry) => entry.slug === currentSlug);

  if (!currentEntry) {
    return (
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to the Retirement Planning Wiki
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select a topic from the sidebar to begin exploring our comprehensive guide to retirement planning in India.
        </p>
      </div>
    );
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {currentEntry.title}
        </h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>Last updated: {new Date(currentEntry.published_at).toLocaleDateString()}</span>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: currentEntry.content }} />
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>Need help? </span>
            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Contact our support team
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>Was this article helpful? </span>
            <button className="text-blue-600 dark:text-blue-400 hover:underline">
              Yes
            </button>
            <span className="mx-2">·</span>
            <button className="text-blue-600 dark:text-blue-400 hover:underline">
              No
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
} 