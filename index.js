// eval forcing something to be number 

const calculate = () => {

  let screen = document.querySelector('.screen')
  let buttons = document.querySelectorAll('.btn')
  let clear = document.querySelector('.clear')
  let equal = document.querySelector('.equal')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let value = e.target.dataset.num;
      console.log(value);
    })
  })

}

calculate();