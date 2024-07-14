import { generate } from 'critical';


console.log('Current directory:', process.cwd());

// generate({
// 	inline: true,
// 	base: 'build/',
//   src: 'index.html',
//   target: {
//     html: 'index-critical.html',
//     css: 'critical.css',
//   },
// 	width: 1200,  
//   height: 900,
// 	extract: true,
// })
// 	.then(({ html, css }) => {
// 		console.log('Critical CSS generated successfully');
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

	generate({
		inline: true,
		base: 'build/',
		src: 'index.html',
		css: ['build/static/css/main.4bd2692d.css'],
		width: 1300,
		height: 900,
		target: {
			css: 'critical.css',
			html: 'index-critical.html',
			uncritical: 'uncritical.css',
		},
		extract: true,
		ignore: {
			atrule: ['@font-face'],
			rule: [/some-regexp/],
			decl: (node, value) => /big-image\.png/.test(value),
		},
	}).then(({ html, css }) => {
				console.log('Critical CSS generated successfully');
			})
			.catch(error => {
				console.log(error);
			});