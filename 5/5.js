let login = prompt('Кто там?', '');

if (login == 'Админ') {
let password = prompt('Пароль', '');
if (password == 'Я Главный') {
alert('Здравствуйте!');
} else if (password == null || password == '' ) {
alert('Отменено');
} else {
alert('Не верный пароль');
}
} else if (login == '' || login == null) {
alert('Отменено');
} else {
alert('Я вас не знаю');
}