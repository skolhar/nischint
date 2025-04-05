import Link from 'next/link';
import { BookOpenIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  type: 'resource' | 'wiki';
  href: string;
}

interface HighlightsSectionProps {
  resources: HighlightItem[];
  wikiEntries: HighlightItem[];
}

export default function HighlightsSection({ resources, wikiEntries }: HighlightsSectionProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Popular Content
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resources Highlights */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <BookOpenIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                Featured Resources
              </h3>
            </div>
            <div className="space-y-4">
              {resources.map((resource) => (
                <Link
                  key={resource.id}
                  href={resource.href}
                  className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Wiki Highlights */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <DocumentTextIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                Featured Wiki Entries
              </h3>
            </div>
            <div className="space-y-4">
              {wikiEntries.map((entry) => (
                <Link
                  key={entry.id}
                  href={entry.href}
                  className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {entry.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {entry.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 