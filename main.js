const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateGraph)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  alert(numberOfRides);
  console.log(numberOfRides);
}

// $(greeter)


function greeter(name){
  alert("Welcome to " +name+ " data visualization")
}

greeter("Emmerson Donnell's")

var person = {name: "Emmerson", age: 20, car: {model: "Subaru", year: 2002}}
console.log ("my name is " + person.name)
console.log ("My age is " +person.age)
console.log ("My car model is " + person.car.model)

function add(num1, num2){
  answer=num1+num2;
  console.log("The answer is: " + answer);
  return answer;
}

if(person.age > 19){
  alert("You're OLD!")
}

var data= {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data[2016]
console.log('year list is '+ year_list)

console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])

add(2,3);



function updateGraph(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});}

$(updateView)

let years =[] 
let months2016 = []
let months2017 = []
let months2018 = []

function updateView () {
  $.getJSON (BASE_URL + "/rides/count" , updateRideCount)

  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),
  ).then(updateChart);
}

function perYear(data) {
  for (var index= 0, month=9; index <= 3, month <=12; ++index, ++month){
    months2016.push(data[2016] [index] [month])
  }}
  console.log("2016 data by months is easy " + months2016)

  function perYear(data) {
    for (var index= 0, month=1; index <= 11, month <=12; ++index, ++month){
      months2016.push(data[2016] [index] [month])
    }}
    console.log("2017 data by months is easy " + months2017)

    function perYear(data) {
      for (var index= 0, month=1; index <=data.length, month <= 10; ++index, ++month){
        months2016.push(data[2016] [index] [month])
      }}
      console.log("2016 data by months is easy " + months2018)
    

  