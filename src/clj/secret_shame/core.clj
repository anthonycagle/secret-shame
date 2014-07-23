(ns secret-shame.core
  (:use ring.util.response)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [ring.middleware.json :as middleware]))

(defroutes app-routes
  (GET  "/" [] (resource-response "index.html" {:root "public"}))
  (GET  "/hello" [] "hello")
  (GET  "/widgets" [] (response [{:name "Widget 1"} {:name "Widget 2"}]))
  (GET  "/bridgets" [] (response [{:name "Bridget 1"} {:name "Bridget 2"}]))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> (handler/api app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)))
