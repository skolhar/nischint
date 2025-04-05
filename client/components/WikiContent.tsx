'use client';

import { usePathname } from 'next/navigation';

interface WikiEntry {
  id: string;
  title: string;
  content: string;
  slug: string;
  parent: string | null;
  order: number;
  published: boolean;
  published_at: string;
}

interface WikiContentProps {
  entries: WikiEntry[];
}

export default function WikiContent({ entries }: WikiContentProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split('/').pop();
  const currentEntry = entries.find((entry) => entry.slug === currentSlug);

  if (!currentEntry) {
    return (
      <div className="card">
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
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {currentEntry.title}
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: currentEntry.content }} />
      </div>
      <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date(currentEntry.published_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 