import http from 'http'
const server = http.createServer((req, res) => {
    if((req.url==="/api/users",req.method==="GET")){
        res.end(JSON.stringify({msg:"all users"}));
    }else if((req.url==="/api/users",req.method==="POST")){
        res.end(JSON.stringify({msg:"create user"}));
    }else if((req.url==="/api/users",req.method==="GET")){
        res.end(JSON.stringify({msg:"single user with id1"}));
    }else if((req.url==="/api/users",req.method==="PUT")){
        res.end(JSON.stringify({msg:"update user with id1"}));
    }else if((req.url==="/api/users",req.method==="DELETE")){
        res.end(JSON.stringify({msg:"delete user with id1"}));
    }else{
        res.statusCode=404;
        res.end(JSON.stringify({msg:"404 - Page Not Found"}));
    }
});
server.listen(3000, () => {
    console.log("Server running on port 3000");
});