// interface ProjectCode {
//     projectCodeId: string;
//     projectCodeName: string;
// }

// const projectCodeArray: ProjectCode = { projectCodeId: "INTTE99PTD", projectCodeName: "PTD Endava Time - Testing" };

interface ProjectCode { // Done
    projectCodeId: string;
    projectCodeName: string;
}

let projectCodeId: string[] = ["INTTE99PTD" , "MASDV012_003"];
let projectCodeName: string[] = ["PTD Endava Time - Testing" , "MASDV012_003 Flavia M. Miclausi"];
let projectCode: string[] = ["NTTE99PTD - PTD Endava Time - Testing" , "MASDV012_003 - MASDV012_003 Flavia M. Miclausi"];

let taskDetailsId: string[] = ["01" , "02" , "03" , "04" , "05" , "06" , "999" ];
let taskDetailsName: string[] = ["Bench Time" , "Shadowing" , "Internal Apps" , "Study Groups Initiatives, Trainings" , "OR, Bid Teams, Client Meetings" , "Events, Conferences" , "Self Service Travel"];
let taskDetails1: string[] = ["01 - Bench Time" , "02 - Shadowing" , "03 - Internal Apps" , "04 - Study Groups Initiatives, Trainings" , "05 - OR, Bid Teams, Client Meetings" , "06 - Events, Conferences" , "999 - Self Service Travel"];
let taskDetails2: string[] = ["01 - MVP Development" , "02 - MVP Testing" , "03 - Discover" , "04 - Build" , "05 - Operate" , "06 - Close" , "07 - Business Analysis" , "08 - Architecture & Design" , "09 - Project Management and Control" , "10 - Non billable Travel" , "900 - Non Billable Task" , "999 - Self Service Travel"];

// Done
let timeType: string[] = ["Regular" , "Overtime" , "TOIL Overtime" , "Extended Overtime" , "Short Term Travel/Business Trip" , "Long Term Assignment" , "Travel (Pre-Approved Pay)" , "TOIL Travel"];

// let locationTimecard: string[] = ["Work from office (employment contract)" , "Work from home" , "Short term relocated" , "Relocated"];
let locationTimecard: string[] = ["Work from office (employment contract)" , "Work from home"];

const quantity = 8.00;

let commentsTest3: string;

// Date field

interface DateOfTimecard1 {
    dateFrom: Date;
    dateTo: Date;
}

// interface DateOfTimecard2 {
//     startDate: Date;
//     endDate: Date;
// }

// let DateOfTimecard3: { dateFrom: Date; dateTo: Date} = {
//     dateFrom: 3/3/25;
//     dateTo: 3/7/25;
// }
