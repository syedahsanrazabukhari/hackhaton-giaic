let form = document.querySelector('form') as HTMLFormElement;
let resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement;

let fname: string
let email: string
let number: number
let education: string
let experience: string
let skills: string

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  fname = (document.getElementById('name') as HTMLInputElement).value
  email = (document.getElementById('email') as HTMLInputElement).value
  number = +((document.getElementById('number') as HTMLInputElement).value)
  education = (document.getElementById('education') as HTMLInputElement).value
  experience = (document.getElementById('experience') as HTMLInputElement).value
  skills = (document.getElementById('skills') as HTMLInputElement).value


  const dynamicResume = `

    <div class="dynamic-edit">
       
        <h2> <b> Dynamic Resume </b> </h2>
        <h3>Personal Information:</h3>
        <p><b>Name:</b> ${fname}</p><br>
        <p><b>Email:</b> ${email}</p><br>
        <p><b>Phone:</b> ${number}</p><br>
    <br>
        <div class="dynamic-edu">
        <h3 >Education:</h3>
        <p>${education}</p>
    </div><br>
    <div class="dynamic-exp">
        <h3 >Experience:</h3>
        <p>${experience}</p>
    </div><br>
    <div class="dynamic-skills">
        <h3 >Skills:</h3>
        <p>${skills}</p>
    </div>
    </div>  
      `;

  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = dynamicResume;
  } else {
    console.error('The resume display element is missing.');
  }
});