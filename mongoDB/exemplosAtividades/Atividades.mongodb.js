use('Fatec');

//#1
//db.NBA.find({"player_name":"Ray Allen"})

//#2
db.NBA.find({"college":"Connecticut"}).projection({_id:0, college:1, player_name:1, age:1, season:1}).sort({player_name:1})