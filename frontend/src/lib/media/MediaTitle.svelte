<script lang="ts">
	export let logo: string = '',
		title: string;
</script>

{#if logo}
	<img src={logo} alt={title} />
{:else}
	<span>{title}</span>
{/if}
