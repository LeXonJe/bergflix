<script context="module" lang="ts">
	/** @type {import('./__types/index').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const url = `${import.meta.env.VITE_BACKEND_PATH}/media/featured`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				featured: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	import HeroScreen from '$lib/hero/HeroScreen.svelte';
	import MediaCarousel from '$lib/media/MediaCarousel.svelte';
	import type { Media } from '$lib/types/Prisma';
	import PlayIcon from '$lib/utils/icons/PlayIcon.svelte';
	import { onMount } from 'svelte';

	export let featured: Media;

	$: featuredType = featured.type === 'SERIES' ? 'Serie' : 'Film';

	let movies: Media[] = [];
	let series: Media[] = [];

	onMount(async () => {
		const url = `${import.meta.env.VITE_BACKEND_PATH}/media`;
		const moviesResponse = await fetch(`${url}?type=movie`);
		const seriesResponse = await fetch(`${url}?type=series`);

		movies = moviesResponse.ok && (await moviesResponse.json());
		series = seriesResponse.ok && (await seriesResponse.json());
	});
</script>

<HeroScreen item={featured} showScrollIcon={true} />
<div class="w-full flex flex-col gap-16 mb-16">
	<MediaCarousel title="Kurzfilme und Filme" items={movies} />
	<MediaCarousel title="Serien" items={series} />
</div>
