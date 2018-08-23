AFRAME.registerComponent("element-box-info",{
  schema:{
    color: {default: '#FFF'},
    number: {type: 'string'},
    symbol: {type: 'string'},
    name: {type: 'string'},
    weight: {type: 'string'}
  },

  init: function () {
    let [parentMenu, el] = [this.el.parentNode,this.el];
    el.setAttribute('opacity','0.5');
    el.setAttribute('width','0.3');
    el.setAttribute('depth','0.3');
    el.setAttribute('height','0.3');
    el.setAttribute('color', this.data.color);

    let [numberInfo, weightInfo, nameInfo, symbolInfo] = [this.data.number,
                                                          this.data.weight,
                                                          this.data.name,
                                                          this.data.symbol];
    for (text of [numberInfo, weightInfo, nameInfo, symbolInfo]) {
      let textEl = document.createElement('a-text');
      textEl.setAttribute('value', text);
      textEl.setAttribute('align', 'center');
      textEl.setAttribute('wrap-count', 150);

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

    el.addEventListener('mouseenter', function (event) {
      // Remove all elements
      while (parentMenu.firstChild) {
        parentMenu.removeChild(parentMenu.firstChild);
      }

      let sceneEl = document.querySelector('a-scene');
      let atom = document.createElement('a-sphere');
      atom.setAttribute('charged-particles', {atomicNumber: parseInt(numberInfo),
                                              massNumber: Math.floor(parseFloat(weightInfo))});
      sceneEl.appendChild(atom);
    });
  }
});
