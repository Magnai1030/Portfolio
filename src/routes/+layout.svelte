<script lang="ts">
	import '../app.css';
	import Header from '$lib/layouts/Header.svelte';
	import Footer from '$lib/layouts/Footer.svelte';
	import ModelContainer from '$lib/components/containers/Layout/ModelContainer.svelte';
</script>

<div class="flex flex-col place-items-center px-5 pt-5 md:pt-56">
	<main
		class="flex flex-col w-full md:w-customFull rounded-xxl bg-neatralLight border-primary place-items-center"
	>
		<Header />
		<ModelContainer />
		<slot />
	</main>
	<Footer />
</div>
