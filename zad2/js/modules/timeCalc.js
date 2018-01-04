
process.stdin.setEncoding('utf-8');

function calcTheTime () {
    process.stdin.on('readable', function() {

        var input = process.stdin.read();

        if (input !== null) {
            var instruction = input.toString().trim();
            
            switch (instruction) {
                case '>=0' :
                    console.log(dziala);
                    break;

                case '/exit':
                    console.log('Quitting app!\n');
                    process.exit();
        
                default:
                    console.log('Wrong instruction!');

            }
        
        
        }

    })
}

exports.print = calcTheTime;