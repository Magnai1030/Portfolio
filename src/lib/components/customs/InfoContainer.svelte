<script>
	import TextContainer from './TextContainer.svelte';

	export let data = {
		title: '',
		text: ''
	};
</script>

<div class="flex w-full flex-col mt-5">
	<p class="font-sans text-md text-black font-normal mb-5">{data.title}</p>
	<TextContainer text={data.text} />
</div>
