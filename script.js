let morseAlphabet = [
    {
        morse: '.-',
        letter: 'A'
    },
    {
        morse: '-...',
        letter: 'B'
    },
    {
        morse: '-.-.',
        letter: 'C'
    },
    {
        morse: '-..',
        letter: 'D'
    },
    {
        morse: '.',
        letter: 'E'
    },
    {
        morse: '..-.',
        letter: 'F'
    },
    {
        morse: '--.',
        letter: 'G'
    },
    {
        morse: '....',
        letter: 'H'
    },
    {
        morse: '..',
        letter: 'I'
    },
    {
        morse: '.---',
        letter: 'J'
    },
    {
        morse: '-.-',
        letter: 'K'
    },
    {
        morse: '.-..',
        letter: 'L'
    },
    {
        morse: '--',
        letter: 'M'
    },
    {
        morse: '-.',
        letter: 'N'
    },
    {
        morse: '---',
        letter: 'O'
    },
    {
        morse: '.--.',
        letter: 'P'
    },
    {
        morse: '--.-',
        letter: 'Q'
    },
    {
        morse: '.-.',
        letter: 'R'
    },
    {
        morse: '...',
        letter: 'S'
    },
    {
        morse: '-',
        letter: 'T'
    },
    {
        morse: '..-',
        letter: 'U'
    },
    {
        morse: '...-',
        letter: 'V'
    },
    {
        morse: '.--',
        letter: 'W'
    },
    {
        morse: '-..-',
        letter: 'X'
    },
    {
        morse: '-.--',
        letter: 'Y'
    },
    {
        morse: '--..',
        letter: 'Z'
    },
    {
        morse: '.----',
        letter: '1'
    },
    {
        morse: '..---',
        letter: '2'
    },
    {
        morse: '...--',
        letter: '3'
    },
    {
        morse: '....-',
        letter: '4'
    },
    {
        morse: '.....',
        letter: '5'
    },
    {
        morse: '-....',
        letter: '6'
    },
    {
        morse: '--...',
        letter: '7'
    },
    {
        morse: '---..',
        letter: '8'
    },
    {
        morse: '----.',
        letter: '9'
    },
    {
        morse: '-----',
        letter: '0'
    },
    {
        morse: '-.-.--',
        letter: '!'
    },
    {
        morse: '.-.-.-',
        morse: '--..--',
        letter: '.',
    }
]


function decode(code){
  let splitted = code.split(' ')
  let str = ''
  let count = 2;
  for(let i = 0; i < splitted.length; i++) {
    let reqLetter = morseAlphabet.find(e => e.morse === splitted[i]);
    
    if(reqLetter === undefined) {
        count++
        if(count === 3) {
            str+= ' '
            count = 0
        }
    }
    else str+= reqLetter.letter
  }
  return console.log(str)
}

decode('... --- ...')