const defaultPlayerState = {
  0: {
    id: 0,
    name: "Player 1",
    life: 20,
    commanderDamage: {},
  },
};

export const players = (state = defaultPlayerState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      const length = Object.keys(state).length;
      return {
        ...state,
        [length]: { name: `Player ${length + 1}`, life: 20, id: length },
      };
    case "RESET_ALL_PLAYER_LIFE":
      return Object.keys(state).reduce((accumulator, key) => {
        return {
          ...accumulator,
          [key]: {
            ...state[key],
            commanderDamage: undefined,
            life: action.value || 20,
          },
        };
      }, {});
    case "SET_PLAYER_LIFE": {
      const player = {
        ...state[action.id],
        life: state[action.id].life + action.value,
      };
      return { ...state, [action.id]: player };
    }
    case "SET_PLAYER_COMMANDER": {
      const player = { ...state[action.id], commander: action.payload };
      return { ...state, [action.id]: player };
    }
    case "SET_COMMANDER_DAMAGE": {
      const commanderDamage = { ...state[action.id].commanderDamage };
      if (!commanderDamage[action.commanderId]) {
        commanderDamage[action.commanderId] = 0;
      }

      commanderDamage[action.commanderId] =
        commanderDamage[action.commanderId] + action.value;

      const player = {
        ...state[action.id],
        life: state[action.id].life - action.value,
        commanderDamage,
      };
      return { ...state, [action.id]: player };
    }
    default:
      return state;
  }
};
