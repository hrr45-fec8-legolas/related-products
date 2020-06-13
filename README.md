# Good eCom Retail - Sponsored Related Products Component

> Replication of a popular e-commerce site's basic product page. This repo is for a single component - the sponsored related posts carousel.

## Related Projects

  - https://github.com/hrr45-fec8-legolas/single-item-page
  - https://github.com/hrr45-fec8-legolas/item-details
  - https://github.com/hrr45-fec8-legolas/reviews
  - https://github.com/hrr45-fec8-legolas/proxy-legolas-jmaughan

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Technologies Used](#technologies used)
1. [Development](#development)

## Usage

> This component uses mysql for a DBMS. Please ensure that mysql is running and import the schema.sql file, then execute `npm run seed` to seed your database.

- `npm run build` Runs webpack in production mode
- `npm start` Starts server listening on port 3003

Visit http://localhost:3003/?id=[id] to view the related products for product id [id]. (Note: seed file generates product info for product id's 1-100. Visiting any id outside that range or exluding an id in the url parameter will load the message "No product selected.")

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## Technologies Used

- Node.js
- Express
- MySQL
- Axios
- React
- Webpack / Babel
- CSS Modules
- Jest / Enzyme / Puppeteer
- Docker

## Development

- `npm run build-dev` Runs webpack in dev mode
- `npm run server-dev` Starts nodemon listening on port 3003
- `npm run test` Runs jest tests

### Installing Dependencies

From within the root directory:

```sh
npm install
```

