const users = [
  {
    name: 'Raúl'
  },
  {
    name: 'José'
  },
  {
    name: 'Luis'
  },
  {
    name: 'Lorena'
  }
];

function findUser(array, { key, value }, { onSucces, onError }) {
  const result = array.find(user => user[key] === value);
  setTimeout(() => {
    result ? onSucces(result) : onError({ msg: 'No se ha encontrado' });
  }, 2000);
}

const onSucces = result => console.log('Encontrado: ', result);
const onError = ({ msg }) => console.log('Error: ', msg);

findUser(users, { key: 'name', value: 'l' }, { onSucces, onError });
