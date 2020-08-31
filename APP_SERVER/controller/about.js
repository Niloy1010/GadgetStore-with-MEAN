var about = function(req,res) {
    res.render('about',{title: "About My Site",
    description: "This is a website created for the assignments in our course DATA CONNECTIVITY class.I am Biozid Rahman Niloy, creator of this website and an up and coming full stack developer"
});
}
module.exports = {
    about
}