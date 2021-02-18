// obj1();
// obj2();
// obj3();
// obj4();


function obj1() {
    
    /*
        Skapa ett objekt "person" med uppgifter om Johan Rheborg: förnamn, efternamn, födelseår
        Skriv ut förnamnet
        Skriv ut hans fullständiga namn
    */

    let person = {firstName: "Johan", lastName: "Rheborg", age: 58};

    console.log(person.firstName);
    console.log(person.firstName, person.lastName);

}

function obj2() {

    /*
       Fortsätt bygg vidare på "person"
       Lägg till ett par rollkaraktärer till objektet "person" (Percy Nilegård, Farbror Barbro...)
       Lägg till adressuppgifter (street, city, country)

       Skriv ut info om Johan utifrån objektet "person":
            Johan är född år 1963
            Johan bor på gatan Kammakargatan 38 lgh 1401
            Johan har spelat 3 roller, bland annat Percy Nilegård
    */

   let person = {
       firstName: "Johan", 
       lastName: "Rheborg", 
       birthYear: 1963,
       age: 58,
       characters: ["Percy Nilegård", "Farbror Barbro", "Fredrik Schiller"],
       address: "Kammakargatan 38 lgh 1401"
    };

    console.log(`Johan is born ${person.birthYear}`);
    console.log(`Johan has played ${person.characters.length} roles. Among others as ${person.characters[1]}.`)

}


function obj3() {

    /*
       Skapa en array "paintings" med tre målningar (tre element)
       För varje målning finns info: namn, konstnär och året den blev målad
       Skriv ut antalet målningar: "Det finns 3st målningar i arrayen"
       Skriv ut info om den tredje målningen: "Pablo Picasso målade Guernica år 1937"
       Loopa igenom alla målningar med "for of" och skriv ut all info i tabellform
       Tips: använd "padEnd" för att skriva ut tabellen snyggt
    */

    let paintings = [
        {name: "The scary place", artist: "The unknown one", year: 1578}, 
        {name: "The pink place", artist: "The scary one", year: 1689}, 
        {name: "The unknown place", artist: "The pink one", year: 1790}
    ];

    console.log(`There is ${paintings.length} paintings in the array.`);
    console.log(`${paintings[2].artist} created ${paintings[2].name} year ${paintings[2].year}.`);

    for (const painting of paintings) {
        console.log(painting.name.padEnd(20), painting.artist.padEnd(20), painting.year);
    }
}

function obj4() {

    /*
       Skapa ett objekt "skriet" (av Edvard Munch 1893). Lägg till den i "paintings" mha "push".
       Skriv ut dess år mha variablen "paintings" (alltså 1893) 
       Använd "pop" flera gånger för att plocka bort de tre sista målningarna
       Skriv ut antalet målningar i arrayen 
    */

   let paintings = [
    {name: "The scary place", artist: "The unknown one", year: 1578}, 
    {name: "The pink place", artist: "The scary one", year: 1689}, 
    {name: "The unknown place", artist: "The pink one", year: 1790}
];

    let skriet = {name: "Skriet", artist: "Edvard Munch", year: 1893};
    paintings.push(skriet);
    console.log(paintings[paintings.length - 1].year);

    paintings.pop();
    paintings.pop();
    paintings.pop();

    console.log(paintings.length);


}

