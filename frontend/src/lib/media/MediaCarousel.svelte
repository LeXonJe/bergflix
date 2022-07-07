<script lang="ts">
	import MediaPick from './MediaPick.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/effect-coverflow';
	import type { Media } from '$lib/types/Prisma';

	export let items: Media[] = [],
		title: string;

	$: hasFetched = items.length > 0;
</script>

<div class="flex flex-col">
	<div class="font-bold text-[28px]">{title}</div>
	<div class="mt-[30px] w-full">
		<Swiper
			class="mediaSlider"
			spaceBetween={50}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 50
				},
				1020: {
					slidesPerView: 3,
					spaceBetween: 50
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 50
				}
			}}
		>
			{#if hasFetched}
				{#each items as item}
					<SwiperSlide>
						<MediaPick {item} />
					</SwiperSlide>
				{/each}
			{:else}
				{#each Array(5) as _, index (index)}
					<SwiperSlide>
						<MediaPick item={undefined} />
					</SwiperSlide>
				{/each}
			{/if}
		</Swiper>
	</div>
</div>

<style global>
	.mediaSlider {
		overflow: visible;
	}
</style>
