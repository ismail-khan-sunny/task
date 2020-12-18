window._ = require("lodash");
import axios from "axios";
window.axios = axios;
window.axios.defaults.baseURL = document.head.querySelector(
    'meta[name="base-url"]'
).content;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require("jquery");

    require("bootstrap");
} catch (e) {}
