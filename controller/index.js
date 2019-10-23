var http = require('http')
var express = require('express')
var port = 3030
var bodyParser = require('body-parser')
var app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors({
    origin: '*',
    credentials: true
}))

let select_db = require('../model/db_select')

//if view is on Gallery
app.get('/', function (req, res) {
  var search = ['characters', 'illustrations', 'other']
  select_db.random_select(search[0] ,function(err, resultat){
    if (err){
      throw (err)
    }
    if (!err){
      res.status(200).json({data: resultat})
    }
	})
})

app.get('/Gallery', function (req, res) {
  select_db.select('illustrations', function(err, data){
    let tab = []
    let tab2 = []
    if (err){
      throw err
    } else {
//split the result of the db result in 4 rows for the view
      let intlim = parseInt((data.length) / 4)
      var i = 1
      var lim = data.length / 4
      let int = Math.ceil(lim)

      for (let prop in data){
        if (data.hasOwnProperty(prop)){
          tab.push(data[prop])
          if (prop == (int * i) - Math.ceil(lim - intlim)){
              tab2.push(tab)
              tab = []
              i++
            if (lim !== intlim){
                lim -= 1/4
                if (lim == intlim){
                  int = intlim
                }
              }
          }
        }
      }
      if (tab2 !== null){
        res.status(200).json({data: tab2}) //return view data
      }
    }
  })
})

app.listen(port)
console.log('server on port '+ port)
