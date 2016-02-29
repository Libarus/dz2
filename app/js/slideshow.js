/*
 * Модуль для слайдшоу
 */
;(function ($) {

    var me;

    publicInterface();

    function publicInterface() {

        me = {
            /*
             * Функция инициализации аккордеона
             * 
             *  @param {string} title Класс элемента, на который будет повешено действие слайдшоу
             */
            init:function (title) {

                // берём все слайдшоу
                $("." + title).each(function () {
                    
                    // внутри каждого слайдшоу берём элемент большой картинки
                    var img = $(this).find(".products__slideshow-image");
                    // и все линки внутри слайдшоу
                    var links = $(this).find(".products__slideshow-link");
                    links.each(function () {
                        // и навешиваем на все найденные ссылки щелчёк
                        $(this).on('click',function () {
                            var big = $(this).data('big');
                            img.attr('src',big);
                            return false;
                        });
                    });

                });

            }
        }
    };

    window.slideshow = me;

})(jQuery);