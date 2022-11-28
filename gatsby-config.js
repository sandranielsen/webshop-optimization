require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.magomade.dk`,
    hrefLang: "en",
  },
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: "magomade_blog",
        collection: "guides",
        connectionString: `mongodb+srv://sandramago:LaicaHund2012!@mongodb-cluster-test.qgwtc.mongodb.net/test?retryWrites=true&w=majority`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
  ],
};
