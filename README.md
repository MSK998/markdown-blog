# markdown-blog
A blog powered by markdown. 

This mini project was completed over a weekend. Inspired by a project that I came across on YouTube

# Getting started with this project

1. Start by making sure that you have PostgreSQL installed on your machine.
2. Make sure that a user and database has been created with the following credentials
    - username: `markdown`
    - password: `sdvgvgF0ahpYsYaZSk`
    - database: `markdown_blog`
3. While in the backend directory, run `npm install`
    - Start the backend server with `npx nodemon` while in the backend directory
4. While in the markdown-blog directory which is the frontend files, run `npm install`
    - Start the vue dev server with `npm run serve`
5. Navigate to http://localhost:8080/ to view the webpage

# Todos for future

These are just some of the inital areas, that stick out to me, where improvements can be made.

1. Add a delete/archive confirmation modal/popup
    - There is no confirmation so accidentally deleting something makes it unrecoverable
    - Another way is to add an isDeleted column which would only soft delete, similar to the archive function
3. Loading spinner
    - In production, data may take a while to come back
    - I have also made this before so it wouldn't be as big of an undertaking compared to other improvements
4. Add pagination
    - This would improve loadiing time by reducing the amount of data being transferred
5. Streamline frontend to utilise a more component based structure
    - Currently many of the pages are just views and haven't been broken down into smaller components, not utilising Vue to fullest potential
6. Structure endpoints a little bit better as some are a little bit redundant
    - Mainly the archive endpoints
    - This would potentially mean a rework of the frontend application so it really is a bigger improvement over the others
7. Generally follow DRY principles better than current implementation
    - There are a lot of repeated code-blocks that could, with a little bit more work, be eliminated
8. Add image upload
    - While the blog posts look really good with the ability to parse markdown, images would really take the cake and make blog posts feel extremely custom
    - This may introduce some extra complexity as images will need to be stored somewhere to serve to users
    - Security is an issue here as it may open up some vulnerabilities in the system, more research needed

