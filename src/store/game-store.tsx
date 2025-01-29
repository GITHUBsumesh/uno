// Card type definitions
type Color = 'Yellow' | 'Blue' | 'Green' | 'Red';
type SpecialAction = 'Skip' | 'Reverse' | 'Draw2';
type WildAction = 'Wild' | 'Draw4';

interface BaseCard {
    value: number | SpecialAction | WildAction;
}

interface NumberCard extends BaseCard {
    type: 'number';
    color: Color;
    value: number;
}

interface ActionCard extends BaseCard {
    type: 'action';
    color: Color;
    value: SpecialAction;
}

interface WildCard extends BaseCard {
    type: 'wild';
    value: WildAction;
}

type Card = NumberCard | ActionCard | WildCard;

// Deck creation function
function createShuffledUnoDeck(): Card[] {
    const colors: Color[] = ['Yellow', 'Blue', 'Green', 'Red'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specials: SpecialAction[] = ['Skip', 'Reverse', 'Draw2'];
    const wilds: WildAction[] = ['Wild', 'Draw4'];
    const deck: Card[] = [];

    // Create colored cards
    for (const color of colors) {
        // Number cards
        deck.push({ type: 'number', color, value: 0 });
        for (let num = 1; num < 10; num++) {
            deck.push({ type: 'number', color, value: num });
            deck.push({ type: 'number', color, value: num });
        }

        // Action cards
        for (const action of specials) {
            deck.push({ type: 'action', color, value: action });
            deck.push({ type: 'action', color, value: action });
        }
    }

    // Wild cards
    for (const wild of wilds) {
        for (let i = 0; i < 4; i++) {
            deck.push({ type: 'wild', value: wild });
        }
    }

    // Fisher-Yates shuffle
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}

// Card distribution functions
function distributeInitialCards(deck: Card[], players: Card[][], cardsPerPlayer: number): void {
    for (let round = 0; round < cardsPerPlayer; round++) {
        for (const playerHand of players) {
            if (deck.length === 0) return;
            const card = deck.pop();
            if (card) {
                playerHand.push(card);
            }
        }
    }
}

function drawCards(deck: Card[], numCards: number): Card[] {
    const drawn: Card[] = [];
    for (let i = 0; i < numCards; i++) {
        if (deck.length === 0) break;
        const card = deck.pop();
        if (card) {
            drawn.push(card);
        }
    }
    return drawn;
}

// Usage example
const unoDeck = createShuffledUnoDeck();
const players: Card[][] = [[], [], [], []]; // 4 players

// Initial deal (7 cards each)
distributeInitialCards(unoDeck, players, 7);

// During gameplay - player draws 2 cards
const currentPlayerHand = players[0];
const drawnCards = drawCards(unoDeck, 2);
currentPlayerHand.push(...drawnCards);