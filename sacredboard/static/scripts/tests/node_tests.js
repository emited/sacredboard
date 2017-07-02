var requirejs = require("requirejs");
requirejs.config({
    baseUrl: __dirname + "/..",
    nodeRequire: require,
    /**
     * Paths must be kept in sync with main.js
     */
    paths: {
        jquery: "../vendors/jquery/jquery-3.1.1.min",
        knockout: "../vendors/knockout/knockout-min",
        "datatable": "../vendors/datatables/datatables.min",
        "datatables.net": "../vendors/datatables/DataTables-1.10.15/js/jquery.dataTables",
        "datatables-bootstrap": "../vendors/datatables/DataTables-1.10.15/js/dataTables.bootstrap",
        bootstrap: "../vendors/bootstrap/js/bootstrap.min",
        "text": "../vendors/text",
        "plotly": "../vendors/plotly/plotly-latest.min"

    },
    shim: {
        "bootstrap": {"deps": ["jquery"]},
        "datatable": {"deps": ["jquery", "datatables.net", "datatables-bootstrap"]}
    }
});
/**
 @typedef {{async:async, equal:equal, deepEqual:deepEqual, notEqual:notEqual, notOk:notOk, ok:ok, throws:throws}} QAssert
 */

/*eslint no-unused-vars: "off"*/ //Disable warnings of unused variables
// List all test modules to here:

requirejs(["./tests/test_filters",
        "./tests/test_dictionaryBrowser",
        "./tests/test_escapeHtml",
        "./tests/test_command"],
    function (filters,
              testDictBrowser,
              testEscapeHtml,
              testCommand) {
        //empty, the tests get executed automatically
    });
