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
		<div class="w-46 h-22 bg-white rounded-lg flex justify-center place-items-center">
			<img src={sun} alt={'sun'} />
		</div>
	{:else}
		<img src={moon} alt={'moon'} />
	{/if}
</button>
