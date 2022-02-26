function compute()
{
    var principal = document.getElementById("principal").value;
    var principal_input = document.getElementById("principal")
    var rate = document.getElementById("rate").value;  
    var years = document.getElementById("years").value;
    if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("result").innerHTML="";
        principal_input.focus();
    }
    else
    {
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML=
        "If you deposit " + "<span id=\"result_highlight\">" + numberWithCommas(principal) + "</span>"  + "," + "<br/>" +
        "at an interest rate of " + "<span id=\"result_highlight\">" + rate + "</span>" + "%." + "<br/>" +
        "You will receive an amount of " + "<span style=\"background-color: LawnGreen; font-weight: bold\">" + numberWithCommas(interest) + "</span>" +"," + "<br/>" +
        "in the year " + "<span id=\"result_highlight\">" + year + "." + "</span>";
    };
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

// I copy this numberWithCommas function from Internet on Stackoverflow.com. Not my original work.
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
        
function setFocus()
{
    var principal_input = document.getElementById("principal");
    principal_input.focus();
}
