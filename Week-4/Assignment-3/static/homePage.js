let showSignIn = document.getElementById("show-sign-in");
let showSignUp = document.getElementById("show-sign-up");
let signInSubmit = document.getElementById("sign-in-btn");
let signUpSubmit = document.getElementById("sign-up-btn");
let signInForm = document.getElementById("sign-in-form");
let signUpForm = document.getElementById("sign-up-form");

showSignIn.addEventListener("click", () => {
    signInForm.style.display = "inline-block";
    signUpForm.style.display = "none";
});

showSignUp.addEventListener("click", () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "inline-block";
});

signUpSubmit.addEventListener("click", async () => {
    const inputEmail = document.querySelector("#email").value;
    const inputPassword = document.querySelector("#password").value;
    const inputRePassword = document.querySelector("#re-password").value;
    if (inputPassword === inputRePassword) {
        let response = await fetch("/sign-up", {
            method: "POST",
            body: JSON.stringify({
                email: inputEmail,
                password: inputPassword,
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((res) => res.json())
            .catch((error) => {
                console.log(error);
            });
        if (response.success) {
            // document.querySelector("#enroll-msg").innerText = "註冊成功";
            document.cookie = `email=${inputEmail}`;
            location.href = "http://localhost:3000/memberPage.html";
        } else {
            document.querySelector("#enroll-msg").innerText = response.msg;
        }
    } else {
        document.querySelector("#enroll-msg").innerText = "密碼不相符";
    }
});

signInSubmit.addEventListener("click", async () => {
    const inputEmail = document.querySelector("#login-in-email").value;
    const inputPassword = document.querySelector("#login-in-password").value;
    let response = await fetch("/sign-in", {
        method: "POST",
        body: JSON.stringify({
            email: inputEmail,
            password: inputPassword,
        }),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    })
        .then((res) => res.json())
        .catch((error) => {
            console.log(error);
        });
    if (response.success) {
        // document.querySelector("#login-msg").innerText = "登入成功";
        document.cookie = `email=${inputEmail}`;
        location.href = "http://localhost:3000/memberPage.html";
    } else {
        document.querySelector("#login-msg").innerText = response.msg;
    }
});
