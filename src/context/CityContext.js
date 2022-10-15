import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CityContext = createContext();

export function CityProvider({ children }) {
  const [city, setCity] = useState();

  const value = useMemo(() => ({
    city, setCity,
  }), [city]);

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
}

CityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
