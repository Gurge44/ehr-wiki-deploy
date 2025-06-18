// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site:'https://ehr-wiki.netlify.app',
	integrations: [
		starlight({
			title: 'EHR Wiki',
			description: 'Endless Host Roles (EHR) is a host-only Among Us mod with 400+ roles, custom game modes, and full customization.',
			components: {
				SiteTitle: './src/components/overrides/SiteTitle.astro',
			},
			logo: {
				src: '/public/ehr_wiki.png',
				replacesTitle: true
			},
			customCss: ["./src/styles/custom.css",],
			editLink: {baseUrl: 'https://github.com/gurge44/ehr-wiki-deploy/edit/main/src/content/docs/'},
			social: [
				{ icon: 'github', label: 'EHR GitHub', href: 'https://github.com/Gurge44/EndlessHostRoles' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/m2qS2WCDuv' },
				{ icon: 'external', label: 'Official Website', href: 'https://gurge44.pythonanywhere.com' },
				{ icon: 'pencil', label: 'Wiki GitHub', href: 'https://github.com/Gurge44/ehr-wiki-deploy' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'EHR Settings',
					autogenerate: { directory: 'ehr-settings' },
				},
				{
					label: 'Core Concepts',
					autogenerate: { directory: 'core-concepts' },
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
			{
				tag: 'meta',
				attrs: {
				name: "theme-color",
				content: "#deb942"
				}
			},
			{
				tag: 'meta',
				attrs: {
				name: 'twitter:card',
				content: "summary"
				}
				
			}]
		}),
	],
});