import React from 'react';

const showScroll = (arr) => {

  var scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60);
  }

  var isElementInView = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    function loop() {
      arr.forEach(function(el, index) {
        let isLeft = (index % 2 === 0) ? 'leftisVisible' : 'rightIsVisible'
        if (isElementInView(el)) {
          el.classList.add(isLeft);
        } else {
          el.classList.remove(isLeft);
        }
      })
      scroll(loop);
  }
    loop();

};
export default showScroll;