import Link from 'next/link'
import { ArrowRightIcon, BookOpenIcon, CalculatorIcon, ChartBarIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Home() {
	const features = [
		{
			title: 'Resource Repository',
			description: 'Access curated articles, news, videos, and podcasts on retirement planning in India.',
			icon: BookOpenIcon,
			href: '/resources',
		},
		{
			title: 'Comprehensive Wiki',
			description: 'Explore our detailed guide on retirement planning with topic-wise organization.',
			icon: BookOpenIcon,
			href: '/wiki',
		},
		{
			title: 'Retirement Calculator',
			description: 'Plan your retirement goals with our advanced calculator and Monte Carlo simulations.',
			icon: CalculatorIcon,
			href: '/dashboard/calculator',
		},
		{
			title: 'Investment Tracking',
			description: 'Monitor your portfolio, asset allocation, and retirement goal progress.',
			icon: ChartBarIcon,
			href: '/dashboard/portfolio',
		},
	]

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							Plan Your Retirement with Confidence
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
							निश्चिंत - Your comprehensive resource for retirement planning and tracking in India
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/dashboard"
								className="btn-primary inline-flex items-center justify-center"
							>
								Get Started
								<ArrowRightIcon className="ml-2 h-5 w-5" />
							</Link>
							<Link
								href="/resources"
								className="btn-secondary inline-flex items-center justify-center"
							>
								Explore Resources
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Resources Highlight Section */}
			<section className="py-16 bg-white dark:bg-gray-800">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Popular Resources</h2>
						<Link href="/resources" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
							View All
							<ArrowRightIcon className="ml-2 h-5 w-5" />
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Resource Cards */}
						<div className="card group hover:shadow-lg transition-all duration-300">
							<div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-t-lg overflow-hidden">
								<div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
									<DocumentTextIcon className="h-12 w-12 text-white" />
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">Understanding NPS</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4">A comprehensive guide to National Pension System and its benefits for retirement planning.</p>
								<Link href="/resources" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
									Read More
									<ArrowRightIcon className="ml-2 h-5 w-5" />
								</Link>
							</div>
						</div>
						{/* Add more resource cards here */}
					</div>
				</div>
			</section>

			{/* Wiki Highlight Section */}
			<section className="py-16 bg-gray-50 dark:bg-gray-900">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Wiki Articles</h2>
						<Link href="/wiki" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
							View All
							<ArrowRightIcon className="ml-2 h-5 w-5" />
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="card bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-all duration-300">
							<div className="flex items-start space-x-4">
								<div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
									<AcademicCapIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Retirement Planning Basics</h3>
									<p className="text-gray-600 dark:text-gray-400">Learn the fundamentals of retirement planning and how to get started.</p>
								</div>
							</div>
						</div>
						{/* Add more wiki cards here */}
					</div>
				</div>
			</section>

			{/* Dashboard Preview Section */}
			<section className="py-16 bg-white dark:bg-gray-800">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Retirement Dashboard</h2>
						<Link href="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
							Go to Dashboard
							<ArrowRightIcon className="ml-2 h-5 w-5" />
						</Link>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="card p-6">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Retirement Calculator</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-4">Plan your retirement goals with our advanced calculator and Monte Carlo simulations.</p>
							<Link href="/dashboard/calculator" className="btn-primary inline-flex items-center">
								Calculate Now
								<CalculatorIcon className="ml-2 h-5 w-5" />
							</Link>
						</div>
						<div className="card p-6">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Portfolio Tracker</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-4">Monitor your investments and track your progress towards retirement goals.</p>
							<Link href="/dashboard/portfolio" className="btn-primary inline-flex items-center">
								View Portfolio
								<ChartBarIcon className="ml-2 h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="bg-blue-600 dark:bg-blue-700 py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold text-white mb-4">
						Ready to Start Your Retirement Journey?
					</h2>
					<p className="text-blue-100 mb-8 max-w-2xl mx-auto">
						Join thousands of Indians who are planning their retirement with confidence using our comprehensive tools and resources.
					</p>
					<Link
						href="/dashboard"
						className="btn-primary bg-white text-blue-600 hover:bg-blue-50 inline-flex items-center"
					>
						Create Your Plan
						<ArrowRightIcon className="ml-2 h-5 w-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
