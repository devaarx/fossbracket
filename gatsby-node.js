const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post-template.js`);
  const tagPage = path.resolve(`./src/templates/tag-template.js`);
  const categoryPage = path.resolve(`./src/templates/category-template.js`);

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // create individual blog page
  const posts = result.data.postsRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    });
  });

  // create tag page
  const tags = result.data.tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagPage,
      context: {
        tag: tag.fieldValue
      }
    });
  });

  // create category page
  const categories = result.data.categoriesGroup.group;

  categories.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: categoryPage,
      context: {
        category: category.fieldValue
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

// FIX: warn chunk styles [mini-css-extract-plugin] Conflicting order
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
