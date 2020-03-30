#   Lesson 1

> Included is a Vagrant configuration file to provision an Ubuntu VM development machine for this project. Change the following variables in the Vagrantfile for your local environment on your host machine:
> 
> -   LOGGED_IN_USER
> -   HOST_PATH
> -   HOST_PORT
> 
> The example Vagrantfile assumes that the project has been cloned as follows:
> 
> `cd /Users/marlon/gitrepos`
> 
> `git clone git@github.com:marlon-thomas/mean-stack-tutorial-thinkster.git`

To begin this tutorial, we’re going to start with the Angular side of things. AngularJS is a frontend framework developed by Google with the goal of making single page web applications easier to build, test, and maintain. Throughout this tutorials, we’ll be linking to our  [A Better Way to Learn Angular](https://thinkster.io/a-better-way-to-learn-angularjs)  guide which can provide supplementary information.

Without further ado, let’s jump in…

## Getting Started

As mentioned before, this tutorial will take you through building out a Hacker News/Reddit clone, which we’re going to name “Flapper News”. To keep things simple, we’re going to kick things off with two files.

Create two empty files called  `index.html`  (for writing the template) and  `app.js`  (for defining our AngularJS logic)

To begin, our  `index.html`  will look like this:

```
<html>
  <head>
    <title>My Angular App!</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <script src="app.js"></script>
  </head>
  <body ng-app="flapperNews" ng-controller="MainCtrl">
    <div>
      {{test}}
    </div>
  </body>
</html>

```

Our  `app.js`  is going to look like this:

```
var app = angular.module('flapperNews', []);

```

app.controller(‘MainCtrl’, [  
'scope', function(scope′,function(scope){  
$scope.test = ‘Hello world!’;  
}]);

With these several lines of code, we’ve set up a new AngularJS app and created a new controller. You’ll notice that we declare a variable  `test`  in the controller and display its contents using the AngularJS  `{{}}`  notation. This is demonstrating one of the most powerful features of AngularJS, which is its two-way data-bindings.

If you aren’t familiar with data-binding in AngularJS, read the AngularJS Guide on  [two-way data-binding](https://docs.angularjs.org/guide/databinding)

> To run the app:
> 
> 1.  Run the virtual machine using vagrant  
>     `$ cd mean-stack-tutorial-thinkster`  
>     `$ vagrant up`

> 2.  Browse to  [http://localhost:8080](http://localhost:8080/)  on your host machine

## Displaying Lists

One thing that is going to be absolutely fundamental to our app is displaying lists. Fortunately, angular makes this really easy using the  [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)  directive.

To begin, we’re going to modify our controller to include a new  `$scope`  variable that defines a list of post titles. Add the following code inside the controller function in  `app.js`:

```
$scope.posts = [
  'post 1',
  'post 2',
  'post 3',
  'post 4',
  'post 5'
];

```

The  `$scope`  variable serves as the bridge between Angular controllers and Angular templates. If you want something to be accessible in the template such as a function or variable, bind it to  `$scope`

Now that we have a list of data we want to repeat, let’s use  `ng-repeat`  to do it. Add the following code to line 8 of index.html, replacing the div that was there before:

```
<div ng-repeat="post in posts">
  {{post}}
</div>

```

When you refresh the page you should see a list of posts!

Now what if we want to display additional information about our posts?  `ng-repeat`  lets us do that too!

Let’s amend our  `posts`  object to include some additional information we might be interested in displaying like the number of upvotes:

```
$scope.posts = [
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
];

```

Now we change our  `ng-repeat`  directive to display the new information:

```
<div ng-repeat="post in posts">
  {{post.title}} - upvotes: {{post.upvotes}}
</div>

```

Of course it is important to order posts by number of upvotes, and we can tap into an  [angular filter](https://thinkster.io/a-better-way-to-learn-angularjs#filters)  to make it happen.

Add a filter to our posts based on the number of upvotes in descending order:

```
<div ng-repeat="post in posts | orderBy: '-upvotes'">
  {{post.title}} - upvotes: {{post.upvotes}}
</div>

```

AngularJS comes with several  [built in filters](https://docs.angularjs.org/api/ng/filter)  but you can also write custom filters tailored to your specific needs.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NDI3ODMxODksNzA3OTE1ODYwXX0=
-->