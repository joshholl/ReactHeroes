import React, { PropTypes } from 'react'

const HeroDetail = ({ hero,  onTextChanged }) => {

  if(hero !== undefined) {
    return (
        <div>
        <h2>{hero.name} details!</h2>
        <div><label>id: {hero.id}</label></div>
        <div>
        <label>name: </label>
        <input type="text" value={hero.name} onChange={onTextChanged} />
        </div>
        </div>);
  } else {
    return null;
  }
};

HeroDetail.propTypes = {
  hero: PropTypes.object,
  onTextChanged: PropTypes.func.isRequired,
};

export default HeroDetail 
