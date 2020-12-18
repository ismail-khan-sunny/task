import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";
Vue.use(Toaster, { timeout: 2000 });

Vue.filter("formatDate", function(value, format = "ll") {
    if (value) {
        return moment(String(value)).format(format);
    }
});
Vue.filter("formatDateTime", function(value) {
    if (value) {
        return moment(String(value)).format("lll");
    }
});

Vue.filter("currency", function(value) {
    if (value) {
        return new Number(value).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
});

// =========================filter key end==========================
// =========================Validation function start==========================
Vue.mixin({
    methods: {}
});
// =========================Validation function end==========================
