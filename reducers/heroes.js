let initial_state = {
  title : 'Tour of Heroes',
  heroes : []
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
    case 'GET_HEROES':
      return {
        ...state,
        heroes: action.h

      }
    
    
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
