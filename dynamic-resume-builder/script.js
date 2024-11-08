var form = document.querySelector('form');
var resumeDisplayElement = document.getElementById('resumeDisplay');
var fname;
var email;
var number;
var education;
var experience;
var skills;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    fname = document.getElementById('name').value;
    email = document.getElementById('email').value;
    number = +(document.getElementById('number').value);
    education = document.getElementById('education').value;
    experience = document.getElementById('experience').value;
    skills = document.getElementById('skills').value;
    var dynamicResume = "\n\n    <div class=\"dynamic-edit\">\n       \n        <h2> <b> Dynamic Resume </b> </h2>\n        <h3>Personal Information:</h3>\n        <p><b>Name:</b> ".concat(fname, "</p><br>\n        <p><b>Email:</b> ").concat(email, "</p><br>\n        <p><b>Phone:</b> ").concat(number, "</p><br>\n    <br>\n        <div class=\"dynamic-edu\">\n        <h3 >Education:</h3>\n        <p>").concat(education, "</p>\n    </div><br>\n    <div class=\"dynamic-exp\">\n        <h3 >Experience:</h3>\n        <p>").concat(experience, "</p>\n    </div><br>\n    <div class=\"dynamic-skills\">\n        <h3 >Skills:</h3>\n        <p>").concat(skills, "</p>\n    </div>\n    </div>  \n      ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = dynamicResume;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
