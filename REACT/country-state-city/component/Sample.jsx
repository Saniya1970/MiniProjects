import React, { useState } from "react";

// Sample data definition
const data = {
    countries: [
        {
            name: "India",
            states: [
                {
                    name: "Maharashtra",
                    cities: ["Mumbai", "Pune", "Nagpur"]
                },
                {
                    name: "Karnataka",
                    cities: ["Bangalore", "Mysore", "Hubli"]
                }
            ]
        },
        {
            name: "USA",
            states: [
                {
                    name: "California",
                    cities: ["Los Angeles", "San Francisco", "San Diego"]
                },
                {
                    name: "Texas",
                    cities: ["Houston", "Dallas", "Austin"]
                }
            ]
        }
    ]
};

const Dropdown = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState(""); // Reset state on country change
        setSelectedCity("");  // Reset city on country change
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity("");  // Reset city on state change
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    // Safeguard against undefined values
    const selectedCountryData = data.countries.find(
        (country) => country.name === selectedCountry
    );

    // Safeguard against undefined values
    const selectedStateData =
        selectedCountryData?.states.find((state) => state.name === selectedState);

    return (
        <div>
            {/* Country Dropdown */}
            <label>Country: </label>
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select Country</option>
                {data.countries.map((country) => (
                    <option key={country.name} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </select>

            {/* State Dropdown */}
            <label>State: </label>
            <select
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}
            >
                <option value="">Select State</option>
                {selectedCountryData?.states?.map((state) => (
                    <option key={state.name} value={state.name}>
                        {state.name}
                    </option>
                )) || <option value="" disabled>No states available</option>}
            </select>

            {/* City Dropdown */}
            <label>City: </label>
            <select
                value={selectedCity}
                onChange={handleCityChange}
                disabled={!selectedState}
            >
                <option value="">Select City</option>
                {selectedStateData?.cities?.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                )) || <option value="" disabled>No cities available</option>}
            </select>

            <div>
                <h3>Selected Values:</h3>
                <p>Country: {selectedCountry}</p>
                <p>State: {selectedState}</p>
                <p>City: {selectedCity}</p>
            </div>
        </div>
    );
};

export default Dropdown;
