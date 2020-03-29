# Project based on MEAN STACK Tutorial on Thinkster

[https://thinkster.io/tutorials/mean-stack](https://thinkster.io/tutorials/mean-stack)

The goal of this tutorial is to guide you through the creation of a Reddit/Hacker News clone using the MEAN stack. By completing this tutorial, you will gain a basic understanding of the MEAN stack including building a REST interface with Express.js on top of Node.js and using that interface to perform CRUD operations on a database via an AngularJS frontend.

## Why MEAN Stack?

The acronym "MEAN" stands for "[MongoDB](http://www.mongodb.org/)  [Express.js](http://expressjs.com/)  [AngularJS](https://angularjs.org/)  [Node.js](http://nodejs.org/)" and represents a group of technologies which are known to synergize well together. The major benefit of the MEAN stack is that it's extremely quick to prototype with. Node.js allows you to use Javascript on the backend as well as the frontend which can save you from having to learn a separate language. In addition, the  [NoSQL](http://www.mongodb.com/nosql-explained)  nature of MongoDB allows you to quickly change and alter the data layer without having to worry about migrations, which is a very valuable attribute when you're trying to build a product without clear specifications. Finally, these technologies have a lot of community support behind them so finding answers to questions or hiring help is going to be much easier using these technologies.

## Prerequisites

This course assumes knowledge of programming and at least basic knowledge of JavaScript. In addition, you should be comfortable with basic web application concepts including  [REST](http://en.wikipedia.org/wiki/Representational_state_transfer)  and  [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete). Before you begin, you will also need to have Node.js and MongoDB already installed. Because you will need to install various packages for Node.js, you should follow  [these installation instructions](https://nodejs.org/en/download/package-manager/)  which use  [npm](https://www.npmjs.org/). Installation instructions for MongoDB can be found  [on the Mongo website](http://docs.mongodb.org/manual/installation/). This tutorial will be based on AngularJS v1.5.7, Node.js v7.2.0 and MongoDB v3.4.0.

## Project Specifications

Before beginning work on any project, it's usually a good idea to know what you're building. Below is a basic list of things we want our users to be able to do:

-   Create new posts
-   View all posts ordered by upvotes
-   Add comments about a given post
-   View comments for a given post
-   Upvote posts and comments

In addition to technologies that make up MEAN, we're going to enlist the help of several other libraries to help us achieve our goals:

-   [Mongoose.js](http://mongoosejs.com/)  for adding structure to MongoDB
-   [Angular ui-router](https://github.com/angular-ui/ui-router)  for client-side routing
-   [Twitter Bootstrap](http://getbootstrap.com/)  for some quick styling
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NTk5NTUwMDFdfQ==
-->