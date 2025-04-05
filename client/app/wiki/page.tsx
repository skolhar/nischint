import { getWikiEntries } from '@/lib/directus'
import WikiSidebar from '@/components/WikiSidebar'
import WikiContent from '@/components/WikiContent'
import { BookOpenIcon } from '@heroicons/react/24/outline'

export default async function WikiPage() {
  const entries = await getWikiEntries()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Wiki Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <BookOpenIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Retirement Planning Wiki
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          A comprehensive guide to retirement planning in India, covering everything from basic concepts to advanced strategies.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Table of Contents */}
        <div className="lg:w-1/4">
          <div className="sticky top-8">
            <div className="card bg-white dark:bg-gray-800 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Table of Contents
              </h2>
              <WikiSidebar entries={entries} />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="card bg-white dark:bg-gray-800 p-8">
            <WikiContent entries={entries} />
          </div>
        </div>
      </div>
    </div>
  )
} 