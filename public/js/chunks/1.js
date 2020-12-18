(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Service/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
var base_route = "Service";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      txt: "Form",
      data: {
        service_details: [{
          type: null,
          name: null
        }]
      },
      errors: {},
      types: {
        'text': 'text',
        'date': 'date'
      },
      focus_field: ""
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.data.id) {
        axios.put("/Service/" + this.data.id, this.data).then(function (respons) {
          _this.$toaster.success('Successfully updated');

          _this.$router.push("/Service");
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this.errors = error.response.data.errors || {};
            _this.focus_field = Object.keys(_this.errors)[0];
          }
        });
      } else {
        axios.post("Service", this.data).then(function (respons) {
          _this.$toaster.success('Successfully added');

          _this.$router.push("/Service");

          _this.focus_field = "";
        })["catch"](function (error) {
          _this.loaded = true;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors || {};
            _this.focus_field = Object.keys(_this.errors)[0];
          }
        });
      }
    },
    get_data: function get_data(id) {
      var _this2 = this;

      this.$root.loading = true;
      axios.get("/Service/" + id).then(function (respons) {
        _this2.data = respons.data;
      })["catch"](function (error) {
        console.log(error);
      }).then(function (response) {
        _this2.$root.loading = false;
      });
    },
    destroy: function destroy(obj, index) {
      var _this3 = this;

      if (confirm("Do you really want to delete?")) {
        axios.post("service_detail_delete", obj).then(function (respons) {
          _this3.data.service_details.splice(index, 1);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  },
  mounted: function mounted() {
    if (this.$route.params.id) {
      this.get_data(this.$route.params.id);
    } else {
      this.$root.loading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service/Form.vue?vue&type=template&id=62b6a4c6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Service/Form.vue?vue&type=template&id=62b6a4c6& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "ServiceCreate" }, [
    _c("div", { staticClass: "card shadow-sm border-top-custom" }, [
      _c("div", { staticClass: "card-body p-2" }, [
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
                {
                  staticClass: "d-flex align-items-center justify-content-end"
                },
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
                          attrs: { to: { name: "Service.index" } }
                        },
                        [
                          _c("span", { staticClass: "fas fa-arrow-left px-1" }),
                          _vm._v(" Back\n              ")
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
        _c(
          "form",
          {
            staticClass: "form-row px-3",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.id,
                  expression: "data.id"
                }
              ],
              attrs: { type: "hidden" },
              domProps: { value: _vm.data.id },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "id", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                class: ["form-group col-3", _vm.errors.type ? "has-error" : ""]
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-form-label-sm font-weight-normal mb-0",
                    attrs: { for: "type" }
                  },
                  [_vm._v("Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.name,
                      expression: "data.name"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: { type: "text", placeholder: "Name", required: "" },
                  domProps: { value: _vm.data.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors && _vm.errors.name
                  ? _c("small", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.name[0]))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("fieldset", { staticClass: "border rounded p-2 w-100" }, [
                _c(
                  "legend",
                  { staticClass: "px-2 w-50 border rounded shadow-sm" },
                  [_vm._v("Details")]
                ),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "table", staticStyle: { width: "70%" } },
                  [
                    _vm._l(_vm.data.service_details, function(
                      service_detail,
                      index
                    ) {
                      return _c("tr", { key: index }, [
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: service_detail.name,
                                expression: "service_detail.name"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: {
                              name: "service_details[" + index + "][name]",
                              type: "text",
                              placeholder: "Name",
                              required: ""
                            },
                            domProps: { value: service_detail.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  service_detail,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "20%" } }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: service_detail.type,
                                  expression: "service_detail.type"
                                }
                              ],
                              staticClass:
                                "form-control form-control-sm rounded-0",
                              attrs: {
                                name: "service_details[" + index + "][type]",
                                id: "",
                                required: ""
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    service_detail,
                                    "type",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { disabled: "" },
                                  domProps: { value: null }
                                },
                                [_vm._v("Please select one")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.types, function(value, name, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: name } },
                                  [_vm._v(_vm._s(value))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            service_detail.id
                              ? _vm._t("default", [
                                  index > 0
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-danger float-right",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.destroy(
                                                service_detail,
                                                index
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Remove\n                  "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              : _vm._t("default", [
                                  index > 0
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-danger float-right",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.data.service_details.splice(
                                                index,
                                                1
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Remove\n                  "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                          ],
                          2
                        )
                      ])
                    }),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "4" } }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-primary float-right",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.data.service_details.push({
                                  type: null,
                                  name: null
                                })
                              }
                            }
                          },
                          [_vm._v("Add More")]
                        )
                      ])
                    ])
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 p-0" }, [
      _c("strong", { staticClass: "text-uppercase m-0" }, [
        _vm._v("Add Service")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-12" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-primary mt-3",
          attrs: { type: "submit" }
        },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Service/Form.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Service/Form.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_62b6a4c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=62b6a4c6& */ "./resources/js/views/Service/Form.vue?vue&type=template&id=62b6a4c6&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/Service/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_62b6a4c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_62b6a4c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Service/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Service/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Service/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Service/Form.vue?vue&type=template&id=62b6a4c6&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Service/Form.vue?vue&type=template&id=62b6a4c6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_62b6a4c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=62b6a4c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Service/Form.vue?vue&type=template&id=62b6a4c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_62b6a4c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_62b6a4c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=1.js.map