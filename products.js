$(document).ready(function(){
 
		
 var produceList = function (products) {
    var content = '<ul>';
    for (var i = 0; i < products.length; i++) {
        content += '<li class="bookInfo" id="' + products[i].productId + '">' + products[i].title + ', by ' + products[i].author + products[i].price + '</li>';
    }
    content += '</ul>';
	$('#product-display').html(product-display);
}
	
var getAllBooks = function () {
	 
$("button").click(function(){
    /*$.getJSON('http://localhost:8080/productservice/product', function (products) {
            productList(products);*/
			
	$.ajax({
		type: 'GET',
		//dataType: 'jsonp',
		url: 'http://localhost:8080/productservice/product',
		headers: {
			//'Access-Control-Allow-Credentials' : true,
			'Access-Control-Allow-Origin':'http://localhost:8080/productservice/product', 
			//'mode':'no-cors',
		},
		success: function(products){		
		console.log("Hi");
		productList(products);				
		}			
	});
 });
 }
	
$('#getAllBooks').click(getAllBooks);
	
	
	
	
	
	
	
// $('.header').height($(window).height());

/*	var table = new Tabulator("#product-display", {
	  ajaxURL:"http://localhost:8080/productservice/product",
	//data:tabledata,
	columns:[
		{title:"Name", field:"product"},
        {title:"Price", field:"price"},
        {title:"Author", field:"author"},
        {title:"Description", field:"Description"},
	],
});*/
	/*$.ajax({
	type: 'GET',
	dataType: 'json',
	
	responseType:'application/json',
	contentType: 'application/json',
	url: 'http://localhost:8080/productservice/product',
	headers: {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'http://localhost:8080/productservice/product', 
	'mode':'no-cors',
  },
	
	success: function(products){
	//productList(products);
	console.log(produts);
	var content = '<ul>';
        for (var i = 0; i < products.length; i++) {
            content += '<li class="bookInfo" id="' + products[i].productId + '">' + products[i].title + ', by ' + products[i].author + products[i].price + '</li>';
        }
        content += '</ul>';

        $('#product-display').html(product-display);
   }
})*/

    // REGISTER GET ALL BOOKS BUTTON
   // $('#product-display').html(product-display);
	//click(getAllBooks);
	
});