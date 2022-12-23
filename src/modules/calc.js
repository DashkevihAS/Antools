export const mult = (a, b) => a * b;
export const sum = async (a, b) => a + b;

document
  .querySelector('.navigation__item_popup')
  .addEventListener('click', () => {
    console.log('click');
  });
