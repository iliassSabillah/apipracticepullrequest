$(document).ready(

  function(){
    
    $("#form").on("submit", function(event) {
    	//you can also use .submit(callback)
    	console.log('clicked search');
        // Lookup `preventDefault`; it stops the browser's default action,
        // which is to make a synchronous submission of the form.
        // http://api.jquery.com/category/events/event-object
        event.preventDefault();

        // As a shortcut, when jQuery calls your event handler, it sets
        // `this == event.currentTarget`.
        
        var info = $("input").val().split(' ').join('-')
        console.log(info)
        var formData = $(event.currentTarget).serializeArray();
        function searchArtists(data) {
          console.log(data)
          
          object = data.contentPage.artObjectSet;
          console.log(object)
          for(var i=0; i< object.length; i++){
            $.ajax({
              url: 'https://rijksmuseum.nl/api/en/collection/'+object[i]+'?key=XMizSvJw&format=json',
              success: artCollection
            })    
          }
        }

         $.ajax({
          url: 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/'+info+'?key=XMizSvJw&format=json' ,
          success: searchArtists
        });
        function artCollection(data){
            var newData= data.artObject.webImage.url
            console.log(newData)
              $('body').append('<img src="'+newData+'"/>');
    
              
          }
       

  	});
})

