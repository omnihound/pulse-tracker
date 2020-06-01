const defaultPlayerState = [
  {
    name: 'Player 1',
    life: 20
  },
  {
    name: 'Player 2',
    life: 20
  }
];

export const players = (state = defaultPlayerState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      const newPlayerNumber = state.length + 1;
      return [...state, {name: `Player ${newPlayerNumber}`, life: 20}];
    case 'SET_ALL_PLAYER_LIFE':
      return state.map((player) => {
        return {...player, life: action.value || 20}
      });
    default:
      return state;
  };
};