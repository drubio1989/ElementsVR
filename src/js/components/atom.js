AFRAME.registerComponent('charged-particles', {
  schema: {
    color: {default: '#FFF'},
    atomicNumber: {type: 'int'},
    massNumber: {type: 'int'},
    elementName: {type: 'string'}
  },

  googleInfoPanel: function() {
    let googlePanel = document.getElementById('googlePanel');

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

        elementDescriptionText.setAttribute('value', element['result']['description']);
        elementDescriptionText.setAttribute('align', 'center');
        elementDescriptionText.setAttribute('position', {x:0, y:1.5, z:0});
        googlePanel.appendChild(elementDescriptionText);

        elementArticleText.setAttribute('value', element['result']['detailedDescription']['articleBody']);
        elementArticleText.setAttribute('align', 'center');
        elementArticleText.setAttribute('wrapCount', 60);
        googlePanel.appendChild(elementArticleText);

      });
    });
    googlePanel.setAttribute('visible', true);
    googlePanel.setAttribute('animation__scale', {property: 'scale', dur: 1000, fill: "backwards",
                                                  from: {x:0,y:1, z:1}, to: {x:1,y:1, z:1}});
  },



  _setShellPointConfigurations: function(mainShellNumber, numberOfCurvePoints = 1) {
    let coordinate = 0;

    if (mainShellNumber === 7)
      coordinate = 14;
    else if (mainShellNumber === 6)
      coordinate = 12;
    else if (mainShellNumber === 5)
      coordinate = 10;
    else if (mainShellNumber === 4)
      coordinate = 8;
    else if (mainShellNumber === 3)
      coordinate = 6;
    else if (mainShellNumber === 2)
      coordinate = 4;
    else if (mainShellNumber === 1)
      coordinate = 2;

    do {
      console.log('hello');
      numberOfCurvePoints = 1;
      do {
        console.log(numberOfCurvePoints);
        let curvePoint = document.getElementById('shell' + mainShellNumber + 'point' + numberOfCurvePoints);
        if (numberOfCurvePoints === 1)
          curvePoint.setAttribute('position', {x:0, y:coordinate, z:-3});
        else if (numberOfCurvePoints === 2)
          curvePoint.setAttribute('position', {x:coordinate, y:0, z:-3});
        else if (numberOfCurvePoints === 3)
          curvePoint.setAttribute('position', {x:0, y:(-coordinate), z:-3});
        else if (numberOfCurvePoints === 4)
          curvePoint.setAttribute('position',  {x:(-coordinate), y:0, z:-3});

        numberOfCurvePoints = numberOfCurvePoints + 1;

      } while (numberOfCurvePoints < 5);

      mainShellNumber = mainShellNumber - 1;
      coordinate = coordinate - 2;
    } while (mainShellNumber > 0);
  },

  _electronConfiguration: function(atomicNumber, subShells) {
    let sceneEl = document.querySelector('a-scene');
    let ShellAndOrbitalInfo = subShells.match(/\d\D+/g);
    let electronContainer = document.createElement('a-entity');
    sceneEl.appendChild(electronContainer);

    for (i = 0; i < ShellAndOrbitalInfo.length; i++) {
      if (atomicNumber === 0) break;

      let [mainShell, orbitalShape] = ShellAndOrbitalInfo[i].split('');

      if (orbitalShape === 's') [orbitalElCount, delayTime, sDelayIncrement] = [2,0,3000];
      if (orbitalShape === 'p') [orbitalElCount, delayTime, pDelayIncrement] = [6,200, 1000];
      if (orbitalShape === 'd') [orbitalElCount, delayTime, dDelayIncrement] = [10, 600, 400];
      if (orbitalShape === 'f') [orbitalElCount, delayTime, fDelayIncrement] = [14, 1400, 0];

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
    let sceneEl = document.querySelector('a-scene');
    let curveContainer = document.createElement('a-entity');
    sceneEl.appendChild(curveContainer);

    // Creating the orbital shells
    do {
      let electronShell = document.createElement('a-curve');
      electronShell.id = 'shell' + numberOfShells;
      electronShell.setAttribute('curve', {closed: true});
      curveContainer.appendChild(electronShell);

      numberOfShells = numberOfShells - 1;

      let numberOfCurvePoints = 1;
      //Creating the curvePoints for electron revolution. Has to have 4
      do {
        let curvePoint = document.createElement('a-curve-point');
        curvePoint.id = electronShell.id + 'point' + numberOfCurvePoints.toString();
        curvePoint.setAttribute('position', {x:0, y:0, z:0});
        document.getElementById(electronShell.id).appendChild(curvePoint);
        numberOfCurvePoints = numberOfCurvePoints + 1;
      } while (numberOfCurvePoints < 5);

    } while (numberOfShells > 0);
  },

  _generateAtom: function(nucleus, numberOfIterations, color) {
    do {
      let atom = document.createElement('a-sphere');
      atom.setAttribute('color', color);
      atom.setAttribute('radius', 0.05);
      atom.setAttribute('position', {x:(Math.random() * 0.4) - 0.3,
                                     y:(Math.random() * 0.4) - 0.3,
                                     z:(Math.random() * 0.4) - 0.3});
      nucleus.appendChild(atom);
      numberOfIterations = numberOfIterations - 1;
    } while (numberOfIterations > 0)
  },

  neutrons: function(nucleus, massNumber, atomicNumber) {
    let neutronNumber = massNumber - atomicNumber
    this._generateAtom(nucleus, neutronNumber, 'red');
  },

  protons: function(nucleus, atomicNumber) {
    this._generateAtom(nucleus, atomicNumber, '#20DCE1');
  },

  electrons: function(atomicNumber) {
    switch (true) {
      case atomicNumber <= 2:
        this._createShell(1);
        this._electronConfiguration(atomicNumber, '1s');
        this._setShellPointConfigurations(1);
        break;

      case atomicNumber <= 10:
        this._createShell(2);
        this._electronConfiguration(atomicNumber, '1s2s2p');
        this._setShellPointConfigurations(2);
        break;

      case atomicNumber <= 18:
        this._createShell(3);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p');
        // this._setShellPointConfigurations(3);
        break;

      case atomicNumber <= 36:
        this._createShell(4);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p');
        this._setShellPointConfigurations(4);
        break;

      case atomicNumber <= 54:
        this._createShell(5);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p5s4d5p');
        this._setShellPointConfigurations(5);
        break;

      case atomicNumber <= 80:
        this._createShell(6);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p5s4d5p6s4f5d6p');
        this._setShellPointConfigurations(6);
        break;

      case atomicNumber <= 118:
        this._createShell(7);
        this._electronConfiguration(atomicNumber, '1s2s2p3s3p4s3d4p5s4d5p6s4f5d6p7s5f6d7p');
        this._setShellPointConfigurations(7);
        break;

      default:
        break;
    }
  },

  init: function() {
    let sceneEl = document.querySelector('a-scene');
    // sceneEl.setAttribute('background',{color: this.data.color});

    //Create the main atom
    let el = this.el;
    el.setAttribute('color', '#4ED4F9');
    el.setAttribute('position', {x: 0, y: 0, z: -3});
    el.setAttribute('opacity', 0.2);

    // Create the protons, electrons, and neutrons
    let atomicNumber = this.data.atomicNumber;
    let massNumber = this.data.massNumber;
    this.neutrons(el, massNumber, atomicNumber);
    this.protons(el, atomicNumber);
    this.electrons(atomicNumber);
    this.googleInfoPanel();
  }
});
