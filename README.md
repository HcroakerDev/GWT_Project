# Angular/Node App
A simple angular and node full stack app. Which consist of a rest-api and an angular app running on a node server.

## Prerequisites
Before starting the server, the database must be setup. The script to create the database table can be found under
`/server/db_scripts/createTable.sql`.

The db connection can be found within the `/server/db_scripts/connection.js` which can be used to create the correct connection.

You can also use the `/server/db_scripts/Export.sql` to create the table and import demo data.

## Getting started
1. `$ cd server`
2. `$ npm install`
3. `$ npm run prod`

## Server Architecture

The server consisted of a node.js rest api using express.
### Routes

`/api` - Entry route for the api

`/api/posts`
- Entry route for the posts

1. `GET` - Paginated Results
- QUERY PARAMS: { 
  page: number - current page,
  limit: number - number of posts per page
},
- RETURNS: {
  total: number - total number of posts,
  results: Post[] - array of results for the current page
}

2. `POST` - Adds a post to the db
- BODY PARAMS: {
  title: string,
  category: string,
  body: string,
  subjectURL?: string,
}
- RETURNS: {
  id: number,
  title: string,
  category: string,
  body: string,
  subjectURL?: string
}

## Client Architecture

The project was split into three catagories:
- Core: Contains Services and other core functionality
- Modules: Contains lazy loaded modules that represent pages
- Shared: Contains Shared components/modules/models/pipes

### Modules

#### Blog Module
A page that shows the latest paginated blog posts.

*Components:*
- Post-List-Component: List of posts
- Post-Item-Component: A post item

### Adding a post
The post adding was controlled using a modal. Within this was a reactive form built using the form build to achieve client side validation.

### UI Library
Angular material was used as the UI library.
