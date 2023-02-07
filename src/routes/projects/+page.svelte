<script lang="ts">
	import InfoContainer from '$lib/components/customs/InfoContainer.svelte';
	import TextContainer from '$lib/components/customs/TextContainer.svelte';
	import text from '$lib/constants/text';
	const { home, common } = text;
</script>

<svelte:head>
	<title>M.Batmagnai</title>
	<meta name="description" content="Batmagnai Munkhnasan portfiolio web site" />
</svelte:head>

<section class="p-20 sm:p-40 md:p-60 flex w-full flex-col justify-center place-items-center">
	<TextContainer text={home.greeting} />
</section>
