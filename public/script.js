console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if(element !== "slide-up") {
      parent.classList.add('slide-up')
    }else{
      signupBtn.parentNode.classList.add('slide-up')
      parent.classList.remove('slide-up')
    }
  });
});

signupBtn.addEventListener('click', (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if(element !== "slide-up") {
      parent.classList.add('slide-up')
    }else{
      loginBtn.parentNode.parentNode.classList.add('slide-up')
      parent.classList.remove('slide-up')
    }
  });
});

function login(){
  var Email = [];
  Email = document.getElementById('email-login').value;
  var Password = [];
  Password = document.getElementById('password-login').value;
  console.clear();
  console.log(Email, Password);
  console.log(Password.Lenght);

};

function sign(){
  var Name = document.getElementById('Name-User').value;
  var Email = document.getElementById('Email-User').value;
  var Password = document.getElementById('Password-User').value;
  console.log(Name, Email, Password);
};
