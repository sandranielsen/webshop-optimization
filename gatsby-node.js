const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            id
            title
            handle
            collections {
              handle
              title
              metafields {
                id
                key
                value
              }
            }
            variants {
              shopifyId
            }
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
            }
            description
            featuredImage {
              src
              altText
            }
            vendor
            media {
              preview {
                image {
                  src
                  altText
                }
              }
            }
          }
        }
      }
    }
  `);

  // Iterates over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.jsx`),
      context: {
        product: node,
        // recommendation: result.data.allShopifyProduct.edges
      },
    });
  });


  // Query for collections in Shopify
  const collections = await graphql(`
    query {
      allShopifyCollection(sort: { fields: [title] }) {
        edges {
          node {
            id
            title
            handle
            products {
              title
              handle
              featuredImage {
                src
                altText
              }
              vendor
              media {
                preview {
                  image {
                    src
                    altText
                  }
                }
              }
              shopifyId
              description
              variants {
                shopifyId
              }
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
  `);

  collections.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/collection/${node.handle}`,
      component: path.resolve(`./src/templates/collection.jsx`),
      context: {
        collection: node,
        productCount: node.products.length,
      },
    });
  });
};



  // Query for blog in Shopify
//   const blog = await graphql(`
//   query {
//       allShopifyBlog {
//         edges {
//           node {
//             id
//             title
//             url
//           }
//         }
//       }
//     }
// `);
  
//   blog.data.allShopifyBlog.edges.forEach(({ node }) => {
//     createPage({
//       path: `/blog/${node.handle}`,
//       component: path.resolve(`./src/templates/article.js`),
//       context: {
//         blog: node,
//       },
//     });
//   });