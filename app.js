var url = "https://www.reddit.com/r/perfectLoops.json"

var callback = function(response){
  // récupérer les urls des images
  var images = response.data.children.map(function(obj){
    return obj.data.url
  });

  var html = "";

  // construire le html pour afficher les images dans des balises <img>
  images.forEach(function(imgUrl){
    html += "<img src='" + imgUrl + "'/>" ;
  });

  // définir le html à l'intérieur de la div id="gifs"
  $('#gifs').html(html);
};

$(function(){
  $.get(url, callback)
  // OU $.get(url).then(callback)
})