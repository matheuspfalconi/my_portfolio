var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    var loading = document.getElementById("div-loading");
    
    loading.style.display = "none";

    document.getElementById("content-home").style.display = "block";

}, 1800);