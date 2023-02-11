import { adapter } from 'sveltekit-adapter-aws';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'master.d3kowqfushzw1f.amplifyapp.com',
			stackName: 'sveltekit-adapter-aws-basic-demo'
		})
	}
};
