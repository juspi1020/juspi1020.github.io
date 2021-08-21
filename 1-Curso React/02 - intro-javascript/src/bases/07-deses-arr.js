const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , pj3] = personajes;
console.log(pj3);


const retornaArregrlo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArregrlo();
console.log(letras, numeros);

//tarea
const useState = (valor) => {
    return [valor, () => { console.log('hola mundo'); }];

}


const [nombre, setNombre] = useState('gogeta');
console.log(nombre);