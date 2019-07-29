dashboardapp.controller("ChangeStatusTemplate-controller",function($window,$scope,$rootScope,changestatustemplatefactory){
    console.log("you are inside change status template controller");
    var orderId=$rootScope.particularOrderid;
    $scope.ChangeStatus=()=>{
        console.log("pressed",orderId);
        console.log("status is",$scope.status);
        console.log("name is",$scope.status.name);
        let statusObject={
            status:$scope.status.name,
            orderId:orderId
        }
        let promise=changestatustemplatefactory.changeStatus(statusObject);
        console.log("Status object-----",statusObject.orderId);
        console.log("Promise received in controller");
        promise.then(data=>{
          console.log("_________==============")
          console.log("controller then called in change status",data);
        
          $window.location.reload();
         // $scope.data=data.data.data;
         // $scope.objectkeys=Object.keys($scope.data[0]);
      
        },(err)=>{
          console.log("controller error",err);
          $scope.err=err;
        })
       
    }
})