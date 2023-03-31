import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alt = `Planeta ${planetName}`;
    const imgId = `imgId_${planetName}`;
    return (
      <div data-testid="planet-card" className="PlanetCard">
        <p data-testid="planet-name">{planetName}</p>
        <img id={ imgId } src={ planetImage } alt={ alt } />
      </div>
    );
  }
}
// transform: scale(1.5);
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
