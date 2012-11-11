#Mindcrime

Create [reveal.js](http://lab.hakim.se/reveal-js/) in the most
convoluted way possible: as a node.js app that compiles from
clojurescript.

#Prerrequisites

* [Node js](http://nodejs.org)
* [Clojurescript](https://github.com/clojure/clojurescript/wiki/Quick-Start)
* Insanity

#Usage

Create a `_templates` folder, write your `slides.md` there,
`foreman start`, `open localhost:5000` and boom.

If you add custom code to `src`, make sure to `make js` to compile to
javascript.
