# GWT_Project

## Prerequisites
Before starting the server, the database must be setup. The script to create the database table can be found under `/server/db_scripts/createTable.sql`.

The db connection can be found within the `/server/db_scripts/connection.js` which can be used to create the correct connection.

You can also use the `/server/db_scripts/Export.sql` to create the table and import demo data.

## Getting started
1. `$ cd server`
2. `$ npm install`
3. `$ npm run prod`

## What was completed
All tasks were completed, however the only tasks which is thought could have been done better was:
- Preventing SQL injections: Could have done better custom sanitization. Also could have used a library like sequalize which would help prevent injections.

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
