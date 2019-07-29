customerapp.controller("timeline-controller",function($scope,$routeParams){
    console.log("you are inside timeline controller");
    $scope.delivered=false;
    $scope.outForDelivery=false;
    $scope.dispatched=false;
    $scope.shipped=false;
    $scope.received=false;
    $scope.status = $routeParams.orderStatus;
    if($scope.status){
        
        // if($scope.status=="received"){
        //     $scope.outForDelivery=true;
        // }
        if($scope.status=="delivered"){
            $scope.delivered=true;
        }
    }
})