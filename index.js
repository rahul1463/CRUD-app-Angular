//Defining angular module..
var app=angular.module('BookStore',[]);

//Adding Bookscontroller to app module
app.controller('BooksController',function($scope,$http){

//Defining Books Array to Collect Books
  $scope.books=[
    {
      title:'Eloquent Javascript ',
      author:'Margin haverbeka',
      pages:350
    },
    {
      title:'Javascript for Kids ',
      author:' Nick Morgan',
      pages:344
    },
    {
      title:'Javasript : The Good Parts',
      author:'Douglas Crackford',
      pages:500
    }
  ];

  $scope.addBook=function(bookTitle,bookAuthor,bookPages){
    $scope.books.push({title:bookTitle,author:bookAuthor,pages:bookPages});
  };

    $scope.update=function(title,author,pages,key){
    $scope.books[key].title=title;
    $scope.books[key].author=author;
    $scope.books[key].pages=pages;
    $scope.edit=false;
  }

  $scope.delete=function(index){
    $scope.books.splice(index, 1);
  };


});

