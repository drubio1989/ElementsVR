AFRAME.registerComponent("group-spheres", {
  schema:{
    color: {default: '#FFF'},
    groupName: {type: 'string'},
    elements: {type: 'array'},
  },

  init: function () {
    let listOfElements = this.data.elements;
    let color = this.data.color;
    let [parentMenu, el] = [this.el.parentNode, this.el];
    let groupName = this.data.groupName;

    el.setAttribute('radius', -0.6);
    el.setAttribute('color', color);
    el.setAttribute('opacity', 0.5);
    el.setAttribute('animation__scale',{property: 'scale', dur: 2000, easing: "easeInSine",
                                        loop: false, from: {x:0,y:0, z:0}, to: {x:1,y:1, z:1}});

    let ringCount = 3;
    let rotation = -45;

    // Creates the orbital rings around the menu atom
    do {
      let orbitalRing = document.createElement('a-ring');
      orbitalRing.setAttribute('color', '#a3a8ac');
      orbitalRing.setAttribute('scale', {x:0.5, y: 0.5, z:0.5});
      orbitalRing.setAttribute('radius-inner', 0.5);
      orbitalRing.setAttribute('radius-outer', 0.55);
      orbitalRing.setAttribute('rotation', {x:rotation, y: rotation, z:0});
      el.appendChild(orbitalRing);
      rotation = rotation + 45;
      ringCount = ringCount - 1;
    } while (ringCount > 0);


    el.addEventListener('mouseenter', function () {
      el.setAttribute('opacity', 1);
    });

    el.addEventListener('mouseleave', function() {
      el.setAttribute('opacity', 0.5);
    })

    el.addEventListener('click', function () {
      // Remove all elements
      while (parentMenu.firstChild) {
        parentMenu.removeChild(parentMenu.firstChild);
      }
      //Create the element boxes
      for (el of listOfElements) {
        let [number, symbol, name, weight] = [el["number"], el["symbol"], el["name"], el["weight"]];

        let elementBox = document.createElement('a-box');
        elementBox.setAttribute('element-box-info', {
          color: color,
          number: number,
          symbol: symbol,
          name: name,
          weight: weight
        });

        document.getElementById('elementMenu').appendChild(elementBox);
      }
    });
  }
});
