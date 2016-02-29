$(function () {

    /*
     * Инициализируем аккордеон
     */
    accordeon.init('filtr__title',false);

    /*
     * Инициализируем слайдшоу
     */
    slideshow.init('products__slideshow');
    
    //rangeselector.init('price',1000,50000);

    $( ".price__range" ).slider({
        range: true,
        min: 1000,
        max: 50000,
        values: [ 2000, 30000 ],
        slide: function( event, ui ) {
            $(".price__input-min").val(ui.values[ 0 ]);
            $(".price__input-max").val(ui.values[ 1 ]);
        }
    });

    $(".ui-slider-handle").addClass("icons icon-metka");
    //$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );


    /*
     * Вешаем клик на ссылки-переключатели вида каталога
     */
    $(".click-variant").each(function () {

        $(this).on('click',function () {

            (function () {
                $(".click-variant").each(function () {
                    var className = $(this).data('variant');
                    $(".showvariant").removeClass(className);
                });
            })();

            var variant = $(this).data('variant');
            $(".showvariant").addClass(variant);
            return false;
        });

    });

    /*
     * Вешаем клик на ссылку по очистке выбора операционных систем
     */
    $(".os__clear").on('click',function () {
        $(".os input[type=checkbox]").prop('checked',false);
        return false
    });

    /*
     * Вешаем клик на ссылку по очистке выбора производителя
     */
    $(".brands__clear").on('click',function () {
        $(".brands input[type=checkbox]").prop('checked',false);
        return false
    });

    /*
     * Вешаем клик общий на body
     */
    $("body").on('click',function () {
        console.log('body click');
        var o = $(".sorting__combobox");
        if (o.hasClass("sorting__combobox-open")) {
            $(".sorting__combobox").removeClass("sorting__combobox-open");
        }
    });

    /*
     * Вешаем клик на ссылку по очистве выбора операционных систем
     */
    $(".sorting__combobox").on('click',function () {
        var o = $(".sorting__combobox");
        if (o.hasClass("sorting__combobox-open")) {
            $(".sorting__combobox").removeClass("sorting__combobox-open");
        }
        else {
            $(".sorting__combobox").addClass("sorting__combobox-open");
        }
        return false;
    })

});