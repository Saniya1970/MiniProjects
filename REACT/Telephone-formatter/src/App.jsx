import React, { useState } from "react";

function PhoneNumberFormatter() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (input) => {
    // Remove non-digit characters
    const cleaned = input.replace(/\D/g, "");

    // Split the number into parts
    const part1 = cleaned.slice(0, 3);
    const part2 = cleaned.slice(3);

    // Always return +({part1}) at least
    if (part1.length > 0) {
      return `+(${part1})${part2 ? ` - ${part2}` : ""}`;
    }

    return input;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatPhoneNumber(input);
    setPhoneNumber(formattedInput);
  };

  // Function to clear the input and retain +({123})
  const clearInput = () => {
    setPhoneNumber("+(123)"); // Clears the input but keeps the first 3 digits formatted
  };

  return (
    <div>
      <label htmlFor="phone">Phone Number:</label>
      <input
        id="phone"
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="+(123) - 4567890"
      />
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

export default PhoneNumberFormatter;


