let initial_state = {
  title : 'Tour of Heroes',
  hero: {
    id: 1,
    name: 'Windstorm'
  }
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


const application = ( state = initial_state, action ) => {
  switch(action.type) {
    
    case 'UPDATE_HERO': 
      return { 
        ...state, 
        hero: hero(hero,action) 
      };
    default:
      return state;
  }
};

export default application;
