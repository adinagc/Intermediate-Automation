interface ProjectCode1 { // Array
    projectCodeId: string[];
    projectCodeName: string[];
}

// const projectCodeTest: ProjectCode = { projectCodeId: "INTTE99PTD", projectCodeName: "PTD Endava Time - Testing" };

// console.log(projectCodeTest);

let projectCodeArray1: ProjectCode1[] = [
    {
        projectCodeId: ["INTTE99PTD",],
        projectCodeName: ["PTD Endava Time - Testing"]
    },
    {
        projectCodeId: ["MASDV012_003"],
        projectCodeName: ["MASDV012_003 Flavia M. Miclausi"]
    }
];

console.log(projectCodeArray1);

///////////////////////////////////////////////////////////////////////////////////////

let projectCodeArray2: ProjectCode1[] = [];

// Adding a new project code entry
projectCodeArray2.push({
    projectCodeId: ["TEST001"],
    projectCodeName: ["Test Project"]
});

console.log(projectCodeArray2);

///////////////////////////////////////////////////////////////////////////////////////

interface ProjectCode2 { // Single value 
    projectCodeId: string;
    projectCodeName: string;
}

let projectCodeArray3: ProjectCode2[] = [
    { projectCodeId: "INTTE99PTD", projectCodeName: "PTD Endava Time - Testing" },
    { projectCodeId: "MASDV012_003", projectCodeName: "MASDV012_003 Flavia M. Miclausi" }
];

console.log(projectCodeArray3);