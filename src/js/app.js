// sample angular code

var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope){
  $scope.FavColor = "Red";
  $scope.secondsInACentury = 3600*24*365*100;
  $scope.date = new Date();
})

app.controller("MadLibs", function($scope){
  $scope.boyName="";
  $scope.adjective="";
  $scope.noun1="";
  $scope.noun2="";
  $scope.insect="";
  $scope.noun3="";
  $scope.verb="";
})
