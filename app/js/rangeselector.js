/*
 * Модуль для указания диапазона цены
 */
;(function ($) {

    var me;

    publicInterface();

    function publicInterface() {

        me = {
            /*
             * Функция инициализации аккордеона
             * 
             *  @param {string} name Класс элемента, на который будет повешено действие
             *  @param {integer} min минимальное значение диапазона
             *  @param {integer} max максимальное значение диапазона
             */
            init:function (name, min, max) {
                min = parseInt(min);
                max = parseInt(max);

                var randeselector = $("." + name),
                    inputmin = $("." + name + " ." + name + "__input-min").val(min),
                    inputmin = $("." + name + " ." + name + "__input-max").val(max),
                    metkamin = $("." + name + " ." + name + "__rangemetka-left"),
                    metkamax = $("." + name + " ." + name + "__rangemetka-right");

                metkamin.on('mousedown',function () {
                    console.log('нажата');
                });

                metkamin.on('mouseup',function () {
                    console.log('отпущена');
                });
            }
        }
    };

    window.rangeselector = me;

})(jQuery);