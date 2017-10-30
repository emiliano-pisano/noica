

$(function() {

    var menu_number;
    switch(window.location.pathname) {
        case '/posizione-generale.php':
            menu_number = 0;
            break;
        case '/posizione-contributiva.php':
            menu_number = 0;
            break;
        case '/consultazione-cedolini.php':
            menu_number = 0;
            break;
        case '/consultazione-cu-cud.php':
            menu_number = 0;
            break;

        case '/richiesta-piccolo-prestito.php':
            menu_number = 1;
            break;
        case '/richiesta-anticipazione-ifr-tfr.php':
            menu_number = 1;
            break;
        case '/variazione-dati-utente.php':
            menu_number = 1;
            break;

        case '/visualizzazione-tfr.php':
            menu_number = 2;
            break;
        case '/visualizzazione-ifr.php':
            menu_number = 2;
            break;

        case '/tool-prestiti.php':
            menu_number = 3;
            break;

        default:
            cmenu_number = -1;
    }

    $($('.treeview-menu')[menu_number]).css({
        display: 'block'
    });
    $($('.treeview-menu')[menu_number]).parent().toggleClass('menu-open');
});
