// normally this would probably be some sort of ajax call that would execute asynchronously
// but I think this accomplishes a similar effect within a reasonable timeframe

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

  function pollTopics() {
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
  pollTopics();
  window.setInterval(pollTopics, 3000); 
}(jQuery));
