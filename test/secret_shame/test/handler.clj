(ns secret-shame.test.handler
  (:require [clojure.test :refer :all]
            [secret-shame.core :refer :all]
            [clojure.data.json :as json]
            ;; [clojure.edn :refer [read-string]]
            [ring.mock.request :as mock]))

(deftest test-app
  #_(testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response) "Hello World"))))

  (testing "widgets route"
    (let [response (app (mock/header (mock/request :get "/widgets") "Accept" "application/edn"))]
      (is (= (:status response) 200))
      (is (= (:headers response) {"Content-Type" "application/json; charset=utf-8"}))
      (is (=  (:body response) (json/write-str [{:name "Widget 1"} {:name "Widget 2"}])))))
  
  (testing "hello route"
    (let [response (app  (mock/request :get "/hello"))]
      (is (= (:status response) 200))
      (is (= (:body response) "hello"))))
  
  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))

(deftest secret-shametest
  (testing "stupid test"
    (is (= 1 1))
    (is (= 1 2)))
  (testing "even dumber"
    (is (= "a" "a"))
    (is (= "a" "b"))))


