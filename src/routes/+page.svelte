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

<section class="p-20 sm:p-40 md:p-60 flex flex-col justify-center place-items-center w-full">
	<TextContainer text={home.greeting} />
	<div class="py-5 mt-5 flex flex-col place-items-center">
		<p class="font-serif text-xl text-black font-medium text-center">{common.full_name}</p>
		<p class="font-sans text-lg text-black font-normal text-center">{common.position}</p>
	</div>
	<div class="flex flex-col">
		{#each home.introduction as item}
			<InfoContainer data={item} />
		{/each}
	</div>
</section>
