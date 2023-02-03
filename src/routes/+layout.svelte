<script>
	import '../app.css';
	import Header from '$lib/layouts/Header.svelte';
	import Footer from '$lib/layouts/Footer.svelte';
	import ModelContainer from '$lib/components/containers/Layout/ModelContainer.svelte';
</script>

<div class="flex flex-col place-items-center px-5">
	<Header />

	<main class="flex flex-col w-full md:w-customFull rounded-lg bg-neatralLight border-primary">
		<ModelContainer />
		<slot />
	</main>
	<Footer />
</div>
