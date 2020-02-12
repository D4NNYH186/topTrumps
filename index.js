let singleButton = document.getElementById("singleButton")


class Card {
    constructor(name, src){ //constructor for a card template
        this.name = name;
        this.src = src;
        this.container = document.getElementById("container");

        let card = this.constructCard();
        this.container.appendChild(card)
    }
    constructCard(){
        let card =  this.createCard();
        let title = this.createTitle();
        let image = this.createImage();
        let attribute = this.createAttributeList();

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(attribute);

        return card
    }

    createCard(){     //
        let card = document.createElement('div');
        card.classList.add('card');

        return card;

    }
    createTitle(){
        let title = document.createElement('h1');
        let text = document.createTextNode(this.name);

        title.appendChild(text);
        title.classList.add('title')

        return title;
    }
    createImage(){
    let image = document.createElement('img')
    image.classList.add('image');

    image.src = this.src;

    return image;
}

createAttributeList(){
    let container = document.createElement ('div');
    container.classList.add('listContainer');

    let list = document.createElement('ul');

    container.appendChild(list);

        
    // console.log(container)


    for (let i = 0; i < 5; i++){
        let listItem = document.createElement('li');
        let attributeText = document.createTextNode('attribute');
        listItem.appendChild(attributeText)
        list.appendChild(listItem)
    // let highestUkSingle = document.createElement ('Highest UK Single');
    // let no1Albums = document.createElement ('UK No.1 Albums');
    // let studioAlbums = document.createElement ('No. Of Studio Albums');
    // let yearFormed = document.createElement ('Year Formed');
    // let members = document.createElement ('Total No. Of Members');
}
return container;
}
}
let arr = [] //This is entering the data in to the card title

// for (let i = 0; i < arr.length; i++){
//     let card = new Card(arr[i]);
//     // console.log(card)
// }
let card = new Card("Journey", "https://societyofrock.com/wp-content/uploads/2016/11/journey-band-SP-735x413.jpg" );
// let attText = []
// card.createAttributeList()