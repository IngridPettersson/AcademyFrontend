// cond1();
// cond2();
// cond3();
// cond4();
// cond5();
// cond6();
// cond7();
// cond8();
// cond9();


function cond1() {

    /*
	    Skapa en variabel shoeMaria och sätt till 36
	    Skapa en variabel shoeAli och sätt till 42
	    Skriv en if-sats som kollar om de har samma skostorlek (skriv ut olika texter)
	    Experimentera med att ändra värden på "shoeMaria" och "shoeAli"
    */

    let shoeMaria = 36;
    let shoeAli = 42;

    if (shoeMaria == shoeAli){
        console.log(`Maria and Ali have the same shoe size!`)
    }
    else {
        console.log(`Maria and Ali don't have the same shoe size.`)
    }
}

function cond2() {

    /*
      	Skapa en variabel shoeMaria 
	    Skapa en variabel shoeAli 

        Beroende på vilken skostorlek som är störst skriv ut

        "Ali har större fötter än Maria"    
        "Maria har större fötter än Ali"
    */

   let shoeMaria = 36;
   let shoeAli = 42;

   if (shoeMaria > shoeAli){
       console.log("Maria har större fötter än Ali");
   }
   else {
       console.log("Ali har större fötter än Maria");
   }
}

function cond3() {

    /*
	    Samma som sist, men kolla även om de har samma skostorlek

        "Ali har större fötter än Maria"
        "Maria har större fötter än Ali"
        "De har samma skostorlek"

    */

   let shoeMaria = 42;
   let shoeAli = 42;

   if (shoeMaria > shoeAli){
       console.log("Maria har större fötter än Ali");
   }
   else if (shoeMaria == shoeAli){
       console.log("De har samma skostorlek");
   }
   else
   {
       console.log("Ali har större fötter än Maria");
   }
}

function cond4() {

    /*
        Skapa tre variabler: shoeMaria, shoeAli, bigFoot 

	    Skriv en if-sats som kolla om bigFoot har större skostorlek än både Ali och Maria
    */

    let shoeMaria = 36;
    let shoeAli = 42;
    let bigFoot = 65;

    if (bigFoot > shoeAli && bigFoot > shoeMaria) {
        console.log(`bigFoot indeed has biggest shoes!`)
    }
    else {
        console.log(`Seems like bigFoot doesn't have that big feet after all...`)
    }

}

function cond5() {

    /*
	    Skriv en ifsats som kollar om någon av Ali, Maria eller BigFoot har en skostorlek som är större än 50

        Extra: 
        1) lös denna uppgift genom att skapa en egen metod "someHigh" som tar flera parametrar. Använd sedan den såhär:

            if (someHigh(50, bigFoot, shoeAli, shoeMaria))
                console.log("Någon av de tre har riktigt stora fötter");

        2) lös denna uppgift med ".some"
        
    */

    // if (shoeAli > 50 || shoeMaria > 50 || bigFoot > 50) {
    //     console.log(`One of you really have large shoes!!!!!`)
    // }

    let shoeMaria = 36;
    let shoeAli = 42;
    let bigFoot = 65;

//     function someHigh(bigSize, ...variables){

//         for (const size of variables) {
//             if (size > bigSize){
//                 console.log(`One of you really have large shoes!!!!!`);
//             }
//         }
//     }
// someHigh(50, shoeMaria, shoeAli, bigFoot);

let shoeSizeArr = [shoeMaria, shoeAli, bigFoot]
shoeSizeArr.some(x => x > 50) ? console.log(`Someone is big`) : console.log(`No big`);


}


function cond6() {

    /*
	    Skapa en variabel "favoriteVegetable" och sätt den till "kålrot"
	    Använd en switch-sats för att kolla värdet på "favoriteVegetable" och svara på olika sätt
	    Om t.ex värdet av "favoriteVegetable" är "majrova" skriv "Passar till falafel"
    */

    let favoritgrönsak = "kålrot";
    favoritgrönsak = "gurka";

    switch (favoritgrönsak) {
        case "majrova":
            console.log("Passar bra till falafel.");
            break;
            case "gurka":
                console.log("Bör ätas som mast o khiyar med MYCKET vitlök!");
                break;
                case "kålrot":
                    console.log("Vem har kålrot som favoritgrönsak??");
            
            break;
    
        default:
            break;
    }
}

function cond7() {

    /*
	    Samma som sist men skapa först en variabel "answer"
	    Istället för att använda "console.log" inuti switch-satsen så sätt variabel "answer"
	    Använd tillslut "console.log" för att skriva ut värdet av "answer"
    */

    let answer;

    let favoritgrönsak = "kålrot";
    favoritgrönsak = "gurka";

    switch (favoritgrönsak) {
        case "majrova":
            answer = "Passar bra till falafel.";
            break;
            case "gurka":
                answer = "Bör ätas som mast o khiyar med MYCKET vitlök!";
                break;
                case "kålrot":
                    answer = "Vem har kålrot som favoritgrönsak??";
            
            break;
    
        default:
            break;
        }
        console.log(answer);


}

function cond8() {


    /*
	    Jämför == och === i en ifsats
	    Testa med en ifsats om 3=="3" är sant
	    Testa med en ifsats om 3==="3" är sant
    */

    if (3 == "3"){
        console.log("Det är sant.");
    }

    if (3 === "3") {
        console.log("Det är också sant.");
    }
    else {
        console.log("Det är inte sant.");
    }
}

function cond9() {

    /*
	    Övning i "ternary operator"
	    Skapa en variabel a och sätt den till 13*13
	    Skapa en variabel b och sätt den till 169
	    Använd "ternary operator" för att kolla om de är lika. Lägg svaret (strängen "lika" eller "olika") i en variabel "result"
	    Skriv ut result
    */

    let a = 13 * 13;
    let b = 169;

    let result = a == b ? "lika" : "olika";
    console.log(result);
}