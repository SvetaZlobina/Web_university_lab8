$(function(){
    var $from = $('.from');
    var $to = $('.to');
    var $fun = $('.funct');
    var $button = $('button');
    var $plot1 = $('.plot1');
    var $plot2 = $('.plot2');

    $button.click(function(e){
        e.preventDefault();

        $from = parseFloat($from.val());
        $to = parseFloat($to.val());
        // console.log($fun);
        // console .log($to);
        $fun = $fun.val();
        var $dx = 0.05;

        var $values = [];
        for(var x = $from; x <= $to; x += $dx){
                $values.push([x, eval($fun)])
            }
        $.plot($plot1, [{label: $fun, data: $values}],{});

        setInterval(function(){
            $from += $dx;
            $to += $dx;
            $values = [];

            for(var x = $from; x <= $to; x += $dx){
                $values.push([x, eval($fun)])
            }

            $.plot($plot2, [{label: $fun, data: $values}], {})
        }, 50);
    });

});