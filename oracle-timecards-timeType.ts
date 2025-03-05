let timeTypeTest: string[] = ["Regular" , "Overtime" , "TOIL Overtime" , "Extended Overtime" , "Short Term Travel/Business Trip" , "Long Term Assignment" , "Travel (Pre-Approved Pay)" , "TOIL Travel"];

let timeTypeArray: string[] = [];

// function populateTimeTypeArray(): void {
//     timeTypeArray = [
//         "Regular",
//         "Overtime",
//         "TOIL Overtime",
//         "Extended Overtime",
//         "Short Term Travel/Business Trip",
//         "Long Term Assignment",
//         "Travel (Pre-Approved Pay)",
//         "TOIL Travel"
//     ];
// }

function populateTimeTypeArray(): void {
    timeTypeArray.push(
        "Regular",
        "Overtime",
        "TOIL Overtime",
        "Extended Overtime",
        "Short Term Travel/Business Trip",
        "Long Term Assignment",
        "Travel (Pre-Approved Pay)",
        "TOIL Travel"
    );
}

// Call the function to populate the array
// populateTimeTypeArray();

// console.log(timeTypeArray);

function removeLastTimeType(): void {
    if (timeTypeArray.length > 0) {
        const removedValue = timeTypeArray.pop(); // Removes the last element
        console.log(`Removed: ${removedValue}`);
    } else {
        console.log("The array is already empty.");
    }
}

// Call the function to remove the last element
// removeLastTimeType();

// console.log(timeTypeArray);

populateTimeTypeArray(); // First, populate the array
console.log("Before removing:", timeTypeArray);

removeLastTimeType(); // Removes "TOIL Travel"
console.log("After removing:", timeTypeArray);

removeLastTimeType(); // Removes "Travel (Pre-Approved Pay)"
console.log("After removing again:", timeTypeArray);

// Remove a Specific Element

function removeTimeType(value: string): void {
    timeTypeArray = timeTypeArray.filter(item => item !== value);
}

removeTimeType("Overtime");

console.log("After removing a specific item:", timeTypeArray);