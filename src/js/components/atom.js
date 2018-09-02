AFRAME.registerComponent('charged-particles', {
  schema: {
    color: {default: '#FFF'},
    atomicNumber: {type: 'int'},
    massNumber: {type: 'int'},
    elementName: {type: 'string'}
  },

  googleInfoPanel: function() {
    let googlePanel = document.getElementById('googlePanel');
    googlePanel.setAttribute('visible',true);

    let elementNameText = document.createElement('a-text');
    let elementDescriptionText = document.createElement('a-text');
    let elementArticleText = document.createElement('a-text');

    let service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    let params = {
      'query': this.data.elementName,
      'limit': 1,
      'key' : 'AIzaSyCwlYC7MqfZshbxf1T8ttnZ9D2Wa2Wgeok',
    };

    $.getJSON(service_url + '?callback=?', params, function(response) {
      $.each(response.itemListElement, function(i, element) {

        elementNameText.setAttribute('value',element['result']['name']);
        elementNameText.setAttribute('align', 'center');
        elementNameText.setAttribute('position', {x:0, y:2, z:0});
        googlePanel.appendChild(elementNameText);

        elementDescriptionText.setAttribute('value',element['result']['description']);
        elementDescriptionText.setAttribute('align', 'center');
        elementDescriptionText.setAttribute('position', {x:0, y:1.5, z:0});
        googlePanel.appendChild(elementDescriptionText);

        elementArticleText.setAttribute('value', element['result']['detailedDescription']['articleBody']);
        elementArticleText.setAttribute('align', 'center');
        elementArticleText.setAttribute('wrapCount', 60);
        googlePanel.appendChild(elementArticleText);
      });
    });
    // elementNameText.setAttribute('font', 'monospace');
    // elementDescriptionText.setAttribute('font', 'monospace');
    // elementArticleText.setAttribute('font', 'monospace');
  },

  _electronConfiguration: function(atomicNumber, subShells) {
    let ShellAndOrbitalInfo = subShells.match(/\d\D+/g);
    let electronContainer = document.createElement('a-entity');
    document.querySelector('a-scene').appendChild(electronContainer);

    for (i = 0; i < ShellAndOrbitalInfo.length; i++) {
      if (atomicNumber === 0) break;

      let [mainShell, orbitalShape] = ShellAndOrbitalInfo[i].split('');

      if (orbitalShape == 's') [orbitalElCount, delayTime, sDelayIncrement] = [2,0,3000];
      if (orbitalShape == 'p') [orbitalElCount, delayTime, pDelayIncrement] = [6,200, 1000];
      if (orbitalShape == 'd') [orbitalElCount, delayTime, dDelayIncrement] = [10, 600, 400];
      if (orbitalShape == 'f') [orbitalElCount, delayTime, fDelayIncrement] = [14, 1400, 0];

      do {
        let electron = document.createElement('a-sphere');
        electron.className = 'electron';
        electron.setAttribute('radius', 0.05);
        electron.setAttribute('color', 'yellow');
        electron.setAttribute('alongpath', {curve: '#shell' + mainShell,
                                            delay: delayTime,
                                            loop: true,
                                            dur: 6000,
                                            triggerRadius: 0.1});
        electron.setAttribute('animation__scale',{property: 'scale', dur: 4000, easing: "easeInSine",
                                            loop: false, from: {x:0,y:0, z:0}, to: {x:1,y:1, z:1}});
        electronContainer.appendChild(electron);
        if (orbitalShape == 's')
          delayTime = delayTime + sDelayIncrement;
        else if (orbitalShape == 'p')
          delayTime = delayTime + pDelayIncrement;
        else if (orbitalShape == 'd')
          delayTime = delayTime + dDelayIncrement;
        else if (orbitalShape == 'f')
          delayTime = delayTime + fDelayIncrement;
      atomicNumber = atomicNumber - 1;
        orbitalElCount = orbitalElCount - 1;
      } while (atomicNumber > 0 && orbitalElCount > 0);

    }
  },

  _createShell: function(numberOfShells) {
    let curveContainer = document.createElement('a-entity');
    document.querySelector('a-scene').appendChild(curveContainer);
    do {
      let electronShell = document.createElement('a-curve');
      electronShell.id = 'shell' + numberOfShells;
      electronShell.setAttribute('curve', {closed: true});
      curveContainer.appendChild(electronShell);

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

  neutrons: function(nucleus, massNumber, atomicNumber) {
    let neutronNumber = massNumber - atomicNumber
    do {
      let neutron = document.createElement('a-sphere');
      neutron.setAttribute('color','red');
      neutron.setAttribute('radius', 0.05);
      neutron.setAttribute('position', {x:(Math.random() * 0.4) - 0.3,
                                       y:(Math.random() * 0.4) - 0.3,
                                       z:(Math.random() * 0.4) - 0.3});
      nucleus.appendChild(neutron);
      neutronNumber = neutronNumber - 1;
    } while (neutronNumber > 0);
  },

  protons: function(nucleus, atomicNumber) {
    do {
      let proton = document.createElement('a-sphere');
      proton.setAttribute('color','#20DCE1');
      proton.setAttribute('radius', 0.05);
      proton.setAttribute('position', {x:(Math.random() * 0.4) - 0.3,
                                       y:(Math.random() * 0.4) - 0.3,
                                       z:(Math.random() * 0.4) - 0.3});
      nucleus.appendChild(proton);
      atomicNumber = atomicNumber - 1;
    } while (atomicNumber > 0);
  },

  electrons: function(atomicNumber) {
    switch (true) {
      case atomicNumber <= 2:

        this._createShell(1);
        this._electronConfiguration(atomicNumber, '1s');

        document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-4});
        document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-4});
        document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-4});
        document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-4});
        break;

      case atomicNumber <= 10:
        this._createShell(2);
        this._electronConfiguration(atomicNumber, '1s2s2p');

        document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-4});
        document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-4});
        document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-4});
        document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-4});

        document.getElementById('shell2point1').setAttribute('position', {x:0, y:4, z:-4});
        document.getElementById('shell2point2').setAttribute('position', {x:4, y:0, z:-4});
        document.getElementById('shell2point3').setAttribute('position', {x:0, y:-4, z:-4});
        document.getElementById('shell2point4').setAttribute('position', {x:-4, y:0, z:-4});
        break;

      case atomicNumber <= 18:
        this._createShell(3);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p');

        document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-4});
        document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-4});
        document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-4});
        document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-4});

        document.getElementById('shell2point1').setAttribute('position', {x:0, y:4, z:-4});
        document.getElementById('shell2point2').setAttribute('position', {x:4, y:0, z:-4});
        document.getElementById('shell2point3').setAttribute('position', {x:0, y:-4, z:-4});
        document.getElementById('shell2point4').setAttribute('position', {x:-4, y:0, z:-4});

        document.getElementById('shell3point1').setAttribute('position', {x:0, y:6, z:-4});
        document.getElementById('shell3point2').setAttribute('position', {x:6, y:0, z:-4});
        document.getElementById('shell3point3').setAttribute('position', {x:0, y:-6, z:-4});
        document.getElementById('shell3point4').setAttribute('position', {x:-6, y:0, z:-4});
        break;

      case atomicNumber <= 36:
        this._createShell(4);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p');

        document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-4});
        document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-4});
        document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-4});
        document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-4});

        document.getElementById('shell2point1').setAttribute('position', {x:0, y:4, z:-4});
        document.getElementById('shell2point2').setAttribute('position', {x:4, y:0, z:-4});
        document.getElementById('shell2point3').setAttribute('position', {x:0, y:-4, z:-4});
        document.getElementById('shell2point4').setAttribute('position', {x:-4, y:0, z:-4});

        document.getElementById('shell3point1').setAttribute('position', {x:0, y:6, z:-4});
        document.getElementById('shell3point2').setAttribute('position', {x:6, y:0, z:-4});
        document.getElementById('shell3point3').setAttribute('position', {x:0, y:-6, z:-4});
        document.getElementById('shell3point4').setAttribute('position', {x:-6, y:0, z:-4});

        document.getElementById('shell4point1').setAttribute('position', {x:0, y:8, z:-4});
        document.getElementById('shell4point2').setAttribute('position', {x:8, y:0, z:-4});
        document.getElementById('shell4point3').setAttribute('position', {x:0, y:-8, z:-4});
        document.getElementById('shell4point4').setAttribute('position', {x:-8, y:0, z:-4});

        break;
      case atomicNumber <= 54:
        this._createShell(5);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p5s4d5p');

        document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-3});
        document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-3});
        document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-3});
        document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-3});

        document.getElementById('shell2point1').setAttribute('position', {x:0, y:4, z:-3});
        document.getElementById('shell2point2').setAttribute('position', {x:4, y:0, z:-3});
        document.getElementById('shell2point3').setAttribute('position', {x:0, y:-4, z:-3});
        document.getElementById('shell2point4').setAttribute('position', {x:-4, y:0, z:-3});

        document.getElementById('shell3point1').setAttribute('position', {x:0, y:6, z:-3});
        document.getElementById('shell3point2').setAttribute('position', {x:6, y:0, z:-3});
        document.getElementById('shell3point3').setAttribute('position', {x:0, y:-6, z:-3});
        document.getElementById('shell3point4').setAttribute('position', {x:-6, y:0, z:-3});

        document.getElementById('shell4point1').setAttribute('position', {x:0, y:8, z:-3});
        document.getElementById('shell4point2').setAttribute('position', {x:8, y:0, z:-3});
        document.getElementById('shell4point3').setAttribute('position', {x:0, y:-8, z:-3});
        document.getElementById('shell4point4').setAttribute('position', {x:-8, y:0, z:-3});

        document.getElementById('shell5point1').setAttribute('position', {x:0, y:10, z:-3});
        document.getElementById('shell5point2').setAttribute('position', {x:10, y:0, z:-3});
        document.getElementById('shell5point3').setAttribute('position', {x:0, y:-10, z:-3});
        document.getElementById('shell5point4').setAttribute('position', {x:-10, y:0, z:-3});
        break;

      case atomicNumber <= 80:
        this._createShell(6);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p5s4d5p6s4f5d6p');

        document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-3});
        document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-3});
        document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-3});
        document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-3});

        document.getElementById('shell2point1').setAttribute('position', {x:0, y:4, z:-3});
        document.getElementById('shell2point2').setAttribute('position', {x:4, y:0, z:-3});
        document.getElementById('shell2point3').setAttribute('position', {x:0, y:-4, z:-3});
        document.getElementById('shell2point4').setAttribute('position', {x:-4, y:0, z:-3});

        document.getElementById('shell3point1').setAttribute('position', {x:0, y:6, z:-3});
        document.getElementById('shell3point2').setAttribute('position', {x:6, y:0, z:-3});
        document.getElementById('shell3point3').setAttribute('position', {x:0, y:-6, z:-3});
        document.getElementById('shell3point4').setAttribute('position', {x:-6, y:0, z:-3});

        document.getElementById('shell4point1').setAttribute('position', {x:0, y:8, z:-3});
        document.getElementById('shell4point2').setAttribute('position', {x:8, y:0, z:-3});
        document.getElementById('shell4point3').setAttribute('position', {x:0, y:-8, z:-3});
        document.getElementById('shell4point4').setAttribute('position', {x:-8, y:0, z:-3});

        document.getElementById('shell5point1').setAttribute('position', {x:0, y:10, z:-3});
        document.getElementById('shell5point2').setAttribute('position', {x:10, y:0, z:-3});
        document.getElementById('shell5point3').setAttribute('position', {x:0, y:-10, z:-3});
        document.getElementById('shell5point4').setAttribute('position', {x:-10, y:0, z:-3});

        document.getElementById('shell6point1').setAttribute('position', {x:0, y:12, z:-3});
        document.getElementById('shell6point2').setAttribute('position', {x:12, y:0, z:-3});
        document.getElementById('shell6point3').setAttribute('position', {x:0, y:-12, z:-3});
        document.getElementById('shell6point4').setAttribute('position', {x:-12, y:0, z:-3});
        break;

      case atomicNumber <= 118:
        this._createShell(7);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p5s4d5p6s4f5d6p7s5f6d7p');

        document.getElementById('shell1point1').setAttribute('position', {x:0, y:2, z:-3});
        document.getElementById('shell1point2').setAttribute('position', {x:2, y:0, z:-3});
        document.getElementById('shell1point3').setAttribute('position', {x:0, y:-2, z:-3});
        document.getElementById('shell1point4').setAttribute('position', {x:-2, y:0, z:-3});

        document.getElementById('shell2point1').setAttribute('position', {x:0, y:4, z:-3});
        document.getElementById('shell2point2').setAttribute('position', {x:4, y:0, z:-3});
        document.getElementById('shell2point3').setAttribute('position', {x:0, y:-4, z:-3});
        document.getElementById('shell2point4').setAttribute('position', {x:-4, y:0, z:-3});

        document.getElementById('shell3point1').setAttribute('position', {x:0, y:6, z:-3});
        document.getElementById('shell3point2').setAttribute('position', {x:6, y:0, z:-3});
        document.getElementById('shell3point3').setAttribute('position', {x:0, y:-6, z:-3});
        document.getElementById('shell3point4').setAttribute('position', {x:-6, y:0, z:-3});

        document.getElementById('shell4point1').setAttribute('position', {x:0, y:8, z:-3});
        document.getElementById('shell4point2').setAttribute('position', {x:8, y:0, z:-3});
        document.getElementById('shell4point3').setAttribute('position', {x:0, y:-8, z:-3});
        document.getElementById('shell4point4').setAttribute('position', {x:-8, y:0, z:-3});

        document.getElementById('shell5point1').setAttribute('position', {x:0, y:10, z:-3});
        document.getElementById('shell5point2').setAttribute('position', {x:10, y:0, z:-3});
        document.getElementById('shell5point3').setAttribute('position', {x:0, y:-10, z:-3});
        document.getElementById('shell5point4').setAttribute('position', {x:-10, y:0, z:-3});

        document.getElementById('shell6point1').setAttribute('position', {x:0, y:12, z:-3});
        document.getElementById('shell6point2').setAttribute('position', {x:12, y:0, z:-3});
        document.getElementById('shell6point3').setAttribute('position', {x:0, y:-12, z:-3});
        document.getElementById('shell6point4').setAttribute('position', {x:-12, y:0, z:-3});

        document.getElementById('shell7point1').setAttribute('position', {x:0, y:14, z:-3});
        document.getElementById('shell7point2').setAttribute('position', {x:14, y:0, z:-3});
        document.getElementById('shell7point3').setAttribute('position', {x:0, y:-14, z:-3});
        document.getElementById('shell7point4').setAttribute('position', {x:-14, y:0, z:-3});
        break;

      default:
        break;
    }
  },

  init: function() {
    let sceneEl = document.querySelector('a-scene');
    // sceneEl.setAttribute('background',{color: this.data.color});

    el = this.el;
    el.setAttribute('color', '#4ED4F9');
    el.setAttribute('position', {x: 0, y: 0, z: -3});
    el.setAttribute('opacity', 0.2);

    // Create the protons, electrons, and neutrons
    let atomicNumber = this.data.atomicNumber;
    let massNumber = this.data.massNumber;

    this.protons(el, atomicNumber);
    this.electrons(atomicNumber);
    this.neutrons(el, massNumber, atomicNumber);

    this.googleInfoPanel();
  }
});
