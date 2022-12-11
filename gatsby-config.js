require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `MagoMade`,
    description: `Modern and beginner-friendly crochet and knit patterns. Download the patterns in both English and Danish.`,
    author: `Sandra Mago`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "MagoMade",
        short_name: "MagoMade",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        display: "standalone",
        icon: "src/images/icon.png",
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: "any",
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: "any",
          },
          {
            src: `/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
            purpose: "maskable",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/guides/`],
      },
    },
  ],
};
