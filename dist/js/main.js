

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
                    
        default:
            cmenu_number = -1;
    }

    var menu_number 1;
    switch(window.location.pathname) {
        
        case '/richiesta-piccolo-prestito.php':
            menu_number = 1;
            break;  
        case '/richiesta-anticipazione-ifr-tfr.php':
            menu_number = 1;
            break;
        case '/variazione-dati-utente.php':
            menu_number = 1;
            break; 
                   
        default:
            cmenu_number = -2;
    }

    var menu_number 2;
    switch(window.location.pathname) {
        
        case '/visualizzazione-tfr.php':
            menu_number = 2;
            break; 
        case '/visualizzazione-ifr.php':
            menu_number = 2;
            break;  
        
            
        default:
            cmenu_number = -3;
    }

    var menu_number 3;
    switch(window.location.pathname) {
        
        case '/tool-prestiti.php':
            menu_number = 3;
            break;     
            
        default:
            cmenu_number = -4;
    }

    $($('.treeview-menu')[menu_number]).css({
        display: 'block'
    });
    $($('.treeview-menu')[menu_number]).parent().toggleClass('menu-open');
});
