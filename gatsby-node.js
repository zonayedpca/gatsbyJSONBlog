const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.js');
  return new Promise((resolve, reject) => {
    graphql(`
      query queryTitle {
        allDataJson {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(res => {
      if(res.errors) {
        return Promise.reject(res.errors);
      }
      res.data.allDataJson.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.id}/`,
          component: postTemplate,
          context: {
            id: `${node.id}`
          }
        })
        resolve();
      })
    })
  });
}
