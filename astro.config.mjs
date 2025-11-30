// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
    site: 'https://ehr-wiki.gurge44.eu',
    integrations: [sitemap(), starlight({
        title: 'Endless Host Roles Wiki',
        description: 'Endless Host Roles (EHR) is a host-only Among Us mod with 400+ roles, custom game modes, and full customization.',
        logo: {
            src: '/public/ehr_wiki.png',
            replacesTitle: true
        },
        defaultLocale: 'en',
        locales: {
            'en': {
                label: 'English'
            },
            'zh-CN': {
                label: "简体中文",
            },
            'zh-TW': {
                label: '繁體中文',
            },
            'ru': {
                label: 'Русский',
            },
            'ja': {
                label: '日本語',
            },
            'pt-BR': {
                label: 'Português (Brasil)',
            },
            'es': {
                label: 'Español',
            },
            'de': {
                label: 'Deutsch',
            }
        },
        customCss: ["./src/styles/custom.css",],
        editLink: { baseUrl: 'https://github.com/gurge44/ehr-wiki-deploy/edit/main/src/content/docs/' },
        plugins: [
            starlightSidebarTopics([
                {
                    label: 'First Steps',
                    link: '/guides/installation',
                    icon: 'open-book',
                    items: [
                        { label: "Getting Started", autogenerate: { directory: 'guides' } },
                        { label: "Settings", autogenerate: { directory: 'settings' } }
                    ]
                },
                {
                    label: 'Gamemodes',
                    link: '/gamemodes/bedwars/overview',
                    icon: 'rocket',
                    items: [
                        { label: "Bedwars", autogenerate: { directory: 'gamemodes/bedwars' } },
                        { label: "Mingle", autogenerate: { directory: 'gamemodes/mingle' } }
                    ]
                },
                {
                    label: 'Roles',
                    link: 'roles/overview/crewmate',
                    icon: 'puzzle',
                    items: [
                        { label: 'Overview', autogenerate: { directory: 'roles/overview' }, collapsed: true },
                        {
                            label: 'Crewmate', items: [
                                { label: 'Vanilla', autogenerate: { directory: 'roles/crewmate/vanilla' }, collapsed: true },
                                { label: 'Miscellaneous', autogenerate: { directory: 'roles/crewmate/miscellaneous' }, collapsed: true },
                                { label: 'Investigative', autogenerate: { directory: 'roles/crewmate/investigative' }, collapsed: true },
                                { label: 'Support', autogenerate: { directory: 'roles/crewmate/support' }, collapsed: true },
                                { label: 'Killing', autogenerate: { directory: 'roles/crewmate/killing' }, collapsed: true },
                                { label: 'Power', autogenerate: { directory: 'roles/crewmate/power' }, collapsed: true },
                                { label: 'Chaos', autogenerate: { directory: 'roles/crewmate/chaos' }, collapsed: true },
                            ], collapsed: true
                        },
                        {
                            label: 'Impostor', items: [
                                { label: 'Vanilla', autogenerate: { directory: 'roles/impostor/vanilla' }, collapsed: true },
                                { label: 'Killing', autogenerate: { directory: 'roles/impostor/killing' }, collapsed: true },
                                { label: 'Support', autogenerate: { directory: 'roles/impostor/support' }, collapsed: true },
                                { label: 'Concealing', autogenerate: { directory: 'roles/impostor/concealing' }, collapsed: true },
                                { label: 'Miscellaneous', autogenerate: { directory: 'roles/impostor/miscellaneous' }, collapsed: true },
                                { label: 'Madmate', autogenerate: { directory: 'roles/impostor/madmate' }, collapsed: true },
                            ], collapsed: true
                        },
                        {
                            label: 'Neutral', items: [
                                { label: 'Benign', autogenerate: { directory: 'roles/neutral/benign' }, collapsed: true },
                                { label: 'Evil', autogenerate: { directory: 'roles/neutral/evil' }, collapsed: true },
                                { label: 'Pariah', autogenerate: { directory: 'roles/neutral/pariah' }, collapsed: true },
                                { label: 'Killing', autogenerate: { directory: 'roles/neutral/killing' }, collapsed: true },
                            ], collapsed: true
                        },
                        { label: 'Coven', autogenerate: { directory: 'roles/coven' }, collapsed: true },
                        {
                            label: 'Addons', items: [
                                { label: 'Common', autogenerate: { directory: 'roles/addons/common' }, collapsed: true },
                                { label: 'Crewmate', autogenerate: { directory: 'roles/addons/crewmate' }, collapsed: true },
                                { label: 'Impostor', autogenerate: { directory: 'roles/addons/impostor' }, collapsed: true },
                                { label: 'Betrayal', autogenerate: { directory: 'roles/addons/betrayal' }, collapsed: true },
                                { label: 'Harmful', autogenerate: { directory: 'roles/addons/harmful' }, collapsed: true },
                                { label: 'Helpful', autogenerate: { directory: 'roles/addons/helpful' }, collapsed: true },
                                { label: 'Mixed', autogenerate: { directory: 'roles/addons/mixed' }, collapsed: true },
                            ], collapsed: true
                        },
                        { label: 'Ghost', autogenerate: { directory: 'roles/ghost' }, collapsed: true },
                        { label: 'Settings', autogenerate: { directory: 'roles/settings' } },
                    ]
                },
                {
                    label: 'Tools',
                    link: '/utility-suite/chat-commands',
                    icon: 'setting',
                    items: [
                        { label: 'Utility Suite', autogenerate: { directory: 'utility-suite' } }
                    ]
                },
            ]),
        ],
        social: [
            { icon: 'github', label: 'EHR GitHub', href: 'https://github.com/Gurge44/EndlessHostRoles' },
            { icon: 'discord', label: 'Discord', href: 'https://discord.gg/m2qS2WCDuv' },
            { icon: 'external', label: 'Official Website', href: 'https://gurge44.pythonanywhere.com' },
            { icon: 'pencil', label: 'Wiki GitHub', href: 'https://github.com/Gurge44/ehr-wiki-deploy' },
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
		})],
    redirects: {
        "/": "/en"
    }
});