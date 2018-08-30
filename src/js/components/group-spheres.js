AFRAME.registerComponent("group-spheres", {
  schema:{
    color: {default: '#FFF'},
    groupName: {type: 'string'},
    elements: {type: 'array'},
    opacity: {type: 'float', default: 0.5},
    radius: {type: 'float', default: -0.6}
  },

  init: function () {
    let listOfElements = this.data.elements;
    let color = this.data.color;
    let [parentMenu, el] = [this.el.parentNode, this.el];
    let groupName = this.data.groupName;

    el.setAttribute('radius', this.data.radius);
    el.setAttribute('color', color);
    el.setAttribute('opacity', this.data.opacity);
    el.setAttribute('animation__scale',{property: 'scale', dur: 2000, easing: "easeInSine",
                                        loop: false, from: {x:0,y:0, z:0}, to: {x:1,y:1, z:1}});

    el.addEventListener('mouseenter', function () {
      el.setAttribute('opacity', 1);
    });

    el.addEventListener('mouseleave', function() {
      el.setAttribute('opacity', 0.5);
    })

    el.addEventListener('click', function () {
      let sceneEl = document.querySelector('a-scene');
      let layout = document.createElement('a-entity');
      layout.id = 'elementMenu';
      layout.setAttribute('layout', {type: 'circle', radius: 1});
      layout.setAttribute('position', {x:0, y:0, z:-0.6});
      sceneEl.appendChild(layout);

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

        //Depending on the group name, I'll have to change the appearance
        // Todo: change the layout of the post transition metals
        document.getElementById('elementMenu').appendChild(elementBox);

        let infoPanel = document.getElementById('infoPanel');
        infoPanel.setAttribute('visible', true);
        infoPanel.setAttribute('animation__scale', {property: 'scale', dur: 1000, fill: "backwards",
                                             from: {x:0,y:1, z:1}, to: {x:1,y:1, z:1}});

        let mainMenuButton = document.getElementById('mainMenuButton');
      }
    });
  }
});
