import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((p) => {
            const n = p.name;
            const y = p.year;
            const c = p.country;
            const d = p.destination;

            return <MissionCard key={ n } name={ n } year={ y } country={ c } destination={ d } />;
          })
        }
      </div>
    );
  }
}

export default Missions;
