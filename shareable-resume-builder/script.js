var form = document.querySelector('form');
var resumeDisplayElement = document.getElementById('resumeDisplay');
var editBtn;
var printBtn;
var url = window.location.href;
var fname = document.getElementById('name');
var email = document.getElementById('email');
var number = document.getElementById('number');
var education = document.getElementById('education');
var experience = document.getElementById('experience');
var skills = document.getElementById('skills');
var fnameVal;
var emailVal;
var numberVal;
var educationVal;
var experienceVal;
var skillsVal;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    fnameVal = fname.value;
    emailVal = email.value;
    numberVal = number.value;
    educationVal = education.value;
    experienceVal = experience.value;
    skillsVal = skills.value;
    var dynamicResume = "\n        <h2> <b> Dynamic Resume </b> </h2>\n        <h3>Personal Information:</h3>\n        <p><b>Name:</b> ".concat(fnameVal, "</p><br>\n        <p><b>Email:</b> ").concat(emailVal, "</p><br>\n        <p><b>Phone:</b> ").concat(numberVal, "</p><br>\n        <div class=\"dynamic-edu\">\n            <h3>Education:</h3>\n            <p>").concat(educationVal, "</p>\n        </div>\n        <div class=\"dynamic-exp\">\n            <h3>Experience:</h3>\n            <p>").concat(experienceVal, "</p>\n        </div>\n        <div class=\"dynamic-skills\">\n            <h3>Skills:</h3>\n            <p>").concat(skillsVal, "</p>\n        </div>\n\n        <br />\n        <p class=\"link\" onclick=\"copy()\">").concat(url, "</p>\n        \n        <br />\n        <button class=\"end-button-1\" type=\"button\" id=\"editBtn\" onclick=\"edit()\">Edit</button>\n        <button class=\"end-button-2\" type=\"button\" id=\"printBtn\" onclick=\"window.print()\">Save as PDF</button>\n      ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = dynamicResume;
        resumeDisplayElement.classList.add("resume-container");
        form.reset();
    }
    else {
        console.error('The resume display element is missing.');
    }
});
function edit() {
    fname.value = fnameVal;
    email.value = emailVal;
    number.value = numberVal;
    education.value = educationVal;
    experience.value = experienceVal;
    skills.value = skillsVal;
}
function copy() {
    navigator.clipboard.writeText(url);
    alert("Link copied successfully");
}
