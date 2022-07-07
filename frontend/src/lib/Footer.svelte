<script lang="ts">
	import { assets } from '$app/paths';

	import type { FooterCategory } from './types/FooterCategory';
	import BergflixLogo from './utils/BergflixLogo.svelte';
	import OutterLinkIcon from './utils/icons/OutterLinkIcon.svelte';

	export let categories: FooterCategory[];
</script>

<div class="w-full bg-base-200 p-10 xl:p-12 flex flex-col gap-[50px] items-center justify-center">
	<div class="flex flex-col gap-10 xl:flex-row xl:gap-[100px] items-baseline">
		<BergflixLogo />
		{#each categories as category}
			<div class="flex flex-col gap-4">
				<span class="text-base-400 font-semibold">{category.title}</span>
				{#each category.items as item}
					<a
						href={item.href}
						target={item.href.startsWith('http') ? '_blank' : ''}
						class="font-bold text-2xl flex items-baseline transition-colors duration-100 hover:text-primary"
					>
						<span>{item.title}</span>
						{#if item.href.startsWith('http')}
							<span class="ml-2">
								<OutterLinkIcon />
							</span>
						{/if}
					</a>
				{/each}
			</div>
		{/each}
	</div>
	<div class="text-base-400 font-semibold text-center flex flex-col sm:flex-row">
		<span>Präsentiert durch die “From The Future”-Redaktion</span>
		<span class="w-[1px] self-stretch mx-2 bg-base-400 hidden sm:block" />
		<span>
			Built with
			<img class="inline-block h-5" src="{assets}/img/nicerdicer.png" alt="NicerDicer" />
			by Bergflix.
		</span>
	</div>
</div>
