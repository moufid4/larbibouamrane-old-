// form submit

$(document).ready(function(){

    $("form").submit(function(event){
        event.preventDefault();
        nom = $("#nom").val();
        telephone = $("#telephone").val();
        email = $("#email").val();
        en_personne = $('#en_personne:checked').val();
        sur_skype = $('#sur_skype:checked').val();
        var user_choice = en_personne || sur_skype;

        

        $.ajax({
        url: 'https://api.mongolab.com/api/1/databases/appointments/collections/mou?apiKey=1ZEtSNRdh_T4SirW-UVnBKuTMIq8Wbne',
        type: 'post',
          contentType: "application/json; charset=utf-8",

        dataType: 'json',
        data: JSON.stringify({nom:nom,telephone:telephone, email:email, endroit:user_choice, date:date}),

        success: function(data) {
                $('#appointment_confirmation').toggleClass('show hidden');
		        $('#appointmentSection').toggleClass('show hidden');
		        $("#time").html(date);
                window.location.href = "#appointment_confirmation";

// email confirmation

        $.ajax({
        url: 'http://larbibouamrane.com/email',
        type: 'post',
          contentType: "application/json; charset=utf-8",

        dataType: 'json',
        data: JSON.stringify({nom:nom, telephone:telephone, email:email, endroit:user_choice, date:date}),

    



    });
        


// end email confirmation














                 }
    });




    });
        
});

// datetimepicker
$(function () {
    $('#datetimepicker').datetimepicker({
        
        locale: 'ar-ma',
        inline: true,
        sideBySide: true,
        daysOfWeekDisabled:[5,6],
        defaultDate: moment("2015-05-21T07:00:00.196Z"),
        stepping:30,
        enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16],
        minDate:moment()

    });
   $(document).on('dp.change', function () {
       select = $('#datetimepicker').data("DateTimePicker").date()._d;
       date = moment(select).format('dddd Do MMMM YYYY على الساعة H:mm');

    });

     
});

// show, hide appointment
function showHideAppointment() {
    $('#appointment').toggleClass('show hidden');
   
    $('#appointmentButton').toggleClass('show hidden');

}
