

const BASE_URL = "https://zagster-service.herokuapp.com"


$(updateView)

var my_data = []

function updateView() {
  
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updateChart);
}



function perYear(data) {

    
    var data2017 = data[2017] 
    
    console.log(data2017[0][1]) 
    my_data.push(data2017[0][1]) 
    console.log(data2017[1][2])  
    my_data.push(data2017[1][2]) 
    console.log(data2017[2][3])
    my_data.push(data2017[2][3])
    console.log(data2017[3][4])
    my_data.push(data2017[3][4])
    console.log(data2017[4][5])
    my_data.push(data2017[4][5])
    console.log(data2017[5][6])
    my_data.push(data2017[5][6])
    console.log(data2017[6][7])
    my_data.push(data2017[6][7])
    console.log(data2017[7][8])
    my_data.push(data2017[7][8])
    console.log(data2017[8][9])
    my_data.push(data2017[8][9])
    console.log(data2017[9][10])
    my_data.push(data2017[9][10])
    console.log(data2017[10][11])
    my_data.push(data2017[10][11])
    console.log(data2017[11][12])
    my_data.push(data2017[11][12])
    
  }
  

function updateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
       
        type: 'line',

        
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September', 'October', 'November', 'December',  ],
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2017',
                backgroundColor: 'rgb(0, 0, 420)',
                borderColor: 'rgb(255, 119, 142)',
                
                data: my_data  
            }]
        },

       
        options: {}
    });
}