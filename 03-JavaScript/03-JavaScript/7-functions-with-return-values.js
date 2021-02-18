// funRet1();
// funRet2();
// funRet3();
// funRet4();
// funRet5();
// funRetExtra1();
// funRetExtra2();

function funRet1() {

    /*
        Skriv en metod "superImportant" som returnerar stjärnor och texten med stora bokstäver.

        Om den anropas såhär:

            let text = superImportant("Itch");
            console.log(text);

        Så ska följande skrivas ut:

            ****** ITCH ******
    */

    function superImportant(someText) {
        return `****** ${someText.toUpperCase()} ******`;
    }

    let text = superImportant("atjoooo!");
    console.log(text);
}

function funRet2() {
    /*
    Modifiera "superImportant" så det går att ange om texten ska vara stor eller ej:

    Dessa anrop:

        console.log( superImportant("Service now",true) );
        console.log( superImportant("Service now",false) );
        console.log( superImportant("What does the fox says?",false) );
        console.log( superImportant("What does the fox says?",true) );

    Ska skriva ut:

        ****** SERVICE NOW ******
        ****** Service now ******
        ****** What does the fox says? ******
        ****** WHAT DOES THE FOX SAYS? ******

    */

   function superImportant(someText, bool) {
    return bool ? `****** ${someText.toUpperCase()} ******` : `****** ${someText} ******`;
}

let text = superImportant("atjoooo!", false);
console.log(text);

let text2 = superImportant("host host", true);
console.log(text2);
}



function funRet3() {
    /*
    Skriv en metod "laggTillTusen" som returnerar ett värde som är tusen högre än det du skickar in

    Om den anropas såhär:

        let mittNummer = laggTillTusen(18);
        console.log(mittNummer);

    Så ska följande skrivas ut:

        1018
    */

    function laggTillTusen(nummer) {
        return nummer += 1000;
    }

    console.log(laggTillTusen(33));
}

function funRet4() {
    /*
    Skriv en metod "addNumbers" som returnerar summan av två tal

    Om den anropas såhär:

        let summa = addNumbers(3, 4);
        console.log(summa);

    Så ska följande skrivas ut:

        7
    
    */

    function addNumbers(x, y) {
        return x + y;
    }

    console.log(addNumbers(3, 4));
}

function funRet5() {
    /*
    Skriv en metod "isMyndig" som returnerar true eller false, beroende på om personen är myndig

    Om den anropas såhär:

        let susansAge = 22;
        let myndig = isMyndig(susansAge);
        if (myndig == true) {
            console.log("Susan är myndig");
        } else {
            console.log("Susan är INTE myndig");
        }

    Så ska följande skrivas ut:

        Susan är myndig


    Extra: skapa metoden isMyndig på enklast sätt mha "=>"
   

    */

    let isMyndig = age => age > 17;
    
    let susansAge = 22;
    let myndig = isMyndig(susansAge);
    if (myndig == true) {
        console.log("Susan är myndig");
    } else {
        console.log("Susan är INTE myndig");
    }


}

// -------- EXTRA UPPGIFTER -----------------------------------------

function funRetExtra1() {


    /*
    Skriv en metod "timeUntilRetirement" som returnerar tid till pension. 
    Om du skickar in ett värde som är större än 65 så returnera 0.

    Dessa anrop:

        console.log(`Antal år till pension: ${timeUntilRetirement(43)}`);
        console.log(`Antal år till pension: ${timeUntilRetirement(20)}`);
        console.log(`Antal år till pension: ${timeUntilRetirement(68)}`);
        console.log(`Antal år till pension: ${timeUntilRetirement(100)}`);

    Ska skriva ut:

        Antal år till pension: 22
        Antal år till pension: 45
        Antal år till pension: 0
        Antal år till pension: 0
    */

    function timeUntilRetirement(age) {
     return `Years until retirement: ${age > 65 ? 0 : 65 - age}`;
    }

    console.log(timeUntilRetirement(43));
    console.log(timeUntilRetirement(68));
    console.log(timeUntilRetirement(0));



}

function funRetExtra2() {

    /*
    I denna uppgift ska du skapa två metoder "beräknaMoms" och "skrivUtProduktInfo"
    Syftet är att separera logik. "beräknaMoms" ska inte skriva ut något utan bara vara ansvarig för att beräkna momsen.
    Tips: Du kan låta "skrivUtProduktInfo" anropa "beräknaMoms"

    Detta:

        skrivUtProduktInfo("tidning", 1000);
        skrivUtProduktInfo("restaurangbesök", 1000);
        skrivUtProduktInfo("flyg", 1000);
        skrivUtProduktInfo("falafel", 1000);
        skrivUtProduktInfo("hipsteröl", 1000);

    Ska ge:

        Momsen för en/ett tidning som kostar 1000kr är 60kr
        Momsen för en/ett restaurangbesök som kostar 1000kr är 120kr
        Momsen för en/ett flyg som kostar 1000kr är 60kr
        Momsen för en/ett falafel som kostar 1000kr är 250kr
        Momsen för en/ett hipsteröl som kostar 1000kr är 250kr
    */

    function beräknaMoms(produkt, pris){
        let moms;
      switch (produkt) {
          case "tidning":
              moms = pris * 0.06;
              break;
              case "flyg":
                moms = pris * 0.06;
                break;
              case "falafel":
                  moms = pris * 0.25;
                  break;
                  case "hipsteröl":
                  moms = pris * 0.25;
                  break;
                  case "restaurangbesök":
                      moms = pris * 0.12;
                      break;
      
          default:
              break;
      }
return moms;
    }

    function skrivUtProduktInfo(produkt, pris){
        let moms = beräknaMoms(produkt, pris);
        console.log(`Momsen för en/ett ${produkt} som kostar ${pris} kr är ${moms} kr.`)
    }

    skrivUtProduktInfo("tidning", 1000);
    skrivUtProduktInfo("restaurangbesök", 1000);
    skrivUtProduktInfo("flyg", 1000);
    skrivUtProduktInfo("falafel", 1000);
    skrivUtProduktInfo("hipsteröl", 1000);

}