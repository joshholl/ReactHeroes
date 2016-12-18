import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateHero,selectHero } from '../actions'

const App= ({title, selectedHero,heroes,  onTextChanged, onHeroClicked}) => {

  console.log(heroes);
  let heroItems = heroes.map((h) => {

    let selectedClass = selectedHero !== undefined && h.id=== selectedHero.id ? 'selected' : '';

    return(
        <li key={h.id} className={selectedClass} onClick={()=>onHeroClicked(h.id)}>
          <span className ="badge">{h.id}</span>{h.name}
        </li>
        );
  });

  let selectedHeroMarkUp= selectedHero !== undefined ? (()=> {return (<div>
    <h2>{selectedHero.name} details!</h2>
    <div><label>id: {selectedHero.id}</label></div>
    <div>
    <label>name: </label>

    <input type="text" value={selectedHero.name} onChange={onTextChanged} />
    </div>
    </div> );})():'';

  
  return (  
      <div>
      <h1>{title}</h1>
      <h2>My Heroes</h2>
      <ul className="heroes">
      {heroItems}
      </ul>
        {selectedHeroMarkUp}
      </div>
      );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  selectedHero: PropTypes.object,
  heroes: PropTypes.array.isRequired,
  onTextChanged: PropTypes.func.isRequired,
  onHeroClicked: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    selectedHero: state.selectedHero,
    title: state.title,
    heroes: state.heroes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChanged: (event) => {
      dispatch(updateHero(event.target.value));
    },
    onHeroClicked: (id) => 
    {
      dispatch(selectHero(id));
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);;
