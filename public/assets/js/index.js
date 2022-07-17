const signupForm = $("#signup-form");

const handleSignup = (event) => {
  event.preventDefault();

  const firstName = $("#firstName").val;
  const userName = $("#userName").val;
  const email = $("#email").val;
  const password = $("#password").val;
  const confirmPassword = $("#confirmPassword").val;

  if (firstName && userName && email && password && confirmPassword) {
    if (password === confirmPassword) {
try {
    const payload = {
        firstName,
        userName,
        email,
        password,
      };

      const response = await fetch("/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json()

     if(data.success) {
        window.location.assign("/login")
     } else {
        //render error failed to login
     } 
} catch(error ) {
    //render error failed to login
}
    } else {
        //mismatched passwords
    }
  } else {
  }

  console.log("submit");
};

signupForm.submit(handleSignup);
