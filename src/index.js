import { ChoreToDoCard } from './card';
import { version } from '../package.json';

customElements.define(
    'chore-todo-card',
    ChoreToDoCard
);



window.customCards = window.customCards || [];
window.customCards.push({
    type: 'chore-todo-card',
    name: 'chore-todo-card',
    description: 'Card to display events for a number of days from one or several todos.'
});

console.info(
    `%c CHORE-TODO-CARD %c v${version} `,
    'color: white; background: black; font-weight: 700;',
    'color: black; background: white; font-weight: 700;',
);