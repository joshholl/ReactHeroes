import HeroService from '../heroService.js'; 



export const updateHero =(name, id) =>{
  return {
    type: 'UPDATE_HERO',
    id,
    name 
  }
}

export const selectHero = (id) => {
  return {
    type: 'SELECT_HERO',
    id
  }
}

export const getHeroes = (dispatch) => {
  HeroService.getHeroes()
    .then((h,e) =>  dispatch( { type: 'GET_HEROES',h }))
    .catch((e) => dispatch({ type: 'ERROR', e }));

}
