Basic Typescript + Express + MySQL Rest Server

# Getting Started

Install the required dependencies using: 
```
yarn
```

In order to make it work you must change some variables at:
```
/db/database.ts
```
Also you need to create a .env file an specify the variable `PORT` (8000 by default).


## Dev Environment: 
After execute the following command a dist directory will be created at the root of the project which will contain all compiled javascript needed in order to run the server.
```
yarn dev
```

## Build for Production:
```
yarn build
```

## Serve after build in your localhost:
```
yarn start
```