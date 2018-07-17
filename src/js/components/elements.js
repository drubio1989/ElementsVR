const elements = [
  {symbol: "H", name:'Hydrogen', weight: "1.00794"}
  // {symbol:"He", name:"Helium", weight:"4.002602"},
  // {symbol:"Li", name:"Lithium", weight:"6.941"},
  // {symbol:"Be", name:"Beryllium", weight:"9.012182"},
  // {symbol:"B", name:"Boron", weight:"10.811"},
  // {symbol:"C", name:"Carbon", weight:"12.0107"},
  // {symbol:"N", name:"Nitrogen", weight:"14.0067"},
  // {symbol:"O", name:"Oxygen", weight:"15.9994"},
  // {symbol:"F", name:"Fluorine", weight:"18.9984032"},
  // {symbol:"Ne", name:"Neon", weight:"20.1797"},
  // {symbol:"Na", name:"Sodium", weight:"22.98976..."},
  // {symbol:"Mg", name:"Magnesium", weight:"24.305"},
  // {symbol:"Al", name:"Aluminium", weight:"26.9815386"},
  // {symbol:"Si", name:"Silicon", weight:"28.0855"},
  // {symbol:"P", name:"Phosphorus", weight:"30.973762"},
  // {symbol:"S", name:"Sulfur", weight:"32.065"},
  // {symbol:"Cl", name:"Chlorine", weight:"35.453"},
  // {symbol:"Ar", name:"Argon", weight:"39.948"},
  // {symbol:"K", name:"Potassium", weight:"39.948"},
  // {symbol:"Ca", name:"Calcium", weight:"40.078"},
  // {symbol:"Sc", name:"Scandium", weight:"44.955912"},
  // {symbol:"Ti", name:"Titanium", weight:"47.867"},
  // {symbol:"V", name:"Vanadium", weight:"50.9415"},
  // {symbol:"Cr", name:"Chromium", weight:"51.9961"},
  // {symbol:"Mn", name:"Manganese", weight:"54.938045"},
  // {symbol:"Fe", name:"Iron", weight:"55.845"},
  // {symbol:"Co", name:"Cobalt", weight:"58.933195"},
  // {symbol:"Ni", name:"Nickel", weight:"58.6934"},
  // {symbol:"Cu", name:"Copper", weight:"63.546"},
  // {symbol:"Zn", name:"Zinc", weight:"65.38"},
  // {symbol:"Ga", name:"Gallium", weight:"69.723"},
  // {symbol:"Ge", name:"Germanium", weight:"72.63",
  // {symbol:"As", name:"Arsenic", weight:"74.9216",
  // {symbol:"Se", name:"Selenium", weight:"78.96",
  // {symbol:"Br", name:"Bromine", weight:"79.904",
  // {symbol:"Kr", name:"Krypton", weight:"83.798",
  // {symbol:"Rb", name:"Rubidium", weight:"85.4678",
  // {symbol:"Sr", name:"Strontium", weight:"87.62",
  // {symbol:"Y", name:"Yttrium", weight:"88.90585",
  // {symbol:"Zr", name:"Zirconium", weight:"91.224",
  // {symbol:"Nb", name:"Niobium", weight:"92.90628",
  // {symbol:"Mo", name:"Molybdenum", weight:"95.96",
  // {symbol:"Tc", name:"Technetium", weight:"(98)",
  // {symbol:"Ru", name:"Ruthenium", weight:"101.07",
  // {symbol:"Rh", name:"Rhodium", weight:"102.9055",
  // {symbol:"Pd", name:"Palladium", weight:"106.42",
  // {symbol:"Ag", name:"Silver", weight:"107.8682",
  // {symbol:"Cd", name:"Cadmium", weight:"112.411",
  // {symbol:"In", name:"Indium", weight:"114.818",
  // {symbol:"Sn", name:"Tin", weight:"118.71",
  // {symbol:"Sb", name:"Antimony", weight:"121.76",
  // {symbol:"Te", name:"Tellurium", weight:"127.6",
  // {symbol:"I", name:"Iodine", weight:"126.90447",
  // {symbol:"Xe", name:"Xenon", weight:"131.293",
  // {symbol:"Cs", name:"Caesium", weight:"132.9054",
  // {symbol:"Ba", name:"Barium", weight:"132.9054",
  // {symbol:"La", name:"Lanthanum", weight:"138.90547",
  // {symbol:"Ce", name:"Cerium", weight:"140.116",
  // {symbol:"Pr", name:"Praseod,ymium", weight:"140.90765",
  // {symbol:"Nd", name:"Neod,ymium", weight:"144.242"},
  // {symbol:"Pm", name:"Promethium", weight:"(145)"},
  // {symbol:"Sm", name:"Samarium", weight:"150.36"},
  // {symbol:"Eu", name:"Europium", weight:"151.964"},
  // {symbol:"Gd", name:"Gadolinium", weight:"157.25"},
  // {symbol:"Tb", name:"Terbium", weight:"158.92535"},
  // {symbol:"Dy", name:"Dysprosium", weight:"162.5"},
  // {symbol:"Ho", name:"Holmium", weight:"164.93032"},
  // {symbol:"Er", name:"Erbium", weight:"167.259"},
  // {symbol:"Tm", name:"Thulium", weight:"168.93421"},
  // {symbol:"Yb", name:"Ytterbium", weight:"173.054"},
  // {symbol:"Lu", name:"Lutetium", weight:"174.9668"},
  // {symbol:"Hf", name:"Hafnium", weight:"178.49"},
  // {symbol:"Ta", name:"Tantalum", weight:"180.94788"},
  // {symbol:"W", name:"Tungsten", weight:"183.84"},
  // {symbol:"Re", name:"Rhenium", weight:"186.207"},
  // {symbol:"Os", name:"Osmium", weight:"190.23"},
  // {symbol:"Ir", name:"Iridium", weight:"192.217"},
  // {symbol:"Pt", name:"Platinum", weight:"195.084"},
  // {symbol:"Au", name:"Gold", weight:"196.966569"},
  // {symbol:"Hg", name:"Mercury", weight:"200.59"},
  // {symbol:"Tl", name:"Thallium", weight:"204.3833"},
  // {symbol:"Pb", name:"Lead", weight:"207.2"},
  // {symbol:"Bi", name:"Bismuth", weight:"208.9804"},
  // {symbol:"Po", name:"Polonium", weight:"(209)"},
  // {symbol:"At", name:"Astatine", weight:"(210)"},
  // {symbol:"Rn", name:"Radon", weight:"(222)"},
  // {symbol:"Fr", name:"Francium", weight:"(223)"},
  // {symbol:"Ra", name:"Radium", weight:"(226)"},
  // {symbol:"Ac", name:"Actinium", weight:"(227)"},
  // {symbol:"Th", name:"Thorium", weight:"232.03806"},
  // {symbol:"Pa", name:"Protactinium", weight:"231.0588"},
  // {symbol:"U", name:"Uranium", weight:"238.02891"},
  // {symbol:"Np", name:"Neptunium", weight:"(237)"},
  // {symbol:"Pu", name:"Plutonium", weight:"(244)"},
  // {symbol:"Am", name:"Americium", weight:"(243)"},
  // {symbol:"Cm", name:"Curium", weight:"(247)"},
  // {symbol:"Bk", name:"Berkelium", weight:"(247)"},
  // {symbol:"Cf", name:"Californium", weight:"(251)"},
  // {symbol:"Es", name:"Einstenium", weight:"(252)"},
  // {symbol:"Md", name:"Mendelevium", weight:"(258)"},
  // {symbol:"No", name:"Nobelium", weight:"(259)"},
  // {symbol:"Lr", name:"Lawrencium", weight:"(262)"},
  // {symbol:"Rf", name:"Rutherfordium", weight:"(267)"},
  // {symbol:"Db", name:"Dubnium", weight:"(268)"},
  // {symbol:"Sg", name:"Seaborgium", weight:"(271)"},
  // {symbol:"Bh", name:"Bohrium", weight:"(272)"},
  // {symbol:"Hs", name:"Hassium", weight:"(270)"},
  // {symbol:"Mt", name:"Meitnerium", weight:"(276)"},
  // {symbol:"Ds", name:"Darmstadium", weight:"(281)"},
  // {symbol:"Rg", name:"Roentgenium", weight:"(280)"},
  // {symbol:"Cn", name:"Copernicium", weight:"(285)"},
  // {symbol:"Uut", name:"Unutrium", weight:"(284)"},
  // {symbol:"Fl", name:"Flerovium", weight:"(289)"},
  // {symbol:"Uup", name:"Ununpentium", weight:"(288)"},
  // {symbol:"Lv", name:"Livermorium", weight:"(293)"},
  // {symbol:"Uus", name:"Ununseptium", weight:"(294)"},
  // {symbol:"Uuo", name:"Ununoctium", weight:"(294)"}
];

