# mdpad

### One-file web apps

*mdpad* is a JavaScript package that makes it easier to write one-file, 
one-page web apps in Markdown. It works well with static-site 
generators like Jekyll or Hugo. Make an app in one Markdown file with 
a touch of HTML and simple JavaScript.

Key features include:

* **Auto updates**--The page recalculates when the user updates
  any of the form elements.

* **Variables from form inputs**--When a page recalculates, it 
  collects form inputs that are available to the page author.

* **Variables update the URL**--When a user changes any input,
  the URL updates to reflect the change. This gives the user
  automatic undo and redo using the forward and back buttons. 
  Saving page state is as simple as bookmarking.

**[documentation and examples](examples)**

This mode of operation drastically simplifies the interface for 
the page author. It does not depend on a particular JavaScript 
library. The author can accomplish a lot without having deep 
knowledge of JavaScript, NPM, or any of the deeper aspects of
modern JavaScript development.


### Installation
 
Copy `dist/mdpad.min.js` to the JavaScript folder for your static-site generator.
This is `root/static/js` for Hugo.
