<script lang="ts">
	export let state: boolean;
	import { createEventDispatcher } from 'svelte';
	import moon from '$lib/assets/icons/ic_moon.svg';
	import sun from '$lib/assets/icons/ic_sun.svg';

	const dispatch = createEventDispatcher();

	const onPress = () => {
		dispatch('onPressMode', !state);
	};
</script>

<button
	class="flex w-48 h-24 rounded-xl bg-neatralMedium justify-center place-items-center"
	on:click={onPress}
>
	{#if state}
		<div class="w-46 h-22 group hover:w-44 hover:h-20 transition-transform bg-white rounded-lg flex justify-center place-items-center">
			<img src={moon} alt={'moon'} class="group-hover:rotate-12 transition-transform" />
		</div>
	{:else}
		<img src={sun} alt={'sun'} class="group-hover:rotate-12 transition-transform" />
	{/if}
</button>