periodicNumber = 1
let sceneElement = document.querySelector('a-scene');

for (const element in elements) {
  // let tile = document.createElement('a-entity');
  let number = (periodicNumber).toString();
  let symbol = elements[element]["symbol"];
  let name = elements[element]["name"];
  let weight = elements[element]["weight"];

  // Create the base panel
  let elementPanel = document.createElement('a-plane');
  elementPanel.setAttribute('color', '#C70039');
  elementPanel.setAttribute('height', '3');
  elementPanel.setAttribute('width', '3');
  elementPanel.setAttribute('element-info', '');
  sceneElement.appendChild(elementPanel);

  //Create the tile information
  let weightInfo = document.createElement('a-text');
  weightInfo.setAttribute('value', weight);
  weightInfo.setAttribute('align','center');
  weightInfo.setAttribute('baseline', 'bottom');
  weightInfo.setAttribute('position', {x: 0, y:-1.25, z:0 });
  elementPanel.appendChild(weightInfo);

  let nameInfo = document.createElement('a-text');
  nameInfo.setAttribute('value', name);
  nameInfo.setAttribute('align','center');
  nameInfo.setAttribute('position', {x: 0, y:-0.25, z:0 });
  elementPanel.appendChild(nameInfo);

  let symbolInfo = document.createElement('a-text');
  symbolInfo.setAttribute('value', symbol);
  symbolInfo.setAttribute('align', 'center');
  symbolInfo.setAttribute('height', '5');
  elementPanel.appendChild(symbolInfo);

  let numberInfo = document.createElement('a-text');
  numberInfo.setAttribute('value', number);
  numberInfo.setAttribute('align', 'center');
  numberInfo.setAttribute('baseline', 'top');
  numberInfo.setAttribute('position', {x: 0, y:1.25, z:0 });
  elementPanel.appendChild(numberInfo);

  periodicNumber++;
}
