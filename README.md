<div align="center">

# EHR Wiki

### Official Documentation for Endless Host Roles

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-ehr--wiki.gurge44.eu-blue?style=for-the-badge)](https://ehr-wiki.gurge44.eu)
[![GitHub](https://img.shields.io/badge/GitHub-EHR_Mod-181717?style=for-the-badge&logo=github)](https://github.com/Gurge44/EndlessHostRoles)
[![Discord](https://img.shields.io/badge/Discord-Join_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/ehr)

**Comprehensive documentation for the largest Host-Only Among Us mod with 450+ roles, 16 game modes and Endless customisation**

<img src="./public/ehr_wiki.png" alt="EHR Wiki Preview" width="600">

---

[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![Starlight](https://img.shields.io/badge/Theme-Starlight-8B5CF6?style=flat)](https://starlight.astro.build/)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-BSD_4--Clause-green?style=flat)](LICENSE)

</div>

## 🌟 About

This repository powers the **EHR Wiki** - a comprehensive documentation site for [Endless Host Roles](https://github.com/Gurge44/EndlessHostRoles). Built with modern web technologies, it provides:

- **Detailed Guides** — Installation, setup, and gameplay tutorials
- **Role Encyclopedia** — Complete descriptions of 450+ unique roles
- **Command Reference** — Full documentation of chat commands
- **Configuration Docs** — In-depth settings and customization options
- **Game Mode Guides** — Strategies for all 16 game modes

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="33%">
<img src="https://astro.build/assets/press/astro-icon-light.svg" width="48" height="48" alt="Astro">
<br><strong>Astro</strong>
<br><sub>Web Framework</sub>
</td>
<td align="center" width="33%">
<img src="https://starlight.astro.build/favicon.svg" width="48" height="48" alt="Starlight">
<br><strong>Starlight</strong>
<br><sub>Docs Theme</sub>
</td>
<td align="center" width="33%">
<img src="https://www.netlify.com/v3/img/components/logomark.png" width="48" height="48" alt="Netlify">
<br><strong>Netlify</strong>
<br><sub>Hosting</sub>
</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat&logo=npm&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-optional-F69220?style=flat&logo=pnpm&logoColor=white)

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/Gurge44/ehr-wiki.git
cd ehr-wiki

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
# Build the site
npm run build

# Preview production build locally
npm run preview
```

## 📂 Project Structure

```
ehr-wiki-deploy/
│
├── public/              # Static assets (images, icons, fonts)
│   └── ehr_wiki.png
│
├── src/
│   ├── content/
│   │   ├── docs/       # Documentation pages (Markdown/MDX)
│   │   │   ├── guides/
│   │   │   ├── roles/
│   │   │   ├── settings/
│   │   │   └── ...
│   │   └── config.ts   # Starlight configuration
│   │
│   └── assets/         # Optimized images & assets
│
├── astro.config.mjs     # Astro configuration
├── package.json
└── README.md
```

## 🤝 Contributing

We love contributions! Whether you're fixing typos, adding new guides, or improving existing documentation, your help is appreciated.

### Documentation Updates

1. **Fork** this repository
2. **Create** a new branch
   ```bash
   git checkout -b improve-docs
   ```
3. **Edit** the relevant `.md` or `.mdx` files in `src/content/docs/`
4. **Commit** your changes
   ```bash
   git commit -m 'Update role descriptions'
   ```
5. **Push** to your branch
   ```bash
   git push origin improve-docs
   ```
6. **Open** a Pull Request

### Adding New Pages

Simply create new `.md` files in the appropriate directory under `src/content/docs/`. Starlight will automatically:
- Add them to the navigation
- Generate the sidebar
- Handle routing

### Reporting Issues

Found a problem? [Open an issue](https://github.com/Gurge44/EndlessHostRoles/issues) and include:
- What's wrong or outdated
- Which page it's on
- Suggested correction (if applicable)

## 🚀 Deployment

The site is automatically deployed to **Netlify** when changes are pushed to the `main` branch.

[![Netlify Status](https://api.netlify.com/api/v1/badges/358f73db-0c1f-4dd0-aefa-5939a3736e86/deploy-status)](https://app.netlify.com/projects/ehr-wiki/deploys)

## 📜 License

```
Copyright (c) 2025, Gurge44
Licensed under the BSD 4-Clause License
```

See [LICENSE](LICENSE) for full details.

## 💖 Support

<div align="center">

**Need help?**

[![Discord](https://img.shields.io/badge/Discord-Get_Help-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/ehr)
[![GitHub Issues](https://img.shields.io/badge/GitHub-Report_Issues-181717?style=for-the-badge&logo=github)](https://github.com/Gurge44/EndlessHostRoles/issues)

---

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by the EHR Community

</div>
