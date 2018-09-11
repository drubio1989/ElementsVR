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
    el.setAttribute('radius', 0.5);
    el.setAttribute('color', this.data.color);
    el.setAttribute('opacity', 0.5);
    el.setAttribute('animation__scale',{property: 'scale', dur: 1000, easing: "easeInSine",
                                        loop: false, from: {x:0,y:0, z:0}, to: {x:1,y:1, z:1}});

    el.addEventListener('mouseenter', function () {
      el.setAttribute('opacity', 1);
    });

    el.addEventListener('mouseleave', function() {
      el.setAttribute('opacity', 0.5);
    });

    function createBoxes(listOfElements, menuEntity) {
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

        document.getElementById(menuEntity).appendChild(elementBox);
      }
    }

    function resetPanel() {
      // We need to reset the position of the Menu Button
      let menuPanel = document.getElementById('menuPanel');
      menuPanel.setAttribute('position', {x:0, y:-1, z:-5});
      menuPanel.setAttribute('rotation', {x:0, y:0, z:0});
    }

    //Click functionality
    el.addEventListener('click', function() {
      let sceneEl = document.querySelector('a-scene');

      // Remove all sphere elements
      while (mainScene.firstChild) {
        mainScene.removeChild(mainScene.firstChild);
      }

      if (groupName === "Transition Metals") {
        let firstHalf = listOfElements.slice(0, listOfElements.length / 2);
        let secondHalf = listOfElements.slice(listOfElements.length / 2, 34);

        createBoxes(firstHalf, 'menuOne');
        createBoxes(secondHalf, 'menuTwo');
      } else {
        createBoxes(listOfElements, 'menuOne');
      }

      resetPanel();
    });
  }
});
