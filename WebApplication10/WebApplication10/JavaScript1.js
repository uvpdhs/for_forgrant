$('input[name=bla1]').change(function (el) {
    var request = new XMLHttpRequest();

    function responceLoad() {
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                if (el.checked) {
                   
                    var hour = JSON.parse(request.responseText).changes.price.hour;
                    var day = JSON.parse(request.responseText).changes.price.day;
                    var week = JSON.parse(request.responseText).changes.price.week;
                    var month = JSON.parse(request.responseText).changes.price.month;
                    document.getElementById("container2").innerHTML = hour;
                    document.getElementById("container3").innerHTML = day;
                    document.getElementById("container4").innerHTML = week;
                    document.getElementById("container5").innerHTML = month;
                    
                   
                } else {
                    var percent_hour = JSON.parse(request.responseText).changes.percent.hour;
                    var percent_day = JSON.parse(request.responseText).changes.percent.day;
                    var percent_week = JSON.parse(request.responseText).changes.percent.week;
                    var percent_month = JSON.parse(request.responseText).changes.percent.month;
                    document.getElementById("container2").innerHTML = percent_hour;
                    document.getElementById("container3").innerHTML = percent_day;
                    document.getElementById("container4").innerHTML = percent_week;
                    document.getElementById("container5").innerHTML = percent_month;
                   
                }
                
            } else {
                document.write("Ответ сервера " + request.statusText);
            }
        }
    }

    request.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD");
    request.onload = responceLoad;
    request.send();
});
function clickRadio(el) {
    var siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
    for (var i = 0; i < siblings.length; i++) {
        if (siblings[i] != el)
            siblings[i].oldChecked = false;
    }
    if (el.oldChecked)
        el.checked = false;
    el.oldChecked = el.checked;
}
var request = new XMLHttpRequest();

function responceLoad() {
    if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
            var hour = JSON.parse(request.responseText).changes.price.hour;
            var day = JSON.parse(request.responseText).changes.price.day;
            var week = JSON.parse(request.responseText).changes.price.week;
            var month = JSON.parse(request.responseText).changes.price.month;


            var price = JSON.parse(request.responseText).ask;
            document.getElementById("container1").innerHTML = price;




            document.getElementById("container2").innerHTML = hour;
            document.getElementById("container3").innerHTML = day;
            document.getElementById("container4").innerHTML = week;
            document.getElementById("container5").innerHTML = month;




        } else {
            document.write("Ответ сервера " + request.statusText);
        }
    }
}

request.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD");
request.onload = responceLoad;
request.send();





