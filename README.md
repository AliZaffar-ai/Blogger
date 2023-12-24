Building a blogger in React. We use a Realtime database from the Firebase to maintain the data regarding users and blogs.

The SPA (Single Page Application) have a Navigation menu. When the user is logged in, the Navigation menu contain links to Login/Register, then it allow user to Add Blog Post, View Blog Posts, Search Blog Posts, and Logout.

The “Add Blog Post” page have a React Controlled Form to handle data. Form have the following input fields: Post Title, Post Body, Post Date/Time. The author of the Post will be the logged in user.

View “Blog Posts” page show all the blog posts posted by any author. It also give an option to view the blog posts of the logged in user. The “Search Blog Posts” allow the user to search by providing any keywords.
