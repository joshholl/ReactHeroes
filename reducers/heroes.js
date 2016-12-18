let initial_state = {
  title : 'Tour of Heroes',
  selectedHero: undefined,  
  heroes: [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
  ]
};


const hero = ( state = {}, action ) => {
  switch (action.type) {
    case 'UPDATE_HERO': 

      return Object.assign({}, state, {
        name: action.name
      }); 

    default: 
      return state;
  }
};

const heroes= (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_HERO':
      let _idx = state.findIndex((h)=> h.id == action.id);
      return [
        ...state.slice(0, _idx),
        hero(state[_idx], action),
        ...state.slice(_idx + 1)
      ]; 
    default:
      return state;

  }
}

const application = ( state = initial_state, action ) => {
  switch(action.type) {
    case 'UPDATE_HERO':
      action.id = state.selectedHero.id;

      return { 
        ...state, 
        selectedHero: hero(state.selectedHero, action),
         heroes: heroes(state.heroes, action) 
      };
    case'SELECT_HERO' :
      return{
        ...state,
        selectedHero: state.heroes.find((hero) => hero.id === action.id)
      }
    default:
      return state;
  }
};

export default application;
