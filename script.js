// 1 KROK
// Najskor si vytvorime premenne pre dve casti straanky:
// Pomocou document.getElementById() na ne ziskame referencie.

// newColorButtonElement – tlacidlo
const newColourBtnElement = document.getElementById('new-colour-button')

// currentColorElement – <span> s hex kodom
const currentColourElement= document.getElementById('current-colour')

// 3 KROK
// Dalej vytvorime pole hex hodnot: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// na poradi nezalezi
const hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

// 4 KROK
// Potrebujeme funkciu, ktora vrati nahodny hex znak:
// z pola hexValues vrati jeden nahodny znak
function getRandomHexValue(){
    const randomIndexPosition = Math.floor(
        // Math.random() generuje nahodne cislo 0-1 (vylucena1)
        // hexValues.length urcuje dlzku pola = 16 (znakov 0-9 A-F)
        // dokopy vrati nahodne cislo 0-15.9999
        Math.random() * hexValues.length

        // zabalime do Math.floor() ktora nam to zaokruhli 0-15
        // presne ako pouzivame indexy v hexValues
    )
    // vysledok sa ulozi do premennej RandomHexVAlue

    // vyberie prvok pola - randIndPosition = 10 vrati 'A'
    const RandomHexValue = hexValues[randomIndexPosition];

    // funkcia vrati random hodnotu
    return RandomHexValue;
}

// 5 KROK
// Potom vytvorime funkciu, ktora z tychto znakov vytvori 
// cely hex retazec (6 znakov):
// stringLength - kolkokrat zavola getRandomHexValue()
function getRandomHexString(stringLength){
    // prazdny retazec na ukladanie znakov
    let hexString = '';
    // cyklus sa opakuje stringLength krat
    for (let i = 0; i < stringLength; i++){
        // getRandomHexValue vrati nahodny znak sa prida na koniec retazca
        hexString += getRandomHexValue();
    }
        
    // vrati vytvoreny retazec
    return hexString;
}

// 2 KROK
// Potom pridame event listener na tlacidlo a alert overi, ci to funguje
newColourBtnElement.addEventListener('click', function() {
    //alert('ok')
    //alert(randomHexString);
    
    // 6 KROK Ked pouzivatel klikne na tlacidlo, zavolame tuto funkciu:
    // generovanie hex retazca - definujem jeho dlzku (6)
    const randomHexString = '#' + getRandomHexString(6);
    
    // zmena farby pozadia - jednoriadkove css
    // element body nastavi farbu pozadia na zaklade vygenreovaneho retazca
    document.body.style.setProperty(
        'background-color',
        randomHexString
    );

    // zobrazenie aky kod vygenerovalo #123abc
    // cez nase id current-colour
    currentColourElement.textContent = randomHexString;
});
