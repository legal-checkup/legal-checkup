require('dotenv').config()

const makeCredentials = ({
  CLIENT_EMAIL = '',
  PROJECT_ID = '',
  PRIVATE_KEY = '',
  PRIVATE_KEY_ID = ''
}) => ({
  type: 'service_account',
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
  client_email: CLIENT_EMAIL,
  client_id: '',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURI(
    CLIENT_EMAIL
  )}`
})

module.exports = {
  siteMetadata: {
    title: `Legal Checkup`,
    description: `The Legal Checkup application for Community Law`,
    author: `Charles F. Munat <chas@munat.com>`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1LRN4jzIZj54swz7qEJBAcLxgNdBbcglO8I9k9Qvmfdg',
        worksheetTitle: 'Questions',
        credentials: makeCredentials(process.env)
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
