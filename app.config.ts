// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'The Digital Catechism',
    description: 'Open-source Simplified Catechism',
    image: '',
    socials: {
      twitter: 'ki5ibd',
      github: 'mhackersu/thedc.com',
    },
    github: {
      branch: 'main',
      repo: 'thedc.com',
      owner: 'mhackersu',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'la:cross',
        text: 'Runs on NuxtJS',
        href: 'https://nuxt.com',
      }
    }
  }
})
