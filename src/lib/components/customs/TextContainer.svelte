<script lang="ts">
	import type { HomeText } from '$lib/types';
	export let text: string | HomeText[];
</script>

<div
	class="flex w-full border-primary p-4 rounded-md px-20 justify-center place-items-center bg-white"
>
	{#if Array.isArray(text)}
		<div class="flex w-full flex-col">
			{#each text as item}
				<p class="font-sans text-base text-black font-normal py-1">
					<b class="text-lg text-violet font-bold">{item.first}</b>{' '}{item.last}
				</p>
			{/each}
		</div>
	{:else}
		<p class="font-sans text-base text-black font-normal">{text}</p>
	{/if}
</div>
