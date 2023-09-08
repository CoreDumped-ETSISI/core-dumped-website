export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [5];

export const dictionary = {
		"/(main)": [~6,[2],[3]],
		"/(main)/about": [~7,[2],[3]],
		"/admin": [~11,[4]],
		"/edit/add": [~12,[5]],
		"/edit/cartas": [~13,[5]],
		"/edit/personas": [~14,[5]],
		"/edit/personas/[id]": [~15,[5]],
		"/edit/[id]": [~16,[5]],
		"/(main)/eventos": [~8,[2],[3]],
		"/(main)/proyectos": [~9,[2],[3]],
		"/(main)/[id]": [~10,[2],[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';