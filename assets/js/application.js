

// Aplication

$(document).ready(function () {
  $('#dismiss, .overlay').on('click', function () {
      $('.smooth-sidebar').removeClass('active');
      $('.overlay').removeClass('active');
  });
  $('.sidebar__toggler').on('click', function () {
    $('.smooth-sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

$(document).ready(function () {
  $('.__jsSidebarCollapse__').on('click', function () {
    $('.smooth-collapsible-sidebar, .collapsible-content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});