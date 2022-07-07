<script context="module" lang="ts">
	/** @type {import('./__types/index').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const url = `${import.meta.env.VITE_BACKEND_PATH}/media/featured?type=movie`;
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
	import { onMount } from 'svelte';

	export let featured: Media;

	let movies: Media[] = [];

	onMount(async () => {
		const url = `${import.meta.env.VITE_BACKEND_PATH}/media?type=movie`;
		const moviesResponse = await fetch(url);

		let data = moviesResponse.ok && (await moviesResponse.json());
		movies = data.filter((value) => value.id !== featured.id);
	});
</script>

<HeroScreen item={featured} showScrollIcon={true} />
<div class="w-full flex flex-col gap-16 mb-16">
	<MediaCarousel title="Weitere Kurzfilme und Filme" items={movies} />
</div>
