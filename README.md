
 A Blogging Site Mini Project is a web application designed to allow users to create, publish, and manage their blog posts. Here is a general outline of the features and requirements for such a project:
✨✨💻

# Phase I
Models
Author Model
Blogs Model

Author APIs /authors
Create a author document from request body. Endpoint: BASE_URL/authors
POST /blogs
Create a blog document from request body. Get authorId in request body only.

GET /blogs
Returns all blogs in the collection that aren't deleted and are published
Return the HTTP status 200 if any documents are found. The response structure should be like this
If no documents are found then return an HTTP status 404 with a response like this
Filter blogs list by applying filters. Query param can have any combination of below filters.
By author Id
By category
List of blogs that have a specific tag
List of blogs that have a specific subcategory example of a query url: blogs?filtername=filtervalue&f2=fv2

PUT /blogs/:blogId
Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like this
Return an HTTP status 200 if updated successfully with a body like this
Also make sure in the response you return the updated blog document.

DELETE /blogs/:blogId
Check if the blogId exists( and is not deleted). If it does, mark it deleted and return an HTTP status 200 without any response body.
If the blog document doesn't exist then return an HTTP status of 404 with a body like this
DELETE /blogs?queryParams
Delete blog documents by category, authorid, tag name, subcategory name, unpublished
If the blog document doesn't exist then return an HTTP status of 404 with a body like this


# Phase II
Add authentication and authroisation feature

POST /login
Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId in response body like this
If the credentials are incorrect return a suitable error message with a valid HTTP status code

# Authentication
Add an authorisation implementation for the JWT token that validates the token before every protected endpoint is called. If the validation fails, return a suitable error message with a corresponding HTTP status code
Protected routes are create a blog, edit a blog, get the list of blogs, delete a blog(s)
Set the token, once validated, in the request - x-api-key
Use a middleware for authentication purpose.

# Authorisation
Make sure that only the owner of the blogs is able to edit or delete the blog.
In case of unauthorized access return an appropirate error message.
Testing (Self-evaluation During Development)
To test these apis create a new collection in Postman named Project 1 Blogging
Each api should have a new request in this collection
Each request in the collection should be rightly named. Eg Create author, Create blog, Get blogs etc
Each member of each team should have their tests in running state
Refer below sample


