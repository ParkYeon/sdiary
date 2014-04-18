// MongoDB를 쓰기 위한 requirevar mongodb = require('mongodb');
// 접속서버 세팅. auto_reconnect가 들어있는 3번째 파라메터는 옵션 모음
var mongodb_server = new mongodb.Server('ds029950.mongolab.com', 29950, {auto_reconnect: true});
// DB 세팅
var db = mongodb.Db('sdiary', mongodb_server, {w:1});

// DB OPEN
db.open(function(err, client){
    if (err) {
        console.log(err);
        return;
    }

    // 인증 
    // 옵션인 3번째 파라메터의 authSource: admin 이 포인트...ㅠ_ㅠ
    db.authenticate('test_app', 'test_pass', {'authSource': 'admin'}, function(err){
        if (err) {
            console.log(err);
            return;
        }

        // collection 선택
        var col = new mongodb.Collection(client, 'mynewcollection');
        // 선택한 collection 전체 item iteration
        col.find().toArray(function(err, item){
            if (err) {
                console.log(err);
                return;   
            }
            console.log(item);
        });
    });
});
