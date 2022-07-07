<script lang="ts">
	import { assets } from '$app/paths';
	import type { Media } from '$lib/types/Prisma';
	import MouseIcon from '$lib/utils/icons/MouseIcon.svelte';

	import MediaInfo from '../media/MediaInfo.svelte';

	let img = `${assets}/img/preview.png`;

	export let item: Media,
		showScrollIcon: boolean = false;
</script>

<div class="relative z-20 h-screen w-full flex items-center sm:justify-start">
	<MediaInfo {item} />
</div>
<div class="absolute top-0 left-0 z-10 h-screen w-full bg-shadow">
	{#if showScrollIcon}
		<div class="absolute left-1/2 bottom-10">
			<MouseIcon />
		</div>
	{/if}
</div>
<div
	class="absolute top-0 left-0 z-0 h-screen w-full"
	style="background: url('{img}'); background-size: cover;"
/>

<style>
	.bg-shadow {
		background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 30.05%),
			linear-gradient(90deg, #000000 12.73%, rgba(0, 0, 0, 0) 63.93%);
		background-size: cover;
	}
</style>
