(function () {
    'use strict'
    //module initilization
    angular.module("vehicleApp", ["home","login", "register", "ui.router", "vehicles"  ])
        //code goes here.our 
        //consuming the modeule
    
        .config(["$stateProvider","$locationProvider","$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {
          
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("register"); 
            
            var basePath = "app/templates/";
            var homeObj = {
                templateUrl: basePath + "home.html",
              url: "/home"
                
            };
            var vehiclesObj = {
                templateUrl: basePath + "vehicles.html",
                controller:"vehicleCtrl",
                url: "/vehicle"
            };
            var registerObj = {
                templateUrl: basePath + "register.html",
                controller:"registerCtrl",
                url: "/register"
            };
            var loginObj = {
                templateUrl: basePath + "login.html",
                url: "/login"
            };
             
            
            $stateProvider.state("home", homeObj);
            $stateProvider.state("vehicles", vehiclesObj);
            $stateProvider.state("login", loginObj);
            $stateProvider.state("register", registerObj);
                    
           
     }]);
})();