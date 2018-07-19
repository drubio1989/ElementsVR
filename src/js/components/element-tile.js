AFRAME.registerComponent("element-info",{
  schema:{
    number: {type: 'string'},
    symbol: {type: 'string'},
    name: {type: 'string'},
    weight: {type: 'string'}
  },

  init: function (number, symbol, name, weight) {
      console.log(number);
      let numberInfo = document.createElement('a-text');
      numberInfo.setAttribute('value', this.data.number);
      numberInfo.setAttribute('align', 'center');
      numberInfo.setAttribute('baseline', 'top');
      numberInfo.setAttribute('position', {x: 0, y:1.25, z:0 });
      this.el.appendChild(numberInfo);

      let weightInfo = document.createElement('a-text');
      weightInfo.setAttribute('value', this.data.weight);
      weightInfo.setAttribute('align','center');
      weightInfo.setAttribute('baseline', 'bottom');
      weightInfo.setAttribute('position', {x: 0, y:-1.25, z:0 });
      this.el.appendChild(weightInfo);

      let nameInfo = document.createElement('a-text');
      nameInfo.setAttribute('value', this.data.name);
      nameInfo.setAttribute('align','center');
      nameInfo.setAttribute('position', {x: 0, y:-0.25, z:0 });
      this.el.appendChild(nameInfo);

      let symbolInfo = document.createElement('a-text');
      symbolInfo.setAttribute('value', this.data.symbol);
      symbolInfo.setAttribute('align', 'center');
      symbolInfo.setAttribute('height', '5');
      this.el.appendChild(symbolInfo);
  }
});