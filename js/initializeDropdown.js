/**
 * Initialize the dropdown menu with jQuery.
 */
$(document).ready(function(){
    $('.dropdown-toggle').click(function(){
      $(this).next('.dropdown-content').toggle();
    });
});