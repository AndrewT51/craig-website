app.config(["$urlRouterProvider", "$stateProvider",($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {  
    url: "/",
    templateUrl: "./src/templates/home.html",
    controller: 'mainCtrl'
  })

  .state('other',{
    url: "/other",
    templateUrl: "./src/templates/other.html",
    controller: "mainCtrl"
    
  })

  .state('about',{
    url: "/about",
    templateUrl: "./src/templates/about.html",
    controller: "mainCtrl"
  })

  .state('projects',{
    url: "/projects",
    templateUrl: "./src/templates/projects.html",
    controller: "mainCtrl"
  })
}]);