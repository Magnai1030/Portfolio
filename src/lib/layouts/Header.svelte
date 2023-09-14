<script lang="ts">
	import github from '$lib/assets/icons/ic_github.svg';
	import LogoContainer from '$lib/components/containers/Layout/LogoContainer.svelte';
	import ModeSwitcher from '$lib/components/customs/ModeSwitcher.svelte';
	import text from '$lib/constants/text';
	import { scrollIntoView } from '$lib/helpers';
	let state = true;
	const onPressMode = ({ detail }: { detail: boolean }) => {
		state = detail;
	};
	const { common } = text;
</script>

<header class="h-auto w-full p-10">
	<div
		class="h-core flex justify-between place-items-center w-full bg-white border-primary rounded-md px-2"
	>
		<div class="flex justify-center place-items-center">
			<LogoContainer logo={common.header.logo} />
			<a class="text-black hover:text-violet text-md font-normal ml-4 sm:ml-8 mr-2 sm:mr-4 transition-all" href="/projects">
				{common.header.projects}
			</a>
			<a
				class="text-black hover:text-violet text-md font-normal mx-2 sm:mx-4"
				href="#footer"
				on:click|preventDefault={scrollIntoView}>{common.header.contact}</a
			>
		</div>
		<div class="flex">
			<a class="mr-2 cursor-pointer hover:scale-110 hover:rotate-12 transition-transform" href="https://github.com/Magnai1030/">
				<img src={github} alt={'source'} />
			</a>

			<ModeSwitcher {state} on:onPressMode={onPressMode} />
		</div>
	</div>
</header>
