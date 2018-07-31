// This will get triggered when you select an element
// The number of electrons will be variable

let backgroundEntity = document.createElement('a-entity');
backgroundEntity.setAttribute('layout', {
  type: 'dodecahedron',
  radius: 25
})

sceneEl.appendChild(backgroundEntity);

for (let i = 0; i < 20; i++) {
  let atomBase = document.createElement('a-sphere');
  atomBase.setAttribute('color', 'red');
  atomBase.setAttribute('radius', 0.5);

  let orbitingElectron = document.createElement('a-sphere');
  orbitingElectron.setAttribute('color', 'yellow');
  orbitingElectron.setAttribute('radius', 0.1);
  orbitingElectron.setAttribute('position', { x: 1, y: 1, z: 0});

  backgroundEntity.appendChild(atomBase);
  atomBase.appendChild(orbitingElectron);
}
