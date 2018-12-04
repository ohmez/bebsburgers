$(function() {
    $("#newOrder").on("click", function(event) {
        var newBurger =  $("#burg").val().trim()
        
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: {name:newBurger}
        }).then(function() {
            console.log('posted');
            location.reload();
        })
    });
});