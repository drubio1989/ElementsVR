const elements = [
  {symbol: "H", name:'Hydrogen', weight: "1.00794", position: {x:-5 ,y:10, z: -1}, rotation: {x:0, y:84, z:0}},
  // {symbol:"He", name:"Helium", weight:"4.002602", position: {x:18 ,y:1, z:0}, rotation: {x:0, y:0, z:0}},
  {symbol:"Li", name:"Lithium", weight:"6.941", position: {x:-5 ,y:9, z: -1}, rotation: {x:0, y:84, z:0}},
  {symbol:"Be", name:"Beryllium", weight:"9.012182", position: {x:-4.8 ,y:9, z: -2}, rotation: {x:0, y:70, z:0}},
  // {symbol:"B", name:"Boron", weight:"10.811", position: {x:13 ,y:2, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"C", name:"Carbon", weight:"12.0107", position: {x:14 ,y:2, z: 0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"N", name:"Nitrogen", weight:"14.0067", position: {x:15 ,y:2, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"O", name:"Oxygen", weight:"15.9994", position: {x:16 ,y:2, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"F", name:"Fluorine", weight:"18.9984032", position: {x:17 ,y:2, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ne", name:"Neon", weight:"20.1797", position: {x:18 ,y:2, z:0}, rotation: {x:0, y:0, z:0}},
  {symbol:"Na", name:"Sodium", weight:"22.98976...", position: {x:-5 ,y:8, z: -1}, rotation: {x:0, y:84, z:0}},
  {symbol:"Mg", name:"Magnesium", weight:"24.305", position: {x:-4.8 ,y:8, z: -2}, rotation: {x:0, y:70, z:0}},
  // {symbol:"Al", name:"Aluminium", weight:"26.9815386", position: {x:13 ,y:3, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Si", name:"Silicon", weight:"28.0855", position: {x:14 ,y:3, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"P", name:"Phosphorus", weight:"30.973762", position: {x:15 ,y:3}, rotation: {x:0, y:0, z:0}},
  // {symbol:"S", name:"Sulfur", weight:"32.065", position: {x:16 ,y:3, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Cl", name:"Chlorine", weight:"35.453", position: {x:17 ,y:3, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ar", name:"Argon", weight:"39.948", position: {x:18 ,y:3, z:0}, rotation: {x:0, y:0, z:0}},
  {symbol:"K", name:"Potassium", weight:"39.948", position: {x:-5 ,y:7, z: -1}, rotation: {x:0, y:84, z:0}},
  {symbol:"Ca", name:"Calcium", weight:"40.078", position: {x:-4.8 ,y:7, z: -2}, rotation: {x:0, y:70, z:0}},
  {symbol:"Sc", name:"Scandium", weight:"44.955912", position: {x:-4.4, y:7, z:-2.9}, rotation: {x:0, y:58, z:0}},
  // {symbol:"Ti", name:"Titanium", weight:"47.867", position: {x:4 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"V", name:"Vanadium", weight:"50.9415", position: {x:5 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Cr", name:"Chromium", weight:"51.9961", position: {x:6 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Mn", name:"Manganese", weight:"54.938045", position: {x:7 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Fe", name:"Iron", weight:"55.845", position: {x:8 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Co", name:"Cobalt", weight:"58.933195", position: {x:9 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ni", name:"Nickel", weight:"58.6934", position: {x:10 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Cu", name:"Copper", weight:"63.546", position: {x:11 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Zn", name:"Zinc", weight:"65.38", position: {x:12 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ga", name:"Gallium", weight:"69.723", position: {x:13 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ge", name:"Germanium", weight:"72.63", position: {x:14 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"As", name:"Arsenic", weight:"74.9216", position: {x:15 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Se", name:"Selenium", weight:"78.96", position: {x:16 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Br", name:"Bromine", weight:"79.904", position: {x:17 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Kr", name:"Krypton", weight:"83.798", position: {x:18 ,y:4, z:0}, rotation: {x:0, y:0, z:0}},
  {symbol:"Rb", name:"Rubidium", weight:"85.4678", position: {x:-5 ,y:6, z: -1}, rotation: {x:0, y:84, z:0}},
  {symbol:"Sr", name:"Strontium", weight:"87.62", position: {x:-4.8 ,y:6, z: -2}, rotation: {x:0, y:70, z:0}},
  {symbol:"Y", name:"Yttrium", weight:"88.90585", position: {x:-4.4 ,y:6, z: -2.9}, rotation: {x:0, y:58, z:0}},
  // {symbol:"Zr", name:"Zirconium", weight:"91.224", position: {x:4 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Nb", name:"Niobium", weight:"92.90628", position: {x:5 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Mo", name:"Molybdenum", weight:"95.96", position: {x:6 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Tc", name:"Technetium", weight:"(98)", position: {x:7 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ru", name:"Ruthenium", weight:"101.07", position: {x:8 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Rh", name:"Rhodium", weight:"102.9055", position: {x:9 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Pd", name:"Palladium", weight:"106.42", position: {x:10 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ag", name:"Silver", weight:"107.8682", position: {x:11 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Cd", name:"Cadmium", weight:"112.411", position: {x:12 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"In", name:"Indium", weight:"114.818", position: {x:13 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Sn", name:"Tin", weight:"118.71", position: {x:14 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Sb", name:"Antimony", weight:"121.76", position: {x:15 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Te", name:"Tellurium", weight:"127.6", position: {x:16 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"I", name:"Iodine", weight:"126.90447", position: {x:17 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Xe", name:"Xenon", weight:"131.293", position: {x:18 ,y:5, z:0}, rotation: {x:0, y:0, z:0}},
  {symbol:"Cs", name:"Caesium", weight:"132.9054", position: {x:-5 ,y:5, z: -1}, rotation: {x:0, y:84, z:0}},
  {symbol:"Ba", name:"Barium", weight:"132.9054", position: {x:-4.8 ,y:5, z: -2}, rotation: {x:0, y:70, z:0}},
  // {symbol:"La", name:"Lanthanum", weight:"138.90547", position: {x:4 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ce", name:"Cerium", weight:"140.116", position: {x:5 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Pr", name:"Praseod,ymium", weight:"140.90765", position: {x:6 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Nd", name:"Neod,ymium", weight:"144.242", position: {x:7 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Pm", name:"Promethium", weight:"(145)", position: {x:8 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Sm", name:"Samarium", weight:"150.36", position: {x:9 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Eu", name:"Europium", weight:"151.964", position: {x:10 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Gd", name:"Gadolinium", weight:"157.25", position: {x:11 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Tb", name:"Terbium", weight:"158.92535", position: {x:12 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Dy", name:"Dysprosium", weight:"162.5", position: {x:13 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ho", name:"Holmium", weight:"164.93032", position: {x:14 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Er", name:"Erbium", weight:"167.259", position: {x:15 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Tm", name:"Thulium", weight:"168.93421", position: {x:16 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Yb", name:"Ytterbium", weight:"173.054", position: {x:17 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Lu", name:"Lutetium", weight:"174.9668", position: {x:18 ,y:9, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Hf", name:"Hafnium", weight:"178.49", position: {x:4 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ta", name:"Tantalum", weight:"180.94788", position: {x:5 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"W", name:"Tungsten", weight:"183.84", position: {x:6 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Re", name:"Rhenium", weight:"186.207", position: {x:7 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Os", name:"Osmium", weight:"190.23", position: {x:8 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ir", name:"Iridium", weight:"192.217", position: {x:9 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Pt", name:"Platinum", weight:"195.084", position: {x:10 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Au", name:"Gold", weight:"196.966569", position: {x:11 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Hg", name:"Mercury", weight:"200.59", position: {x:12 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Tl", name:"Thallium", weight:"204.3833", position: {x:13 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Pb", name:"Lead", weight:"207.2", position: {x:14 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Bi", name:"Bismuth", weight:"208.9804", position: {x:15 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Po", name:"Polonium", weight:"(209)", position: {x:16 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"At", name:"Astatine", weight:"(210)", position: {x:17 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Rn", name:"Radon", weight:"(222)", position: {x:18 ,y:6, z:0}, rotation: {x:0, y:0, z:0}},
  {symbol:"Fr", name:"Francium", weight:"(223)", position: {x:-5 ,y:4, z: -1}, rotation: {x:0, y:84, z:0}},
  {symbol:"Ra", name:"Radium", weight:"(226)", position: {x:-4.8 ,y:4, z: -2}, rotation: {x:0, y:70, z:0}},
  // {symbol:"Ac", name:"Actinium", weight:"(227)", position: {x:4 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Th", name:"Thorium", weight:"232.03806", position: {x:5 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Pa", name:"Protactinium", weight:"231.0588", position: {x:6 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"U", name:"Uranium", weight:"238.02891", position: {x:7 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Np", name:"Neptunium", weight:"(237)", position: {x:8 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Pu", name:"Plutonium", weight:"(244)", position: {x:9 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Am", name:"Americium", weight:"(243)", position: {x:10 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Cm", name:"Curium", weight:"(247)", position: {x:11 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Bk", name:"Berkelium", weight:"(247)", position: {x:12 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Cf", name:"Californium", weight:"(251)", position: {x:13 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Es", name:"Einstenium", weight:"(252)", position: {x:14 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Fm", name:"Fermium", weight:"(257)", position: {x:15 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Md", name:"Mendelevium", weight:"(258)", position: {x:16 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"No", name:"Nobelium", weight:"(259)", position: {x:17 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Lr", name:"Lawrencium", weight:"(262)", position: {x:18 ,y:10, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Rf", name:"Rutherfordium", weight:"(267)", position: {x:4 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Db", name:"Dubnium", weight:"(268)", position: {x:5 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Sg", name:"Seaborgium", weight:"(271)", position: {x:6 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Bh", name:"Bohrium", weight:"(272)", position: {x:7 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Hs", name:"Hassium", weight:"(270)", position: {x:8 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Mt", name:"Meitnerium", weight:"(276)", position: {x:9 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Ds", name:"Darmstadium", weight:"(281)", position: {x:10 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Rg", name:"Roentgenium", weight:"(280)", position: {x:11 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Cn", name:"Copernicium", weight:"(285)", position: {x:12 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Uut", name:"Unutrium", weight:"(284)", position: {x:13 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Fl", name:"Flerovium", weight:"(289)", position: {x:14 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Uup", name:"Ununpentium", weight:"(288)", position: {x:15 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Lv", name:"Livermorium", weight:"(293)", position: {x:16 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Uus", name:"Ununseptium", weight:"(294)", position: {x:17 ,y:7, z:0}, rotation: {x:0, y:0, z:0}},
  // {symbol:"Uuo", name:"Ununoctium", weight:"(294)", position: {x:18 ,y:7, z:0}, rotation: {x:0, y:0, z:0}}
];

