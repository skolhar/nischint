import Link from 'next/link'
import { ArrowRightIcon, BookOpenIcon, CalculatorIcon, ChartBarIcon } from '@heroicons/react/24/outline'

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

			{/* Features Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature) => (
							<Link
								key={feature.title}
								href={feature.href}
								className="card hover:shadow-md transition-shadow"
							>
								<feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									{feature.description}
								</p>
							</Link>
						))}
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
