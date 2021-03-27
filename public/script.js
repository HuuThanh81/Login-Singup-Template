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
  axios({
    method: 'get',
    url: 'http://localhost:3000/account',
    data: null
  }).then(res=>{
    let find = res.data.find(db => db.UserName === document.getElementById("email-login").value);
    if(find != undefined){
      if(find.PassWord == document.getElementById("password-login").value){
        alert("Họ Tên : " + find.fullName +" ." +
              "Mã HTTP status : " + res.status +" ." +
              "Thông điệp HTTP status : " + res.statusText +" ."+
              "Header : " + res.headers +" ."+
              "Cấu hình khi thực hiện request : " + res.config +" ."+
              "request : " + res.request +" ."
        );
      } else {
        alert ("Email or Password is incorrect !!!");
      }
    } else {
      alert ("Unregistered email !!!");
    }
  }).catch(err =>{
    console.log(err);
  });
};

function sign(){
  let U = document.getElementById("Name-User").value ;
  let P = document.getElementById("Email-User").value ;
  let F = document.getElementById("Password-User").value ;

  console.log(U, P, F);

  // axios.post('http://localhost:3000/account', {
  //   UserName: A,
  //   PassWord: 'Last name',
  //   FullName:'a'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
};

