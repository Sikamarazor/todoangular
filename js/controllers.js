angular.module('app.controllers',[])

.controller('todosCtrl', function(todosSev,$scope,$window,_){
    var todo = [{
        task: "Read tutorials",
        isCompleted: true
        },{
            task: "Write tutorials",
            isCompleted: false
        },{
            task: "Watch tutorials",
            isCompleted: false
        }]

    $scope.todos = todo;

   // $window.localStorage.setItem('todos',todo)
     
    $scope.addTasks = function(){
        console.log("fffffffffffff");
        if(!$scope.tasks)
        {
            $scope.error = "Enter something";
            $scope.err = false;
        }else
        {
            todo.push({
                task: $scope.tasks,
                isCompleted: false
            });
            console.log(todo);
            $scope.todos = todo;
            $scope.err = true;
        }
        
        $scope.tasks = "";
    };

    $scope.deleteTask = function(index){
        console.log(index);

        $scope.todos.splice(index, 1);
    };

    $scope.inComplete = function(){

       $scope.todos = _.filter($scope.todos,function(todo){
            return !todo.isCompleted;
        });  
    };
    
});