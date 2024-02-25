const resume = {
    "name": "Balaji",
    "title": "Full Stack Developer",
    "contact": {
      "email": "balajinagarajanofc@gmail.com",
      "phone": "9841056789",
      "address": "Chennai"
    },
    "summary": "Experienced Full Stack Developer in Chennai, skilled in JavaScript, React, Node.js, and SQL. Proven track record of leading cross-functional teams and delivering innovative web solutions.",
    "skills": ["JavaScript", "React", "Node.js", "SQL"],
    "experience": ["fresher"],
    "education": ["LIFE"],
    "certifications": ["bachelor"],
    "languages": ["Tamil", "English"]
  };


  // for loop
const keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key}: ${resume[key]}`);
}
//----------------------------------------------


  // Using for...in loop:


  for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
  }
  
  
 //---------------------------------------------
 
 
  //Using for...of loop
  

  for (let value of Object.values(resume)) {
    console.log(value);
  }
  
// -----------------------------------------------

// forEach loop

Object.entries(resume).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// ----------------------------------------------

