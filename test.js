// let player1 = [1];
// let player2 = [2];

const singleButton = document.getElementById("singleButton");
const yearFormed = document.getElementById("yearFormed")
// const dealGame = () => {

//     if (player1 > player2){
//         // pushFunc()
//         console.log ('Player 1 you win')
//     }
//     else if (player2 > player1){
//         // pushFunc()
//         console.log ('Player 2 you win')
//     }
// }


class Card {
    constructor(name){
        // super(name, singleUk)
        this._name = name;
        
    }
    get name(){
        return this._name
    }
    
}

class battleOfTheBands extends Card {
    constructor(_name, singleUk){
        super(_name);
        this._singleUk = singleUk;
        this._year = year;
        // this.members = members;
        // this.albumNum = albumNum;

    }
}

// const player1deck = [
    // journey = new Card('Journey', 6),
    // ledZep = new Card('Led Zepplin', 21),
    // kiss = new Card('KISS', 3),
    // mCrue = new Card('Motley Crue', 20),
    // vHalen = new Card('Van Halen', 4 ),
    // nRanger = new Card('Night Ranger', 2),
    // hScarem = new Card('Harem Scarem', 0),
    // foreigner = new Card('Foreigner', 1),
    // ratt = new Card('RATT', 30),
    // defLep = new Card('Def Leppard', 4),
    // kansas = new Card('Kansas', 15),
    // chicago = new Card('Chicago', 20),
    // heart = new Card('Heart', 1),
    // winger = new Card('Winger', 17),
    // europe = new Card('Europe', 1)
// ]
// console.log (player1deck);

// const player2deck = [
//     acdc = new Card('ACDC', 12),
//     aerosmith = new Card('Aerosmith', 4),
//     wSnake = new Card('Whitesnake', 1),
//     iMaiden = new Card('Iron Maiden', 5),
//     bJovi = new Card('Bon Jovi', 1),
//     Survivor = new Card('Survivor', 2),
//     reoSpeed = new Card('REO Speedwagon', 1),
//     Toto = new Card('Toto', 1),
//     sShip = new Card('Starship', 1),
//     dDanger = new Card('Danger Danger', 40),
//     boston = new Card('Boston', 10),
//     vixen = new Card('Vixen', 15),
//     scorpions = new Card('The Scorpions', 1),
//     pFloyd = new Card ('Pink Floyd', 1),
//     rainbow = new Card('Rainbow', 15)
// // ]

// console.log(player2deck)

const fullDeck =[
    journey = new battleOfTheBands('Journey', 6, 1973),
    ledZep = new battleOfTheBands('Led Zepplin', 21, 1968),
    kiss = new battleOfTheBands('KISS', 3, 1973),
    mCrue = new battleOfTheBands('Motley Crue', 20, 1981),
    vHalen = new battleOfTheBands('Van Halen', 4, 1972),
    nRanger = new battleOfTheBands('Night Ranger', 2, 1979),
    hScarem = new battleOfTheBands('Harem Scarem', 40, 1987),
    foreigner = new battleOfTheBands('Foreigner', 1, 1976),
    ratt = new battleOfTheBands('RATT', 30, 1976),
    defLep = new battleOfTheBands('Def Leppard', 4, 1977),
    kansas = new battleOfTheBands('Kansas', 15, 1973),
    chicago = new battleOfTheBands('Chicago', 20, 1967),
    heart = new battleOfTheBands('Heart', 1, 1970),
    winger = new battleOfTheBands('Winger', 17, 1987),
    europe = new battleOfTheBands('Europe', 1, 1979),
    acdc = new battleOfTheBands('ACDC', 12, 1973),
    aerosmith = new battleOfTheBands('Aerosmith', 4, 1970),
    wSnake = new battleOfTheBands('Whitesnake', 1, 1978), ,
    iMaiden = new battleOfTheBands('Iron Maiden', 5, 1975),
    bJovi = new battleOfTheBands('Bon Jovi', 1, 1983),
    Survivor = new battleOfTheBands('Survivor', 2, 1978),
    reoSpeed = new battleOfTheBands('REO Speedwagon', 1, 1967),
    Toto = new battleOfTheBands('Toto', 1, 1977),
    sShip = new battleOfTheBands('Starship', 1, 1984),
    dDanger = new battleOfTheBands('Danger Danger', 40, 1987),
    boston = new battleOfTheBands('Boston', 10, 1975),
    vixen = new battleOfTheBands('Vixen', 15, 1980),
    scorpions = new battleOfTheBands('Scorpions', 1, 1965),
    pFloyd = new battleOfTheBands ('Pink Floyd', 1, 1965),
    rainbow = new battleOfTheBands('Rainbow', 15, 1975)
]

function shuffle(){
    fullDeck.sort(() => Math.random () -0.5);
}

shuffle(fullDeck)

var player1deck = fullDeck.slice(0, 15);
var player2deck = fullDeck.slice(15, 30);
// console.log(player1deck);
// console.log(player2deck);

let player1hand;
let player2hand;

function drawCards() {
    player1hand = player1deck.shift();
    console.log(player1hand);
    alert(`Player 1 has CARD: ${JSON.stringify(player1deck[0])} and ${player1deck.length} cards`)
    console.log(player1deck);
    alert(`Player 2 has CARD: ${JSON.stringify(player2deck[0])} and ${player2deck.length} cards`)


    player2hand = player2deck.shift();
    console.log(player2hand);
    console.log(player2deck);

    compareCards();
}

function drawCards2() {
    player1hand = player1deck.shift();
    console.log(player1hand);
    alert(`Player 1 has CARD: ${JSON.stringify(player1deck[0])} and ${player1deck.length} cards`)
    console.log(player1deck);
    alert(`Player 2 has CARD: ${JSON.stringify(player2deck[0])} and ${player2deck.length} cards`)


    player2hand = player2deck.shift();
    console.log(player2hand);
    console.log(player2deck);
    compareCards2()
}

function compareCards() {
    if(player1hand._singleUk < player2hand._singleUk) {
       player1deck.push(player1hand,player2hand)
       alert("Player 1 Rocks")
    } else if (player2hand._singleUk < player1hand._singleUk){
       player2deck.push(player1hand,player2hand)
       alert("Player 2 Rocks!")
    }
    // else { (player1hand._singleUk == player2hand._singleUk)
    else {
    player1deck.push(player1hand)
    player2deck.push(player2hand)
    alert("draw")
}
}

function compareCards2() {
    if(player1hand._singleUk > player2hand._singleUk) {
       player1deck.push(player1hand,player2hand)
       alert("Player 1 Rocks")
    } else if (player2hand._singleUk > player1hand._singleUk){
       player2deck.push(player1hand,player2hand)
       alert("Player 2 Rocks!")
    }
    // else { (player1hand._singleUk == player2hand._singleUk)
    else {
    player1deck.push(player1hand)
    player2deck.push(player2hand)
    alert("draw")
}
}    
   

// console.log(`Player 1 has CARD: ${JSON.stringify(player1deck[0])} and ${player1deck.length} cards`)
// console.log(`Player 2 has CARD: ${JSON.stringify(player2deck[0])} and ${player2deck.length} cards`)
// }
// }     



singleButton.addEventListener("click", ()=>{
    drawCards();
    if (player1deck == 0){
        alert("Player 2 Wins")
    }
    else if (player2deck == 0){
        alert("player 1 Wins")
    }
    
})
yearFormed.addEventListener("click", ()=>{
    drawCards2();
    if (player1deck == 0){
        alert("Player 2 Wins")
    }
    else if (player2deck == 0){
        alert("player 1 Wins")
    }
})
