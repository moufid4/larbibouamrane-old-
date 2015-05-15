 jQuery('#datetimepicker').datetimepicker({
                onSelectDate: function (ct) {console.log(ct.dateFormat('d/m/Y'))},
                onSelectTime: function (ct) {console.log(ct.dateFormat('H:i'))},
                lang:'fr',
                onGenerate:function( ct ){
                jQuery(this).find('.xdsoft_date.xdsoft_weekend')
                  .addClass('xdsoft_disabled');
                  },
              weekends:[],
              timepicker:true
                

            });