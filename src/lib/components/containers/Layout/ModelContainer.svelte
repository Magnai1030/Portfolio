<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { onMount } from 'svelte';

	let width = 1;
	let height = 1;
	let depth = 1;
	let spin = 0;
	// let time = 0;

	// let model: THREE.Group

	// onMount(async () => {
	// 	model = (await new GLTFLoader().loadAsync('https://dumpbucketo.s3.ap-southeast-1.amazonaws.com/horse.glb')).animations

	// })
	// const clock = new THREE.Clock();
	// SC.onFrame(() => {
	// 	// spin += 0.01;
	// 	let delta = clock.getDelta();
	// 	time += 1 * delta;
	// });

	function loadGLTFModel() {
		const loader = new GLTFLoader();
		return loader.loadAsync('https://dumpbucketo.s3.ap-southeast-1.amazonaws.com/horse.glb');
	}

	let model: GLTF;
	let time = 0;

	onMount(async () => {
		loadGLTFModel().then((modelData) => {
			model = modelData;
		});
	});

	const clock = new THREE.Clock();
	SC.onFrame(() => {
		let delta = clock.getDelta();
		time += 1 * delta;
	});
</script>

<section class="flex w-full relative h-auto">
	<section class="flex w-full relative h-96">
		​<SC.Canvas antialias background={new THREE.Color('#FAF7F5')}>
			<!-- <SC.Mesh
				geometry={new THREE.BoxGeometry()}
				material={new THREE.MeshStandardMaterial({ color: 0xC16E7D })}
				scale={[width, height, depth]}
				rotation={[0, spin, 0]}
			/> -->
			{#if model}
				<SC.Primitive
					object={model.scene}
					position={[0, 0, 0]}
					scale={[width, height, depth]}
					rotation={[0, 0, 0]}
				>
					<SC.Animation clip={model.animations[0]} {time} />
				</SC.Primitive>
			{/if}
			<SC.PerspectiveCamera position={[-600, 200, 200]} />
			<SC.OrbitControls maxPolarAngle={Math.PI * 0.51} />
			<SC.AmbientLight intensity={0.6} />
			<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
		</SC.Canvas>
	</section>
</section>
