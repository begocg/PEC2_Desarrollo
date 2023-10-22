//Se crea una función llamada findOne con 3 argumentos, el primero es list, el segundo tiene dos propiedades (key y value) y el tercero son dos funciones que se ejecutarán en función del resultado de la búsqueda
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  //Con setTimeout, retrasamos la ejecución del código que sigue 2000 milisegundos
  setTimeout(() => {
    //Con Array.find buscamos un elemento en la lista/array
    const element = list.find(element => element[key] === value);
    //Se llama a la función onSuccess si el elemento se encuentra y a la onError si no se encuentra
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

//Se definen las funciones onSuccess y onError
const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

//Se crea un array
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

//Se hacen dos usos de la función findOne, pero antes de mostrar el mensaje de error o el nombre de usuario pasarán 2 segundos.
console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
