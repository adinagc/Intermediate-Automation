let taskDetailsBench: string[] = ["01 - Bench Time" , "02 - Shadowing" , "03 - Internal Apps" , "04 - Study Groups Initiatives, Trainings" , "05 - OR, Bid Teams, Client Meetings" , "06 - Events, Conferences" , "999 - Self Service Travel"];
let taskDetailsProject: string[] = ["01 - MVP Development" , "02 - MVP Testing" , "03 - Discover" , "04 - Build" , "05 - Operate" , "06 - Close" , "07 - Business Analysis" , "08 - Architecture & Design" , "09 - Project Management and Control" , "10 - Non billable Travel" , "900 - Non Billable Task" , "999 - Self Service Travel"];

interface TaskDetails {
    taskDetailsId: string;
    taskDetailsName: string;
}

// Initialize an empty array
let taskDetailsArrayBench: TaskDetails[] = [];

// .push() to adds values to the taskDetailsArray array
function addTaskDetails(taskDetailsId: string, taskDetailsName: string): TaskDetails[] {
    taskDetailsArrayBench.push({ taskDetailsId, taskDetailsName });
    return taskDetailsArrayBench;
}

addTaskDetails("01", "Bench Time");
addTaskDetails("02", "Shadowing");

console.log(taskDetailsArrayBench);

// .pop() removes the last element from the array and returns it
function removeLastTaskDetail(): void {
    const removedTask = taskDetailsArrayBench.pop();
    console.log("Removed Task Detail:", removedTask);
}

addTaskDetails("01", "Bench Time");
addTaskDetails("02", "Shadowing");
addTaskDetails("03", "Internal Apps");
addTaskDetails("04", "Study Groups Initiatives, Trainings");
addTaskDetails("999", "Self Service Travel");


console.log("Before removing:", taskDetailsArrayBench);
removeLastTaskDetail();
console.log("After removing:", taskDetailsArrayBench);