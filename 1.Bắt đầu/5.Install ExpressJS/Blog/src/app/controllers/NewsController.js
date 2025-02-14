class NewsController{
    //GET news
    index(req,res){
        res.render('news');
    }
    show(req,res){
        res.render('search')
    }
}

module.exports = new NewsController // tạo 1 đối tượng từ hàm tạo(class === obj contructor) và xuất ra ngoài 