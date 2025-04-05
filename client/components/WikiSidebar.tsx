'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export interface WikiEntry {
  id: string;
  title: string;
  content: string;
  slug: string;
  parent: string | null;
  order: number;
  published: boolean;
  published_at: string;
  children?: WikiEntry[];
}

interface WikiSidebarProps {
  entries: WikiEntry[];
}

export default function WikiSidebar({ entries }: WikiSidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderEntry = (entry: WikiEntry, level = 0) => {
    const isActive = pathname === `/wiki/${entry.slug}`;
    const hasChildren = entry.children && entry.children.length > 0;
    const isExpanded = expandedSections[entry.id] ?? level === 0;

    return (
      <div key={entry.id} className="space-y-1">
        <div className="flex items-center">
          {hasChildren && (
            <button
              onClick={() => toggleSection(entry.id)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {isExpanded ? (
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRightIcon className="h-4 w-4 text-gray-500" />
              )}
            </button>
          )}
          <Link
            href={`/wiki/${entry.slug}`}
            className={`flex-1 py-1 px-2 rounded ${
              isActive
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {entry.title}
          </Link>
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-4 space-y-1">
            {entry.children?.map(child => renderEntry(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const rootEntries = entries.filter(entry => !entry.parent);

  return (
    <nav className="space-y-2">
      {rootEntries.map(entry => renderEntry(entry))}
    </nav>
  );
} 