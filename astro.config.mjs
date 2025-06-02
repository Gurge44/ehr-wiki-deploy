// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site:'https://ehr-wiki.netlify.app',
	integrations: [
		starlight({
			title: 'EHR Wiki',
			logo: {
				src: '/public/ehr_wiki.png',
				replacesTitle: true
			},
			customCss: ["./src/style/custom.css",],
			editLink: {baseUrl: 'https://github.com/gurge44/ehr-wiki-deploy/edit/main/src/content/docs/'},
			social: [
				{ icon: 'github', label: 'EHR GitHub', href: 'https://github.com/Gurge44/EndlessHostRoles' },
				{ icon: 'pencil', label: 'Wiki GitHub', href: 'https://github.com/Gurge44/ehr-wiki-deploy' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			head: [
			{
				tag: 'meta',
				attrs: {
				name: "og:site_name",
				content: "Endless Host Roles Wiki"
				}
			},
			{
				tag: 'meta',
				attrs: {
				name: "og:image",
				content: "/ehr_logo_simple.png"
				}
			},
			// <meta name="theme-color" content="#fec5d5" />
			{
				tag: 'meta',
				attrs: {
				name: "theme-color",
				content: "#deb942"
				}
			},
			//<meta name="twitter:card" content="summary" />
			{
				tag: 'meta',
				attrs: {
				name: 'twitter:card',
				content: "summary"
				}
			}],
		}),
	],
});
