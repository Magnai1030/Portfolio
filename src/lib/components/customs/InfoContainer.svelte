<script lang="ts">
	import type { HomeText } from '$lib/types';
	import TextContainer from './TextContainer.svelte';
	type Props = {
		title: string;
		text: string | HomeText[];
	};
	export let data: Props;
</script>

<div class="flex w-full flex-col mt-5">
	<p class="font-sans text-lg text-black font-normal mb-5">{data.title}</p>
	<TextContainer text={data.text} />
</div>
