
let nameUser = readUserName('Enter your name');
let lastnameUser = readUserLastname();
let ageUser = readUserAge();
let phoneUser = readUserPhone();
let numberChildren = readNumberChildren();
let children = enterChildren(numberChildren);

let userData = {
  name: nameUser,
  lastname: lastnameUser,
  age: ageUser,
  telefon: phoneUser,
  numberChildren: numberChildren,
  children: children,

  showUserData: function(){
    console.clear();
    console.log('Your name is: ' + this.name)
    console.log('Your lastname is: ' + this.lastname);
    console.log('Your age is: ' + this.age );
    console.log('Your telefon is: ' + this.telefon );
    console.log('The number of your children: ' + this.numberChildren);
    
    for(let i = 0; i < this.children.length; i++){
      console.log('Name of ' + (i + 1) + ' child: ' + this.children[i].name)
      console.log('Age of ' + (i + 1) + ' child: ' + this.children[i].age);
    }
  }
}

userData.showUserData();

function readUserLastname(){
  let lastnameUser = readLine('Enter your lastname', 'Lub');
  if(isUserLastnameIncorrect(lastnameUser)){
    return readUserLastname();
  }
  return lastnameUser;
}

function isUserLastnameIncorrect(lastnameUser){
  return lastnameUser === '' || lastnameUser === ' ';
} 

function readUserAge(){
  let ageUser = Number(readLine('Enter your age', 21));
  if(isUserAgeCorrect(ageUser)){
    return ageUser;
  }
  return readUserAge();
}

function isUserAgeCorrect(ageUser){
  return Number(ageUser);
} 

function readUserPhone(){
  let phoneUser = readLine('Enter your telefon', '0984030232');  
  
  if(isUserPhoneCorrect(phoneUser)){
    phoneUser = phoneNumberUser(phoneUser);
    return phoneUser;
  }
  return readUserPhone();
}

function isUserPhoneCorrect(phoneUser){
  if(phoneUser.length === 10 && Number(phoneUser)){
    return phoneUser;
  }
}

function phoneNumberUser(phoneUser){
  let phoneFormat = '(aaa)-aaa-aa-aa';

  for(let i = 0; i < phoneUser.length; i++){
    phoneFormat = phoneFormat.replace('a', phoneUser[i]);
  }

  return phoneFormat;
}

function readNumberChildren(){
  let numberChildren = Number(readLine('How many children do you have?', 1));
  if(isNumberChildrenCorrect(numberChildren)){
    return numberChildren;
  }
  return readNumberChildren();
}

function isNumberChildrenCorrect(numberChildren){
  return Number(numberChildren);
} 

function  enterChildren(num){
  let children = [];
    
  for(let i = 0; i < num; i++){
    let name = readChildrenName(i);
    let age = readChildrenAge(i);
    
    let child = new Child(name, age);
    children.push(child);
  }
  
  return children;
}

function readChildrenName(i){
  let name = readLine('Enter the name of ' + (i + 1) + ' child', 'Tomas');

  if(isChildrenNameIncorrect(name)){
    return readChildrenName(i);
  }
  return name;
}

function isChildrenNameIncorrect(name){
  return name === '';
}  

function readChildrenAge(i){
  let age = Number(readLine('Enter the age of ' + (i + 1) + ' child', 1));

  if(isChildrenAgeCorrect(age)){
    return age;
  }
  return readChildrenAge(i);
}

function isChildrenAgeCorrect(age){
  return Number(age);
} 

function readLine(value, exaple){
  // TODO: chanche reaLine - prompt;
  return prompt(value, exaple);
  // return ' ';
}

function Child(name, age) {
  this.name = name;
  this.age = age;  
}

selectFunction(userData);

function selectFunction(userData){
  let instruction = readInstruction();

  if(instruction === '1'){
    userData.name = readUserNewName('Enter your new name');
  }
  else if(instruction === '2'){
    userData.telefon = readUserPhone(userData);
  } 
  else if(instruction === '3'){
    adoptChild(userData.children);           
  }
  else if(instruction === '4'){
    deleteChild(userData.children);            
  }
  else if(instruction === '5'){
    return;
  }
  userData.showUserData(); 
  selectFunction(userData);
}

function readInstruction(){
  let instruction = readLine('5 functions are available for you: ' +
                           '1. Name change; ' +
                           '2. Change the phone; ' +
                           '3. Adopt a child; ' +
                           '4. Take the child to the camp; ' +
                           '5. No changes ','Choose a number from 1 to 5');

  if(isChildrenNameCorrect(instruction)){
    return instruction;
  }
  return readInstruction();
}

function isChildrenNameCorrect(instruction){
  instruction = Number(instruction);
  return instruction === 1 || instruction === 2 || instruction === 3 || instruction === 4 || instruction === 5;
}  

function readUserName(instruction){
  let userName = readLine(instruction, 'Leo');
  if(isUserNewNameIncorrect(userName)){
    return readUserName();
  }
  return userName;
}

function isUserNewNameIncorrect(userName){
  return userName === '';
}  

function adoptChild(children) {
  let numChildren = readNumAdoptChildren();
  
  for(let i = 0; i < numChildren; i++){
    let name = readAdoptChildName(i);
    let age = readAdoptChildAge(i);
    
    let child = new Child(name, age);
    children.push(child);
  }
}

function readNumAdoptChildren(){
  let numChildren = Number(readLine('How many children do you want to adopt?', 2));

  if(isNumAdoptChildrenCorrect(numChildren)){
    return numChildren;
  }
  return readNumAdoptChildren();
}

function isNumAdoptChildrenCorrect(numChildren){
  return Number(numChildren);
} 

function readAdoptChildName(i){
  let name = readLine('Enter the name of ' + (i + 1) + ' adopted child', 'Tomas');

  if(isAdoptChildNameIncorrect(name)){
    return readAdoptChildName(i);
  }
  return name;
}

function isAdoptChildNameIncorrect(name){
  return name === '';
}  

function readAdoptChildAge(i){
  let age = readLine('Enter the age of ' + (i + 1) + ' adopted child', 1);

  if(isAdoptChildAgeCorrect(age)){
    return age;
  }
  return readAdoptChildAge(i);
}

function isAdoptChildAgeCorrect(age){
  return Number(age);
} 

function deleteChild(children){
  let numChildren = readDeleteChild();
    
  children.splice(numChildren - 1, 1);   
}

function readDeleteChild(){
  let numChildren = Number(readLine('What kind of child do you want to send to the camp? - enter the sequence number of the child', 2));
  
  if(isDeleteChildCorrect(numChildren)){
    return numChildren;
  }
  return readDeleteChild();
}

function isDeleteChildCorrect(numChildren){
  return Number(numChildren) && numChildren <= userData.children.length;
} 
