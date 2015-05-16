$('#datetimepicker').datetimepicker({
    onSelectDate: function (ct) {
    	dateSelect = ct.dateFormat('d/m/Y');
},
    onSelectTime: function (ct) {
    	timeSelect = ct.dateFormat('H:i');
},  
    onGenerate:function( ct ){
	    $(this).find('.xdsoft_date.xdsoft_weekend')
	      .addClass('xdsoft_disabled');
	},

	weekends:[],
	timepicker:true,
	lang:'fr',
});

var dateSelect;
var timeSelect;
