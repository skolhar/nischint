import { getResources } from '@/lib/directus'
import ResourceCard from '@/components/ResourceCard'

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Resource Repository
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.name}
            description={resource.description}
            category={resource.category?.name}
            type={resource.type}
            url={resource.url}
            date={resource.published_at}
          />
        ))}
      </div>
    </div>
  )
} 