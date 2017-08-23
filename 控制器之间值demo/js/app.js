/**
 * Created by Administrator on 2017/2/14.
 */
angular.module('demoForNotify')
  .controller('parentCtrl',function($rootScope,$scope){
     //实现相同控制器之间的值得传递
     $scope.message = "dasfdsasd";
    // $rootScope.message = "hello world";
  //   $scope.message = "hello111";
  $rootScope.click = function(){
     $rootScope.$broadcast('childValue',$scope.message);
  }


  })
  .controller('childCtrl',function($rootScope,$scope){
     $scope.message = "";
     //console.log($rootScope)
     $scope.$on('childValue',function(d,data){
     	console.log("我们现在取到了数据");
     	console.log(data);
     	console.log(d);
     	console.log("999999");
     	$scope.message = data;
     })
  })
  .controller('otherCtrl',function($rootScope,$scope){

      $rootScope.$on('childValue',function(d,data){
         $scope.message = data;

      })
  })