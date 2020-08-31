var index = function(req,res) {
    res.render('index',{
      list : {
      name:'Samsung Galaxy S10',
      cpu:'Octa-core Snapdragon 855',
      internalMemory:'128 GB',
      camera: '12 MP + 12 MP + 16 MP',
      price:'999$'


  }}
  )
}
  
  module.exports = {
    index
 }