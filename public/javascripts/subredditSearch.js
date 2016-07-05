$(document).ready(function(){
        $("#searchB").click(link);
});



$('form input').keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        link();
        return false;
    }
});
 

function link(){
    var link = "http://www.google.com/search?q=site:reddit.com/r/";
    var sub = $("#subredditF").val();
    var query = $("#queryF").val();
    query = query.replace('+','%2B');
    query = query.replace(' ','+');
    link = link + sub + "+" + query;
    window.location = link;
}

