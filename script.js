$(document).ready(function() {
    $("input").click(function() {
        var value = $(this).val();
        if (value == 'Space') {
            $(".text-container").append(" ");
        } else if (value == "Clear") {
            $(".text-container").html("");
        } else {
            $(".text-container").append(value);
        }
    })
})