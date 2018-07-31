AFRAME.registerComponent("render-element-selection", {

  init: function () {
    let el = this.el
    el.addEventListener('mouseenter', function () {
      el.parentNode.removeChild(el);
    });
  },

  remove: function() {
    let menuLayout = document.getElementById('#menu');
    for (let i = 0; i < 5; i++) {
      let element = document.createElement('a-plane');
      element.setAttribute('color', '#C70039');
      element.setAttribute('height', '0.5');
      element.setAttribute('width', '0.5');
      menuLayout.appendChild(element);
    }
  }
});

AFRAME.registerComponent('alkali-metals', {
  // ...
});

AFRAME.registerComponent('alkaline-earth-metals', {
  // ...
});

AFRAME.registerComponent('lanthanides', {
  // ...
});

AFRAME.registerComponent('actinides', {
  // ...
});

AFRAME.registerComponent('transition-metals', {
  // ...
});

AFRAME.registerComponent('post-transition-metals', {
  // ...
});

AFRAME.registerComponent('metalloid', {
  // ...
});

AFRAME.registerComponent('non-metals', {
  // ...
});

AFRAME.registerComponent('halogens', {

});

AFRAME.registerComponent('noble-gases', {
  // ...
});
