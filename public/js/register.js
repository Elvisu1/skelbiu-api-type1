console.log('reg');
const URL = 'http://localhost:3000/users';
// get form inputs and sendt to our back end api
// import {blue} from './helper.js'
const formEL = document.getElementById('register-form');

formEL.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('sending');
  const formData = new FormData(formEL);
  console.log('formData', Object.fromEntries(formData));
  // send fetch
  const resp = await fetch(`${URL}/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const dataBack = await resp.json();
  console.log('dataBack', dataBack);
});
