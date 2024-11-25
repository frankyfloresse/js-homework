// #ymAmN2xJ
// Ствoрити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами: заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let userForm = document.forms['form'];

userForm.addEventListener('submit', function (e) {
    e.preventDefault();

     let user = {
         name: this.userName.value,
         surname: this.userSurname.value,
         age: +this.userAge.value
     };

     let div = document.createElement('div');
     div.innerText = `${user.name} ${user.surname} ${user.age || ''}`;
     document.body.append(div);
});





