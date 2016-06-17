define([
    
], function () {
    'use strict';
    return ['$scope', '$http', 'MyService', function ($scope, $http, MyService) {

        $scope.toDoList = [];


        /*This is the one way to get data by $http*/
        /*$http.get('../js/controller/data.json').success(function(data){
            $scope.toDoList = data;
            //console.log(data);
        });*/

        /*Another way to get data by using $resourse*/
        $scope.toDoList = MyService.query();

        $scope.add = function (form) {
            $scope.toDoList.push({
                text: form.newText,
                done: false
            });
            $scope.newText = '';
        };
    }]
});