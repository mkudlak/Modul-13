//Przyjmowanie danych od użytkownika
process.stdin.setEncoding('utf-8');



//Zwracanie danych od użytkownika
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();

    switch (input) {
        case 'version' :
            console.log(process.versions.node);
            break;
        
        case 'language' :
            console.log(process.env.LANG);
            break;

        case ' /exit':
            console.log('Quitting app!\n');
            process.exit();
        
        default:
            console.log('Wrong instruction!');
        
    }
});
    

/*
console.log(process.env.LANG);
console.log(process.versions.node);
*/