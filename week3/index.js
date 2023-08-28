// membuat fungis submit
function handleSubmit() {
  // mendefinisikan variabel dengan id sebagai valuenya
  let uname = document.getElementById("uname").value;
  let password = document.getElementById("passwd").value;
  let mail = document.getElementById("email").value;
  let submit_btn = document.querySelector("submit");
  //membuat state awal untuk button submit
  submit_btn = "true";

  console.log(uname);
  console.log(password);
  console.log(mail);

  // conditional to make sure form validation, jika gagal submit button false
  if (uname.length < 8) {
    alert("Panjang karakter username harus lebih dari 7");
    submit_btn = "false";
  }
  if (password.length < 8) {
    alert("Panjang karakter password harus lebih dari 7");
    submit_btn = "false";
  }

  if (mail == -1) {
    alert("Masukkan email dengan benar");
    submit_btn = "false";
  }

  if (submit_btn == "false") {
    return false;
  }

  // jika state submit button true maka..
  if (submit_btn == "true") {
    // mendefinisikan variabel dengan value id table nya
    let tbl_element = document.getElementById("table");
    //createElement akan membuat elemen baru dari valuenya
    let trow_element = document.createElement("tr");
    let tbody_element = document.createElement("tbody");
    let uname_element = document.createElement("td");
    let mail_element = document.createElement("td");
    let passwd_element = document.createElement("td");

    //membuat konten element html diisi dengan valuenya
    uname_element.innerHTML = uname; //pada bagian uname_element akan diisi dengan uname
    mail_element.innerHTML = mail;
    passwd_element.innerHTML = password;

    // setelah tiap elemen table data memiliki value maka akan di tambahkan ke table row
    trow_element.appendChild(uname_element);
    trow_element.appendChild(mail_element);
    trow_element.appendChild(passwd_element);

    // menambahkan table row kedalam table body
    tbody_element.appendChild(trow_element);
    // menambahkan table body kedalam table
    tbl_element.appendChild(tbody_element);
  }
}
