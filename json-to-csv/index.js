const jsonForm = document.querySelector("#json-form");
const csvForm = document.querySelector("#csv-form");
const bConvert = document.querySelector("#bConvert");

bConvert.addEventListener("click", (e) => {
  convertJSONtoCSV();
});

function convertJSONtoCSV() {
  //Algunas variables
  let json;
  let keys = [];
  let values = [];

  try {
    json = JSON.parse(jsonForm.value);
  } catch (error) {
    console.log("Formato incorrecto", error);
    alert('Formato incorrecto JSON');
    return;
  }

  if (Array.isArray(json)) {
    //Algoritmo.
    json.forEach((item) => {
      const nKeys = Object.keys(item);

      if (keys.length === 0) {
        keys = [...nKeys];
      } else {
        if (nKeys.length !== keys.length) {
          throw new Error("Number of keys are differente");
        } else {
          console.log("Ok", nKeys);
        }
      }

      const row = keys.map(k =>{
        return item[k];
      });

      values.push([... row]);
    });

    console.log(keys, values);

    values.unshift(keys);
    const text = values.map(v => v.join(',')).join('\n');
    csvForm.textContent = text;
  } else {
    alert("No es un arreglo de objetos");
  }
}
