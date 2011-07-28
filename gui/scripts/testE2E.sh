#!/bin/bash

BASE_DIR=`dirname $0`

java -jar "$BASE_DIR/../test/lib/jstestdriver/JsTestDriver.jar" \
     --config "$BASE_DIR/../config/jsTestDriverE2E.conf" \
     --basePath "$BASE_DIR/.." \
     --tests all
