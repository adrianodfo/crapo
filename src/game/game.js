import { Suits } from '../components/Card';

class Game {
    computerCrapo;
    userCrapo;
    workingPiles;

    constructor() {
        let playingCards = this.BuildPlayingCards();
        this.computerCrapo = this.InitialiseCrapo(playingCards);
        this.userCrapo = this.InitialiseCrapo(playingCards);
        this.workingPiles = this.InitiliseWorkingPiles(playingCards);
    }

    BuildPlayingCards = () => {
        let cardIndexes = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let playingCards = [];
        cardIndexes.forEach(cardIndex => {
            Object.keys(Suits).forEach(key => {
                let card = { Index: cardIndex, Suit: Suits[key], Avail: true };
                playingCards.push(card);
                playingCards.push(card);
            });
        });
        return playingCards;
    }

    InitialiseCrapo = (playingCards) => {
        let crapo = [];
        let crapoCount = 0;
        while (crapoCount < 13) {
            let randomIndex = Math.floor(Math.random() * 103);
            let candidateCard = playingCards[randomIndex];
            if (candidateCard.Avail) {
                crapo.push({ Index: candidateCard.Index, Suit: candidateCard.Suit });
                candidateCard.Avail = false;
                crapoCount++;
            }
        }
        return crapo;
    }

    InitiliseWorkingPiles = (playingCards) => {
        let workingPiles = [];

        for (var i = 0; i < 8; i++) {
            let workingPile = [];
            let randomIndex = Math.floor(Math.random() * 103);
            let candidateCard = playingCards[randomIndex];
            while (!candidateCard.Avail) {
                randomIndex = Math.floor(Math.random() * 103);
                candidateCard = playingCards[randomIndex];
            }
            workingPile.push({ Index: candidateCard.Index, Suit: candidateCard.Suit });
            candidateCard.Avail = false;
            workingPiles.push(workingPile);
        }

        return workingPiles;
    }
}

export default Game;