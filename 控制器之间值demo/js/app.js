/**
 * Created by Administrator on 2017/2/14.
 */
angular.module('demoForNotify')
.directive('unordered-list',function(scope,elment,attrs){
  console.log(scope);
  console.log(element);
   console.log(attrs);
})
  .controller('defaultCtrl',function($rootScope,$scope){
    $scope.products = [
   {name:'Apples',category:'Fruit',price:1.20,expiry:10},
   {name:'Banane',category:'Fruit',price:1.20,expiry:10},
   {name:'Pears',category:'Fruit',price:1.20,expiry:10},
    ];


  })
  