# adas-team-website

The official Ada's Team website.

### Before starting the application

Run `yarn` or `npm install`

### To start the development server (localhost:3000)

Run `yarn start` or `npm run`

### Common Issues

1. Incompatible node-sass version with node

   - Node: v14.16.1
   - Node-sass: v4.14.1

   - Run the following commands:
     ```
     nvm use 14
     npm rebuild node-sass
     ```

2. Issues with installing some node packages (namely, react-google-calendar)
   Happens when running `npm install`
   Error: `Could not resolve dependency: react@"^16.14.0" from @ericz1803/react-google-calendar@4.2.1`

   - Use yarn, run:

     ```
     yarn
     ```

   - Use an older version of npm

     ```
     nvm use 14
     npm install
     ```

   - It's an issue with this specific package, and likely it was not updated

### Deployment

To deploy to GitHub pages, run `yarn deploy` or `npm run deploy`