halogens = ["F", "Cl", "Br", "I", "At"];
nobleGases = ["He", "Ne", "Ar", "Kr" ,"Xe", "Rn"];
alkalineEarthMetals = ["Be", "Mg", "Ca", "Sr" ,"Ba", "Ra"];
alkaliMetals = ["Li", "Na", "K", "Rb" ,"Cs", "Fr"];
lanthanoids = ["La", "Ce", "Pr", "Nd" ,"Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"];
actinoids = ["Ac", "Th", "Pa", "U" ,"Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];
transitionMetals = ["Sc", "Ti", "V", "Cr" ,"Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru" ,"Rh", "Pd", "Ag", "Cd", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Rf", "Db", "Sg", "Bh", "Hs", "Cn", "Mt", "Ds", "Rg"];
postTransitionMetals = ["Al", "Ga", "In", "Ti" ,"Sn", "Pb", "Bi", "Po", "Tl"];
metalloids = ["B", "Si", "Ge", "As" ,"Sb", "Te", "At"];
nonMetals = ["H", "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"];


periodicNumber = 1
let sceneElement = document.querySelector('a-scene');

for (const element in elements) {
  let tile = document.createElement('a-entity');
  let symbol = elements[element]["symbol"];

  if (nobleGases.includes(symbol)) {
    //Noble Gases
    tile.setAttribute('element', 'color', 'blue');
  } else if (alkalineEarthMetals.includes(symbol)) {
    //Alkaline earth metals
    tile.setAttribute('element', 'color', '#f9f618');
  } else if (halogens.includes(symbol)) {
    //Halogens
    tile.setAttribute('element','color', '#42c2f4')
  } else if (alkaliMetals.includes(symbol)) {
    //Alkali metals
    tile.setAttribute('element', 'color', '#e53057');
  } else if (lanthanoids.includes(symbol)) {
    //Lanthanoids
    tile.setAttribute('element', 'color', 'pink');
  } else if (actinoids.includes(symbol)) {
    //Actinoids
     tile.setAttribute('element', 'color', 'purple');
  } else if (transitionMetals.includes(symbol)) {
    //Transition Metals
    tile.setAttribute('element', 'color', 'brown');
  } else if (postTransitionMetals.includes(symbol)) {
    //Post-transition metals
    tile.setAttribute('element', 'color', 'teal');
  } else if (metalloids.includes(symbol)) {
    //Metalloids
    tile.setAttribute('element', 'color', 'lime');
  } else if (nonMetals.includes(symbol)) {
    //Nonmetals
    tile.setAttribute('element', 'color', '#41f4c4');
  } else {
    tile.setAttribute('element', 'color', 'gray');
  }

  tile.setAttribute('position', {
    x: (elements[element]["position"]["x"]),
    y: (elements[element]["position"]["y"]),
    z: elements[element]["position"]["z"]
  });

  tile.setAttribute('rotation', {
    x: elements[element]["rotation"]["x"],
    y: elements[element]["rotation"]["y"],
    z: elements[element]["rotation"]["z"]
  });

  tile.setAttribute('cursor-listener', '');
  sceneElement.appendChild(tile);

  // Possible refactoring
  let elementNumber = document.createElement('a-text');
  elementNumber.setAttribute('baseline','top');
  elementNumber.setAttribute('align','center');
  elementNumber.setAttribute('value',`${periodicNumber}`);
  elementNumber.setAttribute('position', {x: 0.3, y: 0.4, z: 0});
  tile.appendChild(elementNumber);

  let elementSymbol = document.createElement('a-text');
  elementSymbol.setAttribute('value', elements[element]["symbol"]);
  elementSymbol.setAttribute('align','center')
  tile.appendChild(elementSymbol);

  periodicNumber++;
