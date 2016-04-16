app.controller("mainCtrl", function($state, $scope){
  var menuVisible = false;
  var menu = document.getElementsByClassName('navigation-bar')[0];
  var logo = document.getElementsByClassName('logo')[0];
  logo.addEventListener('click', handleMenu)
  
  onresize = function(){
    menu.className = 'navigation-bar';
    menuVisible = false;
  }

  function handleMenu(){
    menuVisible = !menuVisible;
    menu.className = menuVisible ? "navigation-bar menu-visible" : 'navigation-bar';
  }

  $scope.changeScreen = function(page){
    handleMenu();
    console.log(page)
    $state.go(page);
  }

  $scope.services = data;
  
})