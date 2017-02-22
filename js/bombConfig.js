/**
 * Created by JavaProductions on 21/02/2017.
 */

(function($){

    window.KTANE = window.KTANE || {};

    window.KTANE.BombConfig = {
        serialNumber : '',
        hasParallelPort: false
    };

    $('#bomb-serial-number').on('change', function(){
        KTANE.BombConfig.serialNumber = $(this).val();
    })

}(jQuery));