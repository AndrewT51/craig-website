app.controller("mainCtrl", function($state, $scope){
  var menuVisible = false;
  var menu = document.getElementsByClassName('navigation-bar')[0];
  var logo = document.getElementsByClassName('logo')[0];
  logo.addEventListener('click', handleMenu)
  function handleMenu(){
    menuVisible = !menuVisible;
    menu.className = menuVisible ? menu.className + " menu-visible" : 'navigation-bar';
  }
  $scope.changeScreen = function(page){
    $state.go(page);
    handleMenu();
  }
  $scope.services = data;
  
})