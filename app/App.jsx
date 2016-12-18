import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateHero } from '../actions'

const App= ({title, selectedHero,heroes,  onTextChanged}) => {
  let heroItems = heroes.map((h) => {
    return(<li key={h.id}>
      <span className ="badge">{h.id}</span>{h.name}
    </li>);
  });
  
  return (  
      <div>
      <h2>My Heroes</h2>
      <ul className="heroes">
        {heroItems}
      </ul>
      </div>
      );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  selectedHero: PropTypes.object.isRequired,
  heroes: PropTypes.array.isRequired,
  onTextChanged: PropTypes.func.isRequired
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
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);;
