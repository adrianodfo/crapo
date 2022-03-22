import { Suits } from '../components/Card';

class Game {
    computerCrapo;
    computerPile;
    computerDiscard;
    userCrapo;
    userPile;
    userDiscard;
    workingPiles;
    stacks;
    constructor() {
        let playingCards = this.BuildPlayingCards();
        this.computerCrapo = playingCards.slice(0, 13);
        this.userCrapo = playingCards.slice(13, 26);
        this.computerPile = playingCards.slice(26, 61);
        this.userPile = playingCards.slice(61, 96);
        this.workingPiles = this.InitiliseWorkingPiles(playingCards.slice(96, 104));
        this.computerDiscard = [];
        this.userDiscard = [];
        this.stacks = new Array(8);
    }
    BuildPlayingCards = () => {
        function Scramble(playingCards) {
            let playingCardsLength = playingCards.length;
            for (var i = 0; i < playingCardsLength; i++) {
                let randomIndex = Math.floor(Math.random() * (playingCardsLength - 1));
                let tempCard = playingCards[randomIndex];
                playingCards[randomIndex] = playingCards[i];
                playingCards[i] = tempCard;
            }
            return playingCards;
        }
        let cardIndexes = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let playingCards = [];
        Object.keys(Suits).forEach(key => {
            for (let i = 0; i < 13; i++) {
                playingCards.push({ Index: cardIndexes[i], Suit: Suits[key], IndexNumber: i });
                playingCards.push({ Index: cardIndexes[i], Suit: Suits[key], IndexNumber: i });
            }
        });
        return Scramble(playingCards);
    }
    InitiliseWorkingPiles = (playingCards) => {
        let workingPiles = [];
        for (var i = 0; i < 8; i++) {
            let workingPile = [];
            workingPile.push({ ...playingCards[i] });
            workingPiles.push(workingPile);
        }
        return workingPiles;
    }
}

export default Game;