# markdown-blog
A blog powered by markdown. 

This mini project was completed over a weekend. Inspired by a project that I came across on YouTube.

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

1. __Add a delete/archive confirmation modal/popup__ ✔️
    - There is no confirmation so accidentally deleting something makes it unrecoverable ✔️
    - Another way is to add an isDeleted column which would only soft delete, similar to the archive function ❌️
2. __Loading spinner__ ✔️
    - In production, data may take a while to come back ✔️
    - I have also made this before so it wouldn't be as big of an undertaking compared to other improvements ✔️
3. __Add pagination__
    - This would improve loadiing time by reducing the amount of data being transferred
4. __Generally follow DRY principles better than current implementation__
    - There are a lot of repeated code-blocks that could, with a little bit more work, be eliminated
    - Componentise commonly used codeblocks, which would further utilise Vue to its full potential
5. __Add image upload__
    - While the blog posts look really good with the ability to parse markdown, images would really take the cake and make blog posts feel extremely custom
    - This may introduce some extra complexity as images will need to be stored somewhere to serve to users
    - Security is an issue here as it may open up some vulnerabilities in the system, more research needed

Overall I think I have done a pretty good job at maintaining structure as well as trying to incorperate good practice/principles along the way. However, with the short timeframe that I set myself to get a so-called 'MVP' up and running it is pretty clear that there are some definite improvements that could be made. If I dedicate some more time to this mini project I think these issues would be ironed out in a few days. As with all things though, I thought it would be best left in a usable state so that when I come to pick this up again in the future, I'll have a good starting point to work with. 

