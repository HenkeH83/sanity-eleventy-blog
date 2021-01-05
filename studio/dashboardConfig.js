export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ff4468842809fdf4f71f155',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-x97gwn78',
                  apiId: '580aad52-7825-4072-a25f-5f5eeb024938'
                },
                {
                  buildHookId: '5ff446884f24a0eebad1d9fb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ceod15kn',
                  apiId: '45d46629-d492-4c85-8e39-8b82360c49cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HenkeH83/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ceod15kn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
