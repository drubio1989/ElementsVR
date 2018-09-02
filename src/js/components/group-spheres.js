AFRAME.registerComponent("group-spheres", {
  schema:{
    color: {default: '#FFF'},
    groupName: {type: 'string'},
    elements: {type: 'array'},
  },

  init: function () {
    let mainScene = this.el.parentNode;
    let el = this.el;
    let listOfElements = this.data.elements;
    let color = this.data.color;
    let groupName = this.data.groupName;

    // Style the sphere
    el.setAttribute('radius', -0.6);
    el.setAttribute('color', this.data.color);
    el.setAttribute('opacity', 0.5);
    el.setAttribute('animation__scale',{property: 'scale', dur: 2000, easing: "easeInSine",
                                        loop: false, from: {x:0,y:0, z:0}, to: {x:1,y:1, z:1}});

    el.addEventListener('mouseenter', function () {
      el.setAttribute('opacity', 1);
    });

    el.addEventListener('mouseleave', function() {
      el.setAttribute('opacity', 0.5);
    });

    //Click functionality
    el.addEventListener('click', function () {
      let sceneEl = document.querySelector('a-scene');
      let layout = document.createElement('a-entity');
      layout.id = 'boxMenu';

      //This sets the circle variation of the boxes
      layout.setAttribute('layout', {type: 'circle', radius: 1});
      layout.setAttribute('position', {x:0, y:0, z:-0.6});
      sceneEl.appendChild(layout);

      // Remove all sphere elements
      while (mainScene.firstChild) {
        mainScene.removeChild(mainScene.firstChild);
      }

      //Create the element boxes
      for (property of listOfElements) {
        let number = property["number"];
        let symbol = property["symbol"];
        let name = property["name"];
        let weight = property["weight"];

        let elementBox = document.createElement('a-box');
        elementBox.setAttribute('element-box-info', {
          color: color,
          number: number,
          symbol: symbol,
          name: name,
          weight: weight,
          groupName: groupName,
        });

        // Depending on the group name, I'll have to change the appearance
        // Todo: change the layout of the post transition metals
        document.getElementById('boxMenu').appendChild(elementBox);
      }
    });
  }
});
