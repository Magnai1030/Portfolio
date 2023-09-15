<script lang="ts">
	export let logo: null | any;
</script>

<a class="flex justify-center place-items-center group" href="/">
	{#if logo === null}
		<div class="bg-neatralMedium h-40 w-40 rounded-sm" />
	{:else}
		<div class="h-40 w-40 rounded-sm group-hover:rotate-45 group-hover:scale-150 transition-transform">
			<img src={logo} alt={'source'} class="w-full h-full object-cover rounded-sm" />
		</div>
	{/if}

	<p class="text-black text-md font-medium ml-2 hidden sm:flex">Batmagnai Munkhnasan</p>
</a>
