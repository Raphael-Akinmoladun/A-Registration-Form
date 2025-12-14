let FullName = prompt("Enter your Full Name:");

while (validateFullName(FullName) == false) {
    FullName = prompt(
        "Name must be greater than 2. Please enter a valid name:"
    );
}


let Email = prompt("Enter your Email Address:");

while (validateEmail(Email) == false) {
    Email = prompt(
        "Email must include '@' and '.'. Please enter a valid email address:"
    );
}


let Password = prompt("Enter your password:");

while (validatePassword(Password) == false) {
    Password = prompt(
        "Password must be at least 8 characters long with one uppercase letter, one number, and one special character."
    );
}

let confirmPassword = prompt("Confirm your password:");

while (confirmPassword !== Password) {
    confirmPassword = prompt(
        "Passwords do not match. Please confirm your password:"
    );
}

let Age = prompt("Enter your age:");

while (confirmAge(Age) == false) {
    Age = prompt(
        "Must be 18 or older:"
    );
}

alert("You Have successfully registered!")

// function to confirm age is 18 and above
function confirmAge(Age) {
    if (Age == null){
        return true
    }

    if (Age < 18){
        return false
    } else {
        return true
    }
}

// checks for password validity
function validatePassword(Password) {
    if (Password == null){
        return true
    }

    // [A-Z] checks for any uppercase letter
    const hasUpper = /[A-Z]/.test(Password);
    
    // [0-9] checks for any number
    const hasNumber = /[0-9]/.test(Password);
    
    // This checks for special characters
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(Password);

    if (!(hasUpper && hasNumber && hasSpecial)) {
        return false;
    } else {
        return true;
    }
}


// checjs for name validity
function validateFullName(FullName) {
    if (FullName == null){
        return true
    }
    // checks if name is greater than 2
    if (FullName.length > 2){
        return true
    } else {
        return false
    }
}


// checks for email validity
function validateEmail(Email) {
    if (Email == null){
        return true
    }
    // checks if email follows valid email format
    if (!Email.includes("@") || !Email.includes(".")){
        return false
    } else {
        return true
    }
}