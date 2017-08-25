/**
 * Created by Administrator on 2017/2/14.
 */
angular.module('demoForNotify')
.directive('unorderedList',function(){
 
 return function(scope,element,attrs){
  console.log(scope);
  console.log(element);
  console.log(attrs);
   console.log(angular);
   var data = scope[attrs['unorderedList']];
   var propertyExpression = attrs['listProperty'];
  if(angular.isArray(data)){
    var listElem = angular.element('<ul>');
    element.append(listElem);
    for(var i = 0 ; i < data.length ; i++){
      var itemElement = angular.element("<li>")
         .text(scope.$eval(propertyExpression,data[i]));
         listElem.append(itemElement);
    }
  }
}
})
  .controller('defaultCtrl',function($rootScope,$scope){
    console.log("展示");
    console.log($scope);
    $scope.products = [
   {name:'Apples',category:'Fruit',price:1.20,expiry:10},
   {name:'Banane',category:'Fruit',price:1.20,expiry:10},
   {name:'Pears',category:'Fruit',price:1.20,expiry:10},
    ];


  })
  