const HomeController=(req,res)=>{
        res.status(200).send(req.body);
}
module.exports={HomeController};