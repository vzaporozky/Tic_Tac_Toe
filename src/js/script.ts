let main_block:object = document.querySelector('.main');
let menu_play = document.querySelector('.menu_play') as HTMLInputElement | null;
let player_x = document.querySelector('.player_x') as HTMLInputElement | null;
let player_o = document.querySelector('.player_o') as HTMLInputElement | null;
let menu_start = document.querySelector('.menu') as HTMLInputElement | null;

main_block?.addEventListener('click', function(event : any):void{
    console.log('fdas')
})




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

