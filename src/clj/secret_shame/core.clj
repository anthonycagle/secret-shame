(ns secret-shame.core
  (:use ring.util.response)
  (:require [compojure.handler :refer [site] :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js include-css]]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as middleware]
            [ring.middleware.stacktrace :as trace]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :as cookie] 
            [environ.core :refer [env]]))

(defn index []
  (html
   [:html
    [:head
     (include-css "bootstrap/dist/css/bootstrap.css")
     (case :desktop
       
       ;; Bootcards CSS for iOS:
       :ios (include-css "bootcards/dist/css/bootcards-ios.min.css")

       ;;  Bootcards CSS for Android: 
       :android (include-css "bootcards/dist/css/bootcards-android.min.css")

       ;;  Bootcards CSS for desktop: 
       :desktop (include-css "bootcards/dist/css/bootcards-desktop.min.css"))
     (include-css "//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css")
     (include-css "css/app.css")]
    [:body
     [:div.row
      [:div.col.col-xs-12.col-md-12
       [:div#content]]]
     (include-js "bootstrap/dist/js/jquery.js")
     (include-js "bootstrap/dist/js/bootstrap.js")
     (include-js "bootcards/dist/js/bootcards.min.js")
     (include-js "react-0.9.js")
     (include-js "js/out/goog/base.js")
     (include-js "js/app.js")
     [:script {type "text/javascript"} "goog.require(\"secret_shame.core\");"]]]))

(defn error [msg]
  (html
   [:html
    [:head]
    [:body
     [:div msg]]]))

(defn wrap-error-page [handler]
  (fn [req]
    (try (handler req)
         (catch Exception e
           {:status 500
            :headers {"Content-Type" "text/html"}
            :body (error "Something terrible happened on the server")}))))

(defroutes app-routes
  ;; (GET  "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/" [] (index))
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


