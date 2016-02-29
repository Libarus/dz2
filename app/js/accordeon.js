/*
 * Модуль для аккордеона
 */
;(function ($) {
    
    var me;

    publicInterface();

    function publicInterface() {

        me = {

            /*
             * Функция инициализации аккордеона
             * 
             *  @param {string} title Класс элемента, на который будет повешено действие щелчка аккордеона
             *  @param {bool} collapsed Определяет умолчание свёрнутого (true)/развёрнутого (false) аккордеона
             */
            init:function (title,collapsed) {
                
                $("." + title).on('click',function () {
                    $(this).next().slideToggle(300);
                    if ($(this).hasClass('accordeon__close')) {
                        $(this).removeClass("accordeon__close");
                        $(this).addClass("accordeon__open");
                    } else {
                        $(this).addClass("accordeon__close");
                        $(this).removeClass("accordeon__open");
                    }
                    return false;
                });

                
                $("." + title).each(function () {
                    $(this).addClass("accordeon");
                    if (collapsed) {
                        $(this).addClass("accordeon__open");
                        $(this).next().hide();
                    } else {
                        $(this).addClass("accordeon__close");
                    }

                });
            }

        };
    }

    window.accordeon = me;

})(jQuery);