app.controller("navCtrl", function($state, $scope){
  var menuVisible = false;
  var menu = document.getElementsByClassName('navigation-bar')[0];
  var logo = document.getElementsByClassName('logo')[0];
  logo.addEventListener('click', handleMenu)
  
  onresize = function(){
    menu.className = 'navigation-bar';
    menuVisible = false;
  }

  function handleMenu(e){
    e.preventDefault();
    menuVisible = !menuVisible;
    console.log(menuVisible)
    menu.className = menuVisible ? "navigation-bar menu-visible" : 'navigation-bar';
  }

  $scope.changeScreen = function(page){
    console.log(menuVisible)
    menuVisible = !menuVisible;
    menu.className = 'navigation-bar';
    $state.go(page);
  }
})

app.controller('mainCtrl',function($scope){
  $scope.services = data;
})

app.controller("testimonials", function($scope){
  var quoteNumber = 0;
  var testimonial = document.querySelector('.testimonial');
  var author = document.querySelector('.author');
  testimonialBox();

  
  function testimonialBox(){
    fadeIn();
    $scope.test = testimonials[quoteNumber].quote;
    setTimeout(fadeOut,7500);
    // testimonial.textContent = testimonials[quoteNumber].quote;
    // author.textContent = testimonials[quoteNumber].customer;
    quoteNumber === 4 ? quoteNumber = 0 : quoteNumber ++;
  }
  function fadeIn(){
    if(testimonial.classList){
      testimonial.classList.add('opaque');
      author.classList.add('opaque');
    }else{
      testimonial.className += ' opaque';
      author.className += ' opaque';
    }
  }
   function fadeOut(){
    testimonial.className = testimonial.className.replace(' opaque','')
    author.className = author.className.replace(' opaque','')
  }

  setInterval(testimonialBox,10000);

})