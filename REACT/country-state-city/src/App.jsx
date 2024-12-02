import React, { useState } from "react";
import data from './data'

// Main component
const CountryExplorer = () => {
  // State to track which country and state are expanded
  const [expandedCountry, setExpandedCountry] = useState(null);
  const [expandedState, setExpandedState] = useState(null);

  // Toggle function for expanding a country
  const toggleCountry = (country) => {
    setExpandedCountry(expandedCountry === country ? null : country);
    setExpandedState(null); // Reset state when changing country
  };

  // Toggle function for expanding a state
  const toggleState = (state) => {
    setExpandedState(expandedState === state ? null : state);
  };

  return (
    <div>
      <h1>Country Explorer</h1>
      <div>
        {/* Loop through countries */}
        {data.map((country) => (
          <div key={country.name}>
            {/* Country */}
            <h2 onClick={() => toggleCountry(country.name)}>
              {country.name}
            </h2>
            {/* Show states if this country is expanded */}
            {expandedCountry === country.name && (
              <div style={{ paddingLeft: "20px" }}>
                {country.states.map((state) => (
                  <div key={state.name}>
                    {/* State */}
                    <h3 onClick={() => toggleState(state.name)}>
                      {state.name}
                    </h3>
                    {/* Show cities if this state is expanded */}
                    {expandedState === state.name && (
                      <ul style={{ paddingLeft: "20px" }}>
                        {state.cities.map((city) => (
                          <li key={city}>{city}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryExplorer;
