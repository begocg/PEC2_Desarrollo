//A esta función, le hemos quitado el argumento de onSucess y onError porque lo hemos implementado con el then, catch
const findOne = (list, { key, value }) => {
  //Hemos creado la promesa que nos ayuda a que la operación sea asíncrona, ya que devuelve resultados en el futuro y, por esta razón, hemos eliminado el setTimeout.
  return new Promise((resolve, reject) => {
      //Con Array.find buscamos un elemento en la lista/array
      const element = list.find(element => element[key] === value);
      //Con resolve y reject, relacionamos la promesa con el then y catch de las llamadas de la función
      element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
    });
};
//Se ha creado esta función asíncrona, que, al ejecutarse, se ejecutan las dos instancias de findOne
async function execute() {
  await findOne(users, { key: 'name', value: 'Carlos' })
  .then(result => {
    console.log('findOne success');
    onSuccess(result);

  })
  .catch(error => {
    console.log('findOne error');
    onError(error);
  });

  await findOne(users, { key: 'name', value: 'Fermín' })
  .then(result => {
    console.log('findOne success');
    onSuccess(result);
    
  })
  .catch(error => {
    console.log('findOne error');
    onError(error);
  });
}
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

//Se llama a la función execute.

execute();


/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
