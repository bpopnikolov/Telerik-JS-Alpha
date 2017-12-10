const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardFaces = ['of spades', 'of clubs', 'of hearts', 'of diamonds'];

const cardSign = gets();

for (let i = 0; i <= deck.indexOf(cardSign); i++) {
    const result = `${deck[i]} ${cardFaces[0]}` +
        `, ${deck[i]} ${cardFaces[1]}` +
        `, ${deck[i]} ${cardFaces[2]}` +
        `, ${deck[i]} ${cardFaces[3]}`;
    print(result);
}
