# Lesson 2

Now that we’ve learned how to display lists of information with Angular, it’d really be great if we could have the user add posts. To do this, we first need to add a function to our  `$scope`  variable.

Create a $scope function that will add an object into the posts array:

```
$scope.addPost = function(){
  $scope.posts.push({title: 'A new post!', upvotes: 0});
};

```

When this function is invoked, it will append a new post to our  `$scope.posts`  variable. Now we’re going to have to allow the user to actually execute this function.

Create a button that executes our addPost $scope function using the  [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick)  directive:

```
<button ng-click="addPost()">Post</button>

```

Great, we can now click a button and have a new post show up! Let’s extend this by allowing the user to actually specify what they want the title to be. First, we need to build out the form in HTML and sprinkle it with some Angular Magic.

Create a form below the ng-repeat div that will allow us to enter custom posts:

```
<form ng-submit="addPost()">
  <input type="text" ng-model="title"></input>
  <button type="submit">Post</button>
</form>

```

Here we’ve created a form that encompasses our title text-box and ‘Post’ button. We are also now calling our  `addPost()`  function using the  [ng-submit](https://docs.angularjs.org/api/ng/directive/ngSubmit)  directive, which has the added benefit of the user being able to press the ‘enter’ key to submit the form. Finally, we’re using the  [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel)  directive to bind the contents of the text box to  `$scope`. This will allow our controller to access the contents of the text box using  `$scope.title`.

To accompany the changes to our template, we need to make some tweaks to  `addPost()`.

Have the addPost function retrieve the title entered into our form, which is bound to the $scope variable  `title`, and set  `title`  to blank once it has been added to the posts array:

```
$scope.addPost = function(){
  $scope.posts.push({title: $scope.title, upvotes: 0});
  $scope.title = '';
};

```

When we add a post we are now getting the title from  `$scope.title`, which we then clear after the post has been created. At this point, it makes sense to prevent the user from posting a blank title.

Prevent a user from submitting a post with a blank title by adding the following line to the beginning of  `addPost()`:

```
if(!$scope.title || $scope.title === '') { return; }

```

## Enable Upvoting

Now that we can add some new posts, why don’t we allow a user to upvote existing ones? To get started, lets revisit our  `ng-repeat`  directive.

Next to each post, we need to place a click-able element that will increment the corresponding post’s upvote counter:

```
<div ng-repeat="post in posts | orderBy:'-upvotes'">
  <span ng-click="incrementUpvotes(post)">^</span>
  {{post.title}} - upvotes: {{post.upvotes}}
</div>

```

We’ve now added a  `^`  character inside a  `<span>`  tag that when clicked, calls the  `incrementUpvotes()`  function in our controller, but we don’t have that function in our controller yet!

Define the  `incrementUpvotes()`  function in our controller:

```
$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

```

Notice that for this function we are passing the current instance of  `post`  to the function. This is happening  [by reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)  so when we increment upvotes, it gets automatically reflected back to the HTML page.

## Submitting Links

Ultimately, Flapper News is about sharing links to content, so lets enable users to submit links along with their titles. We’ll start by adding a second text box to our form that a user can use to submit a link. We’ll also add some placeholder text to make it clear which form is which:

Add a link field to our form that is bound to the scope variable  `link`:

```
<form ng-submit="addPost()">
  <input type="text" placeholder="Title" ng-model="title"></input>
  <br>
  <input type="text" placeholder="Link" ng-model="link"></input>
  <br>
  <button type="submit">Post</button>
</form>

```

Next we’re going to want to modify our  `addPost()`  function to include the link (notice that we aren’t going to force the user to submit a link if they don’t want to):

```
$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
  });
  $scope.title = '';
  $scope.link = '';
};

```

Finally we need to modify the  `ng-repeat`  section to make the title a link to the content, but only if a link was specified.

We’ll do this by using a new directive called  [ng-hide](https://docs.angularjs.org/api/ng/directive/ngHide), which hides elements when an  [Angular expression](https://docs.angularjs.org/guide/expression)  evaluates to true.

Use to  `ng-hide`  to hide the linked version of the title if no link exists and correspondingly show the unlinked version:

```
<div ng-repeat="post in posts | orderBy:'-upvotes'">
  <span ng-click="incrementUpvotes(post)">^</span>
  <a ng-show="post.link" href="{{post.link}}">
    {{post.title}}
  </a>
  <span ng-hide="post.link">
    {{post.title}}
  </span>
  - upvotes: {{post.upvotes}}
</div>

```

It is worth noting that  [ng-show](https://docs.angularjs.org/api/ng/directive/ngShow)  is merely the inverse of  `ng-hide`. You can use either one for programmatically displaying or hiding elements.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MjE3NDM4NjldfQ==
-->