    // var myDiv= document.getElementById('mydiv');
    
    Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
    if(err){
        console.log("error"+err);
    }else{
        function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
          }
    }
      
    var z_data=[ ]
    for(i=0;i<24;i++)
    {
      z_data.push(unpack(rows,i));
    }

    var data = [{
        z: z_data,
        type: 'surface'
     }];

    var layout = {
    title: 'Chart By Ashutosh',
    autosize: false,
    width: 500,
    height: 500,
    margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
    }
    };
    Plotly.newPlot('myDiv', data, layout);
    });