<script context="module" lang="ts">
	const messages: string[] = [
		'Ehm. Joa. Du auch hier?',
		'Och neeeeeeee.',
		'Ngl. Schon peinlich.',
		'Das ist jetzt akward.',
		'Ein- Fahrrad? Oh. Doch nur ein Fehler.'
	];

	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		let message = messages[Math.floor(Math.random() * messages.length)];

		return {
			props: {
				error,
				status,
				message
			}
		};
	}
</script>

<script lang="ts">
	export let error: Error,
		status: number,
		message: string = '';
</script>

<div class="w-full h-screen flex items-center justify-center">
	<div class="flex flex-col items-center text-center">
		<span class="text-8xl font-bold text-primary">{status}</span>
		<span class="text-4xl font-medium">Ooooooops!</span>
		<span class="text-2xl text-base-400 mt-1">{message}</span>
		<code class="px-2 py-1 mt-4 rounded-normal bg-base-200 text-base-300">
			Error: {error.message}
		</code>
		<span />
	</div>
</div>
