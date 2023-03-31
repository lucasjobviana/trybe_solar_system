import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions-conteiner">
        <Title headline="Missões" />
        <div className="missions">
          {
            missions.map((p) => (<MissionCard
              key={ p.name }
              name={ p.name }
              year={ p.year }
              country={ p.country }
              destination={ p.destination }
            />))
          }

        </div>
      </div>
    );
  }
}

export default Missions;
