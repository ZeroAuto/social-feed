// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//= require bootstrap

$('#posts').ready(function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Please Wait...");
        return $.getScript(url);
      }
    });
    return $(window).scroll();
  }
});

(function($) {
  function compare(a,b) {
    if (a < b)
      return 1;
    if (a > b)
      return -1;
    return 0;
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function pollResults() {
    var topics = ['Sports', 'Weather', 'Food', 'Politics', 'Videogames', 'Movies', 'Television', 'Cars'];
    var mentions = [];

    for(var i = 0; i < 5; i++) {
      mentions.push(Math.floor(Math.random()*9999));
    }

    mentions.sort(compare);

    shuffle(topics);
    
    $('.mention-name').each((i, obj) => {
      $(obj).html(`${topics[i]} <span class="count-mentions">${mentions[i]} Mentions</span>`);
    })
  }
  pollResults();
  window.setInterval(pollResults, 3000); 
}(jQuery));

 

