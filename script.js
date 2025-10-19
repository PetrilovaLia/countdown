// výber html prvkov - id prvkov
// js získa prístup, aby do nich vedel vložiť čísla
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

// nastavenie cieľového dátumu
// newDate vytvorí objekt dátumu - konkrétny deň a čas
// getTime() prevedie dátum na počet milisekúnd - Unix time 1970
// vraj sa s tým lepšie počíta
const targetDate = new Date('October 31 2025 00:00:00').getTime();

// bude sa znovu a znovu vykonávať - každú sekundu
function timer(){
    const currentDate = new Date().getTime();
    // koľko milisekúnd zostáva do cieľového dátumu
    const distance = targetDate - currentDate;

    // milisekundy na dni, hodiny, minuty, sekundy
    // math.floor zaokrúhli výsledok nadol, aby sme namali des. čísla
    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    // % 24 iba zvyšok po celých dňoch
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    // % 60 zobrazí 0 až 59 minút
    const minutes = Math.floor(distance / 1000 / 60 ) % 60;
    // 0 až 59 sekúnd
    const seconds = Math.floor(distance / 1000 ) % 60;

    // console.log(days + ':' + hours + ':' + minutes + ':' + seconds)

    // premenná sa vloží do html prvku so zodpovedajúcim ID
    // <h2 id="days"></h2> java napíše Days.innerHTML = 5; a na stránke vidíme číslo 5
    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

setInterval(timer, 1000);
