var nom = "";

$(document).ready(function(){

    $("form").submit(function(event){
        event.preventDefault();
        nom = $("#nom").val();
        telephone = $("#telephone").val();
        email = $("#email").val();
        en_personne = $('#en_personne:checked').val();
        sur_skype = $('#sur_skype:checked').val();
        var user_choice= en_personne || sur_skype;

        

        $.ajax({
        url: 'https://api.mongolab.com/api/1/databases/appointments/collections/mou?apiKey=1ZEtSNRdh_T4SirW-UVnBKuTMIq8Wbne',
        type: 'post',
          contentType: "application/json; charset=utf-8",

        dataType: 'json',
        data: JSON.stringify({nom, telephone, email, user_choice, date}),

        success: function(data) {
                   console.log("SUCCESS");
                 }
    });




    });
        
});