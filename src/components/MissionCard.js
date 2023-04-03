import React from 'react';
import PropTypes from 'prop-types';
import BandeiraImg from '../images/band1.png';
import BImg from '../images/b.png';
import CalendarImg from '../images/calendar.png';
import Title from './Title';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission-card">

        <h3 style={ { textAlign: 'center' } }>{name}</h3>
        <div>
          <p data-testid="mission-year">
            <img className="icone" src={ CalendarImg } alt="alternativo" />
            {year}
          </p>
          <p data-testid="mission-country">
            <img className="icone" src={ BImg } alt="alternativo" />
            {country}
          </p>
          <p data-testid="mission-destination">
            <img className="icone" src={ BandeiraImg } alt="alternativo" />
            {destination}
          </p>
        </div>

      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
