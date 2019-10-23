var db = require('./db_con')

function select(search, callback){
	db.query('SELECT * from t_table where type ="' + search + '" order by id', function(err, result, fields){
		if (err){
			callback(err, null);
		}
		if (!err){
			callback(null, result)
		}
	})
}

function random_select(search, callback){
	db.query('(SELECT * FROM t_table where type="characters" ORDER BY RAND( ) LIMIT 3) \
						union \
						(SELECT * FROM t_table where type="illustrations" ORDER BY RAND( ) LIMIT 3)\
						union \
						(SELECT * FROM t_table where type="other" ORDER BY RAND( ) LIMIT 3)',
						function(err, result, fields){
							if (err){
								callback(err, null)
							}
							if (!err){
								callback(null, result)
							}
						})
}

module.exports.select = select
module.exports.random_select = random_select
