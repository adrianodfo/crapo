import { Suits } from '../components/Card';

class Game {
    computerCrapo;
    userCrapo;
    workingPiles;
    computarPile;
    userPile;

    constructor() {
        let playingCards = this.BuildPlayingCards();
        this.computerCrapo = playingCards.slice(0, 13);
        this.userCrapo = playingCards.slice(13, 26);
        this.computarPile = playingCards.slice(26, 61)
        this.userPile = playingCards.slice(61, 96);
        this.workingPiles = this.InitiliseWorkingPiles(playingCards.slice(96, 104));
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
        cardIndexes.forEach(cardIndex => {
            Object.keys(Suits).forEach(key => {
                let card = { Index: cardIndex, Suit: Suits[key], IsAvail: true };
                playingCards.push(card);
                playingCards.push(card);
            });
        });
        return Scramble(playingCards);
    }

    InitiliseWorkingPiles = (playingCards) => {
        let workingPiles = [];
        for (var i = 0; i < 8; i++) {
            let workingPile = [];
            workingPile.push({ Index: playingCards[i].Index, Suit: playingCards[i].Suit });
            workingPiles.push(workingPile);
        }
        return workingPiles;
    }
}

export default Game;