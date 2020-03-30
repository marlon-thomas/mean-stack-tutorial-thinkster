---


---

<hr>
<hr>
<h1 id="lesson-1">Lesson 1</h1>
<blockquote>
<p>Included is a Vagrant configuration file to provision an Ubuntu VM development machine for this project. Change the following variables in the Vagrantfile for your local environment on your host machine:</p>
<ul>
<li>LOGGED_IN_USER</li>
<li>HOST_PATH</li>
<li>HOST_PORT</li>
</ul>
<p>The example Vagrantfile assumes that the project has been cloned as follows:</p>
<p><code>cd /Users/marlon/gitrepos</code></p>
<p>`git clone <a href="mailto:git@github.com">git@github.com</a>:marlon-thomas/mean-stack-tutorial-thinkster.gitTo begin this tutorial, we’re going to start with the Angular side of things. AngularJS is a frontend framework developed by Google with the goal of making single page web applications easier to build, test, and maintain. Throughout this tutorials, we’ll be linking to our  [A Better Way to Learn Angular](<a href="https://thinkster.io/a-better-way-to-learn-angularjs">https://thinkster.io/a-better-way-to-learn-angularjs</a>  guide which can provide supplementary information.Without further ado, let’s jump in…</p>
</blockquote>
<h2 id="getting-startedas-mentioned-before-this-tutorial-will-take-you-through-building-out-a-hacker-newsreddit-clone-which-we’re-going-to-name-“flapper-news”.-to-keep-things-simple-we’re-going-to-kick-things-off-with-two-files.create-two-empty-files-called--index.html--for-writing-the-template-and--app.js--for-defining-our-angularjs-logicto-begin-our--index.html--will-look-like-this">Getting StartedAs mentioned before, this tutorial will take you through building out a Hacker News/Reddit clone, which we’re going to name “Flapper News”. To keep things simple, we’re going to kick things off with two files.Create two empty files called  index.html  (for writing the template) and  <code>app.js</code>  (for defining our AngularJS logic)To begin, our  index.html  will look like this:&gt;</h2>
<p>&lt;head&gt;</p>
<pre><code>&lt;html&gt;
  &lt;head&gt;
    
    title&amp;y Angular App!/title&amp;
    script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"/script    script src="app.js"t;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body ng-app="flapperNews" ng-controller="MainCtrl"
    &amp;div&gt;
      {{test}}
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;

</code></pre>
<p>Our  <code>app.js</code>  is going to look like this:var app = angular.module('flapperNews, []);p&gt;```</p>
<p>app.controller(MainCtrl, [cope’’, func,n(scope′,function(scope){<br>
$scope.test = Hello world!’;<br><br>
}]);</p>
<p>
</p><p>With these several lines of code, we’ve set up a new AngularJS app and created a new controller. You’ll notice that we declare a variable  <code>test</code>  in the controller and display its contents using the AngularJS  <code>{{}}</code>  notation. This is demonstrating one of the most powerful features of AngularJS, which is its two-way data-bindings.If you aren’t familiar with data-binding in AngularJS, read the AngularJS Guide on  &lt;a href="<a href="https://docs.angularjs.org/guide/databinding">two-way data-binding</a></p>
<blockquote>
<p>To run the app:</p>
<ol>
<li>Run the virtual machine using vagrant<br>
<code>$ cd mean-stack-tutorial-thinkster</code><br>
<code>$ vagrant up</code></li>
</ol>
</blockquote>
<blockquote>
<ol start="2">
<li>Browse to  <a href="http://localhost:8080/http://localhost:8080">http://localhost:8080/http://localhost:8080</a> on your host machine</li>
</ol>
</blockquote>
<h2 id="displaying-listsone-thing-that-is-going-to-be-absolutely-fundamental-to-our-app-is-displaying-lists.-fortunately-angular-makes-this-really-easy-using-the--ng-repeathttpsdocs.angularjs.orgapingdirectivengrepeat--directive.to-begin-we’re-going-to-modify-our-controller-to-include-a-new--scope--variable-that-defines-a-list-of-post-titles.-add-the-following-code-inside-the-controller-function-in--app.js">Displaying ListsOne thing that is going to be absolutely fundamental to our app is displaying lists. Fortunately, angular makes this really easy using the  [ng-repeat](<a href="https://docs.angularjs.org/api/ng/directive/ngRepeat">https://docs.angularjs.org/api/ng/directive/ngRepeat</a>  <a href="http://directive.To">directive.To</a> begin, we’re going to modify our controller to include a new  <code>$scope</code>  variable that defines a list of post titles. Add the following code inside the controller function in  <code>app.js</code>:</h2>
<pre><code>$scope.posts = [
  'post 1',
  'post 2',
  'post 3',
  'post 4',
  'post 5'
];

</code></pre>
<p>The  <code>$scope</code>  variable serves as the bridge between Angular controllers and Angular templates. If you want something to be accessible in the template such as a function or variable, bind it to  <code>$scope</code></p>
<p>Now that we have a list of data we want to repeat, let’s use  ng-repeat  to do it. Add the following code to line 8 of index.html, replacing the div that was there before:</p>
<pre><code>&lt;div ng-repeat="post in posts"
  {{post}}
&lt;/div&gt;

</code></pre>
<p>When you refresh the page you should see a list of posts!Now what if we want to display additional information about our posts?  ng-repeat  lets us do that too!Let’s amend our  <code>posts</code>  object to include some additional information we might be interested in displaying like the number of upvotes:$scope.posts = [<br>
{title: ‘post 1’, upvotes: 5},<br>
{title: ‘post 2’, upvotes: 2},<br>
{title: ‘post 3’, upvotes: 15},<br>
{title: ‘post 4’, upvotes: 9},<br>
{title: ‘post 5’, upvotes: 4}<br>
];</p>
<p>Now we change our  ng-repeat  directive to display the new information:</p>
<pre><code>&lt;div ng-repeat="post in posts"
  {{post.title}} - upvotes: {{post.upvotes}}
&lt;/div&gt;

</code></pre>
<p>Of course it is important to order posts by number of upvotes, and we can tap into an  [angular filter](<a href="https://thinkster.io/a-better-way-to-learn-angularjs#filters">https://thinkster.io/a-better-way-to-learn-angularjs#filters</a>  to make it happen.Add a filter to our posts based on the number of upvotes in descending order:</p>
<pre><code>&lt;div ng-repeat="post in posts | orderBy: '-upvotes'"
  {{post.title}} - upvotes: {{post.upvotes}}
&lt;/div&gt;

</code></pre>
<p>AngularJS comes with several  [built in filters](<a href="https://docs.angularjs.org/api/ng/filter">https://docs.angularjs.org/api/ng/filter</a>  but you can also write custom filters tailored to your specific needs.</p>

