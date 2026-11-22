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