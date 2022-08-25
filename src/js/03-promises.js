import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
console.log(formRef);
formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventdefault();

  let delay = Number(evt.currentTarget.delay.value);
  console.log(delay);
  const step = Number(evt.currentTarget.step.value);
  console.log(step);
  const amount = Number(evt.currentTarget.amount.value);
  console.log(amount);
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
