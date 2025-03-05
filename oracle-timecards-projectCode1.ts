interface ProjectCode {
    projectCodeId: string;
    projectCodeName: string;
}

// Initialize an empty array
let projectCodeArray: ProjectCode[] = [];

// .push() to adds values to the projectCodeArray array
// function addProjectCode(projectCodeId: string, projectCodeName: string): void { 
//     const newProject: ProjectCode = { projectCodeId, projectCodeName }; //Create a new object newProject
//     projectCodeArray.push(newProject);
// };

function addProjectCode(projectCodeId: string, projectCodeName: string): ProjectCode[] { //Returning the Updated Array
    projectCodeArray.push({ projectCodeId, projectCodeName });
    return projectCodeArray;
}

addProjectCode("INTTE99PTD", "PTD Endava Time - Testing");
addProjectCode("MASDV012_003", "MASDV012_003 Flavia M. Miclausi");

console.log(projectCodeArray);


// .pop() removes the last element from the array and returns it
function removeLastProjectCode(): void {
    const removedProject = projectCodeArray.pop();
    console.log("Removed Project:", removedProject);
}

addProjectCode("INTTE99PTD", "PTD Endava Time - Testing");
addProjectCode("MASDV012_003", "MASDV012_003 Flavia M. Miclausi");

console.log("Before removing:", projectCodeArray);
removeLastProjectCode();
console.log("After removing:", projectCodeArray);


// .splice() to Remove a Specific Element
function removeProjectCodeByIndex(index: number): void {
    if (index >= 0 && index < projectCodeArray.length) {
        const removedProject = projectCodeArray.splice(index, 1);
        console.log("Removed Project:", removedProject);
    } else {
        console.log("Invalid index");
    }
}

addProjectCode("INTTE99PTD", "PTD Endava Time - Testing");
addProjectCode("MASDV012_003", "MASDV012_003 Flavia M. Miclausi");

console.log("Before removing:", projectCodeArray);
removeProjectCodeByIndex(0); // Removes the first project
console.log("After removing:", projectCodeArray);

// .filter() to Remove an Element by projectCodeId

function removeProjectCodeById(projectCodeId: string): void {
    projectCodeArray = projectCodeArray.filter(project => project.projectCodeId !== projectCodeId);
}

addProjectCode("INTTE99PTD", "PTD Endava Time - Testing");
addProjectCode("MASDV012_003", "MASDV012_003 Flavia M. Miclausi");

console.log("Before removing:", projectCodeArray);
removeProjectCodeById("MASDV012_003"); // Removes the project with ID "MASDV012_003"
console.log("After removing:", projectCodeArray);

