const quantityTest = 8.00;

let quantityTime: number;

// Function to Set a New Quantity
function setQuantity(newQuantity: number): void {
    quantityTime = newQuantity;
    console.log(`Quantity set to: ${quantityTime}`);
}

setQuantity(6);  // Updates quantityTime to 6
setQuantity(10); // Updates quantityTime to 10

// Function to Reset to Default (8.00)

function resetQuantity(): void {
    quantityTime = quantityTest;
    console.log(`Quantity reset to default: ${quantityTime}`);
}

resetQuantity(); // Resets to 8.00

// Function to Increase or Decrease the Quantity

// function changeQuantity(delta: number): void {
//     quantityTime += delta;
//     console.log(`Quantity updated to: ${quantityTime}`);
// }

// setQuantity(8);  // Start with 8
// changeQuantity(2); // Increases to 10
// changeQuantity(-3); // Decreases to 7

// Preventing Negative Values (Validation)

function safeChangeQuantity(delta: number): void {
    let newQuantity = quantityTime + delta;
    if (newQuantity < 0) {
        console.log("Quantity cannot be negative!");
    } else {
        quantityTime = newQuantity;
        console.log(`Quantity updated to: ${quantityTime}`);
    }
}

setQuantity(2);
safeChangeQuantity(-3);
safeChangeQuantity(10);