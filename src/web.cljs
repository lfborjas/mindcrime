;based on http://gist.github.com/1172019

(ns mindcrime
  (:require 
    [cljs.nodejs :as node]))

(def express (node/require "express"))
(def fs      (node/require "fs"))
(def engine  (node/require "handlebars"))

(def app (express))

(defn slurp [filename]
  (str (. fs (readFileSync filename))))

;from https://github.com/ibdknox/jayq/blob/master/src/jayq/util.cljs
(defn clj->js [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (let [obj (js-obj)]
               (doseq [[k v] x]
                 (aset obj (clj->js k) (clj->js v)))
               obj)
    (coll? x) (apply array (map clj->js x))
    :else x))

(defn render [template_name locals]
  ( (. engine (compile (slurp (str "./views/" template_name ".html")))) (clj->js locals)))

(defn slideshow [from-filename]
  (letfn 
    [(step-in          [ x ] (do (println x) x))

     (read-slides      [from-file] (slurp from-file))
     (split-slides     [raw-markup] (re-seq #"!SLIDE (\w+)?\s+(.*)" raw-markup))
     (build-slides     [slide-components] (map (fn [[_ t mkp]] {:type (or t "markdown"), :content mkp}) slide-components))
     (render-slide     [{typ :type mkp :content}] (render (str typ "_slide") {:content  mkp}))
     (rendered-slides  [slide-maps] (map render-slide slide-maps))
     (render-slideshow [slides] (render "index" {:slides slides}))]
    (-> 
      from-filename
      read-slides
      split-slides
      build-slides
      rendered-slides
      render-slideshow)))

(defn create-slideshow [request response]
  (.send response (slideshow "./slides.md")))

(defn -serve [& args]
  (let [port (or (.-PORT (.-env node/process)) 5000)]
    (doto app
      ;configuration
      (.use (. express (logger)))

      ;workaround for "static" being a reserved word
      ;https://groups.google.com/forum/?fromgroups=#!topic/clojure/o3oENTFai3U
      (.use (js* "mindcrime.express['static']('./public')"))

      ;view rendering: didn't work, keeps whining about a callback!
      ;(.engine "html" (.-handlebars engines))
      ;(.set "view engine" "html")
      ;(.set "views" (str node/__dirname "/views"))

      ;routes
      (.get "/" create-slideshow)

      ;put this in your closure and func it
      (.listen port))
    (println (str "Listening on port" port))))

(set! *main-cli-fn* -serve)
