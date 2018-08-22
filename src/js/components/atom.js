AFRAME.registerComponent('electrons-and-protons', {
  schema: {
    atomicNumber: {type: 'int'}
  },

  _electronConfiguration: function(atomicNumber, subShells) {
    // let subShells = subShells.match(/\d\D+/g);
    // let delayTime = 0;
    // do {
    //   let electron = document.createElement('a-sphere');
    //   electron.setAttribute('radius', 0.1);
    //   electron.setAttribute('color', 'yellow');
    //   electron.setAttribute('alongpath', {curve: 'shell' + shellNo,
    //                                       delay: delayTime,
    //                                       loop: true,
    //                                       dur: 2000,
    //                                       triggerRadius: 0.1});
    //   document.querySelector('a-scene').appendChild(electron);
    //   delayTime = delayTime + 100;
    //   shellNo = shellNo - 1;
    // } while (shellNo > 0);
  }

  _createShell: function(number) {
    let numberOfShells = number;

    do {
      let electronShell = document.createElement('a-curve');
      electronShell.id = 'shell' + numberOfShells;
      electronShell.setAttribute('curve', {closed: true});
      document.querySelector('a-scene').appendChild(electronShell);
      numberOfShells = numberOfShells - 1;

      let numberOfCurvePoints = 1;
      do {
        let curvePoint = document.createElement('a-curve-point');
        curvePoint.id = electronShell.id + 'point' + numberOfCurvePoints.toString();
        curvePoint.setAttribute('position', {x:0, y:0, z:0});
        document.getElementById(electronShell.id).appendChild(curvePoint);
        numberOfCurvePoints = numberOfCurvePoints + 1;
      } while (numberOfCurvePoints < 5);

    } while (numberOfShells > 0);
  },

  // _createSubShells: function(atomicNumber, typeOfSubShell) {
  //
  // },

  protons: function(nucleus, atomicNumber) {
    do {
      let proton = document.createElement('a-sphere');
      proton.setAttribute('color','#20DCE1');
      proton.setAttribute('radius', 0.05);
      proton.setAttribute('position', {x:(Math.random() * 0.3) - 0.2,
                                       y:(Math.random() * 0.3) - 0.2,
                                       z:(Math.random() * 0.3) - 0.2});
      nucleus.appendChild(proton);
      atomicNumber = atomicNumber - 1;
    } while (atomicNumber > 0);
  },

  electrons: function(atomicNumber) {
    let sceneEl = document.querySelector('a-scene');

    switch (true) {
      case atomicNumber <= 2:
        this._createShell(1);
        this._electronConfiguraton(atomicNumber, '1s');

        // document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-3});
        // document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-3});
        // document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-3});
        // document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-3});
        //
        // this._createElectrons(atomicNumber, 1);
        break;
      // case atomicNumber <= 10:
      //   // 2s2p configuration
      //   this._createCurve(2);
      //   this._createCurve(1);
      //   this._createCurvePoints(2);
      //   this._createCurvePoints(1);
      //
      //   document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-3});
      //   document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-3});
      //   document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-3});
      //   document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-3});
      //
      //   document.getElementById('shell2point1').setAttribute('position', {x:0, y:4, z:-3});
      //   document.getElementById('shell2point2').setAttribute('position', {x:4, y:0, z:-3});
      //   document.getElementById('shell2point3').setAttribute('position', {x:0, y:-4, z:-3});
      //   document.getElementById('shell2point4').setAttribute('position', {x:-4, y:0, z:-3});
      //
      //   this._createElectrons(atomicNumber, 2);
      //   break;
      default:
        break;
    }
  },

  init: function() {
    el = this.el;
    el.setAttribute('color', '#4ED4F9');
    el.setAttribute('position', {x: 0, y: 0, z: -3});
    el.setAttribute('opacity', 0.2);

    // Create the protons, electrons, and neutrons
    let atomicNumber = this.data.atomicNumber;
    this.protons(el, atomicNumber);
    this.electrons(atomicNumber);
    //this.createNeutrons
  }
});
