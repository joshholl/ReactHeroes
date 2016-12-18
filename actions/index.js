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

