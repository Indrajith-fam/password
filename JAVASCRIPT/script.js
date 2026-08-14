function  generate_password (length,include_lowercase,include_uppercase,include_numbers,include_symbols){
   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   const numberChars = "1234567890"
   const symbolChars = "!@#$%^&*()_-<>~?/:|;"

   let allowedchars = "";
   let password = "";

   allowedchars += include_lowercase ? lowercaseChars : "";
   allowedchars += include_uppercase ? uppercaseChars : "";
   allowedchars += include_numbers ? numberChars : "";
   allowedchars += include_symbols ? symbolChars : "";

 if(length <8  ){
    return"(password length must be atleast 8 characters) "
 }
 if(allowedchars.length === 0   ){
    return"(atleast one set of charecter needs to be selected) "
 }

for(let i = 0; i < length ; i++ ){
   const random_index = Math.floor(Math.random()*allowedchars.length)
   password += allowedchars[random_index]
}
      
   return password;
}
const password_length =  9
const include_lowercase = true
const include_uppercase = true 
const include_numbers =  true
const include_symbols =  true

const password = generate_password (password_length,
                                   include_lowercase,
                                   include_uppercase,
                                   include_numbers,
                                   include_symbols)

                                   document.getElementById("myH1").textContent = `Generated password: ${password}`


document.getElementById("BTN1").onclick = function () {
    const password = generate_password(
        password_length,
        include_lowercase,
        include_uppercase,
        include_numbers,
        include_symbols
    );

    document.getElementById("myH1").textContent =
        `Generated password: ${password}`;
};

