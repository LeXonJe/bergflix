<script lang="ts">
	import MediaTitle from '$lib/media/MediaTitle.svelte';
	import type { Media } from '$lib/types/Prisma';
	import BergflixLogo from '$lib/utils/BergflixLogo.svelte';
	import PlayIcon from '$lib/utils/icons/PlayIcon.svelte';

	export let item: Media;

	$: displayType = item?.type === 'SERIES' ? 'Serie' : 'Film';
</script>

<div class="flex flex-col items-center sm:items-start">
	<div class="text-4xl font-medium w-96">
		<MediaTitle logo={`${import.meta.env.VITE_BACKEND_PATH}/cdn${item.logo}`} title={item.title} />
	</div>
	<div class="mt-4">
		<BergflixLogo title="Original" size="28px" />
	</div>
	<div class="mt-[10px] flex gap-6 items-baseline text-xl font-medium">
		<span>{new Date(item.releasedAt).getUTCFullYear()}</span>
		<span class="text-primary font-semibold px-2 border-white border-[1px] rounded-normal"
			>{item.ageRestricted}+</span
		>
		<span>{displayType}</span>
		<span class="w-[1px] self-stretch bg-white" />
		<span>{item.genre}</span>
	</div>
	<div class="mt-3 max-w-md font-medium leading-5 text-center sm:text-left">
		{item.description}
	</div>
	<div class="mt-3 flex flex-col items-center sm:flex-row sm:items-start gap-4">
		<button class="btn btn-primary">
			<PlayIcon />
			{displayType} ansehen
		</button>
		<button class="btn">Weitere Informationen</button>
	</div>
</div>
