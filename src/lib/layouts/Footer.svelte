<script lang="ts">
	import text from '$lib/constants/text';
	const { common } = text;
</script>

<footer
	id="footer"
	class="flex flex-col w-full md:w-customFull p-20 sm:p-40 md:p-60 justify-center place-items-start"
>
	<p class="font-sans text-lg text-black font-normal">{common.footer.title}</p>
	<div class="flex flex-col p-5">
		{#each common.footer.text as item}
			<a
				target="_blank"
				rel="noreferrer"
				href={item.link}
				class="flex w-full flex-row justify-start place-items-center mt-5 cursor-pointer"
			>
				<img src={item.icon} alt={item.text} class="mr-2" />
				<p class="font-sans text-base text-black font-normal">{item.text}</p>
			</a>
		{/each}
	</div>
</footer>
