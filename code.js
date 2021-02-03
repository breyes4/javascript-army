$(document).ready(function()
{
    $("form").submit(rankName);

    function rankName(event)
    {
        event.preventDefault();
        let rank = $("input[name=rank]:checked").val();
        let firstName = $("input#first-name").val();
        let lastName = $("input#last-name").val();
        let fullGreeting = rank + " " + firstName + " " + lastName;
        let color = $("input[name=rank]:checked").data("color");

        $("#greeting").text(fullGreeting)
        $("#output").show().css("color", color);
    }
});
