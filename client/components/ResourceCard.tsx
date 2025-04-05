import Link from 'next/link';
import { format } from 'date-fns';

interface ResourceCardProps {
  title: string;
  description: string;
  category?: string;
  type: string;
  url: string;
  date: string;
}

export default function ResourceCard({
  title,
  description,
  category,
  type,
  url,
  date,
}: ResourceCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        {category && (
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {category}
          </span>
        )}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {format(new Date(date), 'MMM d, yyyy')}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {type}
        </span>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          View Resource
        </Link>
      </div>
    </div>
  );
} 