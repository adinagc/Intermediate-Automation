// Define the Interface and Variables

interface DateOfTimecard {
    dateFrom: Date;
    dateTo: Date;
}

// This initializes timecard with default values (current date).

let timecard: DateOfTimecard = {
    dateFrom: new Date(), // Default: Today
    dateTo: new Date()    // Default: Today
};

// Function to Set dateFrom

function setDateFrom(selectedDate: string): void {
    timecard.dateFrom = new Date(selectedDate);
    console.log(`Start Date set to: ${timecard.dateFrom.toDateString()}`);
}

setDateFrom("2025-03-03");

// Function to Set dateTo

function setDateTo(selectedDate: string): void {
    timecard.dateTo = new Date(selectedDate);
    console.log(`End Date set to: ${timecard.dateTo.toDateString()}`);
}

setDateTo("2025-03-07");

// Function to Validate dateFrom and dateTo
// We should ensure dateTo is not earlier than dateFrom.

function validateDates(): boolean {
    if (timecard.dateTo < timecard.dateFrom) {
        console.log("Error: End date cannot be before start date.");
        return false;
    }
    console.log("Dates are valid.");
    return true;
}

setDateFrom("2025-03-10");
setDateTo("2025-03-07"); // Invalid
validateDates();

// Function to Reset Both Dates

function resetDates(): void {
    timecard.dateFrom = new Date();
    timecard.dateTo = new Date();
    console.log("Dates reset to today.");
    console.log(`Start Date: ${timecard.dateFrom.toDateString()}`);
    console.log(`End Date: ${timecard.dateTo.toDateString()}`);
}

resetDates();
