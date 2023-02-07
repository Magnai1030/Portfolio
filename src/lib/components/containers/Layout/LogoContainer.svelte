<script lang="ts">
	export let logo: null | any;
</script>

<a class="flex justify-center place-items-center" href="/">
	{#if logo === null}
		<div class="bg-neatralMedium h-40 w-40 rounded-sm" />
	{:else}
		<div class="bg-neatralMedium h-40 w-40 rounded-sm" />
	{/if}

	<p class="text-black text-md font-medium ml-2 hidden sm:flex">Batmagnai Munkhnasan</p>
</a>
