import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://saif-runtime.github.io',
  integrations: [
    starlight({
      title: 'Saif',
      components: { SiteTitle: './src/components/SiteTitle.astro' },
      markdown: { processedDirs: ['./src/docs'] },
      customCss: ['./src/styles/docs.css'],
      expressiveCode: { themes: ['github-light'] },
      logo: { src: './public/assets/icon.png', alt: '' },
      favicon: '/assets/icon.png',
      social: [
        { icon: 'heart', label: 'Support Saif on Ko-fi', href: 'https://ko-fi.com/musa11971' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/saif-runtime/saif-runtime' },
      ],
      sidebar: [
        {
          label: 'Documentation',
          items: [
            'docs',
            'docs/setup',
            'docs/showcase',
            'docs/how-it-works',
            {
              label: 'Multiplayer (SA:MP)',
              items: [
                'docs/multiplayer',
                'docs/multiplayer/using-the-launcher',
                'docs/multiplayer/changing-samp-version',
              ]
            },
            {
              label: 'Modding',
              items: [
                'docs/modding',
                'docs/modding/supported-mods',
              ]
            },
          ],
        },
        'docs/disclaimer',
        {
          label: 'Report an issue ↗',
          link: 'https://github.com/saif-runtime/saif-runtime/issues/new/choose',
          attrs: { target: '_blank', rel: 'noopener' },
        },
        {
          label: 'Support the project ♥',
          link: 'https://ko-fi.com/musa11971',
          attrs: { target: '_blank', rel: 'noopener' },
        },
      ],
    }),
  ],
});
