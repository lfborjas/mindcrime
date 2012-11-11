;based on http://gist.github.com/1172019

(ns mindcrime
  (:require [cljs.nodejs :as node]))

(def express (node/require "express"))

(def app (express))

(defn hello-world [request response]
  (.send response "Hello clojurescript"))

(defn -serve [& args]
  (let [port (or (.-PORT (.-env node/process)) 5000)]
    (doto app
      (.use (. express (logger)))
      (.get "/" hello-world)
      (.listen port))
    (println (str "Listening on port" port))))

(set! *main-cli-fn* -serve)
