const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || height < 0 || isNaN(height))
    results.innerHTML = "please enter a valid height";
  else if (weight === "" || weight < 0 || isNaN(weight))
    results.innerHTML = "please enter a valid weight";
  else {
    results.innerHTML = `<span>${bmi}</span>`;

    // if (bmi > 25)
    //   results.innerHTML =
    //     `<span>${bmi}</span>` + "<br>" + " please you are overweight";
    // else if (bmi < 18.5)
    //   results.innerHTML = `<span>${bmi}</span>` +  "<br>" + " please you are underweight";
    // else //if (18.5 <= bmi <= 25)
    //   results.innerHTML =
    //     `<span>${bmi}</span>` + "<br>" + "you are normal weight";
  }
  if (bmi > 25) {
    document.getElementById(
      "advice"
    ).innerHTML = `Your bmi is ${bmi} and you are over weight`;
  } else if (bmi < 18.5) {
    document.getElementById(
      "advice"
    ).innerHTML = `Your bmi is ${bmi} and you are under weight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById(
      "advice"
    ).innerHTML = `Your bmi is ${bmi} and you are normal weight`;
  } else {
    document.getElementById("advice").innerHTML = "You must enter a number";
  }
  
});
