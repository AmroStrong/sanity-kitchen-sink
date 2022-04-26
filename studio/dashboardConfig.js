export default {
  widgets: [
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
                  buildHookId: '62680ae91cd5ea4873be9095',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vcwgs7jz',
                  apiId: '01e1f3bc-1dcb-4f04-abc2-e54178234c10'
                },
                {
                  buildHookId: '62680aea8e5bc74ecf5ee9e2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-971tqeow',
                  apiId: '9f81ca3f-5839-46ce-9cc0-798386427d63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AmroStrong/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-971tqeow.netlify.app', category: 'apps'}
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
