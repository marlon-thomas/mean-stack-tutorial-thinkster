---


---

<h1 id="lesson-1">Lesson 1</h1>
<p>To begin this tutorial, we’re going to start with the Angular side of things. AngularJS is a frontend framework developed by Google with the goal of making single page web applications easier to build, test, and maintain. Throughout this tutorials, we’ll be linking to our  <a href="https://thinkster.io/a-better-way-to-learn-angularjs">A Better Way to Learn Angular</a>  guide which can provide supplementary information.</p>
<p>Without further ado, let’s jump in…</p>
<h2 id="getting-started">Getting Started</h2>
<p>As mentioned before, this tutorial will take you through building out a Hacker News/Reddit clone, which we’re going to name “Flapper News”. To keep things simple, we’re going to kick things off with two files.</p>
<p>Create two empty files called  <code>index.html</code>  (for writing the template) and  <code>app.js</code>  (for defining our AngularJS logic)</p>
<p>To begin, our  <code>index.html</code>  will look like this:</p>
<pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Angular App!&lt;/title&gt;
    &lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"&gt;&lt;/script&gt;
    &lt;script src="app.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body ng-app="flapperNews" ng-controller="MainCtrl"&gt;
    &lt;div&gt;
      {{test}}
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;

</code></pre>
<p>Our  <code>app.js</code>  is going to look like this:</p>
<pre><code>var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

</code></pre>
<p>With these several lines of code, we’ve set up a new AngularJS app and created a new controller. You’ll notice that we declare a variable  <code>test</code>  in the controller and display its contents using the AngularJS  <code>{{}}</code>  notation. This is demonstrating one of the most powerful features of AngularJS, which is its two-way data-bindings.</p>
<p>If you aren’t familiar with data-binding in AngularJS, read the AngularJS Guide on  <a href="https://docs.angularjs.org/guide/databinding">two-way data-binding</a></p>
<h2 id="displaying-lists">Displaying Lists</h2>
<p>One thing that is going to be absolutely fundamental to our app is displaying lists. Fortunately, angular makes this really easy using the  <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat">ng-repeat</a>  directive.</p>
<p>To begin, we’re going to modify our controller to include a new  <code>$scope</code>  variable that defines a list of post titles. Add the following code inside the controller function in  <code>app.js</code>:</p>
<pre><code>$scope.posts = [
  'post 1',
  'post 2',
  'post 3',
  'post 4',
  'post 5'
];

</code></pre>
<p>The  <code>$scope</code>  variable serves as the bridge between Angular controllers and Angular templates. If you want something to be accessible in the template such as a function or variable, bind it to  <code>$scope</code></p>
<p>Now that we have a list of data we want to repeat, let’s use  <code>ng-repeat</code>  to do it. Add the following code to line 8 of index.html, replacing the div that was there before:</p>
<pre><code>&lt;div ng-repeat="post in posts"&gt;
  {{post}}
&lt;/div&gt;

</code></pre>
<p>When you refresh the page you should see a list of posts!</p>
<p>Now what if we want to display additional information about our posts?  <code>ng-repeat</code>  lets us do that too!</p>
<p>Let’s amend our  <code>posts</code>  object to include some additional information we might be interested in displaying like the number of upvotes:</p>
<pre><code>$scope.posts = [
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
];

</code></pre>
<p>Now we change our  <code>ng-repeat</code>  directive to display the new information:</p>
<pre><code>&lt;div ng-repeat="post in posts"&gt;
  {{post.title}} - upvotes: {{post.upvotes}}
&lt;/div&gt;

</code></pre>
<p>Of course it is important to order posts by number of upvotes, and we can tap into an  <a href="https://thinkster.io/a-better-way-to-learn-angularjs#filters">angular filter</a>  to make it happen.</p>
<p>Add a filter to our posts based on the number of upvotes in descending order:</p>
<pre><code>&lt;div ng-repeat="post in posts | orderBy: '-upvotes'"&gt;
  {{post.title}} - upvotes: {{post.upvotes}}
&lt;/div&gt;

</code></pre>
<p>AngularJS comes with several  <a href="https://docs.angularjs.org/api/ng/filter">built in filters</a>  but you can also write custom filters tailored to your specific needs.</p>

