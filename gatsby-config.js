require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.magomade.dk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
  ],
};
