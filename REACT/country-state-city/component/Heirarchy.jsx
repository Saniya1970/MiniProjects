import React, { useState } from 'react'

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

export default function Heirarchy() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState("");
        setSelectedCity("");
    }
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity("");
    }
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    }

    const selectedCountryData = data.countries.find(
        (country) => country.name === selectedCountry
    );

    const selectedStateData = selectedCountryData?.states.find
        ((state) => state.name === selectedState);
    return (
        <div>
            <label>Country: </label>
            <select
                value={selectedCountry} onChange={handleCountryChange}
            >
                <option>Select Country</option>
                {data.countries.map((country) => (
                    <option key={country.name} value={country.name}>{country.name}</option>
                ))}
            </select>

            <label>State: </label>
            <select value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}>

                <option>Select state</option>
                {selectedCountryData?.states?.map((state) => (
                    <option value={state.name} key={state.name}>
                        {state.name}
                    </option>
                )) || <option disabled>State not available</option>}
            </select>

            <label>City: </label>
            <select value={selectedCity}
                onChange={handleCityChange}
                disabled={!selectedState}>

                <option>select city</option>
                {selectedStateData?.cities.map((city) => (
                    <option value={city} key={city}>{city}</option>
                )) || <option disabled>no city available</option>

                }
            </select>

            <div>
                <h3>Selected Values:</h3>
                <p>Country: {selectedCountry}</p>
                <p>State: {selectedState}</p>
                <p>City: {selectedCity}</p>
            </div>
        </div >
    )
}
