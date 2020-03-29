---


---

<h1 id="lesson-2">Lesson 2</h1>
<p>Now that we’ve learned how to display lists of information with Angular, it’d really be great if we could have the user add posts. To do this, we first need to add a function to our  <code>$scope</code>  variable.</p>
<p>Create a $scope function that will add an object into the posts array:</p>
<pre><code>$scope.addPost = function(){
  $scope.posts.push({title: 'A new post!', upvotes: 0});
};

</code></pre>
<p>When this function is invoked, it will append a new post to our  <code>$scope.posts</code>  variable. Now we’re going to have to allow the user to actually execute this function.</p>
<p>Create a button that executes our addPost $scope function using the  <a href="https://docs.angularjs.org/api/ng/directive/ngClick">ng-click</a>  directive:</p>
<pre><code>&lt;button ng-click="addPost()"&gt;Post&lt;/button&gt;

</code></pre>
<p>Great, we can now click a button and have a new post show up! Let’s extend this by allowing the user to actually specify what they want the title to be. First, we need to build out the form in HTML and sprinkle it with some Angular Magic.</p>
<p>Create a form below the ng-repeat div that will allow us to enter custom posts:</p>
<pre><code>&lt;form ng-submit="addPost()"&gt;
  &lt;input type="text" ng-model="title"&gt;&lt;/input&gt;
  &lt;button type="submit"&gt;Post&lt;/button&gt;
&lt;/form&gt;

</code></pre>
<p>Here we’ve created a form that encompasses our title text-box and ‘Post’ button. We are also now calling our  <code>addPost()</code>  function using the  <a href="https://docs.angularjs.org/api/ng/directive/ngSubmit">ng-submit</a>  directive, which has the added benefit of the user being able to press the ‘enter’ key to submit the form. Finally, we’re using the  <a href="https://docs.angularjs.org/api/ng/directive/ngModel">ng-model</a>  directive to bind the contents of the text box to  <code>$scope</code>. This will allow our controller to access the contents of the text box using  <code>$scope.title</code>.</p>
<p>To accompany the changes to our template, we need to make some tweaks to  <code>addPost()</code>.</p>
<p>Have the addPost function retrieve the title entered into our form, which is bound to the $scope variable  <code>title</code>, and set  <code>title</code>  to blank once it has been added to the posts array:</p>
<pre><code>$scope.addPost = function(){
  $scope.posts.push({title: $scope.title, upvotes: 0});
  $scope.title = '';
};

</code></pre>
<p>When we add a post we are now getting the title from  <code>$scope.title</code>, which we then clear after the post has been created. At this point, it makes sense to prevent the user from posting a blank title.</p>
<p>Prevent a user from submitting a post with a blank title by adding the following line to the beginning of  <code>addPost()</code>:</p>
<pre><code>if(!$scope.title || $scope.title === '') { return; }

</code></pre>
<h2 id="enable-upvoting">Enable Upvoting</h2>
<p>Now that we can add some new posts, why don’t we allow a user to upvote existing ones? To get started, lets revisit our  <code>ng-repeat</code>  directive.</p>
<p>Next to each post, we need to place a click-able element that will increment the corresponding post’s upvote counter:</p>
<pre><code>&lt;div ng-repeat="post in posts | orderBy:'-upvotes'"&gt;
  &lt;span ng-click="incrementUpvotes(post)"&gt;^&lt;/span&gt;
  {{post.title}} - upvotes: {{post.upvotes}}
&lt;/div&gt;

</code></pre>
<p>We’ve now added a  <code>^</code>  character inside a  <code>&lt;span&gt;</code>  tag that when clicked, calls the  <code>incrementUpvotes()</code>  function in our controller, but we don’t have that function in our controller yet!</p>
<p>Define the  <code>incrementUpvotes()</code>  function in our controller:</p>
<pre><code>$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

</code></pre>
<p>Notice that for this function we are passing the current instance of  <code>post</code>  to the function. This is happening  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects">by reference</a>  so when we increment upvotes, it gets automatically reflected back to the HTML page.</p>
<h2 id="submitting-links">Submitting Links</h2>
<p>Ultimately, Flapper News is about sharing links to content, so lets enable users to submit links along with their titles. We’ll start by adding a second text box to our form that a user can use to submit a link. We’ll also add some placeholder text to make it clear which form is which:</p>
<p>Add a link field to our form that is bound to the scope variable  <code>link</code>:</p>
<pre><code>&lt;form ng-submit="addPost()"&gt;
  &lt;input type="text" placeholder="Title" ng-model="title"&gt;&lt;/input&gt;
  &lt;br&gt;
  &lt;input type="text" placeholder="Link" ng-model="link"&gt;&lt;/input&gt;
  &lt;br&gt;
  &lt;button type="submit"&gt;Post&lt;/button&gt;
&lt;/form&gt;

</code></pre>
<p>Next we’re going to want to modify our  <code>addPost()</code>  function to include the link (notice that we aren’t going to force the user to submit a link if they don’t want to):</p>
<pre><code>$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
  });
  $scope.title = '';
  $scope.link = '';
};

</code></pre>
<p>Finally we need to modify the  <code>ng-repeat</code>  section to make the title a link to the content, but only if a link was specified.</p>
<p>We’ll do this by using a new directive called  <a href="https://docs.angularjs.org/api/ng/directive/ngHide">ng-hide</a>, which hides elements when an  <a href="https://docs.angularjs.org/guide/expression">Angular expression</a>  evaluates to true.</p>
<p>Use to  <code>ng-hide</code>  to hide the linked version of the title if no link exists and correspondingly show the unlinked version:</p>
<pre><code>&lt;div ng-repeat="post in posts | orderBy:'-upvotes'"&gt;
  &lt;span ng-click="incrementUpvotes(post)"&gt;^&lt;/span&gt;
  &lt;a ng-show="post.link" href="{{post.link}}"&gt;
    {{post.title}}
  &lt;/a&gt;
  &lt;span ng-hide="post.link"&gt;
    {{post.title}}
  &lt;/span&gt;
  - upvotes: {{post.upvotes}}
&lt;/div&gt;

</code></pre>
<p>It is worth noting that  <a href="https://docs.angularjs.org/api/ng/directive/ngShow">ng-show</a>  is merely the inverse of  <code>ng-hide</code>. You can use either one for programmatically displaying or hiding elements.</p>

