AFRAME.registerComponent("menu-text", {
  schema: {
    text: {type: 'string', default: ''}
  },

  init: function() {
    let el = this.el;
    el.setAttribute("text", {wrapCount: '100'});
    el.setAttribute("align", "left");
    el.setAttribute("value", this.data.text);
    el.setAttribute("position",{x:-0.25, y:-0.25, z:0});
    el.setAttribute("scale",{x:0.5, y:0.5, z:0.5});
  }
});
