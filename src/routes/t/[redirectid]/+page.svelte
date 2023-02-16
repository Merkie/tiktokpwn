<script>
	import { onMount } from 'svelte';
	export let data;
	const { redirect } = data;

	onMount(() => {
		window.location.href = redirect;
	});
</script>
