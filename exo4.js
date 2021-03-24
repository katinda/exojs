var age = Number(prompt("Quel est ton age ?"));
var sexe = prompt("Quel est ton sexe ?");
var ville = prompt ("D'ou vies tu ?");


if(age == 26 && sexe == "masculin" &&  ville == "Bruxelles"){
    alert("Kat a " + age + " ans");
    alert ("Kat est de sexe " + sexe);
    alert ("Kat habite a " + ville);
}
else{
    alert("c'est faux !");
}