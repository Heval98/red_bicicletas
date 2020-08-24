var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');

describe('testing Bicicletas', function(){
    beforeEach(function(done) {
        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, { useNewUrlParser: true });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function(){
            console.log('We are connected to test database!');
            done();
        });
    });

    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if (err) console.log(err);
            done();
        });
    });

    describe('Bicicleta.createInstance', () => {
        it('crea una instania de Bicicleta', () => {
            var bici = Bicicleta.createInstance(1, "verde", "urbana", [-34.5, -54.1]);

            expect(bici.code).toBe(1);
            expect(bici.color).toBe("verde");
            expect(bici.modelo).toBe("urbana");
            expect(bici.ubicacion[0]).toBe(-34.5);
            expect(bici.ubicacion[1]).toBe(-54.1);
        });
    });

    // describe('Bicicleta.allBicis', () => {
    //     it('comienza vacia', (done) => {
    //         Bicicleta.allBicis(function(err, bicis){
    //             expect(bicis.length).toBe(0);
    //             done();
    //         });
            
    //     });
    // });

    
});


// beforeEach(() => { Bicicleta.allBicis = []; });
// // El nombre que identifica el test que debemos hacer
// describe('Bicicleta.allBicis', () => {
//     //Con el it damos la instrucción de la accion que vamos a probar
//     it('comienza vacia', () => {
//         //toBe, es el valor que esperamos
//         expect(Bicicleta.allBicis.length).toBe(0);
//     });
// });

// // El nombre que identifica el test que debemos hacer
// describe('Bicicleta.add', () => {
//     //Con el it damos la instrucción de la accion que vamos a probar
//     it('agregar una', () => {
//         //toBe, es el valor que esperamos
//         expect(Bicicleta.allBicis.length).toBe(0);

//         var a = new Bicicleta(1, 'rojo', 'urbana', [-34.8473204, -58.9846253]);
//         Bicicleta.add(a);

//         expect(Bicicleta.allBicis.length).toBe(1);
//         expect(Bicicleta.allBicis[0]).toBe(a);
//     });
// });

// describe('Bicicleta.findById', () => {
//     it('debe devolver la bici con id 1', () => {
//         expect(Bicicleta.allBicis.length).toBe(0);
//         var aBici = new Bicicleta(1, "verde", "urbana");
//         var aBici2 = new Bicicleta(2, "verde", "urbana");

//         Bicicleta.add(aBici);
//         Bicicleta.add(aBici2);

//         var targetBici = Bicicleta.findById(1);
//         expect(targetBici.id).toBe(1);
//         expect(targetBici.color).toBe(aBici.color);
//         expect(targetBici.modelo).toBe(aBici.modelo);
//     });
// });