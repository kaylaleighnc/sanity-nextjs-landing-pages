export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9cd8a4e348e31bba20665a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pgu99a5j',
                  apiId: 'b2840c32-3ab1-48ea-8d44-828d84871361'
                },
                {
                  buildHookId: '5e9cd8a57824fa7c7e752a5b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gneqoppv',
                  apiId: '831065c4-bcc3-4148-80a9-b420521fe319'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaylaleighnc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gneqoppv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
