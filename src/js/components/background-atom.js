AFRAME.registerComponent("background-atom", {
  schema:{
    color: {default: '#4ED4F9'},
    massNumber: {type: 'int', default: 4},
    opacity: {type: 'float', default: 0.5},
    radius: {type: 'float', default: 0.05}
  },

  _createProtons: function(atomBase, massNumber) {
    do {
      let proton = document.createElement('a-sphere');
      proton.setAttribute('color','red');
      proton.setAttribute('radius', this.data.radius);
      proton.setAttribute('position', {x:(Math.random() * 0.3) - 0.2,
                                       y:(Math.random() * 0.3) - 0.2,
                                       z:(Math.random() * 0.3) - 0.2});
      atomBase.appendChild(proton);
      massNumber = massNumber - 1;
    } while (massNumber > 0);
  },

  _createRings: function(atomBase) {
    let ringCount = 3;
    let rotation = -45;
    //create the orbital rings
    do {
      let orbitalRing = document.createElement('a-ring');
      orbitalRing.setAttribute('color', '#a3a8ac');
      orbitalRing.setAttribute('scale', {x:1, y: 1, z:1});
      orbitalRing.setAttribute('radius-inner', 0.7);
      orbitalRing.setAttribute('radius-outer', 0.75);
      orbitalRing.setAttribute('rotation', {x:rotation, y:rotation, z:rotation});
      atomBase.appendChild(orbitalRing);
      rotation = rotation + 45;
      ringCount = ringCount - 1;
    } while (ringCount > 0);
  },

  init: function() {
    let el = this.el;
    el.setAttribute('color', this.data.color);
    el.setAttribute('opacity', this.data.opacity);

    //Create the orbital rings and protons for display
    this._createRings(el);
    this._createProtons(el, this.data.massNumber);

    //Set the animation
    el.setAttribute('animation__scale', {property: 'scale', dur: 3000, easing: "easeInSine",
                                        loop: false, from: {x:0,y:0, z:0}, to: {x:0.8,y:0.8, z:0.8}});
    el.setAttribute('animation__rotate', {property: 'rotation', dur: 2000, easing: "easeInSine",
                                         loop: true, to: {x:360, y:0, z:0}});
  }
});
