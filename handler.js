const handler=(req, res)=>{
    res.status(200);
    console.log(req.app.locals.title);
    res.send("Welcome to root URL of Server");
};
module.exports= handler;