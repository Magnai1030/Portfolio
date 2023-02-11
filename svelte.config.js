import { adapter } from 'sveltekit-adapter-aws';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'master.d3pe4hc2rs38c5.amplifyapp.com',
			stackName: 'd3pe4hc2rs38c5.amplifyapp.com'
		})
	}
};
