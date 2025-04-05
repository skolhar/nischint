import { getResources } from '@/lib/directus'
import ResourceCard from '@/components/ResourceCard'
import { BookOpenIcon, VideoCameraIcon, MicrophoneIcon, NewspaperIcon } from '@heroicons/react/24/outline'

export default async function ResourcesPage() {
  const resources = await getResources()

  const categories = [
    { name: 'Articles', icon: BookOpenIcon, count: 12 },
    { name: 'Videos', icon: VideoCameraIcon, count: 8 },
    { name: 'Podcasts', icon: MicrophoneIcon, count: 6 },
    { name: 'News', icon: NewspaperIcon, count: 10 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Section */}
      <div className="mb-12">
        <div className="relative rounded-2xl overflow-hidden h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative h-full flex items-center px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                Featured Article
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                The Complete Guide to Retirement Planning in India
              </h1>
              <p className="text-lg text-white/90 mb-6">
                Everything you need to know about planning your retirement in India, from investment strategies to tax planning.
              </p>
              <button className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="card hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="p-6">
                <category.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {category.count} resources
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  )
} 