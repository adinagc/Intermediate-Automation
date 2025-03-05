const commentsTest2 = "Comment goes here!"

console.log(commentsTest2);

let commentsTest1: string;

let comments: string = ""; // Initialize as an empty string

// Function to Set a New Comment

function setComment(newComment: string): void {
    comments = newComment;
    console.log(`Comment set to: "${comments}"`);
}

setComment("This is the first comment.");

// Function to Clear the Comment

function clearComment(): void {
    comments = "";
    console.log("Comment cleared.");
}

clearComment();

// Function to Check If a Comment Exists

function hasComment(): boolean {
    return comments.length > 0;
}

console.log(hasComment()); // true or false

// Function to Append Text to an Existing Comment

function appendToComment(extraText: string): void {
    if (comments.length > 0) {
        comments += " " + extraText; // Adds a space before appending
    } else {
        comments = extraText; // If empty, just set it
    }
    console.log(`Updated comment: "${comments}"`);
}

setComment("This is my first comment.");
appendToComment("Adding more details.");
appendToComment("Final thoughts.");

// Function to Set a Comment with only the value of the comment

function setComment2(newComment: string): void {
    comments = newComment;
    console.log(comments);
}

setComment2("Holiday on 15th of March 2025.");

console.log(hasComment()); // true or false