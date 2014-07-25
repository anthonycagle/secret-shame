(defproject secret-shame "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :javac-options     ["-target" "1.7" "-source" "1.7"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.5"]
                 [org.clojure/clojurescript "0.0-2268"] 
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [ring "1.3.0"]
                 [ring/ring-core "1.3.0"]
                 [ring/ring-json "0.3.1"]
                 [ring/ring-jetty-adapter "1.3.0"]
                 [compojure "1.1.8"]
                 [reagent "0.4.2"] ;; [om "0.6.5"]
                 [cljs-http "0.1.15" :exclusions [commons-codec]]
                 [environ "0.5.0"]
                 [hiccup "1.0.5"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]
            [lein-pdo "0.1.1"]]

  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :min-lein-version "2.0.0"
  :uberjar-name "secret-shame-standalone.jar"

  :ring {:handler secret-shame.core/app
         :init secret-shame.core/init}

  :source-paths ["src/clj"]

  :hooks [leiningen.cljsbuild]
  
  :profiles {:dev {:plugins [[lein-cljsbuild "1.0.3"]] 
                   :dependencies [[ring-mock "0.1.5"]
                                  [com.cemerick/double-check "0.5.7"]
                                  [com.cemerick/piggieback "0.1.3"]]
                   :repl-options {:init-ns secret-shame.core
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :source-paths ["dev"]
                   :cljsbuild {:builds
                               {:dev {
                                      :source-paths ["src/cljs"]
                                      :compiler {:pretty-print true
                                                 :output-to "resources/public/js/app.js"
                                                 :output-dir "resources/public/js/out"
                                                 :libs [""]
                                                 :optimizations :none
                                                 :source-map true}}}}}
             :production {:environment {:env {:production true}}
                          :cljsbuild
                          {:builds
                           {:production {:source-paths ["src/cljs"]
                                         :compiler {:output-to "resources/public/js/app.js"
                                                    :optimizations :advanced
                                                    :pretty-print false
                                                    :preamble ["react/react.min.js"]
                                                    :externs ["react/externs/react.js"]}}}}}})
