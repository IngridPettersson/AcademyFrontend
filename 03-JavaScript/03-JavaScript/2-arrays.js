arr1();
// arr2();
// arr3();
// arr4();
// arr5();
// arr6();
// arr7();
// arr8();




function arr1() {

    /*
        I---------I---------I---------I
        0         1         2         3
    
        Skapa en array "cities" med städerna Stockholm, Göteborg och New York
        Skriv ut det första, andra och tredje elementet i arrayen
        Vad händer om du försöker komma åt det fjärde elementet (som inte finns)?
    */

    let cities = ['Björknäs', 'Moshi', 'Dar Es Salaam'];
    // console.log(cities[0]);

    cities.forEach(city => {
        console.log(city);
    });


    // let emptyArr = [];
    // console.log(emptyArr);

    // Extra: skriv ut det andra elementet ("Göteborg") två gånger
    // Extra: Skriv ut de två första elementen vid sidan av varandra ("StockholmGöteborg")
}

function arr2() {

    /*
        Skapa en array "cities" med städerna Stockholm, Göteborg och New York
	    Lägg till en till stad "Krakow" mha "push"
	    Skriv ut det fjärde elementet i "cities" ("Krakow")
    */

    //FRÅGA:
    // Varför måste jag skapa en ny variabel newArr i stället för att bara ändra värdet på cities direkt?
   let cities = ['Stockholm', 'Göteborg', 'Dar Es Salaam'];
   cities.push('Krakow');
   cities.push('Moshi');

   console.log(cities);
//    console.log(cities.length);
   console.log(cities.length);

   console.log(cities.length - 1);
   console.log(cities[cities.length - 1]);


    // Extra: använd push för att lägga till två till städer. Skriv ut den sista staden i listan.
}


function arr3() {
    /*
	    Skapa en array "cities" med städerna Stockholm, Göteborg och New York
	    Lägg till en till stad "Krakow" mha "push"
	    Lägg till ytterligare en till stad "Berlin" mha "push" 
	    Skriv ut antalet städer i arrayen
	    Plocka ut den andra och fjärde staden i listan. Skriv ut "Mina favoritstäder är Göteborg och Krakow"
    */

   let cities = ['Stockholm', 'Göteborg', 'Dar Es Salaam'];
   let newArr = cities.push('Moshi');
   newArr = cities.push('Arusha');
   console.log(cities.length);
   console.log(`My favourite cities are ${cities[2]} and ${cities[3]}.`);

}

function arr4() {

    /*
	    Skapa en array "cities" med städerna Stockholm, Göteborg och New York
	    Använd "pop" för att plocka ut den sista staden och placera i en variabel "poppedCity"
	    Skriv ut längen av listan (2)
	    Skriv ut den poppade staden (New York)
	    Använd cities.length för att plocka ut det sista elementet i listan (Göteborg)
    */

    let cities = ['Moshi', 'Dar Es Salaam', 'Arusha', 'Mwanza', 'Bongoyo'];
    let poppedCity = cities.pop();
    console.log(poppedCity);
    console.log(cities.length);
    console.log(cities[cities.length - 1]);
}

function arr5() {

    /*
	    Skapa en array "numbers" med talen 5,66,777,12
	    Skriv ut antalet nummer i listan (4)
	    Skriv ut det tredje numret i listan (777)
    */

    let numbers = [5, 66, 777, 12];
    console.log(numbers.length);
}

function arr6() {

    /*
	    Skapa en array "numbers" med talen 5,66,777,12
        Sortera talen genom att skriva: numbers.sort();
	    Sortera talen genom att skriva: numbers.sort( (a,b) => a-b );
	    Skriv ut värdet av "numbers"
        Jämför de två resultaten
    */
   let numbers = [5, 66, 777, 12];

    numbers.sort();
    console.log(numbers);

    numbers.sort( (a,b) => a-b );
    console.log(numbers);
}

function arr7() {

    /*
        Sortera listan baklänges
    */
   let numbers = [5, 66, 777, 12];
numbers.sort( (a,b) => a-b );
numbers.reverse();
console.log(numbers);

}

function arr8() {

    /*
	    Skapa en array "numbers" med talen 5,66,777,12
	    Vänd på ordningen mha "reverse"
	    Skriv ut arrayen ([ 12, 777, 66, 5 ])
    */
   let numbers = [5, 66, 777, 12];
numbers.reverse();
console.log(numbers);
}