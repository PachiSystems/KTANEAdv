/**
 * Created by JavaProductions on 21/02/2017.
 */

(function($){

    window.KTANE = window.KTANE || {};

    var selectedWires = [];

    var countWires = function(wireArray, colour){

        var wireCount = [];

        for (var i = 0, len = wireArray.length; i < len; i++) {
            if(wireArray[i] === colour) {
                wireCount.push(i);
            }
        }

        return wireCount;

    };

    var makeDecision = function(wireArray){

        var wireColour = {
                red : countWires(wireArray, 'RED'),
                white : countWires(wireArray, 'WHITE'),
                blue : countWires(wireArray, 'BLUE'),
                yellow: countWires(wireArray, 'YELLOW'),
                black: countWires(wireArray, 'BLACK')
            },
            lastWire = wireArray[wireArray.length - 1],
            isSerialLastDigitOdd = (KTANE.BombConfig.serialNumber.slice(-1)%2 === 1);

        console.log(wireColour);

        switch (wireArray.length) {

            case 3:
                // If there are no red wires, cut the second wire.
                if (!wireColour.red.length) {
                    return 2;
                }

                // Otherwise, if the last wire is white, cut the last wire.
                if(lastWire === 'WHITE') {
                    return wireArray.length;
                }

                // Otherwise, if there's more than one blue wire, cut the last blue wire.
                if (wireColour.blue.length > 1) {
                    return wireColour.blue[wireColour.blue.length-1] + 1;
                }

                // Otherwise cut the last wire.
                return wireArray.length;

                break;

            case 4:

                // If there's more than one red wire and the last digit of the serial number is odd, cut the last red wire.
                if (isSerialLastDigitOdd) {

                    if(wireColour.red.length > 1) {
                        return wireColour.red[wireColour.red.length-1] + 1;
                    }

                }

                // Otherwise, if the last wire is yellow and there are no red wires, cut the first wire.
                if (lastWire === 'YELLOW' && !wireColour.red.length) {
                    return 1;
                }

                // Otherwise, if there is exactly one blue wire, cut the first wire.
                if (wireColour.blue.length === 1) {
                    return 1;
                }

                // If there is more than one yellow wire, cut the last wire.
                if (wireColour.yellow.length > 1) {
                    return wireArray.length;
                }

                // Otherwise, cut the second wire.
                return 2;

                break;

            case 5:

                // If the last wire is black and the last digit of the serial number is odd, cut the fourth wire.
                if (lastWire === 'BLACK' && isSerialLastDigitOdd) {
                    return 4;
                }

                // Otherwise, if there is exactly one red wire and there is more than one yellow wire, cut the first wire.
                if (wireColour.red.length === 1 && wireColour.yellow.length > 1) {
                    return 1;
                }

                // Otherwise, if there are no black wires, cut the second wire.
                if(!wireColour.black.length) {
                    return 2;
                }

                // Otherwise, cut the first wire.
                return 1;

                break;

            case 6:

                // If there are no yellow wires and the last digit of the serial number is odd, cut the third wire.
                if(!wireColour.yellow.length && isSerialLastDigitOdd) {
                    return 3;
                }

                // Otherwise, if there is exactly one yellow wire and there is more than one white wire, cut the fourth wire.
                if(wireColour.yellow.length === 1 && wireColour.white.length > 1) {
                    return 4;
                }

                // Otherwise, if there are no red wires, cut the last wire.
                if(!wireColour.red.length) {
                    return wireArray.length;
                }

                // Otherwise, cut the fourth wire.
                return 4;

                break;

        }

    };

    $('.simple-wire-table').on('click','.wire', function(){

        $(this).siblings().removeClass('-selected');
        $(this).addClass('-selected');

        var selectedWireIndex = parseInt($(this).closest('.simple-wire-table').data('wire-index'));

        console.log('Selected wire:', selectedWireIndex);

        selectedWires[selectedWireIndex - 1] = $(this).data('value');

        if(selectedWireIndex < 6) {
            $('[data-wire-index="' + (selectedWireIndex + 1) + '"]').removeClass('hidden');
        }

        console.log('Wires so far:',selectedWires);

        if(selectedWires.length >= 3) {

            var wireToCut = makeDecision(selectedWires);

            $('.simple-wire-result').html('').eq(wireToCut - 1).html('<b>CUT THIS WIRE!</b>');

        }

    });

    $('.reset-simple-wires').on('click',function(e){

        e.preventDefault();

        $('.simple-wire-table .wire').removeClass('-selected');

        $('.simple-wire-table').addClass('hidden').first().removeClass('hidden');

        selectedWires = [];

        return false;
    });

    window.KTANE.SimpleWires = {

    };

}(jQuery));