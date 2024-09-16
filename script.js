var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resumeDisplay');
// handle form submission
form.addEventListerner('submit', function (event) {
    event.preventDefault();
    //type assertion
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //create resume output
    var resumeHTML = "\n <h2> Resume</h2>\n \n <h3>Personal Infomation</h3>\n <p<b>Name:</b>".concat(name, " </p>\n <p><b>Date Of Birth:</b> ").concat(dob, " </p>\n <p><b>Phone:</b> ").concat(phone, " </p>\n <p><b>Email:</b> ").concat(email, " </p>\n\n <h3>Education</h3>\n <p>").concat(education, "</p>\n\n <h3>skills</h3>\n <p>").concat(skills, "</p>\n\n <h3>Work Experience</h3>\n <p>").concat(experience, "</p>\n ");
    // display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume outpUt element are missing');
    }
});
