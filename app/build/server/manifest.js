const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dimension.jpg","fallback.png","favicon.png","global.css","logo.png","PeoplePlaceholder.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.31c8ea12.js","app":"_app/immutable/entry/app.0c7105c8.js","imports":["_app/immutable/entry/start.31c8ea12.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.0c7105c8.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-5d27d090.js')),
			__memo(() => import('./chunks/1-aae4180d.js')),
			__memo(() => import('./chunks/2-6dbf2a45.js')),
			__memo(() => import('./chunks/3-3df55e73.js')),
			__memo(() => import('./chunks/4-74076fca.js')),
			__memo(() => import('./chunks/5-53db4f12.js')),
			__memo(() => import('./chunks/6-c590b88e.js')),
			__memo(() => import('./chunks/7-86fc5ffd.js')),
			__memo(() => import('./chunks/8-aa7a5754.js')),
			__memo(() => import('./chunks/9-55231ab6.js')),
			__memo(() => import('./chunks/10-573e3ff6.js')),
			__memo(() => import('./chunks/11-c392bd0a.js')),
			__memo(() => import('./chunks/12-3bbee2bd.js')),
			__memo(() => import('./chunks/13-416d44c3.js')),
			__memo(() => import('./chunks/14-2c2b90a3.js')),
			__memo(() => import('./chunks/15-9cb1e8a3.js')),
			__memo(() => import('./chunks/16-23475f95.js'))
		],
		routes: [
			{
				id: "/(main)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(main)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/edit/add",
				pattern: /^\/edit\/add\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/edit/cartas",
				pattern: /^\/edit\/cartas\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/edit/personas",
				pattern: /^\/edit\/personas\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/edit/personas/[id]",
				pattern: /^\/edit\/personas\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/edit/[id]",
				pattern: /^\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(main)/eventos",
				pattern: /^\/eventos\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(main)/proyectos",
				pattern: /^\/proyectos\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(main)/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
