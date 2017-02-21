/**
 * Created by Brian Milton on 20/02/2017.
 */

/**
 * Morse Code Decoder
 */

(function(){

    var morseCode = {
        '.-':'A',
        '-...':'B',
        '-.-.':'C',
        '-..':'D',
        '.':'E',
        '..-.':'F',
        '--.':'G',
        '....':'H',
        '..':'I',
        '.---':'J',
        '-.-':'K',
        '.-..':'L',
        '--':'M',
        '-.':'N',
        '---':'O',
        '.--.':'P',
        '--.-':'Q',
        '.-.':'R',
        '...':'S',
        '-':'T',
        '..-':'U',
        '...-':'V',
        '.--':'W',
        '-..-':'X',
        '-.--':'Y',
        '--..':'Z',
        '.----':'1',
        '..---':'2',
        '...--':'3',
        '....-':'4',
        '.....':'5',
        '-....':'6',
        '--...':'7',
        '---..':'8',
        '----.':'9',
        '-----':'0'
    };

    var validWords = [
        {
            word:'SHELL',
            frequency:'3.505 MHz'
        },
        {
            word:'HALLS',
            frequency:'3.515 MHz'
        },
        {
            word:'SLICK',
            frequency:'3.522 MHz'
        },
        {
            word:'TRICK',
            frequency:'3.532 MHz'
        },
        {
            word:'BOXES',
            frequency:'3.535 MHz'
        },
        {
            word:'LEAKS',
            frequency:'3.542 MHz'
        },
        {
            word:'STROBE',
            frequency:'3.545 MHz'
        },
        {
            word:'BISTRO',
            frequency:'3.552 MHz'
        },
        {
            word:'FLICK',
            frequency:'3.555 MHz'
        },
        {
            word:'BOMBS',
            frequency:'3.565 MHz'
        },
        {
            word:'BREAK',
            frequency:'3.572 MHz'
        },
        {
            word:'BRICK',
            frequency:'3.575 MHz'
        },
        {
            word:'STEAK',
            frequency:'3.582 MHz'
        },
        {
            word:'STING',
            frequency:'3.592 MHz'
        },
        {
            word:'VECTOR',
            frequency:'3.595 MHz'
        },
        {
            word:'BEATS',
            frequency:'3.600 MHz'
        }
    ];

    var morseDecode = function(message){

        var msgArray = message.split(' ');
        var morseDecode = '';

        for(var i = 0, len = msgArray.length; i < len; i++){
            morseDecode += morseCode[msgArray[i]];
        }

        return checkValidWord(morseDecode);

        // return morseDecode;

    };

    var checkValidWord = function (checkString) {

        console.log('Checking: ', checkString);

        var wordArray = [];

        for(var i = 0, len = validWords.length; i < len; i++){

            var currentWord = validWords[i].word.trim();

            console.log('Comparing: ', currentWord);

            if(currentWord.substr(0,checkString.length).toUpperCase() == checkString.toUpperCase()) {
                wordArray.push(validWords[i]);
                console.log('Matched.');
            }

        }

        displayResults(wordArray, 'morse-results');

        return wordArray;

    };

    var displayResults = function(resultsArray, selectName){

        var container = document.getElementsByName(selectName)[0];

        console.log('CONTAINER:',container);
        console.log('RESULTS:', resultsArray);

        container.innerHTML = '';

        container.setAttribute('size',resultsArray.length);

        for(var i = 0, len = resultsArray.length; i < len; i++){

            var newOption = document.createElement('option');

            newOption.innerHTML = resultsArray[i].word + ' => ' + resultsArray[i].frequency;

            container.appendChild(newOption);

        }

    };

    // window.MorseDecode = morseDecode;

    var morseInput = document.getElementsByName('morse-input')[0];

    morseInput.addEventListener('input', function(){
        morseDecode(this.value);
    });

}());