// this line 2 supposedly makes it wait for the DOM to be loaded; 
// haven't seen it before but it works 
$(function() {
    $("#newOrder").on("click", function(event) {
        event.preventDefault();
        addBurger();
    });
    $(".devourMe").on("click", function(event) {
        var id = $(this).data('id');
        var devoured = true;
        var updatedBurg = {id: id, devoured: devoured};
        
        $.ajax("/api/burgers/"+ id, {
            type: "PUT",
            data: updatedBurg
        }).then(function() {console.log('You ate deburger'); location.reload();})
    });
    $("#burg").on('keyup', function(event) {
        console.log('keyup ' + event.keyCode);
        if(event.keyCode === 13) {
            addBurger();
        }
    });
});

function addBurger() {
    var newBurger =  $("#burg").val().trim()
    console.log(newBurger);
    $.ajax("/api/burgers", {
        type: "POST",
        data: {name:newBurger}
    }).then(function() {
        console.log('posted');
        location.reload();
    });
};