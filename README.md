# README

This is my take on Visit Widget's Social Feed Project

At the top is the Header which is a link to the root url. Since I am using Javascript rather than traditional rails views to populate the markup this doesn't take the user to a new location but has the effect of emptying the post view partial on the topic feed.

On the left-hand side you should see the required social feed. I have made the mode of each post a link that populates a partial to the right that renders a larger more readable version of the post.

On the right-hand is a continuously refreshing ranking of 'Topic Mentions.' In a production setting this would probably have been done with some kind of asynchronous API call but I chose to spoof that with some vanilla Javascript and jQuery.

Tested in Chrome, Safari and Firefox. Mobile views were tested in Firefox.

The Usual items:

* Ruby version: 2.3.3

* Rails Version: 5.0.2

* Installation: clone repo, run `bundle`, `rake db:setup`, `rails server`

