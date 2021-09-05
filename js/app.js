/* 
Global Corona Updates api
*/

const loadSearchCountry = () => {
    const searchField = document.getElementById('search-field')
    const countryName = searchField.value 
    searchField.value = ''
    if(countryName === ''){
       return
    }
    else{

    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`)
    .then(res => res.json())
    .then(data => displaySingleCountryInfo(data))  
    }


};

const displaySingleCountryInfo = (countries) =>{
    const singleCountry = document.getElementById('single-country-info')
    singleCountry.textContent = ''
    const countriesContainer = document.getElementById('countries-container')
    countriesContainer.style.display = 'none'
    const div = document.createElement('div')
    div.classList.add('my-5')
    div.innerHTML = `
    
    <h3>${countries.country}</h3>
    <p>
      <span id="cases">Cases: ${countries.cases.toLocaleString()} |</span>
      <span id="today">Today: ${countries.todayCases.toLocaleString()} |</span>
      <span id="active">Active: ${countries.active.toLocaleString()}</span>
    </p>
    <p class= "py-1">
      <span id="deaths">Deaths: ${countries.deaths.toLocaleString()} |</span>
      <span id="death-today">Today: ${countries.todayDeaths.toLocaleString()}|</span>
    </p>
    <p class= "pb-1">
        <span id="recovery">Recover: ${countries.recovered.toLocaleString()} |</span>
        <span id="critical">Critical: ${countries.critical.toLocaleString()} |</span>
    </p>
    <p class= "pb-1">
        <span id="recovery">Total Test: ${countries.totalTests.toLocaleString()} |</span>
    </p>
    
    `;
    singleCountry.appendChild(div)
};





const loadGlobalInfo = () => {
    fetch('https://coronavirus-19-api.herokuapp.com/all')
    .then(res => res.json())
    .then(data => displayGlobalInfo(data))
}
loadGlobalInfo();

// diplaying global information

const displayGlobalInfo = (data) => {
    const globalCases = document.getElementById('global-cases');
    globalCases.innerText = `${data.cases.toLocaleString()}`
    const globalDeath = document.getElementById('global-death');
    globalDeath.innerText = `${data.deaths.toLocaleString()}`
    const globalRecovery = document.getElementById('global-recover');
    globalRecovery.innerText = `${data.recovered.toLocaleString()}`
};

const loadAllCountries = () => {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(data => displayAllCountries(data))
}

loadAllCountries()

// display all countries

const displayAllCountries = (countries) => {

    const countriesContainer = document.getElementById('countries-container')

    for(const country of countries){
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class= "country-details" >
            <h3>${country.country}</h3>
            <p>
                <span id="cases">Cases: ${country.cases.toLocaleString()} |</span>
                <span id="today">Today: ${country.todayCases.toLocaleString()} |</span>
                <span id="active">Active: ${country.active?.toLocaleString()}</span>
             </p>
             <p class= "py-1">
                <span id="deaths">Deaths: ${country.deaths.toLocaleString()} |</span>
                <span id="death-today">Today: ${country.todayDeaths.toLocaleString()}|</span>
             </p>
              <p class= "pb-1">
               <span id="recovery">Recover: ${country.recovered?.toLocaleString()} |</span>
              <span id="critical">Critical: ${country.critical.toLocaleString()} |</span>
             </p>


                    <!-- Button trigger modal -->
        <button onclick = "loadSingleCountry('${country.country}')" type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        View Details
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="modal-body" class= "text-dark p-5" class="modal-body">
            
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

        </div>

        `;
        countriesContainer.appendChild(div)
    };
};

const loadSingleCountry = (countryName) => {
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`)
    .then(res => res.json())
    .then(data => displaySingleCountry(data))
    
}

const displaySingleCountry = (countries) => {
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <h3>${countries.country}</h3>
    <p>
      <span id="cases">Cases: ${countries.cases.toLocaleString()} |</span>
      <span id="today">Today: ${countries.todayCases.toLocaleString()} |</span>
      <span id="active">Active: ${countries.active.toLocaleString()}</span>
    </p>
    <p class= "py-1">
      <span id="deaths">Deaths: ${countries.deaths.toLocaleString()} |</span>
      <span id="death-today">Today: ${countries.todayDeaths.toLocaleString()}|</span>
    </p>
    <p class= "pb-1">
        <span id="recovery">Recover: ${countries.recovered.toLocaleString()} |</span>
        <span id="critical">Critical: ${countries.critical.toLocaleString()} |</span>
    </p>
    
    `;
};