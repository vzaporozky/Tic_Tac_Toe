// const variable: = {
//     main_block : document.querySelector('.main'),
//     menu_play : document.querySelector('.menu_play'),
//     player_x : document.querySelector('.player_x'),
//     player_o : document.querySelector('.player_o'),
//     menu_start : document.querySelector('.menu'),
// }
// variable.main_block?.addEventListener('click', function(event){
//     console.log('fdas')
// })

// import '../css/style.sass'
// import '../css/style.css'

main_block = document.querySelector('.main');
menu_play = document.querySelector('.menu_play');
player_x = document.querySelector('.player_x');
player_o = document.querySelector('.player_o');
menu_start = document.querySelector('.menu');
main_block === null || main_block === void 0 ? void 0 : main_block.addEventListener('click', function (event) {
    console.log('fdas');
});

console.log('zbs')
/*
    сделать сетку в html            +
    сделать меню выбора html        +
    стилизовать с помощью css       +
    ВЫУЧИТЬ TS                      +

    сделать обработчик событий на весь блок (применять делегирование)
    при нажатии на любой блок, туда вставляется Х/O
    сделать булеевую переменную для опеределнеия, что именно будет выводить в блоке X/O
    отображать в правой менющке, кто именно ходит
    сделать масивы (сетку)
    определить все комбинации выигрышей с помощью проверок if && || &&
    при победе одного из игроков, блоки победной комбинации должны бигать + мигать игрок в менбшке справа

    сделать playAgain

    сделать рабочую менюшку которая отображается при загрузке страницы
    если нажат X то первым будет отображаться Х, и наоборот
*/
