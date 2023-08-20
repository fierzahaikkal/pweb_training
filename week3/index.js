function submitFunc() {
  let uname = document.getElementById("uname").value;
  let password = document.getElementById("passwd").value;
  let mail = document.getElementById("email").value;
  let submit_btn = document.querySelector("submit");
  submit_btn = "true";

  console.log(uname);
  console.log(password);
  console.log(mail);

  if (uname.length < 8) {
    alert("Panjang karakter username harus lebih dari 7");
    submit_btn = "false";
  }
  if (password.length < 8) {
    alert("Panjang karakter password harus lebih dari 7");
    submit_btn = "false";
  }

  if (mail == -1) {
    alert("Panjang karakter password harus lebih dari 7");
    submit_btn = "false";
  }

  if (submit_btn == "false") {
    return false;
  }
  if (submit_btn == "true") {
    let tbl_element = document.getElementById("table");
    let trow_element = document.createElement("tr");
    let tbody_element = document.createElement("tbody");
    let uname_element = document.createElement("td");
    let mail_element = document.createElement("td");
    let passwd_element = document.createElement("td");

    uname_element.innerHTML = uname;
    mail_element.innerHTML = mail;
    passwd_element.innerHTML = password;

    trow_element.appendChild(uname_element);
    trow_element.appendChild(mail_element);
    trow_element.appendChild(passwd_element);

    tbody_element.appendChild(trow_element);
    tbl_element.appendChild(tbody_element);
  }
}
