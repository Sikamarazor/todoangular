angular.module('app',['ui.router','app.controllers','app.services'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.when("","/todos");

    $stateProvider
    .state('todos',{
        url:"/todos",
        templateUrl: "/templates/todos.html",
        controller: "todosCtrl"
    })
    

}])
.constant('_',window._)