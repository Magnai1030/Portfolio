import { adapter } from 'sveltekit-adapter-aws';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
		})
	}
};
