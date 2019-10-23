const path = require('path');
const fs = require('fs');
var db = require('./db_con')

function handleFileSelect(rootPath, rootType){
    fs.readdir(rootPath, function(err, files){
      let tab = []
      files.forEach( function(each){
        const pathFile = `${rootPath}/${each}`
        tab.push(pathFile.split('client/img')[1])
        if (fs.lstatSync(pathFile).isDirectory()){
          handleFileSelect(pathFile)
        }
      })
      if (tab){
        console.log('read dir: "', rootPath , '" \t datas >\n' , tab)
        let tabvalues = []
        let id = 0
        tab.forEach(function(values){
          let object = {
            id: id,
            title: values,
            type: rootType
          }
          tabvalues.push("(" + object.id + ", '" + object.title + "' ,'" + object.type + "')")
          id++;
        })
        if (tabvalues !== null){
          let request = tabvalues.join()
          db.query('INSERT INTO t_table (id, title, type) values ' + request + "", function (err, res){
            if (err){
              console.log('🔴\tfail to insert news files on "', rootType ,'"')
              throw (err);
            }
            if (!err){
              console.log('🔵\tinsert on database "', rootType ,'" done')
            }
          })
        }
      }
    })
}

function update(){
  const dir = ['characters','illustrations','other', 'projects']
  var position = path.parse(__dirname).dir + '/../../mag-projectVue/static/client/img/'
  for(i = 0; i <= 3; i++){
    handleFileSelect(position + dir[i], dir[i])
  }
}


update();
