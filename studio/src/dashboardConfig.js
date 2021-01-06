export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ff5e12662ce8006c7be6397',
                  title: 'Sanity Studio',
                  name: 'site-koalita-studio',
                  apiId: '91f7dc8f-aa0f-4609-8082-60f5183dab08'
                },
                {
                  buildHookId: '5ff5e126bd77652d5b45cffe',
                  title: 'Blog Website',
                  name: 'site-koalita',
                  apiId: 'd614e3e8-d488-4768-a677-3b6ecf00b278'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koalita-corsica/site.koalita',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://site-koalita.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
