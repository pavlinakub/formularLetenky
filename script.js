window.onload = function () {
  const city = document.getElementById("city");
  const pocet = document.getElementById("pocetLetenek");
  //checkbox
  const zpatecni = document.getElementById("zpatecni");
  //radiobuttons
  const economy = document.getElementById("economy");
  const business = document.getElementById("business");
  const royal = document.getElementById("royal");
  //textArea
  const poznamka = document.getElementById("poznamka");
  //cena
  const cenaCelkem = document.getElementById("celkem");
  const spocitej = document.getElementById("spocitej");
  const rozpocet = document.getElementById("rozpocet");
  const resume = document.getElementById("resume");
  const resetB = document.getElementById("reset");
  const odeslat = document.getElementById("odeslat");
  spocitej.addEventListener("click", function (event) {
    event.preventDefault();
    let celkem = 0;
    celkem = Number(city.value) * Number(pocet.value);

    if (zpatecni.checked == true) {
      celkem = celkem * Number(zpatecni.value);
    }
    //radiobuttons
    let pom = 0;

    if (economy.checked == true) {
      pom = celkem * Number(economy.value);
      celkem += pom;
    }
    if (business.checked == true) {
      pom = celkem * Number(business.value);
      celkem += pom;
    }
    if (royal.checked == true) {
      pom = celkem * Number(royal.value);
      celkem += pom;
    }

    let maxCena = rozpocet.value;
    cenaCelkem.value = celkem;
    let pomocna = Number(maxCena) - celkem;

    if (pomocna > 0) {
      resume.value = "Z rozpoctu ti zbyva:" + pomocna;
    } else if (pomocna < 0) {
      resume.value = "Sniz objednavku o:" + Math.abs(pomocna);
    }
  });

  //odeslat.addEventListener("click", function (event) {
  //   event.preventDefault();

  //   let specialniZnaky = "!@#$%^&*()+=-[]\\';,./{}|\":<>?";

  //   for (let i = 0; i < poznamka.value.length; i++) {
  //     if (specialniZnaky.indexOf(poznamka.value.charAt(i)) != -1) {
  //       alert("Zkontroluj si poznamky a vymaz specialni znaky");
  //     } else {
  //       alert("Objednavka odeslana");
  //     }
  //   }
  // });
  poznamka.addEventListener("input", function () {
    let specialniZnaky = "!@#$%^&*()+=-[]\\';,./{}|\":<>?";
    let newValue = "";

    for (let i = 0; i < poznamka.value.length; i++) {
      if (specialniZnaky.indexOf(poznamka.value[i]) === -1) {
        newValue += poznamka.value[i];
      }
    }

    poznamka.value = newValue;
  });
  resetB.addEventListener("click", function (event) {
    event.preventDefault();

    city.value = 500;
    pocet.value = 1;
    //checkbox

    zpatecni.checked = false;
    //radiobuttons
    economy.checked = true;
    rozpocet.value = 0;
    resume.value = 0;
    poznamka.value = "";
  });
};
