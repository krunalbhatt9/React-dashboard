const express = require('./node_modules/express');
const bodyParser = require('./node_modules/body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/device', (req, res) => {
    console.log(req.body)
    windfarm = req.body.windfarm;
    
   
    if (!windfarm || windfarm == "all"){
        var faults = [];
        fs.readFile('./data/fault.json', (err, faults) => {
            faults = JSON.parse(faults);  
            res.json (faults)
        });
       
    }else{ 
        fs.readFile('./data/fault.json', (err, json) => {
            items = JSON.parse(json);   
            var result = [];
            for (var item, i = 0; item = items[i++];) 
                {
                    var name = item.asset_id
                    if ((windfarm == "Colorado" )&& (name == 9)){
                        //console.log(item)
                        result.push(item);
                    }
                    else if ((windfarm == "Minneapolis" )&& (name == 8) ){
                        //console.log(item)
                        result.push(item);
                    }
                }
                res.json(result)
            });
    }

});

app.get('/api/farms', (req, res) => {
    console.log("get farms")
    fs.readFile('./data/device.json', (err, json) => {
        var lookup = {};
        var items = JSON.parse(json);
        var result = [];

        for (var item, i = 0; item = items[i++];) {
           
        var name = item.asset;
        //console.log(name)
        if (!(name in lookup)) {
            lookup[name] = 1;
            result.push(name);
        }
        }
        //console.log ( result)
        res.json(result);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));