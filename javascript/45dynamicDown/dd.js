const url = "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let elements = document.createElement('option') //<option></option>
            let text = document.createTextNode(item.state) // delhi
            elements.appendChild(text) //<option>delhi</option>
            elements.value = item.state_id; //<option value="1">delhi</option>
            document.getElementById('city').appendChild(elements)
        })
    })
}

const getHotel = () => {
    let stateid = document.getElementById('city').value;
    let rest = document.getElementById('hotels');
    while(rest.length > 0){
        rest.remove(0)
    }
    fetch(`${restUrl}${stateid}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let elements = document.createElement('option') //<option></option>
            let text = document.createTextNode(item.restaurant_name) // delhi
            elements.appendChild(text) //<option>delhi</option
            rest.appendChild(elements)
        })
    })
}