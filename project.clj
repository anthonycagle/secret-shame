(defproject aa-atw-om "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.5"]
                 [ring "1.3.0"]
                 [ring/ring-core "1.3.0"]
                 [ring/ring-json "0.3.1"]
                 [compojure "1.1.8"]
                 [org.clojure/clojurescript "0.0-2268"] 
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [cljs-http "0.1.15" :exclusions [commons-codec]]
                 [reagent "0.4.2"] ;; [om "0.6.5"]
                 ]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]
            [lein-pdo "0.1.1"]]

  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :min-lein-version "2.0.0"
  :uberjar-name "aa-atw-om-standalone.jar"

  :ring {:handler aa-atw-om.core/app
         :init aa-atw-om.core/init}

  :source-paths ["src/clj"]

  :profiles {:dev {:plugins [[lein-cljsbuild "1.0.3"]
                             
                             ;; [com.cemerick/austin "0.1.4"]
                             ] 
                   :dependencies [[ring-mock "0.1.5"]
                                  [com.cemerick/double-check "0.5.7"]
                                  [com.cemerick/piggieback "0.1.3"]]
                   :repl-options {:init-ns aa-atw-om.core
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :source-paths ["dev"]
                   :cljsbuild {:builds [{:id :dev
                                         :source-paths ["src/clj" "src/cljs"]
                                         :compiler
                                         {:output-to "resources/public/js/main.js"
                                          :output-dir "resources/public/js/out"
                                          :optimizations :none
                                          :libs [""]
                                          :source-map true
                                          :pretty-print true}}]}}}
  
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
