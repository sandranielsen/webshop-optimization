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
        connectionString: process.env.MONGODB_URL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MagoMade`,
        short_name: `MagoMade`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#FF5802`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/guides/*`],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
  ],
};
