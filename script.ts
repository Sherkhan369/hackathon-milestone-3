
const form= document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement;
 // handle form submission
  form.addEventListerner('submit', (event: Event) =>{
 event.preventDefault();
 //type assertion
 const name = (document.getElementById('name') as HTMLInputElement).value
 const dob =( document.getElementById('dob') as HTMLInputElement).value
 const phone = (document.getElementById('phone') as HTMLInputElement).value
 const email= (document.getElementById('email') as HTMLInputElement).value
 const education =( document.getElementById('education') as  HTMLTextAreaElement).value
 const skills= (document.getElementById('skills') as   HTMLTextAreaElement).value
 const experience =( document.getElementById('experience') as  HTMLTextAreaElement).value


 
 //create resume output
 const resumeHTML= `
 <h2> Resume</h2>
 
 <h3>Personal Infomation</h3>
 <p<b>Name:</b>${name} </p>
 <p><b>Date Of Birth:</b> ${dob} </p>
 <p><b>Phone:</b> ${phone} </p>
 <p><b>Email:</b> ${email} </p>

 <h3>Education</h3>
 <p>${education}</p>

 <h3>skills</h3>
 <p>${skills}</p>

 <h3>Work Experience</h3>
 <p>${experience}</p>
 `;

 // display

 
 if(resumeDisplayElement){
     resumeDisplayElement.innerHTML = resumeHTML
 } else {
     console.error('The resume outpUt element are missing');
 } 

 });