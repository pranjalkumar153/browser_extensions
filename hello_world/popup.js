$(function() {
    $("#get_name").keyup(function() {
        $("#name").text("Hello " + $("#get_name").val());
    });
});