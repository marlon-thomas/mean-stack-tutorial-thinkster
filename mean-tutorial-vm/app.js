var app = angular.module('happyNews', []);

app.controller('MainCtrl', [
'$scope', function($scope){
  $scope.test = 'Hello world!';
}
]);

/*
With these several lines of code, we've set up a new AngularJS app and created
a new controller. You'll notice that we declare a variable test in the controller
and display its contents using the AngularJS {{}} notation. This is demonstrating
one of the most powerful features of AngularJS, which is its two-way data-bindings.

https://docs.angularjs.org/guide/databinding
*/
