js:
	cljsc src '{:optimizations :simple :target :nodejs :pretty-print true :output-dir "lib" :output-to "lib/main.js"}'

.PHONY: js
