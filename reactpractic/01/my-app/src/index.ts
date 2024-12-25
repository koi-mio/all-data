/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		console.log(request.url);
		console.log('----------------***************---------------');
		// var uri = request.url.replace(/^https:\/\/.*?\//gi, '/');
		// console.log(uri);

		if (request.method === 'GET') {
			// if (uri === '/users') {
			// 	return new Response('Hello, users!', {
			// 		headers: {
			// 			'Content-Type': 'text/plain',
			// 		},
			// 	});
			// 	}
			return new Response('you sent a get request Hello, World!');
		} else {
			return Response.json({
				message: 'you did not  sent a request',
			});
		}
	},
} satisfies ExportedHandler<Env>;
