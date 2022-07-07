<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Media } from '$lib/types/Prisma';

	export let item: Media | undefined;
</script>

<div
	class="aspect-video w-full rounded-normal transition-transform cursor-pointer hover:scale-105"
	class:bg-load={!item}
	style={item
		? `background: url('${item.seasons[0].sources[0].thumbnail}'); background-size: cover;`
		: ''}
	on:click={() => item && goto(`/media/${item.id}`)}
/>

<style lang="scss">
	.bg-load {
		@keyframes loading {
			0% {
				@apply bg-base-200;
			}
			50% {
				@apply bg-base-300;
			}
			100% {
				@apply bg-base-200;
			}
		}

		animation: loading 2500ms ease-in-out infinite;
	}
</style>
