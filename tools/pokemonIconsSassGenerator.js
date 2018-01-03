const padToThree = number => ('00' + number).slice(-3);
const spriteList = [];

const mega = [
  3, 9, 15, 18, 65, 80, 94, 115, 127, 130, 142, 181, 208, 212, 214, 229, 248,
  254, 257, 260, 282, 302, 303, 306, 308, 310, 319, 323, 334, 354, 359, 362,
  373, 376, 380, 381, 382, 383, 384, 428, 445, 448, 460, 475, 531, 719
];

const megaXY = [
  6, 150
];

const alolan = [
  19, 20, 26, 27, 28, 37, 38, 50, 51, 52, 53, 74, 75, 76, 88, 89, 103, 105
];

const cosplayNumber = 25;
const cosplay = [
  'a', 'b', 'c', 'd', 'e', 'f'
];
const cosplayLR = [
  'a', 'e'
];

const defaultUnknown = 'f';
const unknownNumber = 201;
const unknown = [
  'a', 'b', 'c', 'd', 'e', 'excl', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 'ques', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const unknownLR = [
  'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'ques',
  'r', 's', 't', 'v', 'z'
];

const castformNumber = 351;
const castform = [
  'a', 'b', 'c'
];
const castformLR = [
  'b'
];

const deoxysNumber = 386;
const deoxysForms = [
  'a', 'b', 'c'
];
const deoxysFormsLR = [];

const burmyNumber = 412;
const burmyForms = [
  'a', 'b'
];
const burmyFormsLR = [];

const wormadamNumber = 413;
const wormadamForms = [
  'a', 'b'
];
const wormadamFormsLR = [];

const shellosNumber = 422;
const shellosForms = [
  'a'
];
const shellosFormsLR = [];

const gastrodonNumber = 423;
const gastrodonForms = [
  'a'
];
const gastrodonFormsLR = [];

const lr = [
  35, 36, 39, 40, 61, 62, 99, 159, 173, 174, 186, 215, 216, 315, 335, 336, 359,
  377, 389, 406, 407
];

function addVariants(baseString, isLR) {
    spriteList.push(baseString);
    if (isLR) {
      spriteList.push(baseString + '-r');
    }
    spriteList.push(baseString + '-shiny');
    if (isLR) {
      spriteList.push(baseString + '-r-shiny');
    }
}

function addForms(i, forms, formsLR) {
  forms.forEach((form) => {
    addVariants(padToThree(i) + '-' + form, formsLR.includes(form));
  });
}

function addUnknown(i) {
  unknown.forEach((unknown) => {
    if (unknown === defaultUnknown) {
      addVariants(padToThree(i), true);
      return;
    }
    addVariants(padToThree(i) + '-' + unknown, unknownLR.includes(unknown));
  });
}

for(let i = 1; i <= 806; i++) {
  if (i === unknownNumber) {
    addUnknown(i);
  } else {
    addVariants(padToThree(i), lr.includes(i));
    switch(i) {
      case cosplayNumber:
        addForms(i, cosplay, cosplayLR);
        break;
      case castformNumber:
        addForms(i, castform, castformLR);
        break;
      case deoxysNumber:
        addForms(i, deoxysForms, deoxysFormsLR);
        break;
      case burmyNumber:
        addForms(i, burmyForms, burmyFormsLR);
        break;
      case wormadamNumber:
        addForms(i, wormadamForms, wormadamFormsLR);
        break;
      case shellosNumber:
        addForms(i, shellosForms, shellosFormsLR);
        break;
      case gastrodonNumber:
        addForms(i, gastrodonForms, gastrodonFormsLR);
        break;
      default:
        break;
    }
    if (mega.includes(i)) {
      addVariants(padToThree(i) + '-mega', lr.includes(i));
    }
    if (megaXY.includes(i)) {
      addVariants(padToThree(i) + '-mega-x', false);
      addVariants(padToThree(i) + '-mega-y', false);
    }
    if (alolan.includes(i)) {
      addVariants(padToThree(i) + '-alolan', false);
    }
  }
}

let i = 0;
let rowSize = 32;

spriteList.forEach((name) => {
  console.log('.pokemon-icon-' + name + ' {\n    background-position: -' + ((i % rowSize) * 40) + 'px -' + ((Math.floor(i/rowSize)) * 30) + 'px;\n}\n');
  i++;
});
