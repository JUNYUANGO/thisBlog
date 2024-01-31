interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	// author: 'DanielCG', // Site author
	author: 'Junyuan Wang',
	// title: 'Astro Theme OpenBlog', // Site title.
	title: 'ThisBlog',
	// description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	description: 'Blogs Only Here!',
	lang: 'en-us',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
