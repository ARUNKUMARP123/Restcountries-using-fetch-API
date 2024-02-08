var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((data1) => {
  console.log(data1);
  let div = document.createElement("div");
  div.setAttribute("class", "container-fluid ");

  let row = document.createElement("div");
  row.setAttribute("class", "row ");

  for (let i = 0; i < data1.length; i++) {
    // Create a new col-4 element for each country
    let col = document.createElement("div");
    col.setAttribute("class", "col-md-4 text-center");

    col.innerHTML = `
        <div class="main">
        <h5 class="country text-bg-dark ">${data1[i].name}</h5>
        <div class="image">
          <img src="${data1[i].flag}" class="img" alt="img">
        </div>
        <div class="body">
          <p class="capital">Capital:${data1[i].capital}</p>
          <p class="Region">Region:${data1[i].region}</p>
          <p class="Country_Code">Country Code:${data1[i].alpha3Code}</p>
          <button onclick="getWeather('${data1[i].name}')" class="btn btn-primary">Click for Weather</button>
        </div>
      </div>`;

    // Append the col element to the row
    row.appendChild(col);
  }

  // Append the row to the container
  div.appendChild(row);

  // Append the container to the body
  document.body.appendChild(div);
});

function getWeather(countryName) {
  // Add your code to get weather information for the specified country
  console.log(`Getting weather for ${countryName}`);
}
