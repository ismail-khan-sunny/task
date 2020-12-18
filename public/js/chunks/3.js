(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customer/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customer/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var base_route = 'Customer';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      base_route: base_route,
      data: {
        customer: {},
        service: {}
      }
    };
  },
  methods: {
    get_data: function get_data(id) {
      var _this = this;

      this.$root.loading = true;
      axios.get("Customer/" + id).then(function (respons) {
        _this.data = respons.data;
      })["catch"](function (error) {
        console.log(error);
      }).then(function (response) {
        _this.$root.loading = false;
      });
    },
    SubmitForm: function SubmitForm() {
      var _this2 = this;

      axios.post("CustomerServicePost/" + this.$route.params.id, this.data.service).then(function (respons) {
        _this2.$toaster.success('Successfully added');

        _this2.$router.push("/Customer");
      })["catch"](function (error) {
        _this2.loaded = true;

        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
          _this2.focus_field = Object.keys(_this2.errors)[0];
        }
      });
    }
  },
  mounted: function mounted() {
    this.get_data(this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customer/View.vue?vue&type=template&id=20cddcc7&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customer/View.vue?vue&type=template&id=20cddcc7& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "CustomerView" }, [
    _c(
      "div",
      {
        staticClass:
          "row align-items-center pb-2 mx-0 mb-2 border-bottom border-isabelline"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 p-0 text-right" }, [
          _c(
            "div",
            { staticClass: "d-flex align-items-center justify-content-end" },
            [
              _c(
                "div",
                {
                  staticClass: "btn-group border rounded",
                  attrs: { role: "group", "aria-label": "Basic example" }
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-success btn-sm",
                      attrs: { to: { name: "Customer.index" } }
                    },
                    [
                      _c("span", { staticClass: "fas fa-arrow-left px-1" }),
                      _vm._v(" Back\n          ")
                    ]
                  )
                ],
                1
              )
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("h5", [_vm._v("Customer")]),
    _vm._v(" "),
    _c(
      "table",
      {
        staticClass: "table tablesorter border table-hover",
        attrs: { border: "1" }
      },
      [
        _c("tr", [
          _c("td", [_vm._v("Name")]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(_vm.data.customer.name))])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("Email")]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(_vm.data.customer.email))])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("Mobile")]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(_vm.data.customer.mobile))])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("Address")]),
          _vm._v(" "),
          _c("td", [_vm._v(_vm._s(_vm.data.customer.address))])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 p-0" },
      [
        _c("h5", [_vm._v("Service")]),
        _vm._v(" "),
        _vm._l(_vm.data.service, function(item, index) {
          return _c(
            "table",
            {
              key: index,
              staticClass: "table tablesorter border table-hover",
              attrs: { border: "1" }
            },
            [
              _c("tr", [
                _c("th", { attrs: { colspan: "2" } }, [
                  _vm._v(_vm._s(item.name)),
                  _c("hr")
                ])
              ]),
              _vm._v(" "),
              _vm._l(item.service_details, function(item1, index1) {
                return _c("tr", { key: index1 }, [
                  _c("td", [_vm._v(_vm._s(item1.name))]),
                  _vm._v(" "),
                  _c("td", [
                    item1.type == "date"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: item1.value,
                              expression: "item1.value"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "date", placeholder: item1.name },
                          domProps: { value: item1.value },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(item1, "value", $event.target.value)
                            }
                          }
                        })
                      : _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: item1.value,
                              expression: "item1.value"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text", placeholder: item1.name },
                          domProps: { value: item1.value },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(item1, "value", $event.target.value)
                            }
                          }
                        })
                  ])
                ])
              })
            ],
            2
          )
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-primary mt-3",
            attrs: { type: "button" },
            on: { click: _vm.SubmitForm }
          },
          [_vm._v("Submit")]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 p-0" }, [
      _c("strong", { staticClass: "text-uppercase m-0" }, [
        _vm._v("Customer Service")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Customer/View.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Customer/View.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_20cddcc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=20cddcc7& */ "./resources/js/views/Customer/View.vue?vue&type=template&id=20cddcc7&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/Customer/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_20cddcc7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_20cddcc7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customer/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customer/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Customer/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customer/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Customer/View.vue?vue&type=template&id=20cddcc7&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Customer/View.vue?vue&type=template&id=20cddcc7& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_20cddcc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=20cddcc7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customer/View.vue?vue&type=template&id=20cddcc7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_20cddcc7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_20cddcc7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=3.js.map