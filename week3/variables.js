function varDeclare() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); //20
  }
  console.log(x); //20
}
varDeclare();

function letDeclare() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); //20
  }
  console.log(x); //10
}
letDeclare();

function constDeclare() {
  const x = 10;
  if (true) {
    const x = 20;
    console.log(x); //20
  }
  console.log(x); //10
}
constDeclare();
