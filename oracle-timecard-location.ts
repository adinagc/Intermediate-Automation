let locationTimecardTest: string[] = ["Work from office (employment contract)" , "Work from home"];

let locationTimecardArray: string[] = [];

// function populateTimeTypeArray(): void {
//     timeTypeArray = [
//         "Work from office (employment contract)",
//         "Work from home",
//     ];
// }

function populateLocationTimecardArray(): void {
    locationTimecardArray.push(
         "Work from office (employment contract)",
         "Work from home",
         "Test4",
         "Test1",
         "Test2",
         "Test3",
    );
}

// Call the function to populate the array
// populateLocationTimecardArray();

// console.log(locationTimecardArray);

function removeLastLocationTimecard(): void {
    if (locationTimecardArray.length > 0) {
        const removedValue = locationTimecardArray.pop(); // Removes the last element
        console.log(`Removed: ${removedValue}`);
    } else {
        console.log("The array is already empty.");
    }
}

// Call the function to remove the last element
// removeLastLocationTimecard();

// console.log(locationTimecardArray);

populateLocationTimecardArray(); // First, populate the array
console.log("Before removing:", locationTimecardArray);

removeLastLocationTimecard(); // Removes "Test3"
console.log("After removing:", locationTimecardArray);

removeLastLocationTimecard(); // Removes "Test2"
console.log("After removing again:", locationTimecardArray);

// Remove a Specific Element

function removeLocationTimecard(value: string): void {
    locationTimecardArray = locationTimecardArray.filter(element => element !== value);
}

removeLocationTimecard("Test4");

console.log("After removing a specific element:", locationTimecardArray);