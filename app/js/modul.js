$(function () {

    /*
     * Инициализируем аккордеон
     */
    accordeon.init('filtr__title',true);
    
    /*
     * Вешаем клик на ссылки-переключатели вида каталога
     */
    $(".click-variant").each(function () {

        $(this).on('click',function () {
            var variant = $(this).data('variant');
            $(".showvariant").removeClass('var1');
            $(".showvariant").removeClass('var2');
            $(".showvariant").removeClass('var3');
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