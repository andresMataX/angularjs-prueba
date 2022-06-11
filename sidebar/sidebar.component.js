angular
    .module('sidebar')
    .component('sidebar', {
        templateUrl: 'sidebar/sidebar.template.html',
        controller: function SidebarController() {
            this.prueba = 'Prueba de sidebar';
        }
    })