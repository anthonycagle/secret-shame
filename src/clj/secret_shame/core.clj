(ns secret-shame.core
  (:use ring.util.response)
  (:require [compojure.handler :refer [site] :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as middleware]
            [ring.middleware.stacktrace :as trace]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :as cookie] 
            [environ.core :refer [env]]))

(defn wrap-error-page [handler]
  (fn [req]
    (try (handler req)
         (catch Exception e
           {:status 500
            :headers {"Content-Type" "text/html"}
            :body "Something terrible happened on the server"}))))

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


(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))
        ;; TODO: heroku config:add SESSION_SECRET=$RANDOM_16_CHARS
        store (cookie/cookie-store {:key (env :session-secret)})]
    (jetty/run-jetty (-> #'app
                         ((if (env :production)
                            wrap-error-page
                            trace/wrap-stacktrace))
                         (site {:session {:store store}}))
                     {:port port :join? false})))

