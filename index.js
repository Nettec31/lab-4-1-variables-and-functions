//  Format Full Name

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  let formattedFirst = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  let formattedLast = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatFullName("lynnette", "ray")); // "Ray, Lynnette"
console.log(formatFullName("", "ray")); // "Invalid name input."

// Calculate Total Cost

function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    isNaN(price) ||
    isNaN(quantity) ||
    isNaN(taxRate)
  ) {
    return "Invalid input.";
  }

  let totalCost = (price * quantity) * (1 + taxRate);
  return totalCost;
}

console.log(calculateTotalCost(20, 3, 0.07)); // 64.2
console.log(calculateTotalCost("20", 3, 0.07)); // "Invalid input."


// Check Eligibility

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) {
    return "Eligible.";
  } else if (age > 18 && !isEmployed) {
    return "Conditionally eligible.";
  } else {
    return "Not eligible.";
  }
}

console.log(checkEligibility(25, true)); // "Eligible."
console.log(checkEligibility(25, false)); // "Conditionally eligible."
console.log(checkEligibility(17, true)); // "Not eligible."


// Calculate Total Cost with Optional Discount

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  // Make sure all inputs are valid numbers before doing math
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    typeof discount !== "number" ||
    isNaN(price) ||
    isNaN(quantity) ||
    isNaN(taxRate) ||
    isNaN(discount)
  ) {
    return "Invalid input.";
  }

  let subtotal = price * quantity;

  // Subtract discount before applying tax when one is provided
  if (discount > 0) {
    subtotal = subtotal - discount;
  }

  let totalCost = subtotal * (1 + taxRate);
  return totalCost;
}

console.log(calculateTotalCost(20, 3, 0.07, 10)); // 53.5
console.log(calculateTotalCost(20, 3, 0.07)); // 64.2
