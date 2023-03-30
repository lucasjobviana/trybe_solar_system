import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const pl = planets;
    // data.map((x) => <Hello key={x.id}>{x}</Hello>);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          pl.map((p) => {
            const n = p.name;
            const i = p.image;
            return <PlanetCard key={ n } planetName={ n } planetImage={ i } />;
          })
        }
      </div>
    );
  }
}

export default SolarSystem;
