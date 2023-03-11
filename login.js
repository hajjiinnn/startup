function login(){
    const nameEl = document.querySelector("#user");
    localStorage.setItem('userName', nameEl.value);
    // const ele = document.querySelector('#pass');
    // localStorage.setItem('password', ele.value);
    window.location.href = "account.html";
}