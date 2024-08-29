
// Loop-Challenge

let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samira"];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];



for (let i = 0 ; i < myAdmins.length ; i++){
  if(myAdmins[i] === "Stop"){
    document.write(`<h1>We Have ${i} Admins</h1>`) 
    break;
  } 
  
}
for (let i = 0 ; i < myAdmins.length ; i++){
  if(myAdmins[i] === "Stop"){
    break;
  } 
  document.write('<hr>')
  document.write('<div>')
  document.write(`<h3>The admin For Team ${i+1} is "${myAdmins[i]}" </h3>`)
  document.write('<h2>Team Members :</h2>')
  for(let j = 0 ; j < myEmployees.length ; j++){
    if(myAdmins[i][0] === myEmployees[j][0]){
      document.write(`- ${myEmployees[j]}<br>`)
    }else{
      continue;
    }
  }  
  document.write('</div>')
}
  

  

/*=====================*/

