import { getWikiEntries } from '@/lib/directus'
import WikiSidebar from '@/components/WikiSidebar'
import WikiContent from '@/components/WikiContent'

export default async function WikiPage() {
  const entries = await getWikiEntries()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Retirement Planning Wiki
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <WikiSidebar entries={entries} />
        </div>
        
        <div className="lg:w-3/4">
          <WikiContent entries={entries} />
        </div>
      </div>
    </div>
  )
} 