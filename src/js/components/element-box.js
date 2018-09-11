AFRAME.registerComponent("element-box-info",{
  schema:{
    color: {default: '#FFF'},
    number: {type: 'string'},
    symbol: {type: 'string'},
    name: {type: 'string'},
    weight: {type: 'string'},
    groupName: {type: 'string'},
  },

  init: function () {
    // Set up the menuGui
    let menuPanel = document.getElementById('menuPanel');

    menuPanel.setAttribute('position', {x:0, y:-1, z:-5});
    menuPanel.setAttribute('visible', true);
    menuPanel.setAttribute('animation__scale', {property: 'scale', dur: 1000, fill: "backwards",
                                                from: {x:0,y:1, z:1}, to: {x:1,y:1, z:1}});

    //Style the box
    let el = this.el;
    let color = this.data.color;

    el.setAttribute('opacity','1');
    el.setAttribute('width','0.3');
    el.setAttribute('depth','0.3');
    el.setAttribute('height','0.3');
    el.setAttribute('color', color);
    el.setAttribute('animation__scale',{property: 'scale', dur: 1000, easing: "easeInSine",
                                        loop: false, from: {x:0,y:0, z:0}, to: {x:1,y:1, z:1}});

    // Style the text on the box
    let numberInfo = this.data.number;
    let weightInfo = this.data.weight;
    let nameInfo = this.data.name;
    let symbolInfo = this.data.symbol;

    for (text of [numberInfo, weightInfo, nameInfo, symbolInfo]) {
      let textEl = document.createElement('a-text');
      textEl.setAttribute('value', text);
      textEl.setAttribute('align', 'center');
      textEl.setAttribute('wrap-count', 200);

      if (text === numberInfo) {
        textEl.setAttribute('baseline', 'top');
        textEl.setAttribute('position', {x: 0, y:0.13, z:0.15 });
      } else if (text === weightInfo) {
          textEl.setAttribute('baseline', 'bottom');
          textEl.setAttribute('position', {x: 0, y:-0.14, z:0.15 });
      } else if (text === nameInfo) {
          textEl.setAttribute('position', {x: 0, y:-0.05, z:0.15 });
      } else if (text === symbolInfo) {
          textEl.setAttribute('height', '5');
          textEl.setAttribute('position', {x: 0, y:0, z:0.15 });
      }

      el.appendChild(textEl);
    }

    el.addEventListener('mouseenter', function () {
      el.setAttribute('scale', {x:1.4, y:1.4, z:1.4})
    });

    el.addEventListener('mouseleave', function() {
      el.setAttribute('scale', {x:1, y:1, z:1})
    });

    let boxMenu = this.el.parentNode;
    let groupName = this.data.groupName;

    el.addEventListener('click', function (event) {
      // Remove all elements
      while (boxMenu.firstChild) {
        boxMenu.removeChild(boxMenu.firstChild);
      }

      //Remove the background
      let backgroundContainer = document.querySelectorAll('.backgroundAtom')[0].parentNode;
      while (backgroundContainer.firstChild) {
        backgroundContainer.removeChild(backgroundContainer.firstChild);
      }

      let atom = document.createElement('a-sphere');
      atom.className = groupName;
      atom.id = 'atom';
      // atom.className = groupName;
      atom.setAttribute('animation__scale',{property: 'scale', dur: 1000, easing: "easeInSine",
                                          loop: false, from: {x:0,y:0, z:0}, to: {x:1,y:1, z:1}});
      atom.setAttribute('charged-particles', {color: color,
                                              atomicNumber: parseInt(numberInfo),
                                              massNumber: Math.floor(parseFloat(weightInfo)),
                                              elementName: nameInfo});
      document.getElementById('atomScene').appendChild(atom);

      // Animate the gui Menu to proper position
      let guiMenu = document.getElementById('menuPanel');

      //Why won't this animation reset????!!!!!
      guiMenu.setAttribute('animation__position', {property: 'position', dur: 1000, easing: "easeInSine", loop: false, to: {x:5, y:-1, z:-5}});
      guiMenu.setAttribute('animation__rotate', {property: 'rotation', dur: 1000, easing: "easeInSine", loop: false, to: {x:0, y:-45, z:0}});

      //Show the "Back Button"
      let backMenuButton = document.getElementById('backMenuButton');
      backMenuButton.setAttribute('visible', true);
    });
  }
});
