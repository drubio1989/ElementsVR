AFRAME.registerComponent("group-spheres", {
  schema:{
    color: {default: '#FFF'},
    elements: {type: 'array'}
  },

  init: function () {
    let listOfElements = this.data.elements;
    let color = this.data.color;
    let [parentMenu, el] = [this.el.parentNode, this.el];

    el.setAttribute('radius', -0.15);
    el.setAttribute('color', color);

    el.addEventListener('mouseenter', function () {
      // Remove all elements
      while (parentMenu.firstChild) {
        parentMenu.removeChild(parentMenu.firstChild);
      }

      // Creating the Main Menu Button
      // I may need to refactor this.......
      let sceneEl = document.querySelector('a-scene');
      let mainMenuButton = document.createElement('a-gui-button');
      mainMenuButton.setAttribute('value','Main Menu');
      mainMenuButton.setAttribute('font','roboto');
      mainMenuButton.setAttribute('scale', {x:0.5, y:0.5, z:0.5});
      mainMenuButton.setAttribute('position',{x:0, y:0, z:-2});
      mainMenuButton.setAttribute('font-size', '50px');
      mainMenuButton.setAttribute('background-color','#9F2CE9');
      mainMenuButton.setAttribute('onclick',"returnToMainMenu");
      sceneEl.appendChild(mainMenuButton);

      //Create the element boxes
      for (el of listOfElements) {
        let [number, symbol, name, weight] = [el["number"], el["symbol"], el["name"], el["weight"]];

        let elementBox= document.createElement('a-box');
        elementBox.setAttribute('element-box-info', {
          color: color,
          number: number,
          symbol: symbol,
          name: name,
          weight: weight
        });

        parentMenu.appendChild(elementBox);
      }
    });
  }
});
