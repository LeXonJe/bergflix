<script lang="ts">
	import type { NavigationItem } from './types/NavigationItem';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import BergflixLogo from './utils/BergflixLogo.svelte';

	export let links: NavigationItem[] = [];
</script>

<div class="absolute top-0 left-0 z-50 w-full px-4 py-2 sm:px-16 sm:py-8 flex items-center">
	<BergflixLogo />
	<ul class="ml-16 flex h-full gap-16">
		{#each links as link}
			<li
				class="select-none px-104 h-full flex items-center cursor-pointer font-semibold text-xl hover:text-primary"
				class:text-primary={$page.url.pathname === link.href}
				on:click={() => goto(link.href)}
			>
				{link.title}
			</li>
		{/each}
	</ul>
</div>
