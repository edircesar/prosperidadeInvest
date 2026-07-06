import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Simulator } from '../components/Simulator';
import { ComparativeSimulator } from '../components/ComparativeSimulator';
import { AprendaAProsperar } from '../components/AprendaAProsperar';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Simulator />
      <ComparativeSimulator />
      <AprendaAProsperar />
    </main>
  );
}
