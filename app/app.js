(function () {
    'use strict'
    //module initilization
    angular.module("vehicleApp", ["home","login", "register", "ui.router"])
        //code goes here.our 
        //consuming the modeule
    
        .config(["$stateProvider", function ($stateProvider) {
            var basePath = "app/templates/";
            var homeObj = {
                templateUrl: basePath + "home.html"
            };
            var registerObj = {
                templateUrl: basePath + "register.html"
            };
            var loginObj = {
                templateUrl: basePath + "login.html"
            };
            $stateProvider.state("home", homeObj);
            $stateProvider.state("login", loginObj);
            $stateProvider.state("register", registerObj);
     }]);
})();