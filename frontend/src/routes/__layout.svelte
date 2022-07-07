<script lang="ts">
	import type { FooterCategory } from '$lib/types/FooterCategory';
	import type { NavigationItem } from '$lib/types/NavigationItem';

	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';

	import '../app.scss';

	const links: NavigationItem[] = [
		{
			title: 'Startseite',
			href: '/'
		},
		{
			title: 'Filme',
			href: '/movies'
		},
		{
			title: 'Serien',
			href: '/series'
		}
	];

	const categories: FooterCategory[] = [
		{
			title: 'Social Media',
			items: [
				{
					title: 'Hilf uns auf Patreon',
					href: 'https://www.patreon.com/bergflixtogo'
				},
				{
					title: 'Joine unserem Discord',
					href: 'https://discord.bergflix.de/'
				},
				{
					title: 'Folg uns auf Twitter',
					href: 'https://twitter.com/BergflixToGo'
				}
			]
		},
		{
			title: 'Bergflix. Brand',
			items: [
				{
					title: 'Bergflix Branding',
					href: '/brand'
				},
				{
					title: 'Bergflix Open Source',
					href: 'https://github.com/Bergflix'
				},
				{
					title: 'Bewerbe dich bei uns',
					href: 'https://discord.bergflix.de/'
				}
			]
		},
		{
			title: 'Rechtliches & Hilfe',
			items: [
				{
					title: 'Datenschutzerklärung',
					href: '/privacy'
				},
				{
					title: 'Impressum',
					href: '/impressum'
				}
			]
		},
		{
			title: 'Mehr von Herr Bergmann',
			items: [
				{
					title: 'Joine der FTF-Redaktion',
					href: 'https://discord.gg/fromthefuture'
				},
				{
					title: 'Das BWL-Kreativteam',
					href: 'https://bergwerklabs.de/'
				},
				{
					title: 'Unterstütze seine Projekt',
					href: 'https://www.patreon.com/herrbergmann'
				}
			]
		}
	];
</script>

<Navbar {links} />
<div class="relative px-4 sm:px-16 overflow-x-hidden">
	<slot />
</div>
<Footer {categories} />
