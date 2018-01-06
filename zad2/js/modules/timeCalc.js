
process.stdin.setEncoding('utf-8');

function calcTheTime () {
    process.stdin.on('readable', function() {

        var input = process.stdin.read();

        if (input !== null) {
            var instruction = input.toString().trim();
            
            if (instruction >= 60 && instruction < 3600) {
                var minutes = instruction/60;
                var seconds = (minutes - Math.floor(minutes)) * 60;

                console.log(minutes.toFixed(0),' minutes and ', seconds.toFixed(0), ' seconds');

            }else if (instruction >= 3600) {
                var hour = instruction/3600;
                var minutes = (hour - Math.floor(hour)) * 60;
                var seconds = (minutes - Math.floor(minutes)) * 60;

                console.log(hour.toFixed(0),' hours and ', Math.floor(minutes), ' minutes and ', seconds.toFixed(0), ' seconds');

            }else {
                console.log('Wrong instruction! Write number of seconds to calculet');
            }
        }      
    }

)}


calcTheTime();

exports.print = calcTheTime;


