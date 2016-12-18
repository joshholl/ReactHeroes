let initial_state = {
  title : 'Tour of Heroes',
  selectedHero: {},  
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
