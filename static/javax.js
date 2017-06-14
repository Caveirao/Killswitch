$(document).ready(function (){

    function kill_switch(t_request, set_status) {
        $.ajax({
            url: "http://" + window.location.href.split("/")[2] + "/api/v1.0/wifi/killer/" + set_status,
            type: t_request,
            contentType: "application/json; charset=utf-8",
            beforeSend: function (xhr) {
                $('body').html("<div class='text' style='width:100%;margin:20% auto'>...</text>");
            },
            complete: function (result) {
                var json = JSON.parse(result.responseText)
                $('body').html("<div class='text' style='width:100%;margin:20% auto'>"+json.status+"</text>");
                $("#lamp-status").text();
            }
        });
    }


    $('button').click(function(){
        if(confirm("Você tem certeza?"))
            kill_switch("PUT", "off");
    });
});
