import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventdefault();

  let delay = Number(evt.currentTarget.delay.value);  
  const step = Number(evt.currentTarget.step.value);  
  const amount = Number(evt.currentTarget.amount.value);
  

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay).then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
    }).catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`)
    })
    delay += step;
    };
  


//   const createPromise = (position, delay) => {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       }
//       reject({ position, delay });
//     }, delay);
//   });
// 
