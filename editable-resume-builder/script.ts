let form = document.querySelector('form') as HTMLFormElement;
let resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement;
let editBtn;

let fname = document.getElementById('name') as HTMLInputElement;
let email = document.getElementById('email') as HTMLInputElement;
let number = document.getElementById('number') as HTMLInputElement;
let education = document.getElementById('education') as HTMLTextAreaElement;
let experience = document.getElementById('experience') as HTMLTextAreaElement;
let skills = document.getElementById('skills') as HTMLTextAreaElement;

let fnameVal;
let emailVal;
let numberVal;
let educationVal;
let experienceVal;
let skillsVal;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  fnameVal = fname.value
  emailVal = email.value
  numberVal = number.value
  educationVal = education.value
  experienceVal = experience.value
  skillsVal = skills.value

  const dynamicResume = `
        <h2> <b> Dynamic Resume </b> </h2>
        <h3>Personal Information:</h3>
        <p><b>Name:</b> ${fnameVal}</p><br>
        <p><b>Email:</b> ${emailVal}</p><br>
        <p><b>Phone:</b> ${numberVal}</p><br>
        <div class="dynamic-edu">
            <h3>Education:</h3>
            <p>${educationVal}</p>
        </div>
        <div class="dynamic-exp">
            <h3>Experience:</h3>
            <p>${experienceVal}</p>
        </div>
        <div class="dynamic-skills">
            <h3>Skills:</h3>
            <p>${skillsVal}</p>
        </div>

        <button type="button" id="editBtn" onclick="edit()">Edit</button>
      `;

  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = dynamicResume;
    resumeDisplayElement.classList.add("resume-container")
    form.reset();
  } else {
    console.error('The resume display element is missing.');
  }
});


function edit() {
  fname.value = fnameVal
  email.value = emailVal
  number.value = numberVal
  education.value = educationVal
  experience.value = experienceVal
  skills.value = skillsVal
}