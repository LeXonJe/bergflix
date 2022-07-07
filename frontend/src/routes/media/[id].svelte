<script context="module" lang="ts">
	/** @type {import('./__types/index').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const url = `${import.meta.env.VITE_BACKEND_PATH}/media/${params.id}`;
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
	import type { Media } from '$lib/types/Prisma';

	export let featured: Media;
</script>

<HeroScreen item={featured} />
