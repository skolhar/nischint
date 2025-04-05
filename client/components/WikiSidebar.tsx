'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface WikiEntry {
  id: string;
  title: string;
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
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const buildTree = (items: WikiEntry[], parentId: string | null = null): WikiEntry[] => {
    return items
      .filter((item) => item.parent === parentId)
      .sort((a, b) => a.order - b.order)
      .map((item) => ({
        ...item,
        children: buildTree(items, item.id),
      }));
  };

  const renderTree = (items: WikiEntry[], level = 0) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems.has(item.id);
      const isActive = pathname === `/wiki/${item.slug}`;

      return (
        <div key={item.id} className="mb-1">
          <div
            className={`flex items-center py-2 px-3 rounded-md ${
              isActive
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {hasChildren && (
              <button
                onClick={() => toggleItem(item.id)}
                className="mr-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                {isExpanded ? (
                  <ChevronDownIcon className="h-4 w-4" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4" />
                )}
              </button>
            )}
            <Link
              href={`/wiki/${item.slug}`}
              className={`flex-1 text-sm font-medium ${
                isActive ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              {item.title}
            </Link>
          </div>
          {hasChildren && isExpanded && (
            <div className="ml-4 mt-1">{renderTree(item.children!, level + 1)}</div>
          )}
        </div>
      );
    });
  };

  const tree = buildTree(entries);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Topics
      </h2>
      <div className="space-y-1">{renderTree(tree)}</div>
    </div>
  );
} 