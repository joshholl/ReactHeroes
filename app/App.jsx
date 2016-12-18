import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateHero } from '../actions'

const App= ({title, hero, onTextChanged}) => {
  return (  
  <div>
    <h1>{title}</h1>
    <h2>{hero.name} details!</h2>
    <div><label>id: {hero.id}</label></div>
    <div>
    <label>name: </label>
    <input type="text" value={hero.name} onChange={onTextChanged} />
    </div>
    </div>
    );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  hero: PropTypes.object.isRequired,
  onTextChanged: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    hero: state.hero,
    title: state.title
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
