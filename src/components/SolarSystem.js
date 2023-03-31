import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const pl = planets;
    // data.map((x) => <Hello key={x.id}>{x}</Hello>);
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <Title headline="Planetas" />
        <div className="planetas">
          {
            pl.map((p) => {
              const n = p.name;
              const i = p.image;
              return <PlanetCard key={ n } planetName={ n } planetImage={ i } />;
            })
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
