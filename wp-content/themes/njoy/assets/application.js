! function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (o) return o(a, !0);
                throw new Error("Cannot find module '" + a + "'")
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function(e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function(e) {
        "use strict";

        function t() {
            new l, new c, new f
        }

        function n() {
            new h
        }

        function r() {
            try {
                localStorage.clear()
            } catch (e) {
                return !1
            }
        }
        var i = e("jquery"),
            o = (e("jquery-migrate"), e("jquery-placeholder"), e("fastclick"));
        window.I18n = e("./shared/i18n");
        var a = e("bigbird"),
            s = e("./shared/modal"),
            u = e("./shared/affirm-age-modal"),
            l = e("./shared/checkout/checkout"),
            c = e("./modules/cart"),
            d = e("./modules/bg-video"),
            f = e("./shared/quantity-field"),
            h = e("./shared/account"),
            p = e("./modules/vaper-signup"),
            v = e("./modules/watch-documentary"),
            m = new a.Initializer({
                modules: {
                    common: {
                        initialize: function() {
                            i("html").addClass("is-loaded"), i("input, textarea").placeholder(), o(document.body);
                            var e = (new u, new s, i(".js-nav"));
                            e.on("click", ".js-nav-toggle", function() {
                                e.toggleClass("is-open")
                            })
                        }
                    },
                    checkout: {
                        state: t,
                        update: t
                    },
                    pages: {
                        landing: function() {
                            new d;
                            new p, new v
                        }
                    },
                    products: {
                        index: function() {
                            new f
                        },
                        show: function() {
                            new f
                        }
                    },
                    registrations: {
                        edit: n,
                        update: n
                    }
                }
            });
        "checkout" != m.module && r()
    }, {
        "./modules/bg-video": 2,
        "./modules/cart": 3,
        "./modules/vaper-signup": 4,
        "./modules/watch-documentary": 5,
        "./shared/account": 6,
        "./shared/affirm-age-modal": 7,
        "./shared/checkout/checkout": 9,
        "./shared/i18n": 15,
        "./shared/modal": 16,
        "./shared/quantity-field": 17,
        bigbird: 19,
        fastclick: 20,
        jquery: 24,
        "jquery-migrate": 21,
        "jquery-placeholder": 22
    }],
    2: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird");
        t.exports = i.Module.extend({
            el: n(".js-bg-video"),
            initialize: function() {
                this.$w = n(window), this.$video = this.$("video"), this.updateSize = r.bind(this.updateSize, this), this.$w.on("resize", r.debounce(this.updateSize, 30)), this.updateSize(), this.onVideoReady = r.bind(this.onVideoReady, this), r.delay(this.onVideoReady, 500)
            },
            updateSize: function() {
                var e = this.$w.width(),
                    t = this.$w.height(),
                    n = {
                        width: "auto",
                        height: "auto"
                    };
                Math.round(e / 16 * 9) > t ? n.width = e : n.height = t, this.$video.css(n)
            },
            onVideoReady: function() {
                this.$el.addClass("is-loaded"), this.$video.get(0).play()
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    3: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("../shared/checkout/cart");
        t.exports = r.extend({
            onRemoveClick: function(e) {
                var t = n(e.target),
                    r = t.closest("li").find(".js-quantity-field");
                r.val(0), n(r[0].form).submit()
            }
        })
    }, {
        "../shared/checkout/cart": 8,
        jquery: 24
    }],
    4: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird");
        t.exports = i.Module.extend({
            el: n(".js-vaper-signup"),
            initialize: function() {
                this.$form = this.$("form"), this.$form.on("submit", r.bind(this.onFormSubmit, this))
            },
            onFormSubmit: function(e) {
                e.preventDefault(), n.ajax({
                    url: this.$form.attr("action"),
                    type: "POST",
                    crossDomain: !0,
                    data: this.$form.serialize()
                }).always(r.bind(this.showThanks, this))
            },
            showThanks: function() {
                this.$form.hide(), this.$els("thanks").removeClass("is-hidden")
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    5: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird");
        t.exports = i.Module.extend({
            el: n(".js-watch-documentary"),
            initialize: function() {
                this.$video = n(".js-documentary"), this.$container = this.$video.find(".landing-documentary__container"), this.$iframe = this.$container.find("iframe").clone();
                var e = this.$iframe[0].src.indexOf("?") > -1 ? "&" : "?";
                this.$iframe[0].src += e + "autoplay=1", this.$close = this.$video.find(".landing-documentary__close"), this.$el.on("click", r.bind(this.onVideoClick, this)), this.removeIframe()
            },
            onVideoClick: function(e) {
                e.preventDefault(), this.$container.append(this.$iframe), this.$video.removeClass("is-hidden"), this.$close.focus(), this.$close.on("click", r.bind(this.onCloseClick, this))
            },
            onCloseClick: function() {
                this.$video.addClass("is-hidden"), this.$close.off("click"), this.removeIframe()
            },
            removeIframe: function() {
                this.$container.find("iframe").remove()
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    6: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird"),
            o = e("./form-validator"),
            a = window.I18n;
        t.exports = i.Module.extend({
            el: n(".js-account"),
            initialize: function() {
                this.requiredMsg = a.translate("forms.errors.field_required", {}, "This field is required"), this.addDetailsValidations(), this.addBillingValidations(), this.addShippingValidations()
            },
            addDetailsValidations: function() {
                var e = new o({
                    formName: "detailsForm"
                });
                e.addValidation("spree_user[email]", o.EMAIL, a.translate("forms.errors.email_invalid", {}, "Please enter a valid email address")), e.addValidation("spree_user[password_confirmation]", function() {
                    return this.val() === e._getField("spree_user[password]").val()
                }, a.translate("forms.errors.passwords_dont_match", {}, "Your passwords don't match")), e.addValidation("spree_user[current_password]", function() {
                    return "" !== e._getField("spree_user[password]").val() ? o.REQUIRED.call(this) : void 0
                }, this.requiredMsg)
            },
            addBillingValidations: function() {
                var e = new o({
                        formName: "billingForm"
                    }),
                    t = this.requiredMsg;
                r.forEach(["spree_user[bill_address_attributes][firstname]", "spree_user[bill_address_attributes][lastname]", "spree_user[bill_address_attributes][address1]", "spree_user[bill_address_attributes][city]", "spree_user[bill_address_attributes][state_id]", "spree_user[bill_address_attributes][zipcode]", "spree_user[bill_address_attributes][country_id]"], function(n) {
                    e.addValidation(n, o.REQUIRED, t)
                })
            },
            addShippingValidations: function() {
                var e = new o({
                        formName: "shippingForm"
                    }),
                    t = this.requiredMsg;
                r.forEach(["spree_user[ship_address_attributes][firstname]", "spree_user[ship_address_attributes][lastname]", "spree_user[ship_address_attributes][address1]", "spree_user[ship_address_attributes][city]", "spree_user[ship_address_attributes][state_id]", "spree_user[ship_address_attributes][zipcode]", "spree_user[ship_address_attributes][country_id]"], function(n) {
                    e.addValidation(n, o.REQUIRED, t)
                })
            }
        })
    }, {
        "./form-validator": 14,
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    7: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird");
        t.exports = i.Module.extend({
            el: n(".js-affirm-age"),
            proxied: ["onConfirmClick"],
            initialize: function() {
                this.$els("confirmBtn").on("click", r.bind(this.onConfirmClick, this)), this.$els("countrySelect").on("change", r.bind(this.onCountrySelectChange, this)), this.currentCountry = this.$el.attr("data-current-country"), this.selectedCountry = this.currentCountry, this.$els("countrySelect").length && this.onCountrySelectChange()
            },
            onCountrySelectChange: function() {
                var e = this.$els("countrySelect").find(":selected");
                this.$els("confirmBtn").attr("href", e.attr("data-url")), this.selectedCountry = e.val()
            },
            onConfirmClick: function(e) {
                return this.publish("track-event:trackEvent", "Age Affirm Click", {
                    currentCountry: this.currentCountry,
                    selectedCountry: this.selectedCountry
                }), this.hasChangedCountry() ? !0 : (e.preventDefault(), n.ajax({
                    url: this.$els("confirmBtn").attr("href"),
                    dataType: "application/js"
                }), this.$el.removeClass("is-visible"), void 0)
            },
            hasChangedCountry: function() {
                return this.selectedCountry != this.currentCountry
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    8: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird");
        t.exports = i.Module.extend({
            el: n(".js-checkout-cart"),
            subscriptions: {
                "quantity:updated": "onQuantityUpdate"
            },
            initialize: function() {
                this.$els("cartItems").on("click", "[data-bb-el=cartItemRemove]", r.bind(this.onRemoveClick, this)), this.$els("promoCodeInput").on("focus", r.bind(this.onPromoCodeFocus, this)).on("blur", r.bind(this.onPromoCodeBlur, this))
            },
            onQuantityUpdate: function() {
                this.$els("updateCartButton").addClass("is-highlighted")
            },
            onPromoCodeFocus: function() {
                this.$els("promoCode").addClass("is-focussed")
            },
            onPromoCodeBlur: function() {
                "" === this.$els("promoCodeInput").val() && this.$els("promoCode").removeClass("is-focussed")
            },
            onRemoveClick: function(e) {
                var t = n(e.target),
                    r = t.parent().find(".quantity__field");
                r.val(0), n(r[0].form).submit()
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    9: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("bigbird"),
            i = {
                registration: e("./registration"),
                details: e("./details")
            };
        t.exports = r.Module.extend({
            el: n(".js-checkout"),
            initialize: function() {
                var e = this.$el.data("checkoutState");
                i[e] && new i[e]
            }
        })
    }, {
        "./details": 10,
        "./registration": 12,
        bigbird: 19,
        jquery: 24
    }],
    10: [function(e, t) {
        "use strict";

        function n(e, t) {
            return function() {
                return e.hasClass("is-hidden") ? void 0 : t.call(this)
            }
        }

        function r(e) {
            var t = e.split("/"),
                n = t[0].replace(/ /g, ""),
                r = "20" + t[1].replace(/ /g, "");
            return [n, r]
        }
        var i = e("jquery"),
            o = e("lodash"),
            a = e("bigbird"),
            s = e("../form-validator"),
            u = window.I18n,
            l = e("./payment"),
            c = /p[\.|\,|\s]?o[\.|\,|\s]?\s?box|post[\.|\,|\s]?office\s?box|box\s\d+/i,
            d = /^\d{5}(?:[-\s]\d{4})?$/;
        e("jquery.formance"), e("sisyphus"), t.exports = a.Module.extend({
            $el: i(".js-checkout-details"),
            subscriptions: {
                "form:errors:failedValidation": "trackFailedValidations"
            },
            initialize: function() {
                this.paymentMethodId = this.$els("paymentMethodId").val(), this.dateOfBirthFormat = this.$els("detailsDob").attr("data-date-format"), this.$els("cardNumberInput").formance("format_credit_card_number"), this.$els("cardExpiryInput").formance("format_credit_card_expiry"), this.$els("cardCVCInput").formance("format_credit_card_cvc"), o.isUndefined(this.dateOfBirthFormat) || this.$els("detailsDob").formance("format_" + this.dateOfBirthFormat), this.$els("emailAddress").on("input focus blur keyup", o.bind(this.toggleEmailField, this));
                var e, t;
                this.$els("cardNumberInput").on("input keyup", o.bind(function() {
                    t = i.formance.creditCardType(this.$els("cardNumberInput").val()), e && this.$els("cardNumberIcon").removeClass(e), e = "payment-card--" + t, this.$els("cardCVCInput").attr("data-credit_card_type", t).removeData("credit_card_type"), this.$els("cardNumberIcon").addClass(e)
                }, this)), this.$els("useBillingCheckbox").on("change", o.bind(function() {
                    var e = this.$els("useBillingCheckbox").is(":checked");
                    this.$els("togglableShipping").toggleClass("is-hidden", e), this.$els("shippingHeader").toggleClass("is-active", !e)
                }, this)), this.$els("editExistingBilling").on("click", o.bind(function() {
                    this.$els("togglableBilling").removeClass("is-hidden"), this.$els("existingBilling").remove()
                }, this)), this.$els("editExistingShippingAddress").on("click", o.bind(function() {
                    this.$els("togglableShipping").removeClass("is-hidden"), this.$els("existingShippingAddress").remove()
                }, this)), this.$els("emailLoginButton").on("click", o.bind(function() {
                    i(".js-modal-email").val(this.$els("emailAddress").find("input").val())
                }, this)), this.fieldsToDisable = [this.$els("cardNumberInput"), this.$els("cardCVCInput"), this.$els("cardExpiryInput")], this.$payment = this.$(".checkout-billing__payment"), this.paymentHandler = new l({
                    el: this.$payment
                }), this.validator = new s({
                    formName: "checkoutForm",
                    renderErrorBar: !0
                }), this.toggleEmailField(), this.addValidations(), this.prepopulateNameFields(), this.enableFields(), this.validator.afterValidation = o.bind(this.afterValidation, this)
            },
            prepopulateNameFields: function() {
                function e(e, t, r) {
                    ("" === i(n[t]).val() && r === !0 || r === !1) && i(n[t]).val(e)
                }
                var t = this.$(".checkout-details__firstname input, .checkout-details__lastname input"),
                    n = this.$(".checkout-address__firstname input, .checkout-address__lastname input");
                t.each(function(t) {
                    e(i(this).val(), t, !0)
                }).on("change", function() {
                    e(i(this).val(), o.indexOf(t, this), !1)
                })
            },
            addValidations: function() {
                var e = this.validator;
                e.$form.sisyphus({
                    excludeFields: this.$("#card_number, #card_expiry, #card_code")
                });
                var t = o.partial(n, this.$els("togglableBilling")),
                    r = o.partial(n, this.$els("togglableShipping")),
                    i = u.translate("forms.errors.field_required", {}, "This field is required"),
                    a = u.translate("forms.errors.address_no_po_box", {}, "Address can't be a PO Box"),
                    l = u.translate("forms.errors.invalid_zipcode", {}, "Provided Zipcode is invalid"),
                    f = u.translate("forms.errors.invalid_password", {}, "Password must be at least 6 characters");
                e.addValidation("order[user_attributes][password]", function() {
                    return 0 === this.val().length ? !0 : s.MINLENGTH(6).call(this)
                }, f), e.addValidation("order[verification_detail_attributes][dob]", o.bind(this.validDateOfBirth, this), u.translate("forms.errors.date_invalid", {}, "Please enter a valid date")), e.addValidation("order[user_attributes][password_confirmation]", function() {
                    return this.val() === e._getField("order[user_attributes][password]").val()
                }, u.translate("forms.errors.passwords_dont_match", {}, "Your passwords don't match")), e.addValidation("order[email]", s.EMAIL, u.translate("forms.errors.email_invalid", {}, "Please enter a valid email address")), o.forEach(["order[verification_detail_attributes][firstname]", "order[verification_detail_attributes][lastname]", "order[verification_detail_attributes][gender]"], function(t) {
                    e.addValidation(t, s.REQUIRED, i)
                }), e.addValidation(this.paymentSourceProperty("number"), t(function() {
                    return this.formance("validate_credit_card_number")
                }), u.translate("forms.errors.card_number_invalid", {}, "Your card number isn't valid")), e.addValidation(this.paymentSourceProperty("expiry"), t(function() {
                    return this.formance("validate_credit_card_expiry")
                }), u.translate("forms.errors.card_expiry_invalid", {}, "Your card expiry isn't valid")), e.addValidation(this.paymentSourceProperty("verification_value"), t(function() {
                    return this.formance("validate_credit_card_cvc")
                }), u.translate("forms.errors.card_cvv_invalid", {}, "Your card CSV isn't valid")), o.forEach(["order[bill_address_attributes][firstname]", "order[bill_address_attributes][lastname]", "order[bill_address_attributes][address1]", "order[bill_address_attributes][city]", "order[bill_address_attributes][state_id]", "order[bill_address_attributes][zipcode]", "order[bill_address_attributes][country_id]"], function(n) {
                    e.addValidation(n, t(s.REQUIRED), i)
                }), o.forEach(["order[ship_address_attributes][firstname]", "order[ship_address_attributes][lastname]", "order[ship_address_attributes][address1]", "order[ship_address_attributes][city]", "order[ship_address_attributes][state_id]", "order[ship_address_attributes][zipcode]", "order[ship_address_attributes][country_id]"], function(t) {
                    e.addValidation(t, r(s.REQUIRED), i)
                }), "us" == this.$el.attr("data-country") && (e.addValidation("order[ship_address_attributes][zipcode]", r(s.FORMAT(d)), l), e.addValidation("order[bill_address_attributes][zipcode]", t(s.FORMAT(d)), l)), o.forEach(["order[bill_address_attributes][address1]", "order[bill_address_attributes][address2]"], function(n) {
                    e.addValidation(n, t(s.WITHOUT(c)), a)
                }), o.forEach(["order[ship_address_attributes][address1]", "order[ship_address_attributes][address2]"], function(t) {
                    e.addValidation(t, r(s.WITHOUT(c)), a)
                })
            },
            sendPaymentRequest: function() {
                var e = !this.$els("togglableBilling").hasClass("is-hidden"),
                    t = "true" === this.$payment.attr("data-profiles-supported");
                if (!e || !t) return this.validator.$form[0].submit();
                var n = r(this.$els("cardExpiryInput").val()),
                    a = {
                        kind: "credit_card",
                        first_name: this.$("#order_bill_address_attributes_firstname").val(),
                        last_name: this.$("#order_bill_address_attributes_lastname").val(),
                        number: this.$els("cardNumberInput").val(),
                        verification_value: this.$els("cardCVCInput").val(),
                        month: n[0],
                        year: n[1],
                        email: this.$els("emailField").val(),
                        address1: this.$("#order_bill_address_attributes_address1").val(),
                        address2: this.$("#order_bill_address_attributes_address2").val(),
                        city: this.$("#order_bill_address_attributes_city").val(),
                        state: this.getSelectedState(),
                        zip: this.$("#order_bill_address_attributes_zipcode").val(),
                        country: this.$("#order_bill_address_attributes_country_id").attr("data-iso")
                    },
                    s = i.param(a),
                    u = new i.Deferred;
                u.done(o.bind(function() {
                    this.validator.$form[0].submit()
                }, this)), u.fail(o.bind(function() {
                    this.enableFields()
                }, this)), o.each(this.fieldsToDisable, function(e) {
                    e.attr("disabled", "disabled")
                }), this.paymentHandler.makePaymentRequest(s, u)
            },
            enableFields: function() {
                o.each(this.fieldsToDisable, function(e) {
                    e.removeAttr("disabled")
                })
            },
            getSelectedState: function() {
                var e = this.$("#order_bill_address_attributes_state_name");
                return e.length ? e.val() : this.$("#order_bill_address_attributes_state_id option:selected").attr("data-abbr")
            },
            afterValidation: function() {
                this.setGoogleAnalyticsId(), this.sendPaymentRequest()
            },
            setGoogleAnalyticsId: function() {
                var e = window.gaClientId;
                "" !== e && this.$els("gaClientId").val(e)
            },
            validDateOfBirth: function() {
                return this.$els("detailsDob").formance("validate_" + this.dateOfBirthFormat)
            },
            paymentSourceProperty: function(e) {
                return "payment_source[" + this.paymentMethodId + "][" + e + "]"
            },
            toggleEmailField: function() {
                var e = this.$els("emailAddress").find("input").val();
                this.$els("emailAddress").toggleClass("is-filled", "" !== e)
            },
            trackFailedValidations: function() {
                var e = {
                    errorCount: this.validator.totalErrors,
                    fieldsWithErrors: o.map(this.validator.invalidFields, function(e) {
                        return e.$el.attr("id")
                    })
                };
                this.publish("track-event:trackEvent", "Checkout Errors", e)
            }
        })
    }, {
        "../form-validator": 14,
        "./payment": 11,
        bigbird: 19,
        jquery: 24,
        "jquery.formance": 23,
        lodash: 25,
        sisyphus: 26
    }],
    11: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("bigbird"),
            i = e("lodash"),
            o = window.I18n;
        t.exports = r.Module.extend({
            baseUrl: "https://core.spreedly.com/v1/payment_methods.js?environment_key=",
            initialize: function() {
                this.gatewayLogin = this.$el.attr("data-gateway-login"), this.paramPrefix = this.$el.attr("data-param-prefix");
                var e = n("<div></div>");
                this.$el.append(e), this.$container = e, this.onPaymentSucess = i.bind(this.onPaymentSucess, this), this.addPaymentField = i.bind(this.addPaymentField, this)
            },
            makePaymentRequest: function(e, t) {
                this.clearError();
                var r = n.ajax({
                    type: "GET",
                    url: this.baseUrl + this.gatewayLogin + "&" + e,
                    dataType: "jsonp"
                });
                r.success(i.bind(function(e) {
                    this.onPaymentSucess(e, t)
                }, this)).error(this.showError, function() {
                    t.reject()
                })
            },
            addPaymentFields: function(e) {
                this.$container.html("");
                var t = {
                    last_digits: e.last_four_digits,
                    month: e.month,
                    year: e.year,
                    gateway_customer_profile_id: e.token,
                    cc_type: e.card_type
                };
                i.each(t, this.addPaymentField)
            },
            addPaymentField: function(e, t) {
                var n = this.paramPrefix + "[" + t + "]";
                this.$container.append("<input type='hidden' name='" + n + "' value='" + e + "'>")
            },
            onPaymentSucess: function(e, t) {
                e.status && 201 === e.status ? (this.addPaymentFields(e.transaction.payment_method), t.resolve()) : (this.showError(), t.reject())
            },
            showError: function() {
                var e = o.translate("checkout.errors.payment_error", {}, "We're sorry, there was an error processing your payment. Please try again.");
                this.publish("track-event:trackEvent", "Checkout Errors", {
                    paymentFailed: !0
                }), this.$el.prepend("<p class='form__error js-card-error'>" + e + "</p>")
            },
            clearError: function() {
                this.$(".js-card-error").remove()
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    12: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = (e("lodash"), e("bigbird")),
            i = e("../form-validator");
        t.exports = r.Module.extend({
            $el: n(".js-checkout-registration"),
            initialize: function() {
                this.addRegisterValidations(), this.addLoginValidations();
                var e = this.$(".js-registration-forms"),
                    t = e.first();
                e.on("focus", "input", function() {
                    t = n(this).closest("form")
                }), this.$els("submitRegistrationForm").on("click", function() {
                    t.submit()
                })
            },
            addRegisterValidations: function() {
                var e = new i({
                    formName: "checkoutRegistrationForm"
                });
                e.addValidation("order[email]", i.EMAIL, "Please enter a valid email address")
            },
            addLoginValidations: function() {
                var e = new i({
                    formName: "checkoutLoginForm"
                });
                e.addValidation("spree_user[email]", i.EMAIL, "Please enter a valid email address"), e.addValidation("spree_user[password]", i.REQUIRED, "Required")
            }
        })
    }, {
        "../form-validator": 14,
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    13: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = window.I18n,
            o = e("bigbird");
        t.exports = o.Module.extend({
            initialize: function() {},
            subscriptions: {
                "form:errors:countChange": "setErrorText"
            },
            render: function(e) {
                this.$form.append(n("#error-bar-tmpl").html()), this.$errorBar = this.$form.find(".error-bar"), this.$errorText = this.$errorBar.find(".error-bar__text"), this.$errorBar.on("click", r.bind(this.onBarClick, this)), this.$errorBar.find(".error-bar__action").on("click", r.bind(this.onActionClick, this)), this.setErrorText(e)
            },
            destroy: function() {
                r.isUndefined(this.$errorBar) || this.$errorBar.remove()
            },
            setErrorText: function(e) {
                if (e > 0) {
                    var t = 1 == e ? "one" : "other",
                        n = i.translate("forms.errors.error_count." + t, {
                            count: e
                        }),
                        r = i.translate("forms.errors.we_found_things_wrong", {
                            error_count: n
                        });
                    this.$errorText.text(r)
                } else this.destroy()
            },
            onActionClick: function(e) {
                var t = n(e.currentTarget).hasClass("error-bar__action--up") ? "up" : "down";
                return this.publish("form:errors:skipToFailedField", t), !1
            },
            onBarClick: function() {
                return this.publish("form:errors:skipToFailedField"), !1
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    14: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird"),
            o = e("./form-error-bar"),
            a = i.Module.extend({
                subscriptions: {
                    "form:errors:skipToFailedField": "skipToFailedField"
                },
                afterValidation: function() {
                    this.$form[0].submit()
                },
                initialize: function() {
                    this.fields = {}, this.lastInvalidField = null, this.invalidFields = [], this.totalErrors = 0, this.currentErrorIndex = 0, this.$form = n(document.forms[this.formName]), this.$errorTarget = n(".form__field"), this.$error = n("<div />").addClass("form__error form__error--floating"), this.errorBar = new o({
                        $form: this.$form
                    }), this.$form.submit(r.bind(function(e) {
                        e.preventDefault(), this.errorBar.destroy(), this.validateAll() ? this.afterValidation() : (this.renderErrorBar && this.errorBar.render(this.totalErrors), this.publish("loadingButton:ready"), this.publish("form:errors:failedValidation"), e.preventDefault())
                    }, this))
                },
                addValidation: function(e, t, n) {
                    var i = this._getField(e);
                    if (i.length) return this.fields[e] || (this.fields[e] = {
                        name: e,
                        $el: i,
                        validations: []
                    }), this.fields[e].validations.push({
                        test: t,
                        errorMessage: n
                    }), r.bind(this.validate, this, e)
                },
                validate: function(e) {
                    var t = this.fields[e];
                    this.clearErrorsForField(t, e);
                    var n = this.runValidationsForField(t);
                    if (n) {
                        var i = this.$error.clone(),
                            o = t.$el.closest(this.$errorTarget);
                        o.addClass("has-errors"), i.html(n.errorMessage).appendTo(o), t.$el.on("change", r.bind(function() {
                            this.validate(e) && (this.invalidFields = r.remove(this.invalidFields, function(t) {
                                return t.name == e
                            }), this.decrementErrorCount())
                        }, this)), this.totalErrors++, this.invalidFields.push(t), this.lastInvalidField = t
                    }
                    return !n
                },
                clearErrors: function() {
                    this.totalErrors = 0, this.invalidFields = [], this.$form.find(".form__error").remove(), this.$errorTarget.removeClass("has-errors")
                },
                clearErrorsForField: function(e) {
                    e.$el.off("change");
                    var t = e.$el.closest(this.$errorTarget);
                    t.find(".form__error").remove(), t.removeClass("has-errors")
                },
                runValidationsForField: function(e) {
                    return r.find(e.validations, function(t) {
                        return t.test.call(e.$el) === !1
                    })
                },
                validateAll: function() {
                    var e = [];
                    return this.clearErrors(), r.each(this.fields, function(t, n) {
                        e.push(this.validate(n))
                    }, this), !r.contains(e, !1)
                },
                _getField: function(e) {
                    return n(this.$form[0].elements[e])
                },
                decrementErrorCount: function() {
                    --this.totalErrors, this.publish("form:errors:countChange", this.totalErrors)
                },
                skipToFailedField: function(e) {
                    var t, n = this.$form.find(".form__error");
                    t = "up" === e ? this.currentErrorIndex - 1 : "down" === e ? this.currentErrorIndex + 1 : this.currentErrorIndex, t > n.length - 1 ? t = 0 : 0 > t && (t = n.length - 1), this.currentErrorIndex = t, this.scrollToField(n.eq(t))
                },
                scrollToField: function(e) {
                    var t = e.closest(".form__field");
                    n("html, body").animate({
                        scrollTop: t.offset().top
                    }, 300), window.setTimeout(function() {
                        t.find(":input").focus()
                    }, 300)
                }
            });
        a.REQUIRED = function() {
            switch (this.attr("type")) {
                case "radio":
                case "checkbox":
                    return !!this.filter(":checked").val();
                default:
                    return "" !== n.trim(this.val())
            }
        }, a.EMAIL = function() {
            return /.+@.+/.test(this.val())
        }, a.MINLENGTH = function(e) {
            return function() {
                return this.val().length >= e
            }
        }, a.MAXLENGTH = function(e) {
            return function() {
                return this.val().length <= e
            }
        }, a.WITHOUT = function(e) {
            return function() {
                return !e.test(this.val())
            }
        }, a.FORMAT = function(e) {
            return function() {
                return e.test(this.val())
            }
        }, a.CHECKED = function() {
            return n(this).is(":checked")
        }, t.exports = a
    }, {
        "./form-error-bar": 13,
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    15: [function(e, t) {
        "use strict";
        var n = e("lodash"),
            r = window.inlineTranslations || [],
            i = function() {
                this.translations = {}, n.map(r, n.bind(this.setTranslations, this))
            };
        i.prototype.translate = function(e, t, n) {
            return n = n || "Translation is missing", t = t || {}, this.getTranslationByKey(e, t) || n
        }, i.prototype.setTranslations = function(e) {
            this.translations = n.extend(this.translations, e)
        }, i.prototype.getTranslationByKey = function(e, t) {
            var r, i, o = e.split("."),
                a = o.length,
                s = this.translations;
            if (0 === a) return null;
            for (i = 0; a > i; i++) r = o[i], n.isUndefined(s[r]) || (s = s[r]);
            return n.isString(s) ? (s.indexOf("%{") >= 0 && n.each(t, function(e, t) {
                s = s.replace("%{" + t + "}", e)
            }), s) : null
        }, t.exports = new i
    }, {
        lodash: 25
    }],
    16: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird");
        t.exports = i.Module.extend({
            el: n(".js-modal"),
            initialize: function() {
                n(document.body).on("click", ".js-modal-show", r.bind(function(e) {
                    this.show(), e.preventDefault()
                }, this)).on("click", ".js-modal-hide", r.bind(function(e) {
                    this.hide(), e.preventDefault()
                }, this)), n(document).on("keyup", r.bind(function(e) {
                    27 == e.keyCode && this.hide()
                }, this)), this.$els("backgroundOverlay").on("click", r.bind(function() {
                    this.hide()
                }, this))
            },
            show: function() {
                this.$el.addClass("is-visible"), n(".js-site-header").removeClass("nav-is-open")
            },
            hide: function() {
                this.$el.removeClass("is-visible")
            }
        })
    }, {
        bigbird: 19,
        jquery: 24,
        lodash: 25
    }],
    17: [function(e, t) {
        "use strict";
        var n = e("jquery"),
            r = e("lodash"),
            i = e("bigbird");
        e("jquery.formance");
        var o = i.Module.extend({
                initialize: function() {
                    this.$(".js-quantity-decrease").on("click", r.bind(this.onDecreaseClick, this)), this.$(".js-quantity-increase").on("click", r.bind(this.onIncreaseClick, this)), this.$field = this.$(".js-quantity-field"), this.$field.formance("format_number"), this.$field.on("keyup", r.bind(function() {
                        var e = this._getCurrentQuantity();
                        e && this.updateQuantity(e)
                    }, this))
                },
                updateQuantity: function(e) {
                    0 > e || (this.$field.val(e), this.$el.attr("data-publish") && this.publish("quantity:updated", e))
                },
                onIncreaseClick: function() {
                    this.updateQuantity(this._getCurrentQuantity() + 1)
                },
                onDecreaseClick: function() {
                    this.updateQuantity(this._getCurrentQuantity() - 1)
                },
                _getCurrentQuantity: function() {
                    var e = parseInt(this.$field.val(), 10);
                    return r.isNumber(e) && !r.isNaN(e) ? e : 0
                }
            }),
            a = function() {
                this.$els = n(".js-quantity"), r.each(this.$els, function(e) {
                    new o({
                        el: e
                    })
                })
            };
        t.exports = a
    }, {
        bigbird: 19,
        jquery: 24,
        "jquery.formance": 23,
        lodash: 25
    }],
    18: [function(e, t) {
        (function(n) {
            (function(t, n, r, i) {
                e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/lodash/dist/lodash.js"),
                    function() {
                        var e = [],
                            t = e.slice,
                            n = {
                                on: function(e, t, n) {
                                    if (!o(this, "on", e, [t, n]) || !t) return this;
                                    this._events || (this._events = {});
                                    var r = this._events[e] || (this._events[e] = []);
                                    return r.push({
                                        callback: t,
                                        context: n,
                                        ctx: n || this
                                    }), this
                                },
                                once: function(e, t, n) {
                                    if (!o(this, "once", e, [t, n]) || !t) return this;
                                    var r = this,
                                        i = _.once(function() {
                                            r.off(e, i), t.apply(this, arguments)
                                        });
                                    return i._callback = t, this.on(e, i, n)
                                },
                                off: function(e, t, n) {
                                    var r, i, a, s, u, l, c, d;
                                    if (!this._events || !o(this, "off", e, [t, n])) return this;
                                    if (!e && !t && !n) return this._events = {}, this;
                                    for (s = e ? [e] : _.keys(this._events), u = 0, l = s.length; l > u; u++)
                                        if (e = s[u], a = this._events[e]) {
                                            if (this._events[e] = r = [], t || n)
                                                for (c = 0, d = a.length; d > c; c++) i = a[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                                            r.length || delete this._events[e]
                                        }
                                    return this
                                },
                                trigger: function(e) {
                                    if (!this._events) return this;
                                    var n = t.call(arguments, 1);
                                    if (!o(this, "trigger", e, n)) return this;
                                    var r = this._events[e],
                                        i = this._events.all;
                                    return r && a(r, n), i && a(i, arguments), this
                                },
                                stopListening: function(e, t, n) {
                                    var r = this._listeners;
                                    if (!r) return this;
                                    var i = !t && !n;
                                    "object" == typeof t && (n = this), e && ((r = {})[e._listenerId] = e);
                                    for (var o in r) r[o].off(t, n, this), i && delete this._listeners[o];
                                    return this
                                }
                            },
                            i = /\s+/,
                            o = function(e, t, n, r) {
                                if (!n) return !0;
                                if ("object" == typeof n) {
                                    for (var o in n) e[t].apply(e, [o, n[o]].concat(r));
                                    return !1
                                }
                                if (i.test(n)) {
                                    for (var a = n.split(i), s = 0, u = a.length; u > s; s++) e[t].apply(e, [a[s]].concat(r));
                                    return !1
                                }
                                return !0
                            },
                            a = function(e, t) {
                                var n, r = -1,
                                    i = e.length,
                                    o = t[0],
                                    a = t[1],
                                    s = t[2];
                                switch (t.length) {
                                    case 0:
                                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                                        return;
                                    case 1:
                                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
                                        return;
                                    case 2:
                                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
                                        return;
                                    case 3:
                                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
                                        return;
                                    default:
                                        for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t)
                                }
                            },
                            s = {
                                listenTo: "on",
                                listenToOnce: "once"
                            };
                        _.each(s, function(e, t) {
                            n[t] = function(t, n, r) {
                                var i = this._listeners || (this._listeners = {}),
                                    o = t._listenerId || (t._listenerId = _.uniqueId("l"));
                                return i[o] = t, "object" == typeof n && (r = this), t[e](n, r, this), this
                            }
                        }), n.bind = n.on, n.unbind = n.off, "undefined" != typeof r && "function" == typeof r && r.amd && r("eventable", [], function() {
                            return n
                        }), this.Eventable = n
                    }(), i("undefined" != typeof Eventable ? Eventable : window.Eventable)
            }).call(n, void 0, void 0, void 0, function(e) {
                t.exports = e
            })
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/lodash/dist/lodash.js": 25
    }],
    19: [function(e, t) {
        (function(n) {
            (function(t, n, r, i) {
                e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js"), e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/lodash/dist/lodash.js"), e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/Eventable/eventable.js"),
                    function() {
                        "use strict";

                        function e(e, t) {
                            var n, r = this;
                            n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                                r.apply(this, arguments)
                            }, _.extend(n, r, t);
                            var i = function() {
                                this.constructor = n
                            };
                            return i.prototype = r.prototype, n.prototype = new i, e && _.extend(n.prototype, e), n.__super__ = r.prototype, n
                        }

                        function i(e) {
                            var t = e.match(/^(\S+)\s*(.*)$/);
                            return {
                                kind: t[1],
                                selector: t[2]
                            }
                        }

                        function o(e) {
                            return e.charAt(0).toUpperCase() + e.slice(1)
                        }
                        var a = {};
                        a.VERSION = "0.3.4", a.Events = _.extend({}, Eventable);
                        var s = a.Initializer = function(e) {
                            var t = e.base || $(document.body);
                            _.extend(this, {
                                modules: {},
                                module: t.data("module"),
                                action: t.data("action")
                            }, e), this.initialize()
                        };
                        _.extend(s.prototype, {
                            initialize: function() {
                                this.execute("common", "initialize"), this.execute(this.module, "initialize"), this.execute(this.module, this.action)
                            },
                            execute: function(e, t) {
                                var n, r;
                                e && t && (n = this.modules[e] || this.modules[o(e)], _.isUndefined(n) || (r = n[t] || n[o(t)], _.isFunction(r) && r()))
                            },
                            rerunAction: function() {
                                this.execute(this.module, this.action)
                            }
                        });
                        var u = a.Module = function(e) {
                            _.extend(this, e), this.el && this.setElement(), this.proxied && this.proxyMethods(), this.events && this.attachEvents(), this.subscriptions && this.subscribeToEvents(), this.initialize.call(this)
                        };
                        u.extend = e, _.extend(u.prototype, a.Events, {
                            publish: _.bind(a.Events.trigger, a.Events),
                            subscribe: _.bind(a.Events.on, a.Events),
                            $el: null,
                            _$els: {},
                            initialize: function() {},
                            proxyMethods: function() {
                                _.bindAll.apply(null, _.union(this, this.proxied))
                            },
                            attachEvents: function() {
                                var e, t;
                                _.each(this.events, function(n, r) {
                                    e = _.bind(this[n], this), t = i(r), t.selector ? this.$el.on(t.kind, t.selector, e) : this.$el.on(t.kind, e)
                                }, this)
                            },
                            subscribeToEvents: function() {
                                _.each(this.subscriptions, function(e, t) {
                                    this.subscribe(t, this[e], this)
                                }, this)
                            },
                            setElement: function(e) {
                                var t = e || this.el;
                                this.$el = t instanceof $ ? t : $(t), this.el = this.$el[0], this.data = this.$el.data()
                            },
                            setElements: function() {
                                _.each(this.$("[data-bb-el]"), this._setBBElement, this)
                            },
                            els: function(e, t) {
                                return this._getBBElement(e, !!t)[0]
                            },
                            $els: function(e, t) {
                                return this._getBBElement(e, !!t)
                            },
                            $: function(e) {
                                return this.$el.find(e)
                            },
                            destroy: function() {
                                var e;
                                _.each(this.events, function(t, n) {
                                    e = i(n), e.selector ? this.$el.off(e.kind, e.selector) : this.$el.off(e.kind)
                                }, this), this.$el.remove()
                            },
                            _getBBElement: function(e, t) {
                                var n = this._$els[e];
                                return (t || _.isUndefined(n)) && (n = this.$("[data-bb-el=" + e + "]"), this._setBBElement(n)), n
                            },
                            _setBBElement: function(e) {
                                var t = $(e);
                                this._$els[t.data("bbEl")] = t
                            }
                        }), "function" == typeof r && r.amd ? r(function() {
                            return a
                        }) : "undefined" != typeof n ? ("undefined" != typeof t && t.exports && (n = t.exports = a), n.BigBird = a) : window.BigBird = a
                    }(), i("undefined" != typeof BigBird ? BigBird : window.BigBird)
            }).call(n, void 0, void 0, void 0, function(e) {
                t.exports = e
            })
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/Eventable/eventable.js": 18,
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js": 24,
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/lodash/dist/lodash.js": 25
    }],
    20: [function(e, t) {
        function n(e, t) {
            "use strict";

            function i(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            var o;
            if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, !n.notNeeded(e)) {
                for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, u = 0, l = a.length; l > u; u++) s[a[u]] = i(s[a[u]], s);
                r && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
                    var i = Node.prototype.removeEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
                }, e.addEventListener = function(t, n, r) {
                    var i = Node.prototype.addEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
                        e.propagationStopped || n(e)
                    }), r) : i.call(e, t, n, r)
                }), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function(e) {
                    o(e)
                }, !1), e.onclick = null)
            }
        }
        var r = navigator.userAgent.indexOf("Android") > 0,
            i = /iP(ad|hone|od)/.test(navigator.userAgent),
            o = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            a = i && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
        n.prototype.needsClick = function(e) {
            "use strict";
            switch (e.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (e.disabled) return !0;
                    break;
                case "input":
                    if (i && "file" === e.type || e.disabled) return !0;
                    break;
                case "label":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(e.className)
        }, n.prototype.needsFocus = function(e) {
            "use strict";
            switch (e.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !r;
                case "input":
                    switch (e.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !e.disabled && !e.readOnly;
                default:
                    return /\bneedsfocus\b/.test(e.className)
            }
        }, n.prototype.sendClick = function(e, t) {
            "use strict";
            var n, r;
            document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
        }, n.prototype.determineEventType = function(e) {
            "use strict";
            return r && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
        }, n.prototype.focus = function(e) {
            "use strict";
            var t;
            i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
        }, n.prototype.updateScrollParent = function(e) {
            "use strict";
            var t, n;
            if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
                n = e;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        t = n, e.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            t && (t.fastClickLastScrollTop = t.scrollTop)
        }, n.prototype.getTargetElementFromEventTarget = function(e) {
            "use strict";
            return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
        }, n.prototype.onTouchStart = function(e) {
            "use strict";
            var t, n, r;
            if (e.targetTouches.length > 1) return !0;
            if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
                if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
                if (!o) {
                    if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
        }, n.prototype.touchHasMoved = function(e) {
            "use strict";
            var t = e.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
        }, n.prototype.onTouchMove = function(e) {
            "use strict";
            return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
        }, n.prototype.findControl = function(e) {
            "use strict";
            return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, n.prototype.onTouchEnd = function(e) {
            "use strict";
            var t, n, s, u, l, c = this.targetElement;
            if (!this.trackingClick) return !0;
            if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (l = e.changedTouches[0], c = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = c.tagName.toLowerCase(), "label" === s) {
                if (t = this.findControl(c)) {
                    if (this.focus(c), r) return !1;
                    c = t
                }
            } else if (this.needsFocus(c)) return e.timeStamp - n > 100 || i && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, e), i && "select" === s || (this.targetElement = null, e.preventDefault()), !1);
            return i && !o && (u = c.fastClickScrollParent, u && u.fastClickLastScrollTop !== u.scrollTop) ? !0 : (this.needsClick(c) || (e.preventDefault(), this.sendClick(c, e)), !1)
        }, n.prototype.onTouchCancel = function() {
            "use strict";
            this.trackingClick = !1, this.targetElement = null
        }, n.prototype.onMouse = function(e) {
            "use strict";
            return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
        }, n.prototype.onClick = function(e) {
            "use strict";
            var t;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
        }, n.prototype.destroy = function() {
            "use strict";
            var e = this.layer;
            r && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, n.notNeeded = function(e) {
            "use strict";
            var t, n;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!r) return !0;
                if (t = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                    if (n > 31 && window.innerWidth <= window.screen.width) return !0
                }
            }
            return "none" === e.style.msTouchAction ? !0 : !1
        }, n.attach = function(e, t) {
            "use strict";
            return new n(e, t)
        }, "undefined" != typeof define && define.amd ? define(function() {
            "use strict";
            return n
        }) : "undefined" != typeof t && t.exports ? (t.exports = n.attach, t.exports.FastClick = n) : window.FastClick = n
    }, {}],
    21: [function(e, t) {
        (function(n) {
            (function() {
                e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js"), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
                    function(e, t, n) {
                        function r(n) {
                            var r = t.console;
                            o[n] || (o[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
                        }

                        function i(t, i, o, a) {
                            if (Object.defineProperty) try {
                                return Object.defineProperty(t, i, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        return r(a), o
                                    },
                                    set: function(e) {
                                        r(a), o = e
                                    }
                                }), n
                            } catch (s) {}
                            e._definePropertyBroken = !0, t[i] = o
                        }
                        var o = {};
                        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
                            o = {}, e.migrateWarnings.length = 0
                        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
                        var a = e("<input/>", {
                                size: 1
                            }).attr("size") && e.attrFn,
                            s = e.attr,
                            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                                return null
                            },
                            l = e.attrHooks.value && e.attrHooks.value.set || function() {
                                return n
                            },
                            c = /^(?:input|button)$/i,
                            d = /^[238]$/,
                            f = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                            h = /^(?:checked|selected)$/i;
                        i(e, "attrFn", a || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, i, o, u) {
                            var l = i.toLowerCase(),
                                p = t && t.nodeType;
                            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(p) && (a ? i in a : e.isFunction(e.fn[i]))) ? e(t)[i](o) : ("type" === i && o !== n && c.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[l] && f.test(l) && (e.attrHooks[l] = {
                                get: function(t, r) {
                                    var i, o = e.prop(t, r);
                                    return o === !0 || "boolean" != typeof o && (i = t.getAttributeNode(r)) && i.nodeValue !== !1 ? r.toLowerCase() : n
                                },
                                set: function(t, n, r) {
                                    var i;
                                    return n === !1 ? e.removeAttr(t, r) : (i = e.propFix[r] || r, i in t && (t[i] = !0), t.setAttribute(r, r.toLowerCase())), r
                                }
                            }, h.test(l) && r("jQuery.fn.attr('" + l + "') may use property instead of attribute")), s.call(e, t, i, o))
                        }, e.attrHooks.value = {
                            get: function(e, t) {
                                var n = (e.nodeName || "").toLowerCase();
                                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
                            },
                            set: function(e, t) {
                                var i = (e.nodeName || "").toLowerCase();
                                return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
                            }
                        };
                        var p, v, m = e.fn.init,
                            g = e.parseJSON,
                            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
                        e.fn.init = function(t, n, i) {
                            var o;
                            return t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(e.trim(t))) && o[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), o[3] && r("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? m.call(this, e.parseHTML(o[2], n, !0), n, i) : m.apply(this, arguments)
                        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
                            return e || null === e ? g.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
                        }, e.uaMatch = function(e) {
                            e = e.toLowerCase();
                            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                            return {
                                browser: t[1] || "",
                                version: t[2] || "0"
                            }
                        }, e.browser || (p = e.uaMatch(navigator.userAgent), v = {}, p.browser && (v[p.browser] = !0, v.version = p.version), v.chrome ? v.webkit = !0 : v.webkit && (v.safari = !0), e.browser = v), i(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
                            function t(e, n) {
                                return new t.fn.init(e, n)
                            }
                            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, i) {
                                return i && i instanceof e && !(i instanceof t) && (i = t(i)), e.fn.init.call(this, r, i, n)
                            }, t.fn.init.prototype = t.fn;
                            var n = t(document);
                            return r("jQuery.sub() is deprecated"), t
                        }, e.ajaxSetup({
                            converters: {
                                "text json": e.parseJSON
                            }
                        });
                        var b = e.fn.data;
                        e.fn.data = function(t) {
                            var i, o, a = this[0];
                            return !a || "events" !== t || 1 !== arguments.length || (i = e.data(a, t), o = e._data(a, t), i !== n && i !== o || o === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), o)
                        };
                        var x = /\/(java|ecma)script/i,
                            _ = e.fn.andSelf || e.fn.addBack;
                        e.fn.andSelf = function() {
                            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), _.apply(this, arguments)
                        }, e.clean || (e.clean = function(t, i, o, a) {
                            i = i || document, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, r("jQuery.clean() is deprecated");
                            var s, u, l, c, d = [];
                            if (e.merge(d, e.buildFragment(t, i).childNodes), o)
                                for (l = function(e) {
                                        return !e.type || x.test(e.type) ? a ? a.push(e.parentNode ? e.parentNode.removeChild(e) : e) : o.appendChild(e) : n
                                    }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && l(u) || (o.appendChild(u), u.getElementsByTagName !== n && (c = e.grep(e.merge([], u.getElementsByTagName("script")), l), d.splice.apply(d, [s + 1, 0].concat(c)), s += c.length));
                            return d
                        });
                        var w = e.event.add,
                            C = e.event.remove,
                            T = e.event.trigger,
                            k = e.fn.toggle,
                            E = e.fn.live,
                            S = e.fn.die,
                            $ = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
                            j = RegExp("\\b(?:" + $ + ")\\b"),
                            N = /(?:^|\s)hover(\.\S+|)\b/,
                            D = function(t) {
                                return "string" != typeof t || e.event.special.hover ? t : (N.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(N, "mouseenter$1 mouseleave$1"))
                            };
                        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && i(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, i, o) {
                            e !== document && j.test(t) && r("AJAX events should be attached to document: " + t), w.call(this, e, D(t || ""), n, i, o)
                        }, e.event.remove = function(e, t, n, r, i) {
                            C.call(this, e, D(t) || "", n, r, i)
                        }, e.fn.error = function() {
                            var e = Array.prototype.slice.call(arguments, 0);
                            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
                        }, e.fn.toggle = function(t, n) {
                            if (!e.isFunction(t) || !e.isFunction(n)) return k.apply(this, arguments);
                            r("jQuery.fn.toggle(handler, handler...) is deprecated");
                            var i = arguments,
                                o = t.guid || e.guid++,
                                a = 0,
                                s = function(n) {
                                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % a;
                                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), i[r].apply(this, arguments) || !1
                                };
                            for (s.guid = o; i.length > a;) i[a++].guid = o;
                            return this.click(s)
                        }, e.fn.live = function(t, n, i) {
                            return r("jQuery.fn.live() is deprecated"), E ? E.apply(this, arguments) : (e(this.context).on(t, this.selector, n, i), this)
                        }, e.fn.die = function(t, n) {
                            return r("jQuery.fn.die() is deprecated"), S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
                        }, e.event.trigger = function(e, t, n, i) {
                            return n || j.test(e) || r("Global events are undocumented and deprecated"), T.call(this, e, t, n || document, i)
                        }, e.each($.split("|"), function(t, n) {
                            e.event.special[n] = {
                                setup: function() {
                                    var t = this;
                                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                                        e.event.trigger(n, null, t, !0)
                                    }), e._data(this, n, e.guid++)), !1
                                },
                                teardown: function() {
                                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                                }
                            }
                        })
                    }(jQuery, window)
            }).call(n, t, void 0)
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js": 24
    }],
    22: [function(e, t) {
        (function(n) {
            (function() {
                e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js"),
                    function(e, t, n) {
                        function r(e) {
                            var t = {},
                                r = /^jQuery\d+$/;
                            return n.each(e.attributes, function(e, n) {
                                n.specified && !r.test(n.name) && (t[n.name] = n.value)
                            }), t
                        }

                        function i(e, t) {
                            var r = this,
                                i = n(r);
                            if (r.value == i.attr("placeholder") && i.hasClass("placeholder"))
                                if (i.data("placeholder-password")) {
                                    if (i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id")), e === !0) return i[0].value = t;
                                    i.focus()
                                } else r.value = "", i.removeClass("placeholder"), r == a() && r.select()
                        }

                        function o() {
                            var e, t = this,
                                o = n(t),
                                a = this.id;
                            if ("" == t.value) {
                                if ("password" == t.type) {
                                    if (!o.data("placeholder-textinput")) {
                                        try {
                                            e = o.clone().attr({
                                                type: "text"
                                            })
                                        } catch (s) {
                                            e = n("<input>").attr(n.extend(r(this), {
                                                type: "text"
                                            }))
                                        }
                                        e.removeAttr("name").data({
                                            "placeholder-password": o,
                                            "placeholder-id": a
                                        }).bind("focus.placeholder", i), o.data({
                                            "placeholder-textinput": e,
                                            "placeholder-id": a
                                        }).before(e)
                                    }
                                    o = o.removeAttr("id").hide().prev().attr("id", a).show()
                                }
                                o.addClass("placeholder"), o[0].value = o.attr("placeholder")
                            } else o.removeClass("placeholder")
                        }

                        function a() {
                            try {
                                return t.activeElement
                            } catch (e) {}
                        }
                        var s, u, l = "[object OperaMini]" == Object.prototype.toString.call(e.operamini),
                            c = "placeholder" in t.createElement("input") && !l,
                            d = "placeholder" in t.createElement("textarea") && !l,
                            f = n.fn,
                            h = n.valHooks,
                            p = n.propHooks;
                        c && d ? (u = f.placeholder = function() {
                            return this
                        }, u.input = u.textarea = !0) : (u = f.placeholder = function() {
                            var e = this;
                            return e.filter((c ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                                "focus.placeholder": i,
                                "blur.placeholder": o
                            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
                        }, u.input = c, u.textarea = d, s = {
                            get: function(e) {
                                var t = n(e),
                                    r = t.data("placeholder-password");
                                return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
                            },
                            set: function(e, t) {
                                var r = n(e),
                                    s = r.data("placeholder-password");
                                return s ? s[0].value = t : r.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != a() && o.call(e)) : r.hasClass("placeholder") ? i.call(e, !0, t) || (e.value = t) : e.value = t, r) : e.value = t
                            }
                        }, c || (h.input = s, p.value = s), d || (h.textarea = s, p.value = s), n(function() {
                            n(t).delegate("form", "submit.placeholder", function() {
                                var e = n(".placeholder", this).each(i);
                                setTimeout(function() {
                                    e.each(o)
                                }, 10)
                            })
                        }), n(e).bind("beforeunload.placeholder", function() {
                            n(".placeholder").each(function() {
                                this.value = ""
                            })
                        }))
                    }(this, document, jQuery)
            }).call(n, t, void 0)
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js": 24
    }],
    23: [function(e, t) {
        (function(n) {
            (function() {
                e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js"),
                    function() {
                        var e, t, n, r, i, o, a, s, u, l, c, d, f, h, p, v, m, g, y, b, x, _, w, C, T, k, E, S, $, j, N, D, A, L, F, B, M, q, I, H, R, O, P, z, V, W, X, Q, K, Y, J, G, U, Z, et, tt, nt, rt, it, ot, at, st, ut, lt, ct, dt, ft, ht, pt, vt, mt = [].slice,
                            gt = [].indexOf || function(e) {
                                for (var t = 0, n = this.length; n > t; t++)
                                    if (t in this && this[t] === e) return t;
                                return -1
                            };
                        e = jQuery, e.formance = {}, e.formance.fn = {}, e.fn.formance = function() {
                            var t, n;
                            return n = arguments[0], t = 2 <= arguments.length ? mt.call(arguments, 1) : [], e.formance.fn[n].apply(this, t)
                        }, st = function(t) {
                            var n, r;
                            return n = e(t.target), t.metaKey || t.ctrlKey ? !0 : 32 === t.which ? !1 : 0 === t.which ? !0 : t.which < 33 ? !0 : (r = String.fromCharCode(t.which), !!/[\d\s]/.test(r))
                        }, et = function(t) {
                            var n, r;
                            return n = e(t.target), t.metaKey || t.ctrlKey ? !0 : 32 === t.which ? !1 : 0 === t.which ? !0 : t.which < 33 ? !0 : (r = String.fromCharCode(t.which), !!/[\d\sA-Za-z]/.test(r))
                        }, W = function(e) {
                            var t;
                            return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : ("undefined" != typeof document && null !== document ? null != (t = document.selection) ? "function" == typeof t.createRange ? t.createRange().text : void 0 : void 0 : void 0) ? !0 : !1
                        }, e.formance.fn.restrictNumeric = function() {
                            return this.on("keypress", st), this
                        }, e.formance.fn.restrictAlphaNumeric = function() {
                            return this.on("keypress", et), this
                        }, e.formance.fn.hasTextSelected = W, e = jQuery, W = e.formance.fn.hasTextSelected, i = /(\d{1,4})/g, r = [{
                            type: "maestro",
                            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                            format: i,
                            length: [12, 13, 14, 15, 16, 17, 18, 19],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "dinersclub",
                            pattern: /^(36|38|30[0-5])/,
                            format: i,
                            length: [14],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "laser",
                            pattern: /^(6706|6771|6709)/,
                            format: i,
                            length: [16, 17, 18, 19],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "jcb",
                            pattern: /^35/,
                            format: i,
                            length: [16],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "unionpay",
                            pattern: /^62/,
                            format: i,
                            length: [16, 17, 18, 19],
                            cvcLength: [3],
                            luhn: !1
                        }, {
                            type: "discover",
                            pattern: /^(6011|65|64[4-9]|622)/,
                            format: i,
                            length: [16],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "mastercard",
                            pattern: /^5[1-5]/,
                            format: i,
                            length: [16],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "amex",
                            pattern: /^3[47]/,
                            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                            length: [15],
                            cvcLength: [3, 4],
                            luhn: !0
                        }, {
                            type: "visa",
                            pattern: /^4/,
                            format: i,
                            length: [13, 14, 15, 16],
                            cvcLength: [3],
                            luhn: !0
                        }], t = function(e) {
                            var t, n, i;
                            for (e = (e + "").replace(/\D/g, ""), n = 0, i = r.length; i > n; n++)
                                if (t = r[n], t.pattern.test(e)) return t
                        }, n = function(e) {
                            var t, n, i;
                            for (n = 0, i = r.length; i > n; n++)
                                if (t = r[n], t.type === e) return t
                        }, tt = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (i = n.val() + r, i.length <= 4) : void 0
                        }, e.formance.fn.format_credit_card_cvc = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", tt), this
                        }, e.formance.fn.validate_credit_card_cvc = function() {
                            var t, r, i, o;
                            return r = e(this).data("credit_card_type"), t = e(this).val(), t = e.trim(t), /^\d+$/.test(t) ? r ? (i = t.length, gt.call(null != (o = n(r)) ? o.cvcLength : void 0, i) >= 0) : t.length >= 3 && t.length <= 4 : !1
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, at = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 6 ? !1 : void 0) : void 0
                        }, _ = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val() + r, /^\d$/.test(i) && "0" !== i && "1" !== i ? (t.preventDefault(), n.val("0" + i + " / ")) : /^\d\d$/.test(i) ? (t.preventDefault(), n.val("" + i + " / ")) : void 0) : void 0
                        }, k = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d\d$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
                        }, j = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), "/" === r ? (n = e(t.currentTarget), i = n.val(), /^\d$/.test(i) && "0" !== i ? n.val("0" + i + " / ") : void 0) : void 0
                        }, l = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\/)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\/)*$/, ""))) : /\s\/\s?\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\/\s?\d?$/, ""))) : void 0
                        }, e.formance.fn.format_credit_card_expiry = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", at), this.on("keypress", _), this.on("keypress", j), this.on("keypress", k), this.on("keydown", l), this
                        }, Q = function(e) {
                            var t, n, r, i, o;
                            return r = e.replace(/\s/g, ""), o = r.split("/", 2), t = o[0], i = o[1], 2 === (null != i ? i.length : void 0) && /^\d+$/.test(i) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), i = n + i), t = parseInt(t, 10), i = parseInt(i, 10), {
                                month: t,
                                year: i
                            }
                        }, e.formance.fn.val_credit_card_expiry = function() {
                            var e;
                            return e = Q(this.val()), null == e.month || isNaN(e.month) ? !1 : null == e.year || isNaN(e.year) ? !1 : new Date(e.year, e.month - 1)
                        }, e.formance.fn.validate_credit_card_expiry = function() {
                            var t, n, r, i, o, a, s;
                            return r = Q(this.val()), i = r.month, a = r.year, "object" == typeof i && "month" in i && (s = i, i = s.month, a = s.year), i && a ? (i = e.trim(i), a = e.trim(a), /^\d+$/.test(i) ? /^\d+$/.test(a) ? parseInt(i, 10) <= 12 ? (2 === a.length && (o = (new Date).getFullYear(), o = o.toString().slice(0, 2), a = o + a), n = new Date(a, i), t = new Date, n.setMonth(n.getMonth() - 1), n.setMonth(n.getMonth() + 1, 1), n > t) : !1 : !1 : !1) : !1
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, i = /(\d{1,4})/g, r = [{
                            type: "maestro",
                            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                            format: i,
                            length: [12, 13, 14, 15, 16, 17, 18, 19],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "dinersclub",
                            pattern: /^(36|38|30[0-5])/,
                            format: i,
                            length: [14],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "laser",
                            pattern: /^(6706|6771|6709)/,
                            format: i,
                            length: [16, 17, 18, 19],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "jcb",
                            pattern: /^35/,
                            format: i,
                            length: [16],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "unionpay",
                            pattern: /^62/,
                            format: i,
                            length: [16, 17, 18, 19],
                            cvcLength: [3],
                            luhn: !1
                        }, {
                            type: "discover",
                            pattern: /^(6011|65|64[4-9]|622)/,
                            format: i,
                            length: [16],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "mastercard",
                            pattern: /^5[1-5]/,
                            format: i,
                            length: [16],
                            cvcLength: [3],
                            luhn: !0
                        }, {
                            type: "amex",
                            pattern: /^3[47]/,
                            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                            length: [15],
                            cvcLength: [3, 4],
                            luhn: !0
                        }, {
                            type: "visa",
                            pattern: /^4/,
                            format: i,
                            length: [13, 14, 15, 16],
                            cvcLength: [3],
                            luhn: !0
                        }], t = function(e) {
                            var t, n, i;
                            for (e = (e + "").replace(/\D/g, ""), n = 0, i = r.length; i > n; n++)
                                if (t = r[n], t.pattern.test(e)) return t
                        }, n = function(e) {
                            var t, n, i;
                            for (n = 0, i = r.length; i > n; n++)
                                if (t = r[n], t.type === e) return t
                        }, X = function(e) {
                            var t, n, r, i, o, a;
                            for (r = !0, i = 0, n = (e + "").split("").reverse(), o = 0, a = n.length; a > o; o++) t = n[o], t = parseInt(t, 10), (r = !r) && (t *= 2), t > 9 && (t -= 9), i += t;
                            return i % 10 === 0
                        }, nt = function(n) {
                            var r, i, o, a;
                            return r = e(n.currentTarget), o = String.fromCharCode(n.which), /^\d+$/.test(o) && !W(r) ? (a = (r.val() + o).replace(/\D/g, ""), i = t(a), i ? a.length <= i.length[i.length.length - 1] : a.length <= 16) : void 0
                        }, U = function(t) {
                            return setTimeout(function() {
                                return function() {
                                    var n, r;
                                    return n = e(t.currentTarget), r = n.val(), r = e.formance.formatCardNumber(r), n.val(r)
                                }
                            }(this))
                        }, g = function(n) {
                            var r, i, o, a, s, u, l;
                            return o = String.fromCharCode(n.which), !/^\d+$/.test(o) || (r = e(n.currentTarget), l = r.val(), i = t(l + o), a = (l.replace(/\D/g, "") + o).length, u = 16, i && (u = i.length[i.length.length - 1]), a >= u || null != r.prop("selectionStart") && r.prop("selectionStart") !== l.length) ? void 0 : (s = i && "amex" === i.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, s.test(l) ? (n.preventDefault(), r.val(l + " " + o)) : s.test(l + o) ? (n.preventDefault(), r.val(l + o + " ")) : void 0)
                        }, o = function(t) {
                            var n, r;
                            return n = e(t.currentTarget), r = n.val(), t.meta || 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\d\s$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d\s$/, ""))) : /\s\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\d?$/, ""))) : void 0
                        }, vt = function(t) {
                            var n, i, o, a, s;
                            return n = e(t.currentTarget), s = n.val(), a = e.formance.creditCardType(s) || "unknown", n.hasClass(a) ? void 0 : (i = function() {
                                var e, t, n;
                                for (n = [], e = 0, t = r.length; t > e; e++) o = r[e], n.push(o.type);
                                return n
                            }(), n.removeClass("unknown"), n.removeClass(i.join(" ")), n.addClass(a), n.toggleClass("identified", "unknown" !== a), n.trigger("payment.cardType", a))
                        }, e.formance.creditCardType = function(e) {
                            var n;
                            return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
                        }, e.formance.formatCreditCardNumber = function(e) {
                            var n, r, i, o;
                            return (n = t(e)) ? (i = n.length[n.length.length - 1], e = e.replace(/\D/g, ""), e = e.slice(0, +i + 1 || 9e9), n.format.global ? null != (o = e.match(n.format)) ? o.join(" ") : void 0 : (r = n.format.exec(e), null != r && r.shift(), null != r ? r.join(" ") : void 0)) : e
                        }, e.formance.fn.format_credit_card_number = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", nt), this.on("keypress", g), this.on("keydown", o), this.on("keyup", vt), this.on("paste", U), this
                        }, e.formance.fn.validate_credit_card_number = function() {
                            var n, r, i;
                            return r = e(this).val(), r = (r + "").replace(/\s+|-/g, ""), /^\d+$/.test(r) ? (n = t(r), n ? (i = r.length, gt.call(n.length, i) >= 0 && (n.luhn === !1 || X(r))) : !1) : !1
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, rt = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 8 ? !1 : void 0) : void 0
                        }, y = function(t) {
                            var n, r, i, o;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), o = i + r, /^\d$/.test(o) && "0" !== r && "1" !== r && "2" !== r && "3" !== r ? (t.preventDefault(), n.val("0" + o + " / ")) : /^\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " / ")) : /^\d{2}\s\/\s\d$/.test(o) && "0" !== r && "1" !== r ? (t.preventDefault(), n.val("" + i + "0" + r + " / ")) : /^\d{2}\s\/\s\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " / ")) : void 0) : void 0
                        }, w = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d{2}$/.test(i) || /^\d{2}\s\/\s\d{2}$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
                        }, E = function(t) {
                            var n, r, i, o, a, s, u, l, c;
                            return u = String.fromCharCode(t.which), "/" === u ? (n = e(t.currentTarget), l = n.val(), a = /^(\d)$/, s = /^(\d{2})\s\/\s(\d)$/, a.test(l) && "0" !== l ? n.val("0" + l + " / ") : s.test(l) && (c = l.match(s), r = c[0], i = c[1], o = c[2], "0" !== o) ? n.val("" + i + " / 0" + o + " / ") : void 0) : void 0
                        }, a = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\/)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\/)*$/, ""))) : /\s\/\s?\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\/\s?\d?$/, ""))) : void 0
                        }, e.formance.fn.format_dd_mm_yyyy = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", rt), this.on("keypress", y), this.on("keypress", E), this.on("keypress", w), this.on("keydown", a), this
                        }, K = function(e) {
                            var t, n, r, i;
                            return i = null != e ? e.replace(/\s/g, "").split("/", 3) : [0 / 0, 0 / 0, 0 / 0], t = i[0], n = i[1], r = i[2], (null == r || 4 !== r.length) && (r = 0 / 0), t = parseInt(t, 10), n = parseInt(n, 10), r = parseInt(r, 10), {
                                day: t,
                                month: n,
                                year: r
                            }
                        }, e.formance.fn.val_dd_mm_yyyy = function() {
                            var e;
                            return e = K(this.val()), null == e.day || isNaN(e.day) ? !1 : null == e.month || isNaN(e.month) ? !1 : null == e.year || isNaN(e.year) ? !1 : new Date(e.year, e.month - 1, e.day)
                        }, e.formance.fn.validate_dd_mm_yyyy = function() {
                            var e, t;
                            return t = K(this.val()), e = this.formance("val_dd_mm_yyyy"), null != e && e instanceof Date ? e.getDate() !== t.day ? !1 : e.getMonth() + 1 !== t.month ? !1 : e.getFullYear() !== t.year ? !1 : !0 : !1
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, e.formance.fn.format_email = function() {
                            return this
                        }, e.formance.fn.validate_email = function() {
                            var t, n, r, i;
                            return n = {
                                simple: /^\S+@\S+$/,
                                complex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\ ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA -Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            }, t = e(this), r = t.val(), null == r ? !1 : (i = t.data("formance_algorithm"), null != i && i in n ? n[i].test(r) : n.simple.test(r))
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, it = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 8 ? !1 : void 0) : void 0
                        }, b = function(t) {
                            var n, r, i, o;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), o = i + r, /^\d$/.test(o) && "0" !== r && "1" !== r ? (t.preventDefault(), n.val("0" + o + " / ")) : /^\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " / ")) : /^\d{2}\s\/\s\d$/.test(o) && "0" !== r && "1" !== r && "2" !== r && "3" !== r ? (t.preventDefault(), n.val("" + i + "0" + r + " / ")) : /^\d{2}\s\/\s\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " / ")) : void 0) : void 0
                        }, C = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d{2}$/.test(i) || /^\d{2}\s\/\s\d{2}$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
                        }, S = function(t) {
                            var n, r, i, o, a, s, u, l, c;
                            return u = String.fromCharCode(t.which), "/" === u ? (n = e(t.currentTarget), l = n.val(), a = /^(\d)$/, s = /^(\d{2})\s\/\s(\d)$/, a.test(l) && "0" !== l ? n.val("0" + l + " / ") : s.test(l) && (c = l.match(s), r = c[0], i = c[1], o = c[2], "0" !== o) ? n.val("" + i + " / 0" + o + " / ") : void 0) : void 0
                        }, s = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\/)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\/)*$/, ""))) : /\s\/\s?\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\/\s?\d?$/, ""))) : void 0
                        }, e.formance.fn.format_mm_dd_yyyy = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", it), this.on("keypress", b), this.on("keypress", S), this.on("keypress", C), this.on("keydown", s), this
                        }, Y = function(e) {
                            var t, n, r, i;
                            return i = null != e ? e.replace(/\s/g, "").split("/", 3) : [0 / 0, 0 / 0, 0 / 0], n = i[0], t = i[1], r = i[2], (null == r || 4 !== r.length) && (r = 0 / 0), t = parseInt(t, 10), n = parseInt(n, 10), r = parseInt(r, 10), {
                                month: n,
                                day: t,
                                year: r
                            }
                        }, e.formance.fn.val_mm_dd_yyyy = function() {
                            var e;
                            return e = Y(this.val()), null == e.day || isNaN(e.day) ? !1 : null == e.month || isNaN(e.month) ? !1 : null == e.year || isNaN(e.year) ? !1 : new Date(e.year, e.month - 1, e.day)
                        }, e.formance.fn.validate_mm_dd_yyyy = function() {
                            var e, t;
                            return t = Y(this.val()), e = this.formance("val_mm_dd_yyyy"), null != e && e instanceof Date ? e.getDate() !== t.day ? !1 : e.getMonth() + 1 !== t.month ? !1 : e.getFullYear() !== t.year ? !1 : !0 : !1
                        }, e = jQuery, e.formance.fn.format_number = function() {
                            var t;
                            return t = e(this).data("formance_length"), null != t && e(this).attr("maxLength", t), this.formance("restrictNumeric"), this
                        }, e.formance.fn.validate_number = function() {
                            var t, n, r;
                            if (t = e(this), r = t.val(), n = t.data("formance_length"), null != n && "number" == typeof n && r.length !== n) return !1;
                            if (null != n && "string" == typeof n && "" !== n) {
                                if (isNaN(parseInt(n, 10))) return !1;
                                if (r.length !== parseInt(n, 10)) return !1
                            }
                            return /^\d+$/.test(r)
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, ut = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^[a-zA-Z\d]+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/[^a-zA-Z\d]/g, ""), i.length > 15 ? !1 : void 0) : void 0
                        }, L = function(t) {
                            var n, r, i, o;
                            if (r = String.fromCharCode(t.which), /^[a-zA-Z\d]+$/.test(r))
                                if (n = e(t.currentTarget), i = n.val(), o = i + r.toUpperCase(), "" === i) {
                                    if (t.preventDefault(), /^[A-Za-z]$/.test(o)) return n.val(o)
                                } else if (/^[A-Za-z]\d{0,3}$/.test(i)) {
                                if (t.preventDefault(), /^[A-Za-z]\d{4}$/.test(o) && (o = "" + o + " - "), /^[A-Za-z]\d{0,4}[\s|\-]*$/.test(o)) return n.val(o)
                            } else if (/^[A-Za-z]\d{4}[\s|\-]*\d{0,4}$/.test(i) && (t.preventDefault(), /^[A-Za-z]\d{4}[\s|\-]*\d{5}$/.test(o) && (o = "" + o + " - "), /^[A-Za-z]\d{4}[\s|\-]*\d{0,5}[\s|\-]*$/.test(o))) return n.val(o)
                        }, c = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\-)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\-)+$/, ""))) : void 0
                        }, M = function(t) {
                            return setTimeout(function() {
                                return function() {
                                    var n, r, i, o, a, s, u;
                                    return n = e(t.currentTarget), s = n.val(), u = s.match(/^([A-Za-z\d]{5})[\s|\-]*(\d{5})[\s|\-]*(\d{5})$/), i = u[0], r = u[1], a = u[2], o = u[3], n.val("" + r + " - " + a + " - " + o)
                                }
                            }(this))
                        }, e.formance.fn.format_ontario_drivers_license_number = function() {
                            return this.formance("restrictAlphaNumeric"), this.on("keypress", ut), this.on("keypress", L), this.on("keydown", c), this.on("paste", M), this
                        }, e.formance.fn.validate_ontario_drivers_license_number = function() {
                            var t, n;
                            return n = e(this).val(), null == n ? !1 : (n = n.replace(/[\s|\-]/g, ""), /^[a-zA-Z\d]+$/.test() ? (t = /^[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/, t.test(n)) : !1)
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, lt = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 15 ? !1 : void 0) : void 0
                        }, F = function(t) {
                            var n, r, i, o;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), o = n.val() + r, "" === i ? (t.preventDefault(), o = /^7$/.test(o) ? "708158 " : "708158 " + o, n.val(o)) : /^\d{5}$/.test(i) && (t.preventDefault(), /^\d{6}$/.test(o) && (o = "" + o + " "), /^\d{6}\s*$/.test(o)) ? target.val(o) : void 0) : void 0
                        }, d = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /708158\s+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/708158\s+$/, ""))) : void 0
                        }, q = function(t) {
                            return setTimeout(function() {
                                return function() {
                                    var n, r, i, o, a, s;
                                    return n = e(t.currentTarget), a = n.val(), s = a.match(/^(\d{6})\s*(\d{9})$/), i = s[0], r = s[1], o = s[2], n.val("" + r + " " + o)
                                }
                            }(this))
                        }, e.formance.fn.format_ontario_outdoors_card_number = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", lt), this.on("keypress", F), this.on("keydown", d), this.on("paste", q), this
                        }, e.formance.fn.validate_ontario_outdoors_card_number = function() {
                            var t, n;
                            return n = e(this).val(), null == n ? !1 : (n = n.replace(/\s/g, ""), /^\d+$/.test(n) ? (t = /^708158\s*\d{9}$/, t.test(n)) : !1)
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, ct = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^[a-zA-Z\d]+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/[^a-zA-Z\d]/g, ""), i.length > 12 ? !1 : void 0) : void 0
                        }, B = function(t) {
                            var n, r, i, o;
                            if (r = String.fromCharCode(t.which), /^[a-zA-Z\d]+$/.test(r))
                                if (n = e(t.currentTarget), i = n.val(), o = i + r.toUpperCase(), /^\d{0,3}$/.test(i)) {
                                    if (t.preventDefault(), /^\d{4}$/.test(o) && (o = "" + o + " - "), /^\d{0,4}[\s|\-]*$/.test(o)) return n.val(o)
                                } else if (/^\d{4}[\s|\-]*\d{0,2}$/.test(i)) {
                                if (t.preventDefault(), /^\d{4}[\s|\-]*\d{3}$/.test(o) && (o = "" + o + " - "), /^\d{4}[\s|\-]*\d{0,3}[\s|\-]*$/.test(o)) return n.val(o)
                            } else if (/^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{0,2}$/.test(i)) {
                                if (t.preventDefault(), /^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}$/.test(o) && (o = "" + o + " - "), /^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{0,3}[\s|\-]*$/.test(o)) return n.val(o)
                            } else if (/^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}[\s|\-]*[A-Za-z]{0,1}$/.test(i) && (t.preventDefault(), /^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}[\s|\-]*[A-Za-z]{0,2}$/.test(o))) return n.val(o)
                        }, f = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\-)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\-)+$/, ""))) : void 0
                        }, I = function(t) {
                            return setTimeout(function() {
                                return function() {
                                    var n, r, i, o, a, s, u, l;
                                    return n = e(t.currentTarget), u = n.val(), l = u.match(/^(\d{4})[\s|\-]*(\d{3})[\s|\-]*(\d{3})[\s|\-]*([A-Za-z]{2})$/), i = l[0], r = l[1], a = l[2], s = l[3], o = l[4], n.val("" + r + " - " + a + " - " + s + " - " + o)
                                }
                            }(this))
                        }, e.formance.fn.format_ontario_photo_health_card_number = function() {
                            return this.formance("restrictAlphaNumeric"), this.on("keypress", ct), this.on("keypress", B), this.on("keydown", f), this.on("paste", I), this
                        }, e.formance.fn.validate_ontario_photo_health_card_number = function() {
                            var t, n;
                            return n = e(this).val(), null == n ? !1 : (n = n.replace(/[\s|\-]/g, ""), /^[a-zA-Z\d]+$/.test() ? (t = /^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}[\s|\-]*[A-Za-z]{2}$/, t.test(n)) : !1)
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, Z = function(e) {
                            var t, n, r, i, o, a;
                            return i = e.replace(/\D/g, "").match(/^(\d{0,3})?(\d{0,3})?(\d{0,4})?$/), a = i, i = a[0], t = a[1], n = a[2], r = a[3], o = "", null != t && (o += "(" + t), 3 === (null != t ? t.length : void 0) && (o += ") "), null != n && (o += "" + n), 3 === (null != n ? n.length : void 0) && (o += " - "), null != r && (o += "" + r), o
                        }, dt = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 10 ? !1 : void 0) : void 0
                        }, O = function(t) {
                            var n, r, i, o;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), o = n.val() + r, i = Z(o), t.preventDefault(), n.val(i)) : void 0
                        }, h = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\(\d$/.test(r) ? (t.preventDefault(), n.val("")) : /\d\)(\s)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d\)(\s)*$/, ""))) : /\d(\s|\-)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\-)+$/, ""))) : void 0
                        }, H = function(t) {
                            return setTimeout(function() {
                                return function() {
                                    var n, r, i;
                                    return n = e(t.currentTarget), i = n.val(), r = Z(i), n.val(r)
                                }
                            }(this))
                        }, e.formance.fn.format_phone_number = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", dt), this.on("keypress", O), this.on("keydown", h), this.on("paste", H), this
                        }, e.formance.fn.validate_phone_number = function() {
                            var t;
                            return t = e(this).val(), null == t ? !1 : (t = t.replace(/\(|\)|\s+|-/g, ""), /^\d+$/.test(t) ? 10 === t.replace(/\D/g, "").length : !1)
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, ft = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^[a-zA-Z\d]+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/[^a-zA-Z\d]/g, ""), i.length > 6 ? !1 : void 0) : void 0
                        }, P = function(t) {
                            var n, r, i, o;
                            if (r = String.fromCharCode(t.which), /^[a-zA-Z\d]+$/.test(r))
                                if (n = e(t.currentTarget), i = n.val(), o = i + r.toUpperCase(), "" === i) {
                                    if (t.preventDefault(), /^[ABCEFGHJKLMNPRSTVXY]$/.test(o)) return n.val(o)
                                } else if (/^[ABCEFGHJKLMNPRSTVXY]$/.test(i)) {
                                if (t.preventDefault(), /^[ABCEFGHJKLMNPRSTVXY][0-9]$/.test(o)) return n.val(o)
                            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9]$/.test(i)) {
                                if (t.preventDefault(), /^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]$/.test(o)) return n.val("" + o + " ")
                            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s$/.test(i)) {
                                if (t.preventDefault(), /^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9]$/.test(o)) return n.val(o)
                            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9]$/.test(i)) {
                                if (t.preventDefault(), /^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ]$/.test(o)) return n.val(o)
                            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ]$/.test(i) && (t.preventDefault(), /^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ][0-9]$/.test(o))) return n.val(o)
                        }, p = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /[ABCEFGHJKLMNPRSTVWXYZ](\s)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/[ABCEFGHJKLMNPRSTVWXYZ](\s)*$/, ""))) : void 0
                        }, R = function(t) {
                            return setTimeout(function() {
                                return function() {
                                    var n, r, i, o, a, s;
                                    return n = e(t.currentTarget), a = n.val(), s = a.match(/^([ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ])\s?([0-9][ABCEFGHJKLMNPRSTVWXYZ][0-9])$/), i = s[0], r = s[1], o = s[2], n.val("" + r + " " + o)
                                }
                            }(this))
                        }, e.formance.fn.format_postal_code = function() {
                            return this.formance("restrictAlphaNumeric"), this.on("keypress", ft), this.on("keypress", P), this.on("keydown", p), this.on("paste", R), this
                        }, e.formance.fn.validate_postal_code = function() {
                            var t;
                            return t = e(this).val(), null == t ? !1 : (t = t.replace(/\s+/g, ""), /^[a-zA-Z\d]+$/.test(t) ? (t = t.replace(/[^a-zA-Z\d]/g, ""), /^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ][0-9]$/.test(t.toUpperCase())) : !1)
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, ht = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 4 ? !1 : void 0) : void 0
                        }, z = function(t) {
                            var n, r, i, o;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), o = i + r, /^\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " / ")) : /^\d{2}\s\/\s\d{1}$/.test(o) && "0" !== r && "1" !== r ? (t.preventDefault(), n.val("" + i + "0" + r)) : void 0) : void 0
                        }, D = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d{2}$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
                        }, N = function(t) {
                            var n, r, i, o;
                            return i = String.fromCharCode(t.which), "/" === i ? (n = e(t.currentTarget), o = n.val(), r = /^(\d)$/, r.test(o) && 2 === o.length || 1 === o.length ? n.val("0" + o + " / ") : void 0) : void 0
                        }, v = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\/)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\/)*$/, ""))) : /\s\/\s?\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\/\s?\d?$/, ""))) : void 0
                        }, e.formance.fn.format_time_yy_mm = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", ht), this.on("keypress", z), this.on("keypress", D), this.on("keypress", N), this.on("keydown", v), this
                        }, J = function(e) {
                            var t, n, r;
                            return r = null != e ? e.replace(/\s/g, "").split("/", 2) : [0 / 0, 0 / 0], n = r[0], t = r[1], t = parseInt(t, 10), n = parseInt(n, 10), {
                                years: n,
                                months: t
                            }
                        }, e.formance.fn.val_time_yy_mm = function() {
                            var e;
                            return e = J(this.val()), null == e.years || isNaN(e.years) ? !1 : null == e.months || isNaN(e.months) ? !1 : e
                        }, e.formance.fn.validate_time_yy_mm = function() {
                            var t, n, r;
                            return n = J(this.val()), t = this.formance("val_time_yy_mm"), r = e(this).val(), t.months !== n.months ? !1 : t.years !== n.years ? !1 : /^(\d{1}[\d{1}]*)[\s\/]*(\d{1}[\d{1}]*)[\s\/]*$/.test(r) ? !0 : !1
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, pt = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 6 ? !1 : void 0) : void 0
                        }, A = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d{2}$/.test(i) || /^\d{2}\s\-\s\d{2}$/.test(i) ? n.val("" + i + " - ") : void 0) : void 0
                        }, m = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\-)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\-)+$/, ""))) : /\s\-\s?\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\-\s?\d?$/, ""))) : void 0
                        }, V = function(t) {
                            var n, r, i, o;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), o = i + r, /^\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " - ")) : /^\d{2}\s\-\s\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " - ")) : void 0) : void 0
                        }, e.formance.fn.format_uk_sort_code = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", pt), this.on("keypress", V), this.on("keypress", A), this.on("keydown", m), this
                        }, e.formance.fn.validate_uk_sort_code = function() {
                            var t;
                            return t = e(this).val(), /^(\d{2})[\s\-]*(\d{2})[\s\-]*(\d{2})[\s]*$/.test(t) ? !0 : !1
                        }, e = jQuery, W = e.formance.fn.hasTextSelected, ot = function(t) {
                            var n, r, i;
                            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !W(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 8 ? !1 : void 0) : void 0
                        }, x = function(t) {
                            var n, r, i, o;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), o = i + r, /^\d{4}$/.test(o) ? (t.preventDefault(), n.val("" + o + " / ")) : /^\d{4}\s\/\s\d$/.test(o) && "0" !== r && "1" !== r ? (t.preventDefault(), n.val("" + i + "0" + r + " / ")) : /^\d{4}\s\/\s\d{2}$/.test(o) ? (t.preventDefault(), n.val("" + o + " / ")) : /^\d{4}\s\/\s\d{2}\s\/\s\d$/.test(o) && "0" !== r && "1" !== r && "2" !== r && "3" !== r ? (t.preventDefault(), n.val("" + i + "0" + r)) : void 0) : void 0
                        }, T = function(t) {
                            var n, r, i;
                            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d{4}$/.test(i) || /^\d{4}\s\/\s\d{2}$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
                        }, $ = function(t) {
                            var n, r, i, o, a, s, u, l;
                            return a = String.fromCharCode(t.which), "/" === a ? (n = e(t.currentTarget), s = n.val(), o = /^(\d{4})\s\/\s(\d)$/, o.test(s) && (l = s.match(o), r = l[0], u = l[1], i = l[2], "0" !== i) ? n.val("" + u + " / 0" + i + " / ") : void 0) : void 0
                        }, u = function(t) {
                            var n, r;
                            if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\/)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\/)*$/, ""))) : /\s\/\s?\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\/\s?\d?$/, ""))) : void 0
                        }, e.formance.fn.format_yyyy_mm_dd = function() {
                            return this.formance("restrictNumeric"), this.on("keypress", ot), this.on("keypress", x), this.on("keypress", $), this.on("keypress", T), this.on("keydown", u), this
                        }, G = function(e) {
                            var t, n, r, i;
                            return i = null != e ? e.replace(/\s/g, "").split("/", 3) : [0 / 0, 0 / 0, 0 / 0], r = i[0], n = i[1], t = i[2], (null == r || 4 !== r.length) && (r = 0 / 0), t = parseInt(t, 10), n = parseInt(n, 10), r = parseInt(r, 10), {
                                day: t,
                                month: n,
                                year: r
                            }
                        }, e.formance.fn.val_yyyy_mm_dd = function() {
                            var e;
                            return e = G(this.val()), null == e.day || isNaN(e.day) ? !1 : null == e.month || isNaN(e.month) ? !1 : null == e.year || isNaN(e.year) ? !1 : new Date(e.year, e.month - 1, e.day)
                        }, e.formance.fn.validate_yyyy_mm_dd = function() {
                            var e, t;
                            return t = G(this.val()), e = this.formance("val_yyyy_mm_dd"), null != e && e instanceof Date ? e.getDate() !== t.day ? !1 : e.getMonth() + 1 !== t.month ? !1 : e.getFullYear() !== t.year ? !1 : !0 : !1
                        }
                    }.call(this)
            }).call(n, t, void 0)
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js": 24
    }],
    24: [function(e, t) {
        (function(e) {
            (function(e, t, n, r) {
                ! function(t, n) {
                    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return n(e)
                    } : n(t)
                }("undefined" != typeof window ? window : this, function(e, t) {
                    function r(e) {
                        var t = e.length,
                            n = ot.type(e);
                        return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
                    }

                    function i(e, t, n) {
                        if (ot.isFunction(t)) return ot.grep(e, function(e, r) {
                            return !!t.call(e, r, e) !== n
                        });
                        if (t.nodeType) return ot.grep(e, function(e) {
                            return e === t !== n
                        });
                        if ("string" == typeof t) {
                            if (ht.test(t)) return ot.filter(t, e, n);
                            t = ot.filter(t, e)
                        }
                        return ot.grep(e, function(e) {
                            return ot.inArray(e, t) >= 0 !== n
                        })
                    }

                    function o(e, t) {
                        do e = e[t]; while (e && 1 !== e.nodeType);
                        return e
                    }

                    function a(e) {
                        var t = _t[e] = {};
                        return ot.each(e.match(xt) || [], function(e, n) {
                            t[n] = !0
                        }), t
                    }

                    function s() {
                        vt.addEventListener ? (vt.removeEventListener("DOMContentLoaded", u, !1), e.removeEventListener("load", u, !1)) : (vt.detachEvent("onreadystatechange", u), e.detachEvent("onload", u))
                    }

                    function u() {
                        (vt.addEventListener || "load" === event.type || "complete" === vt.readyState) && (s(), ot.ready())
                    }

                    function l(e, t, n) {
                        if (void 0 === n && 1 === e.nodeType) {
                            var r = "data-" + t.replace(Et, "-$1").toLowerCase();
                            if (n = e.getAttribute(r), "string" == typeof n) {
                                try {
                                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : kt.test(n) ? ot.parseJSON(n) : n
                                } catch (i) {}
                                ot.data(e, t, n)
                            } else n = void 0
                        }
                        return n
                    }

                    function c(e) {
                        var t;
                        for (t in e)
                            if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                        return !0
                    }

                    function d(e, t, n, r) {
                        if (ot.acceptData(e)) {
                            var i, o, a = ot.expando,
                                s = e.nodeType,
                                u = s ? ot.cache : e,
                                l = s ? e[a] : e[a] && a;
                            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = Y.pop() || ot.guid++ : a), u[l] || (u[l] = s ? {} : {
                                toJSON: ot.noop
                            }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ot.extend(u[l], t) : u[l].data = ot.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ot.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ot.camelCase(t)])) : i = o, i
                        }
                    }

                    function f(e, t, n) {
                        if (ot.acceptData(e)) {
                            var r, i, o = e.nodeType,
                                a = o ? ot.cache : e,
                                s = o ? e[ot.expando] : ot.expando;
                            if (a[s]) {
                                if (t && (r = n ? a[s] : a[s].data)) {
                                    ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in r ? t = [t] : (t = ot.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                                    for (; i--;) delete r[t[i]];
                                    if (n ? !c(r) : !ot.isEmptyObject(r)) return
                                }(n || (delete a[s].data, c(a[s]))) && (o ? ot.cleanData([e], !0) : rt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                            }
                        }
                    }

                    function h() {
                        return !0
                    }

                    function p() {
                        return !1
                    }

                    function v() {
                        try {
                            return vt.activeElement
                        } catch (e) {}
                    }

                    function m(e) {
                        var t = qt.split("|"),
                            n = e.createDocumentFragment();
                        if (n.createElement)
                            for (; t.length;) n.createElement(t.pop());
                        return n
                    }

                    function g(e, t) {
                        var n, r, i = 0,
                            o = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
                        if (!o)
                            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ot.nodeName(r, t) ? o.push(r) : ot.merge(o, g(r, t));
                        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], o) : o
                    }

                    function y(e) {
                        Dt.test(e.type) && (e.defaultChecked = e.checked)
                    }

                    function b(e, t) {
                        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
                    }

                    function x(e) {
                        return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type, e
                    }

                    function _(e) {
                        var t = Kt.exec(e.type);
                        return t ? e.type = t[1] : e.removeAttribute("type"), e
                    }

                    function w(e, t) {
                        for (var n, r = 0; null != (n = e[r]); r++) ot._data(n, "globalEval", !t || ot._data(t[r], "globalEval"))
                    }

                    function C(e, t) {
                        if (1 === t.nodeType && ot.hasData(e)) {
                            var n, r, i, o = ot._data(e),
                                a = ot._data(t, o),
                                s = o.events;
                            if (s) {
                                delete a.handle, a.events = {};
                                for (n in s)
                                    for (r = 0, i = s[n].length; i > r; r++) ot.event.add(t, n, s[n][r])
                            }
                            a.data && (a.data = ot.extend({}, a.data))
                        }
                    }

                    function T(e, t) {
                        var n, r, i;
                        if (1 === t.nodeType) {
                            if (n = t.nodeName.toLowerCase(), !rt.noCloneEvent && t[ot.expando]) {
                                i = ot._data(t);
                                for (r in i.events) ot.removeEvent(t, r, i.handle);
                                t.removeAttribute(ot.expando)
                            }
                            "script" === n && t.text !== e.text ? (x(t).text = e.text, _(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), rt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Dt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                        }
                    }

                    function k(t, n) {
                        var r, i = ot(n.createElement(t)).appendTo(n.body),
                            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ot.css(i[0], "display");
                        return i.detach(), o
                    }

                    function E(e) {
                        var t = vt,
                            n = en[e];
                        return n || (n = k(e, t), "none" !== n && n || (Zt = (Zt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Zt.detach()), en[e] = n), n
                    }

                    function S(e, t) {
                        return {
                            get: function() {
                                var n = e();
                                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
                            }
                        }
                    }

                    function $(e, t) {
                        if (t in e) return t;
                        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;)
                            if (t = pn[i] + n, t in e) return t;
                        return r
                    }

                    function j(e, t) {
                        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ot._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && jt(r) && (o[a] = ot._data(r, "olddisplay", E(r.nodeName)))) : (i = jt(r), (n && "none" !== n || !i) && ot._data(r, "olddisplay", i ? n : ot.css(r, "display"))));
                        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                        return e
                    }

                    function N(e, t, n) {
                        var r = cn.exec(t);
                        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
                    }

                    function D(e, t, n, r, i) {
                        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ot.css(e, n + $t[o], !0, i)), r ? ("content" === n && (a -= ot.css(e, "padding" + $t[o], !0, i)), "margin" !== n && (a -= ot.css(e, "border" + $t[o] + "Width", !0, i))) : (a += ot.css(e, "padding" + $t[o], !0, i), "padding" !== n && (a += ot.css(e, "border" + $t[o] + "Width", !0, i)));
                        return a
                    }

                    function A(e, t, n) {
                        var r = !0,
                            i = "width" === t ? e.offsetWidth : e.offsetHeight,
                            o = tn(e),
                            a = rt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o);
                        if (0 >= i || null == i) {
                            if (i = nn(e, t, o), (0 > i || null == i) && (i = e.style[t]), on.test(i)) return i;
                            r = a && (rt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                        }
                        return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px"
                    }

                    function L(e, t, n, r, i) {
                        return new L.prototype.init(e, t, n, r, i)
                    }

                    function F() {
                        return setTimeout(function() {
                            vn = void 0
                        }), vn = ot.now()
                    }

                    function B(e, t) {
                        var n, r = {
                                height: e
                            },
                            i = 0;
                        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
                        return t && (r.opacity = r.width = e), r
                    }

                    function M(e, t, n) {
                        for (var r, i = (_n[t] || []).concat(_n["*"]), o = 0, a = i.length; a > o; o++)
                            if (r = i[o].call(n, t, e)) return r
                    }

                    function q(e, t, n) {
                        var r, i, o, a, s, u, l, c, d = this,
                            f = {},
                            h = e.style,
                            p = e.nodeType && jt(e),
                            v = ot._data(e, "fxshow");
                        n.queue || (s = ot._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || u()
                        }), s.unqueued++, d.always(function() {
                            d.always(function() {
                                s.unqueued--, ot.queue(e, "fx").length || s.empty.fire()
                            })
                        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = ot.css(e, "display"), c = "none" === l ? ot._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === ot.css(e, "float") && (rt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", rt.shrinkWrapBlocks() || d.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        }));
                        for (r in t)
                            if (i = t[r], gn.exec(i)) {
                                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                                    if ("show" !== i || !v || void 0 === v[r]) continue;
                                    p = !0
                                }
                                f[r] = v && v[r] || ot.style(e, r)
                            } else l = void 0;
                        if (ot.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (h.display = l);
                        else {
                            v ? "hidden" in v && (p = v.hidden) : v = ot._data(e, "fxshow", {}), o && (v.hidden = !p), p ? ot(e).show() : d.done(function() {
                                ot(e).hide()
                            }), d.done(function() {
                                var t;
                                ot._removeData(e, "fxshow");
                                for (t in f) ot.style(e, t, f[t])
                            });
                            for (r in f) a = M(p ? v[r] : 0, r, d), r in v || (v[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                        }
                    }

                    function I(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ot.cssHooks[r], a && "expand" in a) {
                                o = a.expand(o), delete e[r];
                                for (n in o) n in e || (e[n] = o[n], t[n] = i)
                            } else t[r] = i
                    }

                    function H(e, t, n) {
                        var r, i, o = 0,
                            a = xn.length,
                            s = ot.Deferred().always(function() {
                                delete u.elem
                            }),
                            u = function() {
                                if (i) return !1;
                                for (var t = vn || F(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
                            },
                            l = s.promise({
                                elem: e,
                                props: ot.extend({}, t),
                                opts: ot.extend(!0, {
                                    specialEasing: {}
                                }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: vn || F(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(t, n) {
                                    var r = ot.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                    return l.tweens.push(r), r
                                },
                                stop: function(t) {
                                    var n = 0,
                                        r = t ? l.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                                }
                            }),
                            c = l.props;
                        for (I(c, l.opts.specialEasing); a > o; o++)
                            if (r = xn[o].call(l, e, c, l.opts)) return r;
                        return ot.map(c, M, l), ot.isFunction(l.opts.start) && l.opts.start.call(e, l), ot.fx.timer(ot.extend(u, {
                            elem: e,
                            anim: l,
                            queue: l.opts.queue
                        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
                    }

                    function R(e) {
                        return function(t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var r, i = 0,
                                o = t.toLowerCase().match(xt) || [];
                            if (ot.isFunction(n))
                                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                        }
                    }

                    function O(e, t, n, r) {
                        function i(s) {
                            var u;
                            return o[s] = !0, ot.each(e[s] || [], function(e, s) {
                                var l = s(t, n, r);
                                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                            }), u
                        }
                        var o = {},
                            a = e === Wn;
                        return i(t.dataTypes[0]) || !o["*"] && i("*")
                    }

                    function P(e, t) {
                        var n, r, i = ot.ajaxSettings.flatOptions || {};
                        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
                        return n && ot.extend(!0, e, n), e
                    }

                    function z(e, t, n) {
                        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (a in s)
                                if (s[a] && s[a].test(i)) {
                                    u.unshift(a);
                                    break
                                }
                        if (u[0] in n) o = u[0];
                        else {
                            for (a in n) {
                                if (!u[0] || e.converters[a + " " + u[0]]) {
                                    o = a;
                                    break
                                }
                                r || (r = a)
                            }
                            o = o || r
                        }
                        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                    }

                    function V(e, t, n, r) {
                        var i, o, a, s, u, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                if ("*" === o) o = u;
                                else if ("*" !== u && u !== o) {
                            if (a = l[u + " " + o] || l["* " + o], !a)
                                for (i in l)
                                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                        break
                                    }
                            if (a !== !0)
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (d) {
                                    return {
                                        state: "parsererror",
                                        error: a ? d : "No conversion from " + u + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }

                    function W(e, t, n, r) {
                        var i;
                        if (ot.isArray(t)) ot.each(t, function(t, i) {
                            n || Yn.test(e) ? r(e, i) : W(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                        });
                        else if (n || "object" !== ot.type(t)) r(e, t);
                        else
                            for (i in t) W(e + "[" + i + "]", t[i], n, r)
                    }

                    function X() {
                        try {
                            return new e.XMLHttpRequest
                        } catch (t) {}
                    }

                    function Q() {
                        try {
                            return new e.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (t) {}
                    }

                    function K(e) {
                        return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
                    }
                    var Y = [],
                        J = Y.slice,
                        G = Y.concat,
                        U = Y.push,
                        Z = Y.indexOf,
                        et = {},
                        tt = et.toString,
                        nt = et.hasOwnProperty,
                        rt = {},
                        it = "1.11.1",
                        ot = function(e, t) {
                            return new ot.fn.init(e, t)
                        },
                        at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                        st = /^-ms-/,
                        ut = /-([\da-z])/gi,
                        lt = function(e, t) {
                            return t.toUpperCase()
                        };
                    ot.fn = ot.prototype = {
                        jquery: it,
                        constructor: ot,
                        selector: "",
                        length: 0,
                        toArray: function() {
                            return J.call(this)
                        },
                        get: function(e) {
                            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
                        },
                        pushStack: function(e) {
                            var t = ot.merge(this.constructor(), e);
                            return t.prevObject = this, t.context = this.context, t
                        },
                        each: function(e, t) {
                            return ot.each(this, e, t)
                        },
                        map: function(e) {
                            return this.pushStack(ot.map(this, function(t, n) {
                                return e.call(t, n, t)
                            }))
                        },
                        slice: function() {
                            return this.pushStack(J.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        eq: function(e) {
                            var t = this.length,
                                n = +e + (0 > e ? t : 0);
                            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor(null)
                        },
                        push: U,
                        sort: Y.sort,
                        splice: Y.splice
                    }, ot.extend = ot.fn.extend = function() {
                        var e, t, n, r, i, o, a = arguments[0] || {},
                            s = 1,
                            u = arguments.length,
                            l = !1;
                        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                            if (null != (i = arguments[s]))
                                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, o = e && ot.isArray(e) ? e : []) : o = e && ot.isPlainObject(e) ? e : {}, a[r] = ot.extend(l, o, n)) : void 0 !== n && (a[r] = n));
                        return a
                    }, ot.extend({
                        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isFunction: function(e) {
                            return "function" === ot.type(e)
                        },
                        isArray: Array.isArray || function(e) {
                            return "array" === ot.type(e)
                        },
                        isWindow: function(e) {
                            return null != e && e == e.window
                        },
                        isNumeric: function(e) {
                            return !ot.isArray(e) && e - parseFloat(e) >= 0
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        isPlainObject: function(e) {
                            var t;
                            if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
                            try {
                                if (e.constructor && !nt.call(e, "constructor") && !nt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                            } catch (n) {
                                return !1
                            }
                            if (rt.ownLast)
                                for (t in e) return nt.call(e, t);
                            for (t in e);
                            return void 0 === t || nt.call(e, t)
                        },
                        type: function(e) {
                            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[tt.call(e)] || "object" : typeof e
                        },
                        globalEval: function(t) {
                            t && ot.trim(t) && (e.execScript || function(t) {
                                e.eval.call(e, t)
                            })(t)
                        },
                        camelCase: function(e) {
                            return e.replace(st, "ms-").replace(ut, lt)
                        },
                        nodeName: function(e, t) {
                            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                        },
                        each: function(e, t, n) {
                            var i, o = 0,
                                a = e.length,
                                s = r(e);
                            if (n) {
                                if (s)
                                    for (; a > o && (i = t.apply(e[o], n), i !== !1); o++);
                                else
                                    for (o in e)
                                        if (i = t.apply(e[o], n), i === !1) break
                            } else if (s)
                                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                            else
                                for (o in e)
                                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
                        },
                        trim: function(e) {
                            return null == e ? "" : (e + "").replace(at, "")
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return null != e && (r(Object(e)) ? ot.merge(n, "string" == typeof e ? [e] : e) : U.call(n, e)), n
                        },
                        inArray: function(e, t, n) {
                            var r;
                            if (t) {
                                if (Z) return Z.call(t, e, n);
                                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                                    if (n in t && t[n] === e) return n
                            }
                            return -1
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
                            if (n !== n)
                                for (; void 0 !== t[r];) e[i++] = t[r++];
                            return e.length = i, e
                        },
                        grep: function(e, t, n) {
                            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                            return i
                        },
                        map: function(e, t, n) {
                            var i, o = 0,
                                a = e.length,
                                s = r(e),
                                u = [];
                            if (s)
                                for (; a > o; o++) i = t(e[o], o, n), null != i && u.push(i);
                            else
                                for (o in e) i = t(e[o], o, n), null != i && u.push(i);
                            return G.apply([], u)
                        },
                        guid: 1,
                        proxy: function(e, t) {
                            var n, r, i;
                            return "string" == typeof t && (i = e[t], t = e, e = i), ot.isFunction(e) ? (n = J.call(arguments, 2), r = function() {
                                return e.apply(t || this, n.concat(J.call(arguments)))
                            }, r.guid = e.guid = e.guid || ot.guid++, r) : void 0
                        },
                        now: function() {
                            return +new Date
                        },
                        support: rt
                    }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                        et["[object " + t + "]"] = t.toLowerCase()
                    });
                    var ct = function(e) {
                        function t(e, t, n, r) {
                            var i, o, a, s, u, l, d, h, p, v;
                            if ((t ? t.ownerDocument || t : R) !== A && D(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
                            if (1 !== (s = t.nodeType) && 9 !== s) return [];
                            if (F && !r) {
                                if (i = yt.exec(e))
                                    if (a = i[1]) {
                                        if (9 === s) {
                                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                            if (o.id === a) return n.push(o), n
                                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) return n.push(o), n
                                    } else {
                                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                                        if ((a = i[3]) && _.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                                    }
                                if (_.qsa && (!B || !B.test(e))) {
                                    if (h = d = H, p = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                        for (l = k(e), (d = t.getAttribute("id")) ? h = d.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + f(l[u]);
                                        p = bt.test(e) && c(t.parentNode) || t, v = l.join(",")
                                    }
                                    if (v) try {
                                        return Z.apply(n, p.querySelectorAll(v)), n
                                    } catch (m) {} finally {
                                        d || t.removeAttribute("id")
                                    }
                                }
                            }
                            return S(e.replace(ut, "$1"), t, n, r)
                        }

                        function n() {
                            function e(n, r) {
                                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
                            }
                            var t = [];
                            return e
                        }

                        function r(e) {
                            return e[H] = !0, e
                        }

                        function i(e) {
                            var t = A.createElement("div");
                            try {
                                return !!e(t)
                            } catch (n) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function o(e, t) {
                            for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
                        }

                        function a(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function s(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return "input" === n && t.type === e
                            }
                        }

                        function u(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function l(e) {
                            return r(function(t) {
                                return t = +t, r(function(n, r) {
                                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                })
                            })
                        }

                        function c(e) {
                            return e && typeof e.getElementsByTagName !== Q && e
                        }

                        function d() {}

                        function f(e) {
                            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                            return r
                        }

                        function h(e, t, n) {
                            var r = t.dir,
                                i = n && "parentNode" === r,
                                o = P++;
                            return t.first ? function(t, n, o) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || i) return e(t, n, o)
                            } : function(t, n, a) {
                                var s, u, l = [O, o];
                                if (a) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || i) {
                                            if (u = t[H] || (t[H] = {}), (s = u[r]) && s[0] === O && s[1] === o) return l[2] = s[2];
                                            if (u[r] = l, l[2] = e(t, n, a)) return !0
                                        }
                            }
                        }

                        function p(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function v(e, n, r) {
                            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                            return r
                        }

                        function m(e, t, n, r, i) {
                            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                            return a
                        }

                        function g(e, t, n, i, o, a) {
                            return i && !i[H] && (i = g(i)), o && !o[H] && (o = g(o, a)), r(function(r, a, s, u) {
                                var l, c, d, f = [],
                                    h = [],
                                    p = a.length,
                                    g = r || v(t || "*", s.nodeType ? [s] : s, []),
                                    y = !e || !r && t ? g : m(g, f, e, s, u),
                                    b = n ? o || (r ? e : p || i) ? [] : a : y;
                                if (n && n(y, b, s, u), i)
                                    for (l = m(b, h), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[h[c]] = !(y[h[c]] = d));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                                            o(null, b = [], l, u)
                                        }
                                        for (c = b.length; c--;)(d = b[c]) && (l = o ? tt.call(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                                    }
                                } else b = m(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, u) : Z.apply(a, b)
                            })
                        }

                        function y(e) {
                            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                                    return e === t
                                }, a, !0), l = h(function(e) {
                                    return tt.call(t, e) > -1
                                }, a, !0), c = [function(e, n, r) {
                                    return !o && (r || n !== $) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                                }]; i > s; s++)
                                if (n = w.relative[e[s].type]) c = [h(p(c), n)];
                                else {
                                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                        for (r = ++s; i > r && !w.relative[e[r].type]; r++);
                                        return g(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                                            value: " " === e[s - 2].type ? "*" : ""
                                        })).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                                    }
                                    c.push(n)
                                }
                            return p(c)
                        }

                        function b(e, n) {
                            var i = n.length > 0,
                                o = e.length > 0,
                                a = function(r, a, s, u, l) {
                                    var c, d, f, h = 0,
                                        p = "0",
                                        v = r && [],
                                        g = [],
                                        y = $,
                                        b = r || o && w.find.TAG("*", l),
                                        x = O += null == y ? 1 : Math.random() || .1,
                                        _ = b.length;
                                    for (l && ($ = a !== A && a); p !== _ && null != (c = b[p]); p++) {
                                        if (o && c) {
                                            for (d = 0; f = e[d++];)
                                                if (f(c, a, s)) {
                                                    u.push(c);
                                                    break
                                                }
                                            l && (O = x)
                                        }
                                        i && ((c = !f && c) && h--, r && v.push(c))
                                    }
                                    if (h += p, i && p !== h) {
                                        for (d = 0; f = n[d++];) f(v, g, a, s);
                                        if (r) {
                                            if (h > 0)
                                                for (; p--;) v[p] || g[p] || (g[p] = G.call(u));
                                            g = m(g)
                                        }
                                        Z.apply(u, g), l && !r && g.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                                    }
                                    return l && (O = x, $ = y), v
                                };
                            return i ? r(a) : a
                        }
                        var x, _, w, C, T, k, E, S, $, j, N, D, A, L, F, B, M, q, I, H = "sizzle" + -new Date,
                            R = e.document,
                            O = 0,
                            P = 0,
                            z = n(),
                            V = n(),
                            W = n(),
                            X = function(e, t) {
                                return e === t && (N = !0), 0
                            },
                            Q = "undefined",
                            K = 1 << 31,
                            Y = {}.hasOwnProperty,
                            J = [],
                            G = J.pop,
                            U = J.push,
                            Z = J.push,
                            et = J.slice,
                            tt = J.indexOf || function(e) {
                                for (var t = 0, n = this.length; n > t; t++)
                                    if (this[t] === e) return t;
                                return -1
                            },
                            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            rt = "[\\x20\\t\\r\\n\\f]",
                            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                            ot = it.replace("w", "w#"),
                            at = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]",
                            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
                            ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
                            lt = new RegExp("^" + rt + "*," + rt + "*"),
                            ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
                            dt = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
                            ft = new RegExp(st),
                            ht = new RegExp("^" + ot + "$"),
                            pt = {
                                ID: new RegExp("^#(" + it + ")"),
                                CLASS: new RegExp("^\\.(" + it + ")"),
                                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                                ATTR: new RegExp("^" + at),
                                PSEUDO: new RegExp("^" + st),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + nt + ")$", "i"),
                                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
                            },
                            vt = /^(?:input|select|textarea|button)$/i,
                            mt = /^h\d$/i,
                            gt = /^[^{]+\{\s*\[native \w/,
                            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            bt = /[+~]/,
                            xt = /'|\\/g,
                            _t = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
                            wt = function(e, t, n) {
                                var r = "0x" + t - 65536;
                                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                            };
                        try {
                            Z.apply(J = et.call(R.childNodes), R.childNodes), J[R.childNodes.length].nodeType
                        } catch (Ct) {
                            Z = {
                                apply: J.length ? function(e, t) {
                                    U.apply(e, et.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1
                                }
                            }
                        }
                        _ = t.support = {}, T = t.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }, D = t.setDocument = function(e) {
                            var t, n = e ? e.ownerDocument || e : R,
                                r = n.defaultView;
                            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, L = n.documentElement, F = !T(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                                D()
                            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                                D()
                            })), _.attributes = i(function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            }), _.getElementsByTagName = i(function(e) {
                                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                            }), _.getElementsByClassName = gt.test(n.getElementsByClassName) && i(function(e) {
                                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                            }), _.getById = i(function(e) {
                                return L.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                            }), _.getById ? (w.find.ID = function(e, t) {
                                if (typeof t.getElementById !== Q && F) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : []
                                }
                            }, w.filter.ID = function(e) {
                                var t = e.replace(_t, wt);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete w.find.ID, w.filter.ID = function(e) {
                                var t = e.replace(_t, wt);
                                return function(e) {
                                    var n = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }), w.find.TAG = _.getElementsByTagName ? function(e, t) {
                                return typeof t.getElementsByTagName !== Q ? t.getElementsByTagName(e) : void 0
                            } : function(e, t) {
                                var n, r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            }, w.find.CLASS = _.getElementsByClassName && function(e, t) {
                                return typeof t.getElementsByClassName !== Q && F ? t.getElementsByClassName(e) : void 0
                            }, M = [], B = [], (_.qsa = gt.test(n.querySelectorAll)) && (i(function(e) {
                                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && B.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || B.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || B.push(":checked")
                            }), i(function(e) {
                                var t = n.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && B.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:")
                            })), (_.matchesSelector = gt.test(q = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                                _.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), M.push("!=", st)
                            }), B = B.length && new RegExp(B.join("|")), M = M.length && new RegExp(M.join("|")), t = gt.test(L.compareDocumentPosition), I = t || gt.test(L.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, X = t ? function(e, t) {
                                if (e === t) return N = !0, 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !_.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === R && I(R, e) ? -1 : t === n || t.ownerDocument === R && I(R, t) ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0 : 4 & r ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return N = !0, 0;
                                var r, i = 0,
                                    o = e.parentNode,
                                    s = t.parentNode,
                                    u = [e],
                                    l = [t];
                                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0;
                                if (o === s) return a(e, t);
                                for (r = e; r = r.parentNode;) u.unshift(r);
                                for (r = t; r = r.parentNode;) l.unshift(r);
                                for (; u[i] === l[i];) i++;
                                return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
                            }, n) : A
                        }, t.matches = function(e, n) {
                            return t(e, null, null, n)
                        }, t.matchesSelector = function(e, n) {
                            if ((e.ownerDocument || e) !== A && D(e), n = n.replace(dt, "='$1']"), !(!_.matchesSelector || !F || M && M.test(n) || B && B.test(n))) try {
                                var r = q.call(e, n);
                                if (r || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                            } catch (i) {}
                            return t(n, A, null, [e]).length > 0
                        }, t.contains = function(e, t) {
                            return (e.ownerDocument || e) !== A && D(e), I(e, t)
                        }, t.attr = function(e, t) {
                            (e.ownerDocument || e) !== A && D(e);
                            var n = w.attrHandle[t.toLowerCase()],
                                r = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
                            return void 0 !== r ? r : _.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }, t.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, t.uniqueSort = function(e) {
                            var t, n = [],
                                r = 0,
                                i = 0;
                            if (N = !_.detectDuplicates, j = !_.sortStable && e.slice(0), e.sort(X), N) {
                                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                                for (; r--;) e.splice(n[r], 1)
                            }
                            return j = null, e
                        }, C = t.getText = function(e) {
                            var t, n = "",
                                r = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                                } else if (3 === i || 4 === i) return e.nodeValue
                            } else
                                for (; t = e[r++];) n += C(t);
                            return n
                        }, w = t.selectors = {
                            cacheLength: 50,
                            createPseudo: r,
                            match: pt,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(_t, wt), e[3] = (e[3] || e[4] || e[5] || "").replace(_t, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(_t, wt).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = z[e + " "];
                                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && z(e, function(e) {
                                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(e, n, r) {
                                    return function(i) {
                                        var o = t.attr(i, e);
                                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                                    }
                                },
                                CHILD: function(e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, u) {
                                        var l, c, d, f, h, p, v = o !== a ? "nextSibling" : "previousSibling",
                                            m = t.parentNode,
                                            g = s && t.nodeName.toLowerCase(),
                                            y = !u && !s;
                                        if (m) {
                                            if (o) {
                                                for (; v;) {
                                                    for (d = t; d = d[v];)
                                                        if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                                    p = v = "only" === e && !p && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                                for (c = m[H] || (m[H] = {}), l = c[e] || [], h = l[0] === O && l[1], f = l[0] === O && l[2], d = h && m.childNodes[h]; d = ++h && d && d[v] || (f = h = 0) || p.pop();)
                                                    if (1 === d.nodeType && ++f && d === t) {
                                                        c[e] = [O, h, f];
                                                        break
                                                    }
                                            } else if (y && (l = (t[H] || (t[H] = {}))[e]) && l[0] === O) f = l[1];
                                            else
                                                for (;
                                                    (d = ++h && d && d[v] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++f || (y && ((d[H] || (d[H] = {}))[e] = [O, f]), d !== t)););
                                            return f -= i, f === r || f % r === 0 && f / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, n) {
                                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                        for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
                                    }) : function(e) {
                                        return o(e, 0, i)
                                    }) : o
                                }
                            },
                            pseudos: {
                                not: r(function(e) {
                                    var t = [],
                                        n = [],
                                        i = E(e.replace(ut, "$1"));
                                    return i[H] ? r(function(e, t, n, r) {
                                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    }) : function(e, r, o) {
                                        return t[0] = e, i(t, null, o, n), !n.pop()
                                    }
                                }),
                                has: r(function(e) {
                                    return function(n) {
                                        return t(e, n).length > 0
                                    }
                                }),
                                contains: r(function(e) {
                                    return function(t) {
                                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                    }
                                }),
                                lang: r(function(e) {
                                    return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_t, wt).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do
                                                if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                            while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === L
                                },
                                focus: function(e) {
                                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: function(e) {
                                    return e.disabled === !1
                                },
                                disabled: function(e) {
                                    return e.disabled === !0
                                },
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !w.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return mt.test(e.nodeName)
                                },
                                input: function(e) {
                                    return vt.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: l(function() {
                                    return [0]
                                }),
                                last: l(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: l(function(e, t, n) {
                                    return [0 > n ? n + t : n]
                                }),
                                even: l(function(e, t) {
                                    for (var n = 0; t > n; n += 2) e.push(n);
                                    return e
                                }),
                                odd: l(function(e, t) {
                                    for (var n = 1; t > n; n += 2) e.push(n);
                                    return e
                                }),
                                lt: l(function(e, t, n) {
                                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                                    return e
                                }),
                                gt: l(function(e, t, n) {
                                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                                    return e
                                })
                            }
                        }, w.pseudos.nth = w.pseudos.eq;
                        for (x in {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) w.pseudos[x] = s(x);
                        for (x in {
                                submit: !0,
                                reset: !0
                            }) w.pseudos[x] = u(x);
                        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, k = t.tokenize = function(e, n) {
                            var r, i, o, a, s, u, l, c = V[e + " "];
                            if (c) return n ? 0 : c.slice(0);
                            for (s = e, u = [], l = w.preFilter; s;) {
                                (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                                    value: r,
                                    type: i[0].replace(ut, " ")
                                }), s = s.slice(r.length));
                                for (a in w.filter) !(i = pt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                                    value: r,
                                    type: a,
                                    matches: i
                                }), s = s.slice(r.length));
                                if (!r) break
                            }
                            return n ? s.length : s ? t.error(e) : V(e, u).slice(0)
                        }, E = t.compile = function(e, t) {
                            var n, r = [],
                                i = [],
                                o = W[e + " "];
                            if (!o) {
                                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[H] ? r.push(o) : i.push(o);
                                o = W(e, b(i, r)), o.selector = e
                            }
                            return o
                        }, S = t.select = function(e, t, n, r) {
                            var i, o, a, s, u, l = "function" == typeof e && e,
                                d = !r && k(e = l.selector || e);
                            if (n = n || [], 1 === d.length) {
                                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && _.getById && 9 === t.nodeType && F && w.relative[o[1].type]) {
                                    if (t = (w.find.ID(a.matches[0].replace(_t, wt), t) || [])[0], !t) return n;
                                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                                }
                                for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                                    if ((u = w.find[s]) && (r = u(a.matches[0].replace(_t, wt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                                        if (o.splice(i, 1), e = r.length && f(o), !e) return Z.apply(n, r), n;
                                        break
                                    }
                            }
                            return (l || E(e, d))(r, t, !F, n, bt.test(e) && c(t.parentNode) || t), n
                        }, _.sortStable = H.split("").sort(X).join("") === H, _.detectDuplicates = !!N, D(), _.sortDetached = i(function(e) {
                            return 1 & e.compareDocumentPosition(A.createElement("div"))
                        }), i(function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        }) || o("type|href|height|width", function(e, t, n) {
                            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }), _.attributes && i(function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        }) || o("value", function(e, t, n) {
                            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                        }), i(function(e) {
                            return null == e.getAttribute("disabled")
                        }) || o(nt, function(e, t, n) {
                            var r;
                            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }), t
                    }(e);
                    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
                    var dt = ot.expr.match.needsContext,
                        ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                        ht = /^.[^:#\[\.,]*$/;
                    ot.filter = function(e, t, n) {
                        var r = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t, function(e) {
                            return 1 === e.nodeType
                        }))
                    }, ot.fn.extend({
                        find: function(e) {
                            var t, n = [],
                                r = this,
                                i = r.length;
                            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                                for (t = 0; i > t; t++)
                                    if (ot.contains(r[t], this)) return !0
                            }));
                            for (t = 0; i > t; t++) ot.find(e, r[t], n);
                            return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                        },
                        filter: function(e) {
                            return this.pushStack(i(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(i(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!i(this, "string" == typeof e && dt.test(e) ? ot(e) : e || [], !1).length
                        }
                    });
                    var pt, vt = e.document,
                        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                        gt = ot.fn.init = function(e, t) {
                            var n, r;
                            if (!e) return this;
                            if ("string" == typeof e) {
                                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                                if (n[1]) {
                                    if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : vt, !0)), ft.test(n[1]) && ot.isPlainObject(t))
                                        for (n in t) ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                                    return this
                                }
                                if (r = vt.getElementById(n[2]), r && r.parentNode) {
                                    if (r.id !== n[2]) return pt.find(e);
                                    this.length = 1, this[0] = r
                                }
                                return this.context = vt, this.selector = e, this
                            }
                            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
                        };
                    gt.prototype = ot.fn, pt = ot(vt);
                    var yt = /^(?:parents|prev(?:Until|All))/,
                        bt = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };
                    ot.extend({
                        dir: function(e, t, n) {
                            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ot(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
                            return r
                        },
                        sibling: function(e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        }
                    }), ot.fn.extend({
                        has: function(e) {
                            var t, n = ot(e, this),
                                r = n.length;
                            return this.filter(function() {
                                for (t = 0; r > t; t++)
                                    if (ot.contains(this, n[t])) return !0
                            })
                        },
                        closest: function(e, t) {
                            for (var n, r = 0, i = this.length, o = [], a = dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                            return this.pushStack(o.length > 1 ? ot.unique(o) : o)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), ot.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function(e) {
                            return ot.dir(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return ot.dir(e, "parentNode", n)
                        },
                        next: function(e) {
                            return o(e, "nextSibling")
                        },
                        prev: function(e) {
                            return o(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return ot.dir(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return ot.dir(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return ot.dir(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return ot.dir(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return ot.sibling((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return ot.sibling(e.firstChild)
                        },
                        contents: function(e) {
                            return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
                        }
                    }, function(e, t) {
                        ot.fn[e] = function(n, r) {
                            var i = ot.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (bt[e] || (i = ot.unique(i)), yt.test(e) && (i = i.reverse())), this.pushStack(i)
                        }
                    });
                    var xt = /\S+/g,
                        _t = {};
                    ot.Callbacks = function(e) {
                        e = "string" == typeof e ? _t[e] || a(e) : ot.extend({}, e);
                        var t, n, r, i, o, s, u = [],
                            l = !e.once && [],
                            c = function(a) {
                                for (n = e.memory && a, r = !0, o = s || 0, s = 0, i = u.length, t = !0; u && i > o; o++)
                                    if (u[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                                        n = !1;
                                        break
                                    }
                                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
                            },
                            d = {
                                add: function() {
                                    if (u) {
                                        var r = u.length;
                                        ! function o(t) {
                                            ot.each(t, function(t, n) {
                                                var r = ot.type(n);
                                                "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                                            })
                                        }(arguments), t ? i = u.length : n && (s = r, c(n))
                                    }
                                    return this
                                },
                                remove: function() {
                                    return u && ot.each(arguments, function(e, n) {
                                        for (var r;
                                            (r = ot.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, o >= r && o--)
                                    }), this
                                },
                                has: function(e) {
                                    return e ? ot.inArray(e, u) > -1 : !(!u || !u.length)
                                },
                                empty: function() {
                                    return u = [], i = 0, this
                                },
                                disable: function() {
                                    return u = l = n = void 0, this
                                },
                                disabled: function() {
                                    return !u
                                },
                                lock: function() {
                                    return l = void 0, n || d.disable(), this
                                },
                                locked: function() {
                                    return !l
                                },
                                fireWith: function(e, n) {
                                    return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                                },
                                fire: function() {
                                    return d.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return d
                    }, ot.extend({
                        Deferred: function(e) {
                            var t = [
                                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                                    ["notify", "progress", ot.Callbacks("memory")]
                                ],
                                n = "pending",
                                r = {
                                    state: function() {
                                        return n
                                    },
                                    always: function() {
                                        return i.done(arguments).fail(arguments), this
                                    },
                                    then: function() {
                                        var e = arguments;
                                        return ot.Deferred(function(n) {
                                            ot.each(t, function(t, o) {
                                                var a = ot.isFunction(e[t]) && e[t];
                                                i[o[1]](function() {
                                                    var e = a && a.apply(this, arguments);
                                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                                })
                                            }), e = null
                                        }).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? ot.extend(e, r) : r
                                    }
                                },
                                i = {};
                            return r.pipe = r.then, ot.each(t, function(e, o) {
                                var a = o[2],
                                    s = o[3];
                                r[o[1]] = a.add, s && a.add(function() {
                                    n = s
                                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                                }, i[o[0] + "With"] = a.fireWith
                            }), r.promise(i), e && e.call(i, i), i
                        },
                        when: function(e) {
                            var t, n, r, i = 0,
                                o = J.call(arguments),
                                a = o.length,
                                s = 1 !== a || e && ot.isFunction(e.promise) ? a : 0,
                                u = 1 === s ? e : ot.Deferred(),
                                l = function(e, n, r) {
                                    return function(i) {
                                        n[e] = this, r[e] = arguments.length > 1 ? J.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                                    }
                                };
                            if (a > 1)
                                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                            return s || u.resolveWith(r, o), u.promise()
                        }
                    });
                    var wt;
                    ot.fn.ready = function(e) {
                        return ot.ready.promise().done(e), this
                    }, ot.extend({
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(e) {
                            e ? ot.readyWait++ : ot.ready(!0)
                        },
                        ready: function(e) {
                            if (e === !0 ? !--ot.readyWait : !ot.isReady) {
                                if (!vt.body) return setTimeout(ot.ready);
                                ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (wt.resolveWith(vt, [ot]), ot.fn.triggerHandler && (ot(vt).triggerHandler("ready"), ot(vt).off("ready")))
                            }
                        }
                    }), ot.ready.promise = function(t) {
                        if (!wt)
                            if (wt = ot.Deferred(), "complete" === vt.readyState) setTimeout(ot.ready);
                            else if (vt.addEventListener) vt.addEventListener("DOMContentLoaded", u, !1), e.addEventListener("load", u, !1);
                        else {
                            vt.attachEvent("onreadystatechange", u), e.attachEvent("onload", u);
                            var n = !1;
                            try {
                                n = null == e.frameElement && vt.documentElement
                            } catch (r) {}
                            n && n.doScroll && ! function i() {
                                if (!ot.isReady) {
                                    try {
                                        n.doScroll("left")
                                    } catch (e) {
                                        return setTimeout(i, 50)
                                    }
                                    s(), ot.ready()
                                }
                            }()
                        }
                        return wt.promise(t)
                    };
                    var Ct, Tt = "undefined";
                    for (Ct in ot(rt)) break;
                    rt.ownLast = "0" !== Ct, rt.inlineBlockNeedsLayout = !1, ot(function() {
                            var e, t, n, r;
                            n = vt.getElementsByTagName("body")[0], n && n.style && (t = vt.createElement("div"), r = vt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", rt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
                        }),
                        function() {
                            var e = vt.createElement("div");
                            if (null == rt.deleteExpando) {
                                rt.deleteExpando = !0;
                                try {
                                    delete e.test
                                } catch (t) {
                                    rt.deleteExpando = !1
                                }
                            }
                            e = null
                        }(), ot.acceptData = function(e) {
                            var t = ot.noData[(e.nodeName + " ").toLowerCase()],
                                n = +e.nodeType || 1;
                            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
                        };
                    var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        Et = /([A-Z])/g;
                    ot.extend({
                        cache: {},
                        noData: {
                            "applet ": !0,
                            "embed ": !0,
                            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                        },
                        hasData: function(e) {
                            return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando], !!e && !c(e)
                        },
                        data: function(e, t, n) {
                            return d(e, t, n)
                        },
                        removeData: function(e, t) {
                            return f(e, t)
                        },
                        _data: function(e, t, n) {
                            return d(e, t, n, !0)
                        },
                        _removeData: function(e, t) {
                            return f(e, t, !0)
                        }
                    }), ot.fn.extend({
                        data: function(e, t) {
                            var n, r, i, o = this[0],
                                a = o && o.attributes;
                            if (void 0 === e) {
                                if (this.length && (i = ot.data(o), 1 === o.nodeType && !ot._data(o, "parsedAttrs"))) {
                                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), l(o, r, i[r])));
                                    ot._data(o, "parsedAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof e ? this.each(function() {
                                ot.data(this, e)
                            }) : arguments.length > 1 ? this.each(function() {
                                ot.data(this, e, t)
                            }) : o ? l(o, e, ot.data(o, e)) : void 0
                        },
                        removeData: function(e) {
                            return this.each(function() {
                                ot.removeData(this, e)
                            })
                        }
                    }), ot.extend({
                        queue: function(e, t, n) {
                            var r;
                            return e ? (t = (t || "fx") + "queue", r = ot._data(e, t), n && (!r || ot.isArray(n) ? r = ot._data(e, t, ot.makeArray(n)) : r.push(n)), r || []) : void 0
                        },
                        dequeue: function(e, t) {
                            t = t || "fx";
                            var n = ot.queue(e, t),
                                r = n.length,
                                i = n.shift(),
                                o = ot._queueHooks(e, t),
                                a = function() {
                                    ot.dequeue(e, t)
                                };
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return ot._data(e, n) || ot._data(e, n, {
                                empty: ot.Callbacks("once memory").add(function() {
                                    ot._removeData(e, t + "queue"), ot._removeData(e, n)
                                })
                            })
                        }
                    }), ot.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                                var n = ot.queue(this, e, t);
                                ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
                            })
                        },
                        dequeue: function(e) {
                            return this.each(function() {
                                ot.dequeue(this, e)
                            })
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            var n, r = 1,
                                i = ot.Deferred(),
                                o = this,
                                a = this.length,
                                s = function() {
                                    --r || i.resolveWith(o, [o])
                                };
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ot._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                            return s(), i.promise(t)
                        }
                    });
                    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        $t = ["Top", "Right", "Bottom", "Left"],
                        jt = function(e, t) {
                            return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
                        },
                        Nt = ot.access = function(e, t, n, r, i, o, a) {
                            var s = 0,
                                u = e.length,
                                l = null == n;
                            if ("object" === ot.type(n)) {
                                i = !0;
                                for (s in n) ot.access(e, t, s, n[s], !0, o, a)
                            } else if (void 0 !== r && (i = !0, ot.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                                    return l.call(ot(e), n)
                                })), t))
                                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                        },
                        Dt = /^(?:checkbox|radio)$/i;
                    ! function() {
                        var e = vt.createElement("input"),
                            t = vt.createElement("div"),
                            n = vt.createDocumentFragment();
                        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", rt.leadingWhitespace = 3 === t.firstChild.nodeType, rt.tbody = !t.getElementsByTagName("tbody").length, rt.htmlSerialize = !!t.getElementsByTagName("link").length, rt.html5Clone = "<:nav></:nav>" !== vt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), rt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, rt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                                rt.noCloneEvent = !1
                            }), t.cloneNode(!0).click()), null == rt.deleteExpando) {
                            rt.deleteExpando = !0;
                            try {
                                delete t.test
                            } catch (r) {
                                rt.deleteExpando = !1
                            }
                        }
                    }(),
                    function() {
                        var t, n, r = vt.createElement("div");
                        for (t in {
                                submit: !0,
                                change: !0,
                                focusin: !0
                            }) n = "on" + t, (rt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), rt[t + "Bubbles"] = r.attributes[n].expando === !1);
                        r = null
                    }();
                    var At = /^(?:input|select|textarea)$/i,
                        Lt = /^key/,
                        Ft = /^(?:mouse|pointer|contextmenu)|click/,
                        Bt = /^(?:focusinfocus|focusoutblur)$/,
                        Mt = /^([^.]*)(?:\.(.+)|)$/;
                    ot.event = {
                        global: {},
                        add: function(e, t, n, r, i) {
                            var o, a, s, u, l, c, d, f, h, p, v, m = ot._data(e);
                            if (m) {
                                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ot.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                                        return typeof ot === Tt || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(c.elem, arguments)
                                    }, c.elem = e), t = (t || "").match(xt) || [""], s = t.length; s--;) o = Mt.exec(t[s]) || [], h = v = o[1], p = (o[2] || "").split(".").sort(), h && (l = ot.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = ot.event.special[h] || {}, d = ot.extend({
                                    type: h,
                                    origType: v,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && ot.expr.match.needsContext.test(i),
                                    namespace: p.join(".")
                                }, u), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ot.event.global[h] = !0);
                                e = null
                            }
                        },
                        remove: function(e, t, n, r, i) {
                            var o, a, s, u, l, c, d, f, h, p, v, m = ot.hasData(e) && ot._data(e);
                            if (m && (c = m.events)) {
                                for (t = (t || "").match(xt) || [""], l = t.length; l--;)
                                    if (s = Mt.exec(t[l]) || [], h = v = s[1], p = (s[2] || "").split(".").sort(), h) {
                                        for (d = ot.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                                        u && !f.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || ot.removeEvent(e, h, m.handle), delete c[h])
                                    } else
                                        for (h in c) ot.event.remove(e, h + t[l], n, r, !0);
                                ot.isEmptyObject(c) && (delete m.handle, ot._removeData(e, "events"))
                            }
                        },
                        trigger: function(t, n, r, i) {
                            var o, a, s, u, l, c, d, f = [r || vt],
                                h = nt.call(t, "type") ? t.type : t,
                                p = nt.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (s = c = r = r || vt, 3 !== r.nodeType && 8 !== r.nodeType && !Bt.test(h + ot.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[ot.expando] ? t : new ot.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ot.makeArray(n, [t]), l = ot.event.special[h] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                                if (!i && !l.noBubble && !ot.isWindow(r)) {
                                    for (u = l.delegateType || h, Bt.test(u + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                                    c === (r.ownerDocument || vt) && f.push(c.defaultView || c.parentWindow || e)
                                }
                                for (d = 0;
                                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || h, o = (ot._data(s, "events") || {})[t.type] && ot._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ot.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                                if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && ot.acceptData(r) && a && r[h] && !ot.isWindow(r)) {
                                    c = r[a], c && (r[a] = null), ot.event.triggered = h;
                                    try {
                                        r[h]()
                                    } catch (v) {}
                                    ot.event.triggered = void 0, c && (r[a] = c)
                                }
                                return t.result
                            }
                        },
                        dispatch: function(e) {
                            e = ot.event.fix(e);
                            var t, n, r, i, o, a = [],
                                s = J.call(arguments),
                                u = (ot._data(this, "events") || {})[e.type] || [],
                                l = ot.event.special[e.type] || {};
                            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                                for (a = ot.event.handlers.call(this, e, u), t = 0;
                                    (i = a[t++]) && !e.isPropagationStopped();)
                                    for (e.currentTarget = i.elem, o = 0;
                                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ot.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                                return l.postDispatch && l.postDispatch.call(this, e), e.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, r, i, o, a = [],
                                s = t.delegateCount,
                                u = e.target;
                            if (s && u.nodeType && (!e.button || "click" !== e.type))
                                for (; u != this; u = u.parentNode || this)
                                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ot(n, this).index(u) >= 0 : ot.find(n, this, null, [u]).length), i[n] && i.push(r);
                                        i.length && a.push({
                                            elem: u,
                                            handlers: i
                                        })
                                    }
                            return s < t.length && a.push({
                                elem: this,
                                handlers: t.slice(s)
                            }), a
                        },
                        fix: function(e) {
                            if (e[ot.expando]) return e;
                            var t, n, r, i = e.type,
                                o = e,
                                a = this.fixHooks[i];
                            for (a || (this.fixHooks[i] = a = Ft.test(i) ? this.mouseHooks : Lt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ot.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                            return e.target || (e.target = o.srcElement || vt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "),
                            filter: function(e, t) {
                                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                            }
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function(e, t) {
                                var n, r, i, o = t.button,
                                    a = t.fromElement;
                                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || vt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                            }
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            focus: {
                                trigger: function() {
                                    if (this !== v() && this.focus) try {
                                        return this.focus(), !1
                                    } catch (e) {}
                                },
                                delegateType: "focusin"
                            },
                            blur: {
                                trigger: function() {
                                    return this === v() && this.blur ? (this.blur(), !1) : void 0
                                },
                                delegateType: "focusout"
                            },
                            click: {
                                trigger: function() {
                                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                                },
                                _default: function(e) {
                                    return ot.nodeName(e.target, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        },
                        simulate: function(e, t, n, r) {
                            var i = ot.extend(new ot.Event, n, {
                                type: e,
                                isSimulated: !0,
                                originalEvent: {}
                            });
                            r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                        }
                    }, ot.removeEvent = vt.removeEventListener ? function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n, !1)
                    } : function(e, t, n) {
                        var r = "on" + t;
                        e.detachEvent && (typeof e[r] === Tt && (e[r] = null), e.detachEvent(r, n))
                    }, ot.Event = function(e, t) {
                        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
                    }, ot.Event.prototype = {
                        isDefaultPrevented: p,
                        isPropagationStopped: p,
                        isImmediatePropagationStopped: p,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, ot.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, function(e, t) {
                        ot.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, r = this,
                                    i = e.relatedTarget,
                                    o = e.handleObj;
                                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    }), rt.submitBubbles || (ot.event.special.submit = {
                        setup: function() {
                            return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function(e) {
                                var t = e.target,
                                    n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
                                n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(e) {
                                    e._submit_bubble = !0
                                }), ot._data(n, "submitBubbles", !0))
                            })
                        },
                        postDispatch: function(e) {
                            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
                        },
                        teardown: function() {
                            return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
                        }
                    }), rt.changeBubbles || (ot.event.special.change = {
                        setup: function() {
                            return At.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(e) {
                                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                            }), ot.event.add(this, "click._change", function(e) {
                                this._just_changed && !e.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, e, !0)
                            })), !1) : void ot.event.add(this, "beforeactivate._change", function(e) {
                                var t = e.target;
                                At.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function(e) {
                                    !this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
                                }), ot._data(t, "changeBubbles", !0))
                            })
                        },
                        handle: function(e) {
                            var t = e.target;
                            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                        },
                        teardown: function() {
                            return ot.event.remove(this, "._change"), !At.test(this.nodeName)
                        }
                    }), rt.focusinBubbles || ot.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, function(e, t) {
                        var n = function(e) {
                            ot.event.simulate(t, e.target, ot.event.fix(e), !0)
                        };
                        ot.event.special[t] = {
                            setup: function() {
                                var r = this.ownerDocument || this,
                                    i = ot._data(r, t);
                                i || r.addEventListener(e, n, !0), ot._data(r, t, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this,
                                    i = ot._data(r, t) - 1;
                                i ? ot._data(r, t, i) : (r.removeEventListener(e, n, !0), ot._removeData(r, t))
                            }
                        }
                    }), ot.fn.extend({
                        on: function(e, t, n, r, i) {
                            var o, a;
                            if ("object" == typeof e) {
                                "string" != typeof t && (n = n || t, t = void 0);
                                for (o in e) this.on(o, t, n, e[o], i);
                                return this
                            }
                            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
                            else if (!r) return this;
                            return 1 === i && (a = r, r = function(e) {
                                return ot().off(e), a.apply(this, arguments)
                            }, r.guid = a.guid || (a.guid = ot.guid++)), this.each(function() {
                                ot.event.add(this, e, r, n, t)
                            })
                        },
                        one: function(e, t, n, r) {
                            return this.on(e, t, n, r, 1)
                        },
                        off: function(e, t, n) {
                            var r, i;
                            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ot(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof e) {
                                for (i in e) this.off(i, t, e[i]);
                                return this
                            }
                            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                                ot.event.remove(this, e, n, t)
                            })
                        },
                        trigger: function(e, t) {
                            return this.each(function() {
                                ot.event.trigger(e, t, this)
                            })
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            return n ? ot.event.trigger(e, t, n, !0) : void 0
                        }
                    });
                    var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                        It = / jQuery\d+="(?:null|\d+)"/g,
                        Ht = new RegExp("<(?:" + qt + ")[\\s/>]", "i"),
                        Rt = /^\s+/,
                        Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                        Pt = /<([\w:]+)/,
                        zt = /<tbody/i,
                        Vt = /<|&#?\w+;/,
                        Wt = /<(?:script|style|link)/i,
                        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Qt = /^$|\/(?:java|ecma)script/i,
                        Kt = /^true\/(.*)/,
                        Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                        Jt = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            legend: [1, "<fieldset>", "</fieldset>"],
                            area: [1, "<map>", "</map>"],
                            param: [1, "<object>", "</object>"],
                            thead: [1, "<table>", "</table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: rt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                        },
                        Gt = m(vt),
                        Ut = Gt.appendChild(vt.createElement("div"));
                    Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, ot.extend({
                        clone: function(e, t, n) {
                            var r, i, o, a, s, u = ot.contains(e.ownerDocument, e);
                            if (rt.html5Clone || ot.isXMLDoc(e) || !Ht.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ut.innerHTML = e.outerHTML, Ut.removeChild(o = Ut.firstChild)), !(rt.noCloneEvent && rt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && T(i, r[a]);
                            if (t)
                                if (n)
                                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) C(i, r[a]);
                                else C(e, o);
                            return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
                        },
                        buildFragment: function(e, t, n, r) {
                            for (var i, o, a, s, u, l, c, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
                                if (o = e[p], o || 0 === o)
                                    if ("object" === ot.type(o)) ot.merge(h, o.nodeType ? [o] : o);
                                    else if (Vt.test(o)) {
                                for (s = s || f.appendChild(t.createElement("div")), u = (Pt.exec(o) || ["", ""])[1].toLowerCase(), c = Jt[u] || Jt._default, s.innerHTML = c[1] + o.replace(Ot, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                                if (!rt.leadingWhitespace && Rt.test(o) && h.push(t.createTextNode(Rt.exec(o)[0])), !rt.tbody)
                                    for (o = "table" !== u || zt.test(o) ? "<table>" !== c[1] || zt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ot.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                                for (ot.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                                s = f.lastChild
                            } else h.push(t.createTextNode(o));
                            for (s && f.removeChild(s), rt.appendChecked || ot.grep(g(h, "input"), y), p = 0; o = h[p++];)
                                if ((!r || -1 === ot.inArray(o, r)) && (a = ot.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                                    for (i = 0; o = s[i++];) Qt.test(o.type || "") && n.push(o);
                            return s = null, f
                        },
                        cleanData: function(e, t) {
                            for (var n, r, i, o, a = 0, s = ot.expando, u = ot.cache, l = rt.deleteExpando, c = ot.event.special; null != (n = e[a]); a++)
                                if ((t || ot.acceptData(n)) && (i = n[s], o = i && u[i])) {
                                    if (o.events)
                                        for (r in o.events) c[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, o.handle);
                                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, Y.push(i))
                                }
                        }
                    }), ot.fn.extend({
                        text: function(e) {
                            return Nt(this, function(e) {
                                return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || vt).createTextNode(e))
                            }, null, e, arguments.length)
                        },
                        append: function() {
                            return this.domManip(arguments, function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = b(this, e);
                                    t.appendChild(e)
                                }
                            })
                        },
                        prepend: function() {
                            return this.domManip(arguments, function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = b(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            })
                        },
                        before: function() {
                            return this.domManip(arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            })
                        },
                        after: function() {
                            return this.domManip(arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            })
                        },
                        remove: function(e, t) {
                            for (var n, r = e ? ot.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                            return this
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) {
                                for (1 === e.nodeType && ot.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                                e.options && ot.nodeName(e, "select") && (e.options.length = 0)
                            }
                            return this
                        },
                        clone: function(e, t) {
                            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                                return ot.clone(this, e, t)
                            })
                        },
                        html: function(e) {
                            return Nt(this, function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(It, "") : void 0;
                                if (!("string" != typeof e || Wt.test(e) || !rt.htmlSerialize && Ht.test(e) || !rt.leadingWhitespace && Rt.test(e) || Jt[(Pt.exec(e) || ["", ""])[1].toLowerCase()])) {
                                    e = e.replace(Ot, "<$1></$2>");
                                    try {
                                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(g(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (i) {}
                                }
                                t && this.empty().append(e)
                            }, null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = arguments[0];
                            return this.domManip(arguments, function(t) {
                                e = this.parentNode, ot.cleanData(g(this)), e && e.replaceChild(t, this)
                            }), e && (e.length || e.nodeType) ? this : this.remove()
                        },
                        detach: function(e) {
                            return this.remove(e, !0)
                        },
                        domManip: function(e, t) {
                            e = G.apply([], e);
                            var n, r, i, o, a, s, u = 0,
                                l = this.length,
                                c = this,
                                d = l - 1,
                                f = e[0],
                                h = ot.isFunction(f);
                            if (h || l > 1 && "string" == typeof f && !rt.checkClone && Xt.test(f)) return this.each(function(n) {
                                var r = c.eq(n);
                                h && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
                            });
                            if (l && (s = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                                for (o = ot.map(g(s, "script"), x), i = o.length; l > u; u++) r = s, u !== d && (r = ot.clone(r, !0, !0), i && ot.merge(o, g(r, "script"))), t.call(this[u], r, u);
                                if (i)
                                    for (a = o[o.length - 1].ownerDocument, ot.map(o, _), u = 0; i > u; u++) r = o[u], Qt.test(r.type || "") && !ot._data(r, "globalEval") && ot.contains(a, r) && (r.src ? ot._evalUrl && ot._evalUrl(r.src) : ot.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Yt, "")));
                                s = n = null
                            }
                            return this
                        }
                    }), ot.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, function(e, t) {
                        ot.fn[e] = function(e) {
                            for (var n, r = 0, i = [], o = ot(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ot(o[r])[t](n), U.apply(i, n.get());
                            return this.pushStack(i)
                        }
                    });
                    var Zt, en = {};
                    ! function() {
                        var e;
                        rt.shrinkWrapBlocks = function() {
                            if (null != e) return e;
                            e = !1;
                            var t, n, r;
                            return n = vt.getElementsByTagName("body")[0], n && n.style ? (t = vt.createElement("div"), r = vt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(vt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
                        }
                    }();
                    var tn, nn, rn = /^margin/,
                        on = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
                        an = /^(top|right|bottom|left)$/;
                    e.getComputedStyle ? (tn = function(e) {
                        return e.ownerDocument.defaultView.getComputedStyle(e, null)
                    }, nn = function(e, t, n) {
                        var r, i, o, a, s = e.style;
                        return n = n || tn(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ot.contains(e.ownerDocument, e) || (a = ot.style(e, t)), on.test(a) && rn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
                    }) : vt.documentElement.currentStyle && (tn = function(e) {
                        return e.currentStyle
                    }, nn = function(e, t, n) {
                        var r, i, o, a, s = e.style;
                        return n = n || tn(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), on.test(a) && !an.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
                    }), ! function() {
                        function t() {
                            var t, n, r, i;
                            n = vt.getElementsByTagName("body")[0], n && n.style && (t = vt.createElement("div"), r = vt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                                width: "4px"
                            }).width, i = t.appendChild(vt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
                        }
                        var n, r, i, o, a, s, u;
                        n = vt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], (r = i && i.style) && (r.cssText = "float:left;opacity:.5", rt.opacity = "0.5" === r.opacity, rt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === n.style.backgroundClip, rt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ot.extend(rt, {
                            reliableHiddenOffsets: function() {
                                return null == s && t(), s
                            },
                            boxSizingReliable: function() {
                                return null == a && t(), a
                            },
                            pixelPosition: function() {
                                return null == o && t(), o
                            },
                            reliableMarginRight: function() {
                                return null == u && t(), u
                            }
                        }))
                    }(), ot.swap = function(e, t, n, r) {
                        var i, o, a = {};
                        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                        i = n.apply(e, r || []);
                        for (o in t) e.style[o] = a[o];
                        return i
                    };
                    var sn = /alpha\([^)]*\)/i,
                        un = /opacity\s*=\s*([^)]*)/,
                        ln = /^(none|table(?!-c[ea]).+)/,
                        cn = new RegExp("^(" + St + ")(.*)$", "i"),
                        dn = new RegExp("^([+-])=(" + St + ")", "i"),
                        fn = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        hn = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        },
                        pn = ["Webkit", "O", "Moz", "ms"];
                    ot.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) {
                                        var n = nn(e, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {
                            "float": rt.cssFloat ? "cssFloat" : "styleFloat"
                        },
                        style: function(e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var i, o, a, s = ot.camelCase(t),
                                    u = e.style;
                                if (t = ot.cssProps[s] || (ot.cssProps[s] = $(u, s)), a = ot.cssHooks[t] || ot.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                                if (o = typeof n, "string" === o && (i = dn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ot.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ot.cssNumber[s] || (n += "px"), rt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                                    u[t] = n
                                } catch (l) {}
                            }
                        },
                        css: function(e, t, n, r) {
                            var i, o, a, s = ot.camelCase(t);
                            return t = ot.cssProps[s] || (ot.cssProps[s] = $(e.style, s)), a = ot.cssHooks[t] || ot.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = nn(e, t, r)), "normal" === o && t in hn && (o = hn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ot.isNumeric(i) ? i || 0 : o) : o
                        }
                    }), ot.each(["height", "width"], function(e, t) {
                        ot.cssHooks[t] = {
                            get: function(e, n, r) {
                                return n ? ln.test(ot.css(e, "display")) && 0 === e.offsetWidth ? ot.swap(e, fn, function() {
                                    return A(e, t, r)
                                }) : A(e, t, r) : void 0
                            },
                            set: function(e, n, r) {
                                var i = r && tn(e);
                                return N(e, n, r ? D(e, t, r, rt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, i), i) : 0)
                            }
                        }
                    }), rt.opacity || (ot.cssHooks.opacity = {
                        get: function(e, t) {
                            return un.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                        },
                        set: function(e, t) {
                            var n = e.style,
                                r = e.currentStyle,
                                i = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                                o = r && r.filter || n.filter || "";
                            n.zoom = 1, (t >= 1 || "" === t) && "" === ot.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = sn.test(o) ? o.replace(sn, i) : o + " " + i)
                        }
                    }), ot.cssHooks.marginRight = S(rt.reliableMarginRight, function(e, t) {
                        return t ? ot.swap(e, {
                            display: "inline-block"
                        }, nn, [e, "marginRight"]) : void 0
                    }), ot.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, function(e, t) {
                        ot.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + $t[r] + t] = o[r] || o[r - 2] || o[0];
                                return i
                            }
                        }, rn.test(e) || (ot.cssHooks[e + t].set = N)
                    }), ot.fn.extend({
                        css: function(e, t) {
                            return Nt(this, function(e, t, n) {
                                var r, i, o = {},
                                    a = 0;
                                if (ot.isArray(t)) {
                                    for (r = tn(e), i = t.length; i > a; a++) o[t[a]] = ot.css(e, t[a], !1, r);
                                    return o
                                }
                                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
                            }, e, t, arguments.length > 1)
                        },
                        show: function() {
                            return j(this, !0)
                        },
                        hide: function() {
                            return j(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                                jt(this) ? ot(this).show() : ot(this).hide()
                            })
                        }
                    }), ot.Tween = L, L.prototype = {
                        constructor: L,
                        init: function(e, t, n, r, i, o) {
                            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = L.propHooks[this.prop];
                            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
                        },
                        run: function(e) {
                            var t, n = L.propHooks[this.prop];
                            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
                        }
                    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                            },
                            set: function(e) {
                                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                            }
                        }
                    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, ot.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        }
                    }, ot.fx = L.prototype.init, ot.fx.step = {};
                    var vn, mn, gn = /^(?:toggle|show|hide)$/,
                        yn = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
                        bn = /queueHooks$/,
                        xn = [q],
                        _n = {
                            "*": [function(e, t) {
                                var n = this.createTween(e, t),
                                    r = n.cur(),
                                    i = yn.exec(t),
                                    o = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
                                    a = (ot.cssNumber[e] || "px" !== o && +r) && yn.exec(ot.css(n.elem, e)),
                                    s = 1,
                                    u = 20;
                                if (a && a[3] !== o) {
                                    o = o || a[3], i = i || [], a = +r || 1;
                                    do s = s || ".5", a /= s, ot.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                                }
                                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                            }]
                        };
                    ot.Animation = ot.extend(H, {
                            tweener: function(e, t) {
                                ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], _n[n] = _n[n] || [], _n[n].unshift(t)
                            },
                            prefilter: function(e, t) {
                                t ? xn.unshift(e) : xn.push(e)
                            }
                        }), ot.speed = function(e, t, n) {
                            var r = e && "object" == typeof e ? ot.extend({}, e) : {
                                complete: n || !n && t || ot.isFunction(e) && e,
                                duration: e,
                                easing: n && t || t && !ot.isFunction(t) && t
                            };
                            return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
                            }, r
                        }, ot.fn.extend({
                            fadeTo: function(e, t, n, r) {
                                return this.filter(jt).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, r)
                            },
                            animate: function(e, t, n, r) {
                                var i = ot.isEmptyObject(e),
                                    o = ot.speed(t, n, r),
                                    a = function() {
                                        var t = H(this, ot.extend({}, e), o);
                                        (i || ot._data(this, "finish")) && t.stop(!0)
                                    };
                                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                            },
                            stop: function(e, t, n) {
                                var r = function(e) {
                                    var t = e.stop;
                                    delete e.stop, t(n)
                                };
                                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                                    var t = !0,
                                        i = null != e && e + "queueHooks",
                                        o = ot.timers,
                                        a = ot._data(this);
                                    if (i) a[i] && a[i].stop && r(a[i]);
                                    else
                                        for (i in a) a[i] && a[i].stop && bn.test(i) && r(a[i]);
                                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                    (t || !n) && ot.dequeue(this, e)
                                })
                            },
                            finish: function(e) {
                                return e !== !1 && (e = e || "fx"), this.each(function() {
                                    var t, n = ot._data(this),
                                        r = n[e + "queue"],
                                        i = n[e + "queueHooks"],
                                        o = ot.timers,
                                        a = r ? r.length : 0;
                                    for (n.finish = !0, ot.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                    delete n.finish
                                })
                            }
                        }), ot.each(["toggle", "show", "hide"], function(e, t) {
                            var n = ot.fn[t];
                            ot.fn[t] = function(e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i)
                            }
                        }), ot.each({
                            slideDown: B("show"),
                            slideUp: B("hide"),
                            slideToggle: B("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, function(e, t) {
                            ot.fn[e] = function(e, n, r) {
                                return this.animate(t, e, n, r)
                            }
                        }), ot.timers = [], ot.fx.tick = function() {
                            var e, t = ot.timers,
                                n = 0;
                            for (vn = ot.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                            t.length || ot.fx.stop(), vn = void 0
                        }, ot.fx.timer = function(e) {
                            ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
                        }, ot.fx.interval = 13, ot.fx.start = function() {
                            mn || (mn = setInterval(ot.fx.tick, ot.fx.interval))
                        }, ot.fx.stop = function() {
                            clearInterval(mn), mn = null
                        }, ot.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, ot.fn.delay = function(e, t) {
                            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                                var r = setTimeout(t, e);
                                n.stop = function() {
                                    clearTimeout(r)
                                }
                            })
                        },
                        function() {
                            var e, t, n, r, i;
                            t = vt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = vt.createElement("select"), i = n.appendChild(vt.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", rt.getSetAttribute = "t" !== t.className, rt.style = /top/.test(r.getAttribute("style")), rt.hrefNormalized = "/a" === r.getAttribute("href"), rt.checkOn = !!e.value, rt.optSelected = i.selected, rt.enctype = !!vt.createElement("form").enctype, n.disabled = !0, rt.optDisabled = !i.disabled, e = vt.createElement("input"), e.setAttribute("value", ""), rt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), rt.radioValue = "t" === e.value
                        }();
                    var wn = /\r/g;
                    ot.fn.extend({
                        val: function(e) {
                            var t, n, r, i = this[0];
                            return arguments.length ? (r = ot.isFunction(e), this.each(function(n) {
                                var i;
                                1 === this.nodeType && (i = r ? e.call(this, n, ot(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ot.isArray(i) && (i = ot.map(i, function(e) {
                                    return null == e ? "" : e + ""
                                })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            })) : i ? (t = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)) : void 0
                        }
                    }), ot.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = ot.find.attr(e, "value");
                                    return null != t ? t : ot.trim(ot.text(e))
                                }
                            },
                            select: {
                                get: function(e) {
                                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                                        if (n = r[u], !(!n.selected && u !== i || (rt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                                            if (t = ot(n).val(), o) return t;
                                            a.push(t)
                                        }
                                    return a
                                },
                                set: function(e, t) {
                                    for (var n, r, i = e.options, o = ot.makeArray(t), a = i.length; a--;)
                                        if (r = i[a], ot.inArray(ot.valHooks.option.get(r), o) >= 0) try {
                                            r.selected = n = !0
                                        } catch (s) {
                                            r.scrollHeight
                                        } else r.selected = !1;
                                    return n || (e.selectedIndex = -1), i
                                }
                            }
                        }
                    }), ot.each(["radio", "checkbox"], function() {
                        ot.valHooks[this] = {
                            set: function(e, t) {
                                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
                            }
                        }, rt.checkOn || (ot.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    });
                    var Cn, Tn, kn = ot.expr.attrHandle,
                        En = /^(?:checked|selected)$/i,
                        Sn = rt.getSetAttribute,
                        $n = rt.input;
                    ot.fn.extend({
                        attr: function(e, t) {
                            return Nt(this, ot.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function(e) {
                            return this.each(function() {
                                ot.removeAttr(this, e)
                            })
                        }
                    }), ot.extend({
                        attr: function(e, t, n) {
                            var r, i, o = e.nodeType;
                            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Tt ? ot.prop(e, t, n) : (1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(), r = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Tn : Cn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ot.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ot.removeAttr(e, t)) : void 0
                        },
                        removeAttr: function(e, t) {
                            var n, r, i = 0,
                                o = t && t.match(xt);
                            if (o && 1 === e.nodeType)
                                for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? $n && Sn || !En.test(n) ? e[r] = !1 : e[ot.camelCase("default-" + n)] = e[r] = !1 : ot.attr(e, n, ""), e.removeAttribute(Sn ? n : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!rt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        }
                    }), Tn = {
                        set: function(e, t, n) {
                            return t === !1 ? ot.removeAttr(e, n) : $n && Sn || !En.test(n) ? e.setAttribute(!Sn && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0, n
                        }
                    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
                        var n = kn[t] || ot.find.attr;
                        kn[t] = $n && Sn || !En.test(t) ? function(e, t, r) {
                            var i, o;
                            return r || (o = kn[t], kn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, kn[t] = o), i
                        } : function(e, t, n) {
                            return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
                        }
                    }), $n && Sn || (ot.attrHooks.value = {
                        set: function(e, t, n) {
                            return ot.nodeName(e, "input") ? void(e.defaultValue = t) : Cn && Cn.set(e, t, n)
                        }
                    }), Sn || (Cn = {
                        set: function(e, t, n) {
                            var r = e.getAttributeNode(n);
                            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
                        }
                    }, kn.id = kn.name = kn.coords = function(e, t, n) {
                        var r;
                        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
                    }, ot.valHooks.button = {
                        get: function(e, t) {
                            var n = e.getAttributeNode(t);
                            return n && n.specified ? n.value : void 0
                        },
                        set: Cn.set
                    }, ot.attrHooks.contenteditable = {
                        set: function(e, t, n) {
                            Cn.set(e, "" === t ? !1 : t, n)
                        }
                    }, ot.each(["width", "height"], function(e, t) {
                        ot.attrHooks[t] = {
                            set: function(e, n) {
                                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                            }
                        }
                    })), rt.style || (ot.attrHooks.style = {
                        get: function(e) {
                            return e.style.cssText || void 0
                        },
                        set: function(e, t) {
                            return e.style.cssText = t + ""
                        }
                    });
                    var jn = /^(?:input|select|textarea|button|object)$/i,
                        Nn = /^(?:a|area)$/i;
                    ot.fn.extend({
                        prop: function(e, t) {
                            return Nt(this, ot.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function(e) {
                            return e = ot.propFix[e] || e, this.each(function() {
                                try {
                                    this[e] = void 0, delete this[e]
                                } catch (t) {}
                            })
                        }
                    }), ot.extend({
                        propFix: {
                            "for": "htmlFor",
                            "class": "className"
                        },
                        prop: function(e, t, n) {
                            var r, i, o, a = e.nodeType;
                            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !ot.isXMLDoc(e), o && (t = ot.propFix[t] || t, i = ot.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = ot.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : jn.test(e.nodeName) || Nn.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        }
                    }), rt.hrefNormalized || ot.each(["href", "src"], function(e, t) {
                        ot.propHooks[t] = {
                            get: function(e) {
                                return e.getAttribute(t, 4)
                            }
                        }
                    }), rt.optSelected || (ot.propHooks.selected = {
                        get: function(e) {
                            var t = e.parentNode;
                            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                        }
                    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                        ot.propFix[this.toLowerCase()] = this
                    }), rt.enctype || (ot.propFix.enctype = "encoding");
                    var Dn = /[\t\r\n\f]/g;
                    ot.fn.extend({
                        addClass: function(e) {
                            var t, n, r, i, o, a, s = 0,
                                u = this.length,
                                l = "string" == typeof e && e;
                            if (ot.isFunction(e)) return this.each(function(t) {
                                ot(this).addClass(e.call(this, t, this.className))
                            });
                            if (l)
                                for (t = (e || "").match(xt) || []; u > s; s++)
                                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dn, " ") : " ")) {
                                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                        a = ot.trim(r), n.className !== a && (n.className = a)
                                    }
                            return this
                        },
                        removeClass: function(e) {
                            var t, n, r, i, o, a, s = 0,
                                u = this.length,
                                l = 0 === arguments.length || "string" == typeof e && e;
                            if (ot.isFunction(e)) return this.each(function(t) {
                                ot(this).removeClass(e.call(this, t, this.className))
                            });
                            if (l)
                                for (t = (e || "").match(xt) || []; u > s; s++)
                                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dn, " ") : "")) {
                                        for (o = 0; i = t[o++];)
                                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                                        a = e ? ot.trim(r) : "", n.className !== a && (n.className = a)
                                    }
                            return this
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e;
                            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function(n) {
                                ot(this).toggleClass(e.call(this, n, this.className, t), t)
                            } : function() {
                                if ("string" === n)
                                    for (var t, r = 0, i = ot(this), o = e.match(xt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                else(n === Tt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
                            })
                        },
                        hasClass: function(e) {
                            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dn, " ").indexOf(t) >= 0) return !0;
                            return !1
                        }
                    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                        ot.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }), ot.fn.extend({
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        },
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function(e, t, n, r) {
                            return this.on(t, e, n, r)
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        }
                    });
                    var An = ot.now(),
                        Ln = /\?/,
                        Fn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                    ot.parseJSON = function(t) {
                        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
                        var n, r = null,
                            i = ot.trim(t + "");
                        return i && !ot.trim(i.replace(Fn, function(e, t, i, o) {
                            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
                        })) ? Function("return " + i)() : ot.error("Invalid JSON: " + t)
                    }, ot.parseXML = function(t) {
                        var n, r;
                        if (!t || "string" != typeof t) return null;
                        try {
                            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
                        } catch (i) {
                            n = void 0
                        }
                        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), n
                    };
                    var Bn, Mn, qn = /#.*$/,
                        In = /([?&])_=[^&]*/,
                        Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                        Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                        On = /^(?:GET|HEAD)$/,
                        Pn = /^\/\//,
                        zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                        Vn = {},
                        Wn = {},
                        Xn = "*/".concat("*");
                    try {
                        Mn = location.href
                    } catch (Qn) {
                        Mn = vt.createElement("a"), Mn.href = "", Mn = Mn.href
                    }
                    Bn = zn.exec(Mn.toLowerCase()) || [], ot.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Mn,
                            type: "GET",
                            isLocal: Rn.test(Bn[1]),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Xn,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /xml/,
                                html: /html/,
                                json: /json/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": ot.parseJSON,
                                "text xml": ot.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? P(P(e, ot.ajaxSettings), t) : P(ot.ajaxSettings, e)
                        },
                        ajaxPrefilter: R(Vn),
                        ajaxTransport: R(Wn),
                        ajax: function(e, t) {
                            function n(e, t, n, r) {
                                var i, c, g, y, x, w = t;
                                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", _.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = z(d, _, n)), y = V(d, y, _, i), i ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (ot.lastModified[o] = x), x = _.getResponseHeader("etag"), x && (ot.etag[o] = x)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, c = y.data, g = y.error, i = !g)) : (g = w, (e || !w) && (w = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || w) + "", i ? p.resolveWith(f, [c, w, _]) : p.rejectWith(f, [_, w, g]), _.statusCode(m), m = void 0, u && h.trigger(i ? "ajaxSuccess" : "ajaxError", [_, d, i ? c : g]), v.fireWith(f, [_, w]), u && (h.trigger("ajaxComplete", [_, d]), --ot.active || ot.event.trigger("ajaxStop")))
                            }
                            "object" == typeof e && (t = e, e = void 0), t = t || {};
                            var r, i, o, a, s, u, l, c, d = ot.ajaxSetup({}, t),
                                f = d.context || d,
                                h = d.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                                p = ot.Deferred(),
                                v = ot.Callbacks("once memory"),
                                m = d.statusCode || {},
                                g = {},
                                y = {},
                                b = 0,
                                x = "canceled",
                                _ = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (2 === b) {
                                            if (!c)
                                                for (c = {}; t = Hn.exec(a);) c[t[1].toLowerCase()] = t[2];
                                            t = c[e.toLowerCase()]
                                        }
                                        return null == t ? null : t
                                    },
                                    getAllResponseHeaders: function() {
                                        return 2 === b ? a : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        var n = e.toLowerCase();
                                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return b || (d.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (2 > b)
                                                for (t in e) m[t] = [m[t], e[t]];
                                            else _.always(e[_.status]);
                                        return this
                                    },
                                    abort: function(e) {
                                        var t = e || x;
                                        return l && l.abort(t), n(0, t), this
                                    }
                                };
                            if (p.promise(_).complete = v.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || Mn) + "").replace(qn, "").replace(Pn, Bn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(xt) || [""], null == d.crossDomain && (r = zn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Bn[1] && r[2] === Bn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Bn[3] || ("http:" === Bn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), O(Vn, d, t, _), 2 === b) return _;
                            u = d.global, u && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !On.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ln.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = In.test(o) ? o.replace(In, "$1_=" + An++) : o + (Ln.test(o) ? "&" : "?") + "_=" + An++)), d.ifModified && (ot.lastModified[o] && _.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && _.setRequestHeader("If-None-Match", ot.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
                            for (i in d.headers) _.setRequestHeader(i, d.headers[i]);
                            if (d.beforeSend && (d.beforeSend.call(f, _, d) === !1 || 2 === b)) return _.abort();
                            x = "abort";
                            for (i in {
                                    success: 1,
                                    error: 1,
                                    complete: 1
                                }) _[i](d[i]);
                            if (l = O(Wn, d, t, _)) {
                                _.readyState = 1, u && h.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                                    _.abort("timeout")
                                }, d.timeout));
                                try {
                                    b = 1, l.send(g, n)
                                } catch (w) {
                                    if (!(2 > b)) throw w;
                                    n(-1, w)
                                }
                            } else n(-1, "No Transport");
                            return _
                        },
                        getJSON: function(e, t, n) {
                            return ot.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return ot.get(e, void 0, t, "script")
                        }
                    }), ot.each(["get", "post"], function(e, t) {
                        ot[t] = function(e, n, r, i) {
                            return ot.isFunction(n) && (i = i || r, r = n, n = void 0), ot.ajax({
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r
                            })
                        }
                    }), ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                        ot.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    }), ot._evalUrl = function(e) {
                        return ot.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        })
                    }, ot.fn.extend({
                        wrapAll: function(e) {
                            if (ot.isFunction(e)) return this.each(function(t) {
                                ot(this).wrapAll(e.call(this, t))
                            });
                            if (this[0]) {
                                var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
                                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                    return e
                                }).append(this)
                            }
                            return this
                        },
                        wrapInner: function(e) {
                            return this.each(ot.isFunction(e) ? function(t) {
                                ot(this).wrapInner(e.call(this, t))
                            } : function() {
                                var t = ot(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            })
                        },
                        wrap: function(e) {
                            var t = ot.isFunction(e);
                            return this.each(function(n) {
                                ot(this).wrapAll(t ? e.call(this, n) : e)
                            })
                        },
                        unwrap: function() {
                            return this.parent().each(function() {
                                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                            }).end()
                        }
                    }), ot.expr.filters.hidden = function(e) {
                        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !rt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
                    }, ot.expr.filters.visible = function(e) {
                        return !ot.expr.filters.hidden(e)
                    };
                    var Kn = /%20/g,
                        Yn = /\[\]$/,
                        Jn = /\r?\n/g,
                        Gn = /^(?:submit|button|image|reset|file)$/i,
                        Un = /^(?:input|select|textarea|keygen)/i;
                    ot.param = function(e, t) {
                        var n, r = [],
                            i = function(e, t) {
                                t = ot.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                            };
                        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
                            i(this.name, this.value)
                        });
                        else
                            for (n in e) W(n, e[n], t, i);
                        return r.join("&").replace(Kn, "+")
                    }, ot.fn.extend({
                        serialize: function() {
                            return ot.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map(function() {
                                var e = ot.prop(this, "elements");
                                return e ? ot.makeArray(e) : this
                            }).filter(function() {
                                var e = this.type;
                                return this.name && !ot(this).is(":disabled") && Un.test(this.nodeName) && !Gn.test(e) && (this.checked || !Dt.test(e))
                            }).map(function(e, t) {
                                var n = ot(this).val();
                                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(Jn, "\r\n")
                                    }
                                }) : {
                                    name: t.name,
                                    value: n.replace(Jn, "\r\n")
                                }
                            }).get()
                        }
                    }), ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
                        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || Q()
                    } : X;
                    var Zn = 0,
                        er = {},
                        tr = ot.ajaxSettings.xhr();
                    e.ActiveXObject && ot(e).on("unload", function() {
                        for (var e in er) er[e](void 0, !0)
                    }), rt.cors = !!tr && "withCredentials" in tr, tr = rt.ajax = !!tr, tr && ot.ajaxTransport(function(e) {
                        if (!e.crossDomain || rt.cors) {
                            var t;
                            return {
                                send: function(n, r) {
                                    var i, o = e.xhr(),
                                        a = ++Zn;
                                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                                        var s, u, l;
                                        if (t && (i || 4 === o.readyState))
                                            if (delete er[a], t = void 0, o.onreadystatechange = ot.noop, i) 4 !== o.readyState && o.abort();
                                            else {
                                                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                                try {
                                                    u = o.statusText
                                                } catch (c) {
                                                    u = ""
                                                }
                                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                                            }
                                        l && r(s, u, l, o.getAllResponseHeaders())
                                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = er[a] = t : t()
                                },
                                abort: function() {
                                    t && t(void 0, !0)
                                }
                            }
                        }
                    }), ot.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /(?:java|ecma)script/
                        },
                        converters: {
                            "text script": function(e) {
                                return ot.globalEval(e), e
                            }
                        }
                    }), ot.ajaxPrefilter("script", function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
                    }), ot.ajaxTransport("script", function(e) {
                        if (e.crossDomain) {
                            var t, n = vt.head || ot("head")[0] || vt.documentElement;
                            return {
                                send: function(r, i) {
                                    t = vt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                                    }, n.insertBefore(t, n.firstChild)
                                },
                                abort: function() {
                                    t && t.onload(void 0, !0)
                                }
                            }
                        }
                    });
                    var nr = [],
                        rr = /(=)\?(?=&|$)|\?\?/;
                    ot.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = nr.pop() || ot.expando + "_" + An++;
                            return this[e] = !0, e
                        }
                    }), ot.ajaxPrefilter("json jsonp", function(t, n, r) {
                        var i, o, a, s = t.jsonp !== !1 && (rr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && rr.test(t.data) && "data");
                        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(rr, "$1" + i) : t.jsonp !== !1 && (t.url += (Ln.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                            return a || ot.error(i + " was not called"), a[0]
                        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                            a = arguments
                        }, r.always(function() {
                            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, nr.push(i)), a && ot.isFunction(o) && o(a[0]), a = o = void 0
                        }), "script") : void 0
                    }), ot.parseHTML = function(e, t, n) {
                        if (!e || "string" != typeof e) return null;
                        "boolean" == typeof t && (n = t, t = !1), t = t || vt;
                        var r = ft.exec(e),
                            i = !n && [];
                        return r ? [t.createElement(r[1])] : (r = ot.buildFragment([e], t, i), i && i.length && ot(i).remove(), ot.merge([], r.childNodes))
                    };
                    var ir = ot.fn.load;
                    ot.fn.load = function(e, t, n) {
                        if ("string" != typeof e && ir) return ir.apply(this, arguments);
                        var r, i, o, a = this,
                            s = e.indexOf(" ");
                        return s >= 0 && (r = ot.trim(e.slice(s, e.length)), e = e.slice(0, s)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ot.ajax({
                            url: e,
                            type: o,
                            dataType: "html",
                            data: t
                        }).done(function(e) {
                            i = arguments, a.html(r ? ot("<div>").append(ot.parseHTML(e)).find(r) : e)
                        }).complete(n && function(e, t) {
                            a.each(n, i || [e.responseText, t, e])
                        }), this
                    }, ot.expr.filters.animated = function(e) {
                        return ot.grep(ot.timers, function(t) {
                            return e === t.elem
                        }).length
                    };
                    var or = e.document.documentElement;
                    ot.offset = {
                        setOffset: function(e, t, n) {
                            var r, i, o, a, s, u, l, c = ot.css(e, "position"),
                                d = ot(e),
                                f = {};
                            "static" === c && (e.style.position = "relative"), s = d.offset(), o = ot.css(e, "top"), u = ot.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ot.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
                        }
                    }, ot.fn.extend({
                        offset: function(e) {
                            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                                ot.offset.setOffset(this, e, t)
                            });
                            var t, n, r = {
                                    top: 0,
                                    left: 0
                                },
                                i = this[0],
                                o = i && i.ownerDocument;
                            return o ? (t = o.documentElement, ot.contains(t, i) ? (typeof i.getBoundingClientRect !== Tt && (r = i.getBoundingClientRect()), n = K(o), {
                                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                            }) : r) : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n = {
                                        top: 0,
                                        left: 0
                                    },
                                    r = this[0];
                                return "fixed" === ot.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)), {
                                    top: t.top - n.top - ot.css(r, "marginTop", !0),
                                    left: t.left - n.left - ot.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (var e = this.offsetParent || or; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                                return e || or
                            })
                        }
                    }), ot.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, function(e, t) {
                        var n = /Y/.test(t);
                        ot.fn[e] = function(r) {
                            return Nt(this, function(e, r, i) {
                                var o = K(e);
                                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ot(o).scrollLeft() : i, n ? i : ot(o).scrollTop()) : e[r] = i)
                            }, e, r, arguments.length, null)
                        }
                    }), ot.each(["top", "left"], function(e, t) {
                        ot.cssHooks[t] = S(rt.pixelPosition, function(e, n) {
                            return n ? (n = nn(e, t), on.test(n) ? ot(e).position()[t] + "px" : n) : void 0
                        })
                    }), ot.each({
                        Height: "height",
                        Width: "width"
                    }, function(e, t) {
                        ot.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, function(n, r) {
                            ot.fn[r] = function(r, i) {
                                var o = arguments.length && (n || "boolean" != typeof r),
                                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                                return Nt(this, function(t, n, r) {
                                    var i;
                                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ot.css(t, n, a) : ot.style(t, n, r, a)
                                }, t, o ? r : void 0, o, null)
                            }
                        })
                    }), ot.fn.size = function() {
                        return this.length
                    }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof n && n.amd && n("jquery", [], function() {
                        return ot
                    });
                    var ar = e.jQuery,
                        sr = e.$;
                    return ot.noConflict = function(t) {
                        return e.$ === ot && (e.$ = sr), t && e.jQuery === ot && (e.jQuery = ar), ot
                    }, typeof t === Tt && (e.jQuery = e.$ = ot), ot
                }), r("undefined" != typeof $ ? $ : window.$)
            }).call(e, void 0, void 0, void 0, function(e) {
                t.exports = e
            })
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    25: [function(e, t) {
        (function(e) {
            (function(t, n, r, i) {
                (function() {
                    function i(e, t, n) {
                        for (var r = (n || 0) - 1, i = e ? e.length : 0; ++r < i;)
                            if (e[r] === t) return r;
                        return -1
                    }

                    function o(e, t) {
                        var n = typeof t;
                        if (e = e.cache, "boolean" == n || null == t) return e[t] ? 0 : -1;
                        "number" != n && "string" != n && (n = "object");
                        var r = "number" == n ? t : _ + t;
                        return e = (e = e[n]) && e[r], "object" == n ? e && i(e, t) > -1 ? 0 : -1 : e ? 0 : -1
                    }

                    function a(e) {
                        var t = this.cache,
                            n = typeof e;
                        if ("boolean" == n || null == e) t[e] = !0;
                        else {
                            "number" != n && "string" != n && (n = "object");
                            var r = "number" == n ? e : _ + e,
                                i = t[n] || (t[n] = {});
                            "object" == n ? (i[r] || (i[r] = [])).push(e) : i[r] = !0
                        }
                    }

                    function s(e) {
                        return e.charCodeAt(0)
                    }

                    function u(e, t) {
                        for (var n = e.criteria, r = t.criteria, i = -1, o = n.length; ++i < o;) {
                            var a = n[i],
                                s = r[i];
                            if (a !== s) {
                                if (a > s || "undefined" == typeof a) return 1;
                                if (s > a || "undefined" == typeof s) return -1
                            }
                        }
                        return e.index - t.index
                    }

                    function l(e) {
                        var t = -1,
                            n = e.length,
                            r = e[0],
                            i = e[n / 2 | 0],
                            o = e[n - 1];
                        if (r && "object" == typeof r && i && "object" == typeof i && o && "object" == typeof o) return !1;
                        var s = f();
                        s["false"] = s["null"] = s["true"] = s.undefined = !1;
                        var u = f();
                        for (u.array = e, u.cache = s, u.push = a; ++t < n;) u.push(e[t]);
                        return u
                    }

                    function c(e) {
                        return "\\" + G[e]
                    }

                    function d() {
                        return y.pop() || []
                    }

                    function f() {
                        return b.pop() || {
                            array: null,
                            cache: null,
                            criteria: null,
                            "false": !1,
                            index: 0,
                            "null": !1,
                            number: null,
                            object: null,
                            push: null,
                            string: null,
                            "true": !1,
                            undefined: !1,
                            value: null
                        }
                    }

                    function h(e) {
                        e.length = 0, y.length < C && y.push(e)
                    }

                    function p(e) {
                        var t = e.cache;
                        t && p(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, b.length < C && b.push(e)
                    }

                    function v(e, t, n) {
                        t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
                        for (var r = -1, i = n - t || 0, o = Array(0 > i ? 0 : i); ++r < i;) o[r] = e[t + r];
                        return o
                    }

                    function m(e) {
                        function t(e) {
                            return e && "object" == typeof e && !Ur(e) && Fr.call(e, "__wrapped__") ? e : new n(e)
                        }

                        function n(e, t) {
                            this.__chain__ = !!t, this.__wrapped__ = e
                        }

                        function r(e) {
                            function t() {
                                if (r) {
                                    var e = v(r);
                                    Br.apply(e, arguments)
                                }
                                if (this instanceof t) {
                                    var o = y(n.prototype),
                                        a = n.apply(o, e || arguments);
                                    return Nt(a) ? a : o
                                }
                                return n.apply(i, e || arguments)
                            }
                            var n = e[0],
                                r = e[2],
                                i = e[4];
                            return Gr(t, e), t
                        }

                        function a(e, t, n, r, i) {
                            if (n) {
                                var o = n(e);
                                if ("undefined" != typeof o) return o
                            }
                            var s = Nt(e);
                            if (!s) return e;
                            var u = Sr.call(e);
                            if (!Q[u]) return e;
                            var l = Yr[u];
                            switch (u) {
                                case R:
                                case O:
                                    return new l(+e);
                                case z:
                                case X:
                                    return new l(e);
                                case W:
                                    return o = l(e.source, j.exec(e)), o.lastIndex = e.lastIndex, o
                            }
                            var c = Ur(e);
                            if (t) {
                                var f = !r;
                                r || (r = d()), i || (i = d());
                                for (var p = r.length; p--;)
                                    if (r[p] == e) return i[p];
                                o = c ? l(e.length) : {}
                            } else o = c ? v(e) : oi({}, e);
                            return c && (Fr.call(e, "index") && (o.index = e.index), Fr.call(e, "input") && (o.input = e.input)), t ? (r.push(e), i.push(o), (c ? Jt : ui)(e, function(e, s) {
                                o[s] = a(e, t, n, r, i)
                            }), f && (h(r), h(i)), o) : o
                        }

                        function y(e) {
                            return Nt(e) ? Rr(e) : {}
                        }

                        function b(e, t, n) {
                            if ("function" != typeof e) return Un;
                            if ("undefined" == typeof t || !("prototype" in e)) return e;
                            var r = e.__bindData__;
                            if ("undefined" == typeof r && (Jr.funcNames && (r = !e.name), r = r || !Jr.funcDecomp, !r)) {
                                var i = Ar.call(e);
                                Jr.funcNames || (r = !N.test(i)), r || (r = F.test(i), Gr(e, r))
                            }
                            if (r === !1 || r !== !0 && 1 & r[1]) return e;
                            switch (n) {
                                case 1:
                                    return function(n) {
                                        return e.call(t, n)
                                    };
                                case 2:
                                    return function(n, r) {
                                        return e.call(t, n, r)
                                    };
                                case 3:
                                    return function(n, r, i) {
                                        return e.call(t, n, r, i)
                                    };
                                case 4:
                                    return function(n, r, i, o) {
                                        return e.call(t, n, r, i, o)
                                    }
                            }
                            return Bn(e, t)
                        }

                        function C(e) {
                            function t() {
                                var e = u ? a : this;
                                if (i) {
                                    var h = v(i);
                                    Br.apply(h, arguments)
                                }
                                if ((o || c) && (h || (h = v(arguments)), o && Br.apply(h, o), c && h.length < s)) return r |= 16, C([n, d ? r : -4 & r, h, null, a, s]);
                                if (h || (h = arguments), l && (n = e[f]), this instanceof t) {
                                    e = y(n.prototype);
                                    var p = n.apply(e, h);
                                    return Nt(p) ? p : e
                                }
                                return n.apply(e, h)
                            }
                            var n = e[0],
                                r = e[1],
                                i = e[2],
                                o = e[3],
                                a = e[4],
                                s = e[5],
                                u = 1 & r,
                                l = 2 & r,
                                c = 4 & r,
                                d = 8 & r,
                                f = n;
                            return Gr(t, e), t
                        }

                        function G(e, t) {
                            var n = -1,
                                r = ut(),
                                a = e ? e.length : 0,
                                s = a >= w && r === i,
                                u = [];
                            if (s) {
                                var c = l(t);
                                c ? (r = o, t = c) : s = !1
                            }
                            for (; ++n < a;) {
                                var d = e[n];
                                r(t, d) < 0 && u.push(d)
                            }
                            return s && p(t), u
                        }

                        function Z(e, t, n, r) {
                            for (var i = (r || 0) - 1, o = e ? e.length : 0, a = []; ++i < o;) {
                                var s = e[i];
                                if (s && "object" == typeof s && "number" == typeof s.length && (Ur(s) || ft(s))) {
                                    t || (s = Z(s, t, n));
                                    var u = -1,
                                        l = s.length,
                                        c = a.length;
                                    for (a.length += l; ++u < l;) a[c++] = s[u]
                                } else n || a.push(s)
                            }
                            return a
                        }

                        function et(e, t, n, r, i, o) {
                            if (n) {
                                var a = n(e, t);
                                if ("undefined" != typeof a) return !!a
                            }
                            if (e === t) return 0 !== e || 1 / e == 1 / t;
                            var s = typeof e,
                                u = typeof t;
                            if (!(e !== e || e && J[s] || t && J[u])) return !1;
                            if (null == e || null == t) return e === t;
                            var l = Sr.call(e),
                                c = Sr.call(t);
                            if (l == I && (l = V), c == I && (c = V), l != c) return !1;
                            switch (l) {
                                case R:
                                case O:
                                    return +e == +t;
                                case z:
                                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                                case W:
                                case X:
                                    return e == wr(t)
                            }
                            var f = l == H;
                            if (!f) {
                                var p = Fr.call(e, "__wrapped__"),
                                    v = Fr.call(t, "__wrapped__");
                                if (p || v) return et(p ? e.__wrapped__ : e, v ? t.__wrapped__ : t, n, r, i, o);
                                if (l != V) return !1;
                                var m = e.constructor,
                                    g = t.constructor;
                                if (m != g && !(jt(m) && m instanceof m && jt(g) && g instanceof g) && "constructor" in e && "constructor" in t) return !1
                            }
                            var y = !i;
                            i || (i = d()), o || (o = d());
                            for (var b = i.length; b--;)
                                if (i[b] == e) return o[b] == t;
                            var x = 0;
                            if (a = !0, i.push(e), o.push(t), f) {
                                if (b = e.length, x = t.length, a = x == b, a || r)
                                    for (; x--;) {
                                        var _ = b,
                                            w = t[x];
                                        if (r)
                                            for (; _-- && !(a = et(e[_], w, n, r, i, o)););
                                        else if (!(a = et(e[x], w, n, r, i, o))) break
                                    }
                            } else si(t, function(t, s, u) {
                                return Fr.call(u, s) ? (x++, a = Fr.call(e, s) && et(e[s], t, n, r, i, o)) : void 0
                            }), a && !r && si(e, function(e, t, n) {
                                return Fr.call(n, t) ? a = --x > -1 : void 0
                            });
                            return i.pop(), o.pop(), y && (h(i), h(o)), a
                        }

                        function tt(e, t, n, r, i) {
                            (Ur(t) ? Jt : ui)(t, function(t, o) {
                                var a, s, u = t,
                                    l = e[o];
                                if (t && ((s = Ur(t)) || li(t))) {
                                    for (var c = r.length; c--;)
                                        if (a = r[c] == t) {
                                            l = i[c];
                                            break
                                        }
                                    if (!a) {
                                        var d;
                                        n && (u = n(l, t), (d = "undefined" != typeof u) && (l = u)), d || (l = s ? Ur(l) ? l : [] : li(l) ? l : {}), r.push(t), i.push(l), d || tt(l, t, n, r, i)
                                    }
                                } else n && (u = n(l, t), "undefined" == typeof u && (u = t)), "undefined" != typeof u && (l = u);
                                e[o] = l
                            })
                        }

                        function nt(e, t) {
                            return e + Dr(Kr() * (t - e + 1))
                        }

                        function it(e, t, n) {
                            var r = -1,
                                a = ut(),
                                s = e ? e.length : 0,
                                u = [],
                                c = !t && s >= w && a === i,
                                f = n || c ? d() : u;
                            if (c) {
                                var v = l(f);
                                a = o, f = v
                            }
                            for (; ++r < s;) {
                                var m = e[r],
                                    g = n ? n(m, r, e) : m;
                                (t ? !r || f[f.length - 1] !== g : a(f, g) < 0) && ((n || c) && f.push(g), u.push(m))
                            }
                            return c ? (h(f.array), p(f)) : n && h(f), u
                        }

                        function ot(e) {
                            return function(n, r, i) {
                                var o = {};
                                r = t.createCallback(r, i, 3);
                                var a = -1,
                                    s = n ? n.length : 0;
                                if ("number" == typeof s)
                                    for (; ++a < s;) {
                                        var u = n[a];
                                        e(o, u, r(u, a, n), n)
                                    } else ui(n, function(t, n, i) {
                                        e(o, t, r(t, n, i), i)
                                    });
                                return o
                            }
                        }

                        function at(e, t, n, i, o, a) {
                            var s = 1 & t,
                                u = 2 & t,
                                l = 4 & t,
                                c = 16 & t,
                                d = 32 & t;
                            if (!u && !jt(e)) throw new Cr;
                            c && !n.length && (t &= -17, c = n = !1), d && !i.length && (t &= -33, d = i = !1);
                            var f = e && e.__bindData__;
                            if (f && f !== !0) return f = v(f), f[2] && (f[2] = v(f[2])), f[3] && (f[3] = v(f[3])), !s || 1 & f[1] || (f[4] = o), !s && 1 & f[1] && (t |= 8), !l || 4 & f[1] || (f[5] = a), c && Br.apply(f[2] || (f[2] = []), n), d && Ir.apply(f[3] || (f[3] = []), i), f[1] |= t, at.apply(null, f);
                            var h = 1 == t || 17 === t ? r : C;
                            return h([e, t, n, i, o, a])
                        }

                        function st(e) {
                            return ti[e]
                        }

                        function ut() {
                            var e = (e = t.indexOf) === yn ? i : e;
                            return e
                        }

                        function lt(e) {
                            return "function" == typeof e && $r.test(e)
                        }

                        function ct(e) {
                            var t, n;
                            return e && Sr.call(e) == V && (t = e.constructor, !jt(t) || t instanceof t) ? (si(e, function(e, t) {
                                n = t
                            }), "undefined" == typeof n || Fr.call(e, n)) : !1
                        }

                        function dt(e) {
                            return ni[e]
                        }

                        function ft(e) {
                            return e && "object" == typeof e && "number" == typeof e.length && Sr.call(e) == I || !1
                        }

                        function ht(e, t, n, r) {
                            return "boolean" != typeof t && null != t && (r = n, n = t, t = !1), a(e, t, "function" == typeof n && b(n, r, 1))
                        }

                        function pt(e, t, n) {
                            return a(e, !0, "function" == typeof t && b(t, n, 1))
                        }

                        function vt(e, t) {
                            var n = y(e);
                            return t ? oi(n, t) : n
                        }

                        function mt(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), ui(e, function(e, t, r) {
                                return n(e, t, r) ? (i = t, !1) : void 0
                            }), i
                        }

                        function gt(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), bt(e, function(e, t, r) {
                                return n(e, t, r) ? (i = t, !1) : void 0
                            }), i
                        }

                        function yt(e, t, n) {
                            var r = [];
                            si(e, function(e, t) {
                                r.push(t, e)
                            });
                            var i = r.length;
                            for (t = b(t, n, 3); i-- && t(r[i--], r[i], e) !== !1;);
                            return e
                        }

                        function bt(e, t, n) {
                            var r = ei(e),
                                i = r.length;
                            for (t = b(t, n, 3); i--;) {
                                var o = r[i];
                                if (t(e[o], o, e) === !1) break
                            }
                            return e
                        }

                        function xt(e) {
                            var t = [];
                            return si(e, function(e, n) {
                                jt(e) && t.push(n)
                            }), t.sort()
                        }

                        function _t(e, t) {
                            return e ? Fr.call(e, t) : !1
                        }

                        function wt(e) {
                            for (var t = -1, n = ei(e), r = n.length, i = {}; ++t < r;) {
                                var o = n[t];
                                i[e[o]] = o
                            }
                            return i
                        }

                        function Ct(e) {
                            return e === !0 || e === !1 || e && "object" == typeof e && Sr.call(e) == R || !1
                        }

                        function Tt(e) {
                            return e && "object" == typeof e && Sr.call(e) == O || !1
                        }

                        function kt(e) {
                            return e && 1 === e.nodeType || !1
                        }

                        function Et(e) {
                            var t = !0;
                            if (!e) return t;
                            var n = Sr.call(e),
                                r = e.length;
                            return n == H || n == X || n == I || n == V && "number" == typeof r && jt(e.splice) ? !r : (ui(e, function() {
                                return t = !1
                            }), t)
                        }

                        function St(e, t, n, r) {
                            return et(e, t, "function" == typeof n && b(n, r, 2))
                        }

                        function $t(e) {
                            return Pr(e) && !zr(parseFloat(e))
                        }

                        function jt(e) {
                            return "function" == typeof e
                        }

                        function Nt(e) {
                            return !(!e || !J[typeof e])
                        }

                        function Dt(e) {
                            return Lt(e) && e != +e
                        }

                        function At(e) {
                            return null === e
                        }

                        function Lt(e) {
                            return "number" == typeof e || e && "object" == typeof e && Sr.call(e) == z || !1
                        }

                        function Ft(e) {
                            return e && "object" == typeof e && Sr.call(e) == W || !1
                        }

                        function Bt(e) {
                            return "string" == typeof e || e && "object" == typeof e && Sr.call(e) == X || !1
                        }

                        function Mt(e) {
                            return "undefined" == typeof e
                        }

                        function qt(e, n, r) {
                            var i = {};
                            return n = t.createCallback(n, r, 3), ui(e, function(e, t, r) {
                                i[t] = n(e, t, r)
                            }), i
                        }

                        function It(e) {
                            var t = arguments,
                                n = 2;
                            if (!Nt(e)) return e;
                            if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var r = b(t[--n - 1], t[n--], 2);
                            else n > 2 && "function" == typeof t[n - 1] && (r = t[--n]);
                            for (var i = v(arguments, 1, n), o = -1, a = d(), s = d(); ++o < n;) tt(e, i[o], r, a, s);
                            return h(a), h(s), e
                        }

                        function Ht(e, n, r) {
                            var i = {};
                            if ("function" != typeof n) {
                                var o = [];
                                si(e, function(e, t) {
                                    o.push(t)
                                }), o = G(o, Z(arguments, !0, !1, 1));
                                for (var a = -1, s = o.length; ++a < s;) {
                                    var u = o[a];
                                    i[u] = e[u]
                                }
                            } else n = t.createCallback(n, r, 3), si(e, function(e, t, r) {
                                n(e, t, r) || (i[t] = e)
                            });
                            return i
                        }

                        function Rt(e) {
                            for (var t = -1, n = ei(e), r = n.length, i = pr(r); ++t < r;) {
                                var o = n[t];
                                i[t] = [o, e[o]]
                            }
                            return i
                        }

                        function Ot(e, n, r) {
                            var i = {};
                            if ("function" != typeof n)
                                for (var o = -1, a = Z(arguments, !0, !1, 1), s = Nt(e) ? a.length : 0; ++o < s;) {
                                    var u = a[o];
                                    u in e && (i[u] = e[u])
                                } else n = t.createCallback(n, r, 3), si(e, function(e, t, r) {
                                    n(e, t, r) && (i[t] = e)
                                });
                            return i
                        }

                        function Pt(e, n, r, i) {
                            var o = Ur(e);
                            if (null == r)
                                if (o) r = [];
                                else {
                                    var a = e && e.constructor,
                                        s = a && a.prototype;
                                    r = y(s)
                                }
                            return n && (n = t.createCallback(n, i, 4), (o ? Jt : ui)(e, function(e, t, i) {
                                return n(r, e, t, i)
                            })), r
                        }

                        function zt(e) {
                            for (var t = -1, n = ei(e), r = n.length, i = pr(r); ++t < r;) i[t] = e[n[t]];
                            return i
                        }

                        function Vt(e) {
                            for (var t = arguments, n = -1, r = Z(t, !0, !1, 1), i = t[2] && t[2][t[1]] === e ? 1 : r.length, o = pr(i); ++n < i;) o[n] = e[r[n]];
                            return o
                        }

                        function Wt(e, t, n) {
                            var r = -1,
                                i = ut(),
                                o = e ? e.length : 0,
                                a = !1;
                            return n = (0 > n ? Wr(0, o + n) : n) || 0, Ur(e) ? a = i(e, t, n) > -1 : "number" == typeof o ? a = (Bt(e) ? e.indexOf(t, n) : i(e, t, n)) > -1 : ui(e, function(e) {
                                return ++r >= n ? !(a = e === t) : void 0
                            }), a
                        }

                        function Xt(e, n, r) {
                            var i = !0;
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a && (i = !!n(e[o], o, e)););
                            else ui(e, function(e, t, r) {
                                return i = !!n(e, t, r)
                            });
                            return i
                        }

                        function Qt(e, n, r) {
                            var i = [];
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a;) {
                                    var s = e[o];
                                    n(s, o, e) && i.push(s)
                                } else ui(e, function(e, t, r) {
                                    n(e, t, r) && i.push(e)
                                });
                            return i
                        }

                        function Kt(e, n, r) {
                            n = t.createCallback(n, r, 3);
                            var i = -1,
                                o = e ? e.length : 0;
                            if ("number" != typeof o) {
                                var a;
                                return ui(e, function(e, t, r) {
                                    return n(e, t, r) ? (a = e, !1) : void 0
                                }), a
                            }
                            for (; ++i < o;) {
                                var s = e[i];
                                if (n(s, i, e)) return s
                            }
                        }

                        function Yt(e, n, r) {
                            var i;
                            return n = t.createCallback(n, r, 3), Gt(e, function(e, t, r) {
                                return n(e, t, r) ? (i = e, !1) : void 0
                            }), i
                        }

                        function Jt(e, t, n) {
                            var r = -1,
                                i = e ? e.length : 0;
                            if (t = t && "undefined" == typeof n ? t : b(t, n, 3), "number" == typeof i)
                                for (; ++r < i && t(e[r], r, e) !== !1;);
                            else ui(e, t);
                            return e
                        }

                        function Gt(e, t, n) {
                            var r = e ? e.length : 0;
                            if (t = t && "undefined" == typeof n ? t : b(t, n, 3), "number" == typeof r)
                                for (; r-- && t(e[r], r, e) !== !1;);
                            else {
                                var i = ei(e);
                                r = i.length, ui(e, function(e, n, o) {
                                    return n = i ? i[--r] : --r, t(o[n], n, o)
                                })
                            }
                            return e
                        }

                        function Ut(e, t) {
                            var n = v(arguments, 2),
                                r = -1,
                                i = "function" == typeof t,
                                o = e ? e.length : 0,
                                a = pr("number" == typeof o ? o : 0);
                            return Jt(e, function(e) {
                                a[++r] = (i ? t : e[t]).apply(e, n)
                            }), a
                        }

                        function Zt(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0;
                            if (n = t.createCallback(n, r, 3), "number" == typeof o)
                                for (var a = pr(o); ++i < o;) a[i] = n(e[i], i, e);
                            else a = [], ui(e, function(e, t, r) {
                                a[++i] = n(e, t, r)
                            });
                            return a
                        }

                        function en(e, n, r) {
                            var i = -1 / 0,
                                o = i;
                            if ("function" != typeof n && r && r[n] === e && (n = null), null == n && Ur(e))
                                for (var a = -1, u = e.length; ++a < u;) {
                                    var l = e[a];
                                    l > o && (o = l)
                                } else n = null == n && Bt(e) ? s : t.createCallback(n, r, 3), Jt(e, function(e, t, r) {
                                    var a = n(e, t, r);
                                    a > i && (i = a, o = e)
                                });
                            return o
                        }

                        function tn(e, n, r) {
                            var i = 1 / 0,
                                o = i;
                            if ("function" != typeof n && r && r[n] === e && (n = null), null == n && Ur(e))
                                for (var a = -1, u = e.length; ++a < u;) {
                                    var l = e[a];
                                    o > l && (o = l)
                                } else n = null == n && Bt(e) ? s : t.createCallback(n, r, 3), Jt(e, function(e, t, r) {
                                    var a = n(e, t, r);
                                    i > a && (i = a, o = e)
                                });
                            return o
                        }

                        function nn(e, n, r, i) {
                            if (!e) return r;
                            var o = arguments.length < 3;
                            n = t.createCallback(n, i, 4);
                            var a = -1,
                                s = e.length;
                            if ("number" == typeof s)
                                for (o && (r = e[++a]); ++a < s;) r = n(r, e[a], a, e);
                            else ui(e, function(e, t, i) {
                                r = o ? (o = !1, e) : n(r, e, t, i)
                            });
                            return r
                        }

                        function rn(e, n, r, i) {
                            var o = arguments.length < 3;
                            return n = t.createCallback(n, i, 4), Gt(e, function(e, t, i) {
                                r = o ? (o = !1, e) : n(r, e, t, i)
                            }), r
                        }

                        function on(e, n, r) {
                            return n = t.createCallback(n, r, 3), Qt(e, function(e, t, r) {
                                return !n(e, t, r)
                            })
                        }

                        function an(e, t, n) {
                            if (e && "number" != typeof e.length && (e = zt(e)), null == t || n) return e ? e[nt(0, e.length - 1)] : g;
                            var r = sn(e);
                            return r.length = Xr(Wr(0, t), r.length), r
                        }

                        function sn(e) {
                            var t = -1,
                                n = e ? e.length : 0,
                                r = pr("number" == typeof n ? n : 0);
                            return Jt(e, function(e) {
                                var n = nt(0, ++t);
                                r[t] = r[n], r[n] = e
                            }), r
                        }

                        function un(e) {
                            var t = e ? e.length : 0;
                            return "number" == typeof t ? t : ei(e).length
                        }

                        function ln(e, n, r) {
                            var i;
                            n = t.createCallback(n, r, 3);
                            var o = -1,
                                a = e ? e.length : 0;
                            if ("number" == typeof a)
                                for (; ++o < a && !(i = n(e[o], o, e)););
                            else ui(e, function(e, t, r) {
                                return !(i = n(e, t, r))
                            });
                            return !!i
                        }

                        function cn(e, n, r) {
                            var i = -1,
                                o = Ur(n),
                                a = e ? e.length : 0,
                                s = pr("number" == typeof a ? a : 0);
                            for (o || (n = t.createCallback(n, r, 3)), Jt(e, function(e, t, r) {
                                    var a = s[++i] = f();
                                    o ? a.criteria = Zt(n, function(t) {
                                        return e[t]
                                    }) : (a.criteria = d())[0] = n(e, t, r), a.index = i, a.value = e
                                }), a = s.length, s.sort(u); a--;) {
                                var l = s[a];
                                s[a] = l.value, o || h(l.criteria), p(l)
                            }
                            return s
                        }

                        function dn(e) {
                            return e && "number" == typeof e.length ? v(e) : zt(e)
                        }

                        function fn(e) {
                            for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                                var i = e[t];
                                i && r.push(i)
                            }
                            return r
                        }

                        function hn(e) {
                            return G(e, Z(arguments, !0, !0, 1))
                        }

                        function pn(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0;
                            for (n = t.createCallback(n, r, 3); ++i < o;)
                                if (n(e[i], i, e)) return i;
                            return -1
                        }

                        function vn(e, n, r) {
                            var i = e ? e.length : 0;
                            for (n = t.createCallback(n, r, 3); i--;)
                                if (n(e[i], i, e)) return i;
                            return -1
                        }

                        function mn(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = -1;
                                for (n = t.createCallback(n, r, 3); ++a < o && n(e[a], a, e);) i++
                            } else if (i = n, null == i || r) return e ? e[0] : g;
                            return v(e, 0, Xr(Wr(0, i), o))
                        }

                        function gn(e, t, n, r) {
                            return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (e = Zt(e, n, r)), Z(e, t)
                        }

                        function yn(e, t, n) {
                            if ("number" == typeof n) {
                                var r = e ? e.length : 0;
                                n = 0 > n ? Wr(0, r + n) : n || 0
                            } else if (n) {
                                var o = Sn(e, t);
                                return e[o] === t ? o : -1
                            }
                            return i(e, t, n)
                        }

                        function bn(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = o;
                                for (n = t.createCallback(n, r, 3); a-- && n(e[a], a, e);) i++
                            } else i = null == n || r ? 1 : n || i;
                            return v(e, 0, Xr(Wr(0, o - i), o))
                        }

                        function xn() {
                            for (var e = [], t = -1, n = arguments.length, r = d(), a = ut(), s = a === i, u = d(); ++t < n;) {
                                var c = arguments[t];
                                (Ur(c) || ft(c)) && (e.push(c), r.push(s && c.length >= w && l(t ? e[t] : u)))
                            }
                            var f = e[0],
                                v = -1,
                                m = f ? f.length : 0,
                                g = [];
                            e: for (; ++v < m;) {
                                var y = r[0];
                                if (c = f[v], (y ? o(y, c) : a(u, c)) < 0) {
                                    for (t = n, (y || u).push(c); --t;)
                                        if (y = r[t], (y ? o(y, c) : a(e[t], c)) < 0) continue e;
                                    g.push(c)
                                }
                            }
                            for (; n--;) y = r[n], y && p(y);
                            return h(r), h(u), g
                        }

                        function _n(e, n, r) {
                            var i = 0,
                                o = e ? e.length : 0;
                            if ("number" != typeof n && null != n) {
                                var a = o;
                                for (n = t.createCallback(n, r, 3); a-- && n(e[a], a, e);) i++
                            } else if (i = n, null == i || r) return e ? e[o - 1] : g;
                            return v(e, Wr(0, o - i))
                        }

                        function wn(e, t, n) {
                            var r = e ? e.length : 0;
                            for ("number" == typeof n && (r = (0 > n ? Wr(0, r + n) : Xr(n, r - 1)) + 1); r--;)
                                if (e[r] === t) return r;
                            return -1
                        }

                        function Cn(e) {
                            for (var t = arguments, n = 0, r = t.length, i = e ? e.length : 0; ++n < r;)
                                for (var o = -1, a = t[n]; ++o < i;) e[o] === a && (qr.call(e, o--, 1), i--);
                            return e
                        }

                        function Tn(e, t, n) {
                            e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                            for (var r = -1, i = Wr(0, jr((t - e) / (n || 1))), o = pr(i); ++r < i;) o[r] = e, e += n;
                            return o
                        }

                        function kn(e, n, r) {
                            var i = -1,
                                o = e ? e.length : 0,
                                a = [];
                            for (n = t.createCallback(n, r, 3); ++i < o;) {
                                var s = e[i];
                                n(s, i, e) && (a.push(s), qr.call(e, i--, 1), o--)
                            }
                            return a
                        }

                        function En(e, n, r) {
                            if ("number" != typeof n && null != n) {
                                var i = 0,
                                    o = -1,
                                    a = e ? e.length : 0;
                                for (n = t.createCallback(n, r, 3); ++o < a && n(e[o], o, e);) i++
                            } else i = null == n || r ? 1 : Wr(0, n);
                            return v(e, i)
                        }

                        function Sn(e, n, r, i) {
                            var o = 0,
                                a = e ? e.length : o;
                            for (r = r ? t.createCallback(r, i, 1) : Un, n = r(n); a > o;) {
                                var s = o + a >>> 1;
                                r(e[s]) < n ? o = s + 1 : a = s
                            }
                            return o
                        }

                        function $n() {
                            return it(Z(arguments, !0, !0))
                        }

                        function jn(e, n, r, i) {
                            return "boolean" != typeof n && null != n && (i = r, r = "function" != typeof n && i && i[n] === e ? null : n, n = !1), null != r && (r = t.createCallback(r, i, 3)), it(e, n, r)
                        }

                        function Nn(e) {
                            return G(e, v(arguments, 1))
                        }

                        function Dn() {
                            for (var e = -1, t = arguments.length; ++e < t;) {
                                var n = arguments[e];
                                if (Ur(n) || ft(n)) var r = r ? it(G(r, n).concat(G(n, r))) : n
                            }
                            return r || []
                        }

                        function An() {
                            for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, n = e ? en(hi(e, "length")) : 0, r = pr(0 > n ? 0 : n); ++t < n;) r[t] = hi(e, t);
                            return r
                        }

                        function Ln(e, t) {
                            var n = -1,
                                r = e ? e.length : 0,
                                i = {};
                            for (t || !r || Ur(e[0]) || (t = []); ++n < r;) {
                                var o = e[n];
                                t ? i[o] = t[n] : o && (i[o[0]] = o[1])
                            }
                            return i
                        }

                        function Fn(e, t) {
                            if (!jt(t)) throw new Cr;
                            return function() {
                                return --e < 1 ? t.apply(this, arguments) : void 0
                            }
                        }

                        function Bn(e, t) {
                            return arguments.length > 2 ? at(e, 17, v(arguments, 2), null, t) : at(e, 1, null, null, t)
                        }

                        function Mn(e) {
                            for (var t = arguments.length > 1 ? Z(arguments, !0, !1, 1) : xt(e), n = -1, r = t.length; ++n < r;) {
                                var i = t[n];
                                e[i] = at(e[i], 1, null, null, e)
                            }
                            return e
                        }

                        function qn(e, t) {
                            return arguments.length > 2 ? at(t, 19, v(arguments, 2), null, e) : at(t, 3, null, null, e)
                        }

                        function In() {
                            for (var e = arguments, t = e.length; t--;)
                                if (!jt(e[t])) throw new Cr;
                            return function() {
                                for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                                return t[0]
                            }
                        }

                        function Hn(e, t) {
                            return t = "number" == typeof t ? t : +t || e.length, at(e, 4, null, null, null, t)
                        }

                        function Rn(e, t, n) {
                            var r, i, o, a, s, u, l, c = 0,
                                d = !1,
                                f = !0;
                            if (!jt(e)) throw new Cr;
                            if (t = Wr(0, t) || 0, n === !0) {
                                var h = !0;
                                f = !1
                            } else Nt(n) && (h = n.leading, d = "maxWait" in n && (Wr(t, n.maxWait) || 0), f = "trailing" in n ? n.trailing : f);
                            var p = function() {
                                    var n = t - (vi() - a);
                                    if (0 >= n) {
                                        i && Nr(i);
                                        var d = l;
                                        i = u = l = g, d && (c = vi(), o = e.apply(s, r), u || i || (r = s = null))
                                    } else u = Mr(p, n)
                                },
                                v = function() {
                                    u && Nr(u), i = u = l = g, (f || d !== t) && (c = vi(), o = e.apply(s, r), u || i || (r = s = null))
                                };
                            return function() {
                                if (r = arguments, a = vi(), s = this, l = f && (u || !h), d === !1) var n = h && !u;
                                else {
                                    i || h || (c = a);
                                    var m = d - (a - c),
                                        g = 0 >= m;
                                    g ? (i && (i = Nr(i)), c = a, o = e.apply(s, r)) : i || (i = Mr(v, m))
                                }
                                return g && u ? u = Nr(u) : u || t === d || (u = Mr(p, t)), n && (g = !0, o = e.apply(s, r)), !g || u || i || (r = s = null), o
                            }
                        }

                        function On(e) {
                            if (!jt(e)) throw new Cr;
                            var t = v(arguments, 1);
                            return Mr(function() {
                                e.apply(g, t)
                            }, 1)
                        }

                        function Pn(e, t) {
                            if (!jt(e)) throw new Cr;
                            var n = v(arguments, 2);
                            return Mr(function() {
                                e.apply(g, n)
                            }, t)
                        }

                        function zn(e, t) {
                            if (!jt(e)) throw new Cr;
                            var n = function() {
                                var r = n.cache,
                                    i = t ? t.apply(this, arguments) : _ + arguments[0];
                                return Fr.call(r, i) ? r[i] : r[i] = e.apply(this, arguments)
                            };
                            return n.cache = {}, n
                        }

                        function Vn(e) {
                            var t, n;
                            if (!jt(e)) throw new Cr;
                            return function() {
                                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                            }
                        }

                        function Wn(e) {
                            return at(e, 16, v(arguments, 1))
                        }

                        function Xn(e) {
                            return at(e, 32, null, v(arguments, 1))
                        }

                        function Qn(e, t, n) {
                            var r = !0,
                                i = !0;
                            if (!jt(e)) throw new Cr;
                            return n === !1 ? r = !1 : Nt(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), K.leading = r, K.maxWait = t, K.trailing = i, Rn(e, t, K)
                        }

                        function Kn(e, t) {
                            return at(t, 16, [e])
                        }

                        function Yn(e) {
                            return function() {
                                return e
                            }
                        }

                        function Jn(e, t, n) {
                            var r = typeof e;
                            if (null == e || "function" == r) return b(e, t, n);
                            if ("object" != r) return nr(e);
                            var i = ei(e),
                                o = i[0],
                                a = e[o];
                            return 1 != i.length || a !== a || Nt(a) ? function(t) {
                                for (var n = i.length, r = !1; n-- && (r = et(t[i[n]], e[i[n]], null, !0)););
                                return r
                            } : function(e) {
                                var t = e[o];
                                return a === t && (0 !== a || 1 / a == 1 / t)
                            }
                        }

                        function Gn(e) {
                            return null == e ? "" : wr(e).replace(ii, st)
                        }

                        function Un(e) {
                            return e
                        }

                        function Zn(e, r, i) {
                            var o = !0,
                                a = r && xt(r);
                            r && (i || a.length) || (null == i && (i = r), s = n, r = e, e = t, a = xt(r)), i === !1 ? o = !1 : Nt(i) && "chain" in i && (o = i.chain);
                            var s = e,
                                u = jt(s);
                            Jt(a, function(t) {
                                var n = e[t] = r[t];
                                u && (s.prototype[t] = function() {
                                    var t = this.__chain__,
                                        r = this.__wrapped__,
                                        i = [r];
                                    Br.apply(i, arguments);
                                    var a = n.apply(e, i);
                                    if (o || t) {
                                        if (r === a && Nt(a)) return this;
                                        a = new s(a), a.__chain__ = t
                                    }
                                    return a
                                })
                            })
                        }

                        function er() {
                            return e._ = Er, this
                        }

                        function tr() {}

                        function nr(e) {
                            return function(t) {
                                return t[e]
                            }
                        }

                        function rr(e, t, n) {
                            var r = null == e,
                                i = null == t;
                            if (null == n && ("boolean" == typeof e && i ? (n = e, e = 1) : i || "boolean" != typeof t || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                                var o = Kr();
                                return Xr(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
                            }
                            return nt(e, t)
                        }

                        function ir(e, t) {
                            if (e) {
                                var n = e[t];
                                return jt(n) ? e[t]() : n
                            }
                        }

                        function or(e, n, r) {
                            var i = t.templateSettings;
                            e = wr(e || ""), r = ai({}, r, i);
                            var o, a = ai({}, r.imports, i.imports),
                                s = ei(a),
                                u = zt(a),
                                l = 0,
                                d = r.interpolate || L,
                                f = "__p += '",
                                h = _r((r.escape || L).source + "|" + d.source + "|" + (d === D ? $ : L).source + "|" + (r.evaluate || L).source + "|$", "g");
                            e.replace(h, function(t, n, r, i, a, s) {
                                return r || (r = i), f += e.slice(l, s).replace(B, c), n && (f += "' +\n__e(" + n + ") +\n'"), a && (o = !0, f += "';\n" + a + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = s + t.length, t
                            }), f += "';\n";
                            var p = r.variable,
                                v = p;
                            v || (p = "obj", f = "with (" + p + ") {\n" + f + "\n}\n"), f = (o ? f.replace(k, "") : f).replace(E, "$1").replace(S, "$1;"), f = "function(" + p + ") {\n" + (v ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                            var m = "\n/*\n//# sourceURL=" + (r.sourceURL || "/lodash/template/source[" + q++ +"]") + "\n*/";
                            try {
                                var y = gr(s, "return " + f + m).apply(g, u)
                            } catch (b) {
                                throw b.source = f, b
                            }
                            return n ? y(n) : (y.source = f, y)
                        }

                        function ar(e, t, n) {
                            e = (e = +e) > -1 ? e : 0;
                            var r = -1,
                                i = pr(e);
                            for (t = b(t, n, 1); ++r < e;) i[r] = t(r);
                            return i
                        }

                        function sr(e) {
                            return null == e ? "" : wr(e).replace(ri, dt)
                        }

                        function ur(e) {
                            var t = ++x;
                            return wr(null == e ? "" : e) + t
                        }

                        function lr(e) {
                            return e = new n(e), e.__chain__ = !0, e
                        }

                        function cr(e, t) {
                            return t(e), e
                        }

                        function dr() {
                            return this.__chain__ = !0, this
                        }

                        function fr() {
                            return wr(this.__wrapped__)
                        }

                        function hr() {
                            return this.__wrapped__
                        }
                        e = e ? rt.defaults(U.Object(), e, rt.pick(U, M)) : U;
                        var pr = e.Array,
                            vr = e.Boolean,
                            mr = e.Date,
                            gr = e.Function,
                            yr = e.Math,
                            br = e.Number,
                            xr = e.Object,
                            _r = e.RegExp,
                            wr = e.String,
                            Cr = e.TypeError,
                            Tr = [],
                            kr = xr.prototype,
                            Er = e._,
                            Sr = kr.toString,
                            $r = _r("^" + wr(Sr).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                            jr = yr.ceil,
                            Nr = e.clearTimeout,
                            Dr = yr.floor,
                            Ar = gr.prototype.toString,
                            Lr = lt(Lr = xr.getPrototypeOf) && Lr,
                            Fr = kr.hasOwnProperty,
                            Br = Tr.push,
                            Mr = e.setTimeout,
                            qr = Tr.splice,
                            Ir = Tr.unshift,
                            Hr = function() {
                                try {
                                    var e = {},
                                        t = lt(t = xr.defineProperty) && t,
                                        n = t(e, e, e) && t
                                } catch (r) {}
                                return n
                            }(),
                            Rr = lt(Rr = xr.create) && Rr,
                            Or = lt(Or = pr.isArray) && Or,
                            Pr = e.isFinite,
                            zr = e.isNaN,
                            Vr = lt(Vr = xr.keys) && Vr,
                            Wr = yr.max,
                            Xr = yr.min,
                            Qr = e.parseInt,
                            Kr = yr.random,
                            Yr = {};
                        Yr[H] = pr, Yr[R] = vr, Yr[O] = mr, Yr[P] = gr, Yr[V] = xr, Yr[z] = br, Yr[W] = _r, Yr[X] = wr, n.prototype = t.prototype;
                        var Jr = t.support = {};
                        Jr.funcDecomp = !lt(e.WinRTError) && F.test(m), Jr.funcNames = "string" == typeof gr.name, t.templateSettings = {
                            escape: /<%-([\s\S]+?)%>/g,
                            evaluate: /<%([\s\S]+?)%>/g,
                            interpolate: D,
                            variable: "",
                            imports: {
                                _: t
                            }
                        }, Rr || (y = function() {
                            function t() {}
                            return function(n) {
                                if (Nt(n)) {
                                    t.prototype = n;
                                    var r = new t;
                                    t.prototype = null
                                }
                                return r || e.Object()
                            }
                        }());
                        var Gr = Hr ? function(e, t) {
                                Y.value = t, Hr(e, "__bindData__", Y)
                            } : tr,
                            Ur = Or || function(e) {
                                return e && "object" == typeof e && "number" == typeof e.length && Sr.call(e) == H || !1
                            },
                            Zr = function(e) {
                                var t, n = e,
                                    r = [];
                                if (!n) return r;
                                if (!J[typeof e]) return r;
                                for (t in n) Fr.call(n, t) && r.push(t);
                                return r
                            },
                            ei = Vr ? function(e) {
                                return Nt(e) ? Vr(e) : []
                            } : Zr,
                            ti = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;"
                            },
                            ni = wt(ti),
                            ri = _r("(" + ei(ni).join("|") + ")", "g"),
                            ii = _r("[" + ei(ti).join("") + "]", "g"),
                            oi = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                var a = arguments,
                                    s = 0,
                                    u = "number" == typeof n ? 2 : a.length;
                                if (u > 3 && "function" == typeof a[u - 2]) var l = b(a[--u - 1], a[u--], 2);
                                else u > 2 && "function" == typeof a[u - 1] && (l = a[--u]);
                                for (; ++s < u;)
                                    if (i = a[s], i && J[typeof i])
                                        for (var c = -1, d = J[typeof i] && ei(i), f = d ? d.length : 0; ++c < f;) r = d[c], o[r] = l ? l(o[r], i[r]) : i[r];
                                return o
                            },
                            ai = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                for (var a = arguments, s = 0, u = "number" == typeof n ? 2 : a.length; ++s < u;)
                                    if (i = a[s], i && J[typeof i])
                                        for (var l = -1, c = J[typeof i] && ei(i), d = c ? c.length : 0; ++l < d;) r = c[l], "undefined" == typeof o[r] && (o[r] = i[r]);
                                return o
                            },
                            si = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                if (!J[typeof i]) return o;
                                t = t && "undefined" == typeof n ? t : b(t, n, 3);
                                for (r in i)
                                    if (t(i[r], r, e) === !1) return o;
                                return o
                            },
                            ui = function(e, t, n) {
                                var r, i = e,
                                    o = i;
                                if (!i) return o;
                                if (!J[typeof i]) return o;
                                t = t && "undefined" == typeof n ? t : b(t, n, 3);
                                for (var a = -1, s = J[typeof i] && ei(i), u = s ? s.length : 0; ++a < u;)
                                    if (r = s[a], t(i[r], r, e) === !1) return o;
                                return o
                            },
                            li = Lr ? function(e) {
                                if (!e || Sr.call(e) != V) return !1;
                                var t = e.valueOf,
                                    n = lt(t) && (n = Lr(t)) && Lr(n);
                                return n ? e == n || Lr(e) == n : ct(e)
                            } : ct,
                            ci = ot(function(e, t, n) {
                                Fr.call(e, n) ? e[n] ++ : e[n] = 1
                            }),
                            di = ot(function(e, t, n) {
                                (Fr.call(e, n) ? e[n] : e[n] = []).push(t)
                            }),
                            fi = ot(function(e, t, n) {
                                e[n] = t
                            }),
                            hi = Zt,
                            pi = Qt,
                            vi = lt(vi = mr.now) && vi || function() {
                                return (new mr).getTime()
                            },
                            mi = 8 == Qr(T + "08") ? Qr : function(e, t) {
                                return Qr(Bt(e) ? e.replace(A, "") : e, t || 0)
                            };
                        return t.after = Fn, t.assign = oi, t.at = Vt, t.bind = Bn, t.bindAll = Mn, t.bindKey = qn, t.chain = lr, t.compact = fn, t.compose = In, t.constant = Yn, t.countBy = ci, t.create = vt, t.createCallback = Jn, t.curry = Hn, t.debounce = Rn, t.defaults = ai, t.defer = On, t.delay = Pn, t.difference = hn, t.filter = Qt, t.flatten = gn, t.forEach = Jt, t.forEachRight = Gt, t.forIn = si, t.forInRight = yt, t.forOwn = ui, t.forOwnRight = bt, t.functions = xt, t.groupBy = di, t.indexBy = fi, t.initial = bn, t.intersection = xn, t.invert = wt, t.invoke = Ut, t.keys = ei, t.map = Zt, t.mapValues = qt, t.max = en, t.memoize = zn, t.merge = It, t.min = tn, t.omit = Ht, t.once = Vn, t.pairs = Rt, t.partial = Wn, t.partialRight = Xn, t.pick = Ot, t.pluck = hi, t.property = nr, t.pull = Cn, t.range = Tn, t.reject = on, t.remove = kn, t.rest = En, t.shuffle = sn, t.sortBy = cn, t.tap = cr, t.throttle = Qn, t.times = ar, t.toArray = dn, t.transform = Pt, t.union = $n, t.uniq = jn, t.values = zt, t.where = pi, t.without = Nn, t.wrap = Kn, t.xor = Dn, t.zip = An, t.zipObject = Ln, t.collect = Zt, t.drop = En, t.each = Jt, t.eachRight = Gt, t.extend = oi, t.methods = xt, t.object = Ln, t.select = Qt, t.tail = En, t.unique = jn, t.unzip = An, Zn(t), t.clone = ht, t.cloneDeep = pt, t.contains = Wt, t.escape = Gn, t.every = Xt, t.find = Kt, t.findIndex = pn, t.findKey = mt, t.findLast = Yt, t.findLastIndex = vn, t.findLastKey = gt, t.has = _t, t.identity = Un, t.indexOf = yn, t.isArguments = ft, t.isArray = Ur, t.isBoolean = Ct, t.isDate = Tt, t.isElement = kt, t.isEmpty = Et, t.isEqual = St, t.isFinite = $t, t.isFunction = jt, t.isNaN = Dt, t.isNull = At, t.isNumber = Lt, t.isObject = Nt, t.isPlainObject = li, t.isRegExp = Ft, t.isString = Bt, t.isUndefined = Mt, t.lastIndexOf = wn, t.mixin = Zn, t.noConflict = er, t.noop = tr, t.now = vi, t.parseInt = mi, t.random = rr, t.reduce = nn, t.reduceRight = rn, t.result = ir, t.runInContext = m, t.size = un, t.some = ln, t.sortedIndex = Sn, t.template = or, t.unescape = sr, t.uniqueId = ur, t.all = Xt, t.any = ln, t.detect = Kt, t.findWhere = Kt, t.foldl = nn, t.foldr = rn, t.include = Wt, t.inject = nn, Zn(function() {
                            var e = {};
                            return ui(t, function(n, r) {
                                t.prototype[r] || (e[r] = n)
                            }), e
                        }(), !1), t.first = mn, t.last = _n, t.sample = an, t.take = mn, t.head = mn, ui(t, function(e, r) {
                            var i = "sample" !== r;
                            t.prototype[r] || (t.prototype[r] = function(t, r) {
                                var o = this.__chain__,
                                    a = e(this.__wrapped__, t, r);
                                return o || null != t && (!r || i && "function" == typeof t) ? new n(a, o) : a
                            })
                        }), t.VERSION = "2.4.1", t.prototype.chain = dr, t.prototype.toString = fr, t.prototype.value = hr, t.prototype.valueOf = hr, Jt(["join", "pop", "shift"], function(e) {
                            var r = Tr[e];
                            t.prototype[e] = function() {
                                var e = this.__chain__,
                                    t = r.apply(this.__wrapped__, arguments);
                                return e ? new n(t, e) : t
                            }
                        }), Jt(["push", "reverse", "sort", "unshift"], function(e) {
                            var n = Tr[e];
                            t.prototype[e] = function() {
                                return n.apply(this.__wrapped__, arguments), this
                            }
                        }), Jt(["concat", "slice", "splice"], function(e) {
                            var r = Tr[e];
                            t.prototype[e] = function() {
                                return new n(r.apply(this.__wrapped__, arguments), this.__chain__)
                            }
                        }), t
                    }
                    var g, y = [],
                        b = [],
                        x = 0,
                        _ = +new Date + "",
                        w = 75,
                        C = 40,
                        T = " 	\fÂ ï»¿\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",
                        k = /\b__p \+= '';/g,
                        E = /\b(__p \+=) '' \+/g,
                        S = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        $ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        j = /\w*$/,
                        N = /^\s*function[ \n\r\t]+\w/,
                        D = /<%=([\s\S]+?)%>/g,
                        A = RegExp("^[" + T + "]*0+(?=.$)"),
                        L = /($^)/,
                        F = /\bthis\b/,
                        B = /['\n\r\t\u2028\u2029\\]/g,
                        M = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
                        q = 0,
                        I = "[object Arguments]",
                        H = "[object Array]",
                        R = "[object Boolean]",
                        O = "[object Date]",
                        P = "[object Function]",
                        z = "[object Number]",
                        V = "[object Object]",
                        W = "[object RegExp]",
                        X = "[object String]",
                        Q = {};
                    Q[P] = !1, Q[I] = Q[H] = Q[R] = Q[O] = Q[z] = Q[V] = Q[W] = Q[X] = !0;
                    var K = {
                            leading: !1,
                            maxWait: 0,
                            trailing: !1
                        },
                        Y = {
                            configurable: !1,
                            enumerable: !1,
                            value: null,
                            writable: !1
                        },
                        J = {
                            "boolean": !1,
                            "function": !0,
                            object: !0,
                            number: !1,
                            string: !1,
                            undefined: !1
                        },
                        G = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "	": "t",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        U = J[typeof window] && window || this,
                        Z = J[typeof n] && n && !n.nodeType && n,
                        et = J[typeof t] && t && !t.nodeType && t,
                        tt = et && et.exports === Z && Z,
                        nt = J[typeof e] && e;
                    !nt || nt.global !== nt && nt.window !== nt || (U = nt);
                    var rt = m();
                    "function" == typeof r && "object" == typeof r.amd && r.amd ? (U._ = rt, r(function() {
                        return rt
                    })) : Z && et ? tt ? (et.exports = rt)._ = rt : Z._ = rt : U._ = rt
                }).call(this), i("undefined" != typeof _ ? _ : window._)
            }).call(e, void 0, void 0, void 0, function(e) {
                t.exports = e
            })
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    26: [function(e, t) {
        (function(n) {
            (function() {
                e("/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js"),
                    function(e) {
                        e.fn.sisyphus = function(t) {
                            var n = e.map(this, function(t) {
                                    return e(t).attr("id") + e(t).attr("name")
                                }).join(),
                                r = Sisyphus.getInstance(n);
                            return r.protect(this, t), r
                        };
                        var t = {};
                        t.isAvailable = function() {
                            if ("object" == typeof e.jStorage) return !0;
                            try {
                                return localStorage.getItem
                            } catch (t) {
                                return !1
                            }
                        }, t.set = function(t, n) {
                            if ("object" == typeof e.jStorage) e.jStorage.set(t, n + "");
                            else try {
                                localStorage.setItem(t, n + "")
                            } catch (r) {}
                        }, t.get = function(t) {
                            if ("object" == typeof e.jStorage) {
                                var n = e.jStorage.get(t);
                                return n ? n.toString() : n
                            }
                            return localStorage.getItem(t)
                        }, t.remove = function(t) {
                            "object" == typeof e.jStorage ? e.jStorage.deleteKey(t) : localStorage.removeItem(t)
                        }, Sisyphus = function() {
                            function n() {
                                return {
                                    setInstanceIdentifier: function(e) {
                                        this.identifier = e
                                    },
                                    getInstanceIdentifier: function() {
                                        return this.identifier
                                    },
                                    setInitialOptions: function(n) {
                                        var r = {
                                            excludeFields: [],
                                            customKeySuffix: "",
                                            locationBased: !1,
                                            timeout: 0,
                                            autoRelease: !0,
                                            onSave: function() {},
                                            onBeforeRestore: function() {},
                                            onRestore: function() {},
                                            onRelease: function() {}
                                        };
                                        this.options = this.options || e.extend(r, n), this.browserStorage = t
                                    },
                                    setOptions: function(t) {
                                        this.options = this.options || this.setInitialOptions(t), this.options = e.extend(this.options, t)
                                    },
                                    protect: function(t, n) {
                                        this.setOptions(n), t = t || {};
                                        var i = this;
                                        if (this.targets = this.targets || [], this.href = location.hostname + location.pathname + location.search + location.hash, this.targets = e.merge(this.targets, t), this.targets = e.unique(this.targets), this.targets = e(this.targets), !this.browserStorage.isAvailable()) return !1;
                                        var o = i.options.onBeforeRestore.call(i);
                                        if ((void 0 === o || o) && i.restoreAllData(), this.options.autoRelease && i.bindReleaseData(), !r.started[this.getInstanceIdentifier()])
                                            if (i.isCKEditorPresent()) var a = setInterval(function() {
                                                CKEDITOR.isLoaded && (clearInterval(a), i.bindSaveData(), r.started[i.getInstanceIdentifier()] = !0)
                                            }, 100);
                                            else i.bindSaveData(), r.started[i.getInstanceIdentifier()] = !0
                                    },
                                    isCKEditorPresent: function() {
                                        return this.isCKEditorExists() ? (CKEDITOR.isLoaded = !1, CKEDITOR.on("instanceReady", function() {
                                            CKEDITOR.isLoaded = !0
                                        }), !0) : !1
                                    },
                                    isCKEditorExists: function() {
                                        return "undefined" != typeof CKEDITOR
                                    },
                                    bindSaveData: function() {
                                        var t = this;
                                        t.options.timeout && t.saveDataByTimeout(), t.targets.each(function() {
                                            var n = e(this).attr("id") + e(this).attr("name"),
                                                r = e(this).find(":input").not(":submit").not(":reset").not(":button").not(":file").not(":password");
                                            r.each(function() {
                                                if (-1 !== e.inArray(this, t.options.excludeFields)) return !0;
                                                var r = e(this),
                                                    i = (t.options.locationBased ? t.href : "") + n + r.attr("name") + t.options.customKeySuffix;
                                                (r.is(":text") || r.is("textarea")) && (t.options.timeout || t.bindSaveDataImmediately(r, i)), t.bindSaveDataOnChange(r, i)
                                            })
                                        })
                                    },
                                    saveAllData: function() {
                                        var t = this;
                                        t.targets.each(function() {
                                            var n = e(this).attr("id") + e(this).attr("name"),
                                                r = e(this).find(":input").not(":submit").not(":reset").not(":button").not(":file").not(":password");
                                            r.each(function() {
                                                var r = e(this);
                                                if (-1 !== e.inArray(this, t.options.excludeFields) || void 0 === r.attr("name")) return !0;
                                                var i = (t.options.locationBased ? t.href : "") + n + r.attr("name") + t.options.customKeySuffix,
                                                    o = r.val();
                                                if (r.is(":checkbox")) - 1 !== r.attr("name").indexOf("[") ? (o = [], e("[name='" + r.attr("name") + "']:checked").each(function() {
                                                    o.push(e(this).val())
                                                })) : o = r.is(":checked"), t.saveToBrowserStorage(i, o, !1);
                                                else if (r.is(":radio")) r.is(":checked") && (o = r.val(), t.saveToBrowserStorage(i, o, !1));
                                                else if (t.isCKEditorExists()) {
                                                    var a;
                                                    (a = CKEDITOR.instances[r.attr("name")] || CKEDITOR.instances[r.attr("id")]) ? (a.updateElement(), t.saveToBrowserStorage(i, r.val(), !1)) : t.saveToBrowserStorage(i, o, !1)
                                                } else t.saveToBrowserStorage(i, o, !1)
                                            })
                                        }), t.options.onSave.call(t)
                                    },
                                    restoreAllData: function() {
                                        var t = this,
                                            n = !1;
                                        t.targets.each(function() {
                                            var r = e(this),
                                                i = e(this).attr("id") + e(this).attr("name"),
                                                o = r.find(":input").not(":submit").not(":reset").not(":button").not(":file").not(":password");
                                            o.each(function() {
                                                if (-1 !== e.inArray(this, t.options.excludeFields)) return !0;
                                                var r = e(this),
                                                    o = (t.options.locationBased ? t.href : "") + i + r.attr("name") + t.options.customKeySuffix,
                                                    a = t.browserStorage.get(o);
                                                null !== a && (t.restoreFieldsData(r, a), n = !0)
                                            })
                                        }), n && t.options.onRestore.call(t)
                                    },
                                    restoreFieldsData: function(e, t) {
                                        return void 0 === e.attr("name") ? !1 : (e.is(":checkbox") && "false" !== t && -1 === e.attr("name").indexOf("[") ? e.attr("checked", "checked") : e.is(":checkbox") && "false" === t && -1 === e.attr("name").indexOf("[") ? e.removeAttr("checked") : e.is(":radio") ? e.val() === t && e.attr("checked", "checked") : -1 === e.attr("name").indexOf("[") ? e.val(t) : (t = t.split(","), e.val(t)), void 0)
                                    },
                                    bindSaveDataImmediately: function(e, t) {
                                        var n = this;
                                        if ("onpropertychange" in e ? e.get(0).onpropertychange = function() {
                                                n.saveToBrowserStorage(t, e.val())
                                            } : e.get(0).oninput = function() {
                                                n.saveToBrowserStorage(t, e.val())
                                            }, this.isCKEditorExists()) {
                                            var r;
                                            (r = CKEDITOR.instances[e.attr("name")] || CKEDITOR.instances[e.attr("id")]) && r.document.on("keyup", function() {
                                                r.updateElement(), n.saveToBrowserStorage(t, e.val())
                                            })
                                        }
                                    },
                                    saveToBrowserStorage: function(e, t, n) {
                                        n = void 0 === n ? !0 : n, this.browserStorage.set(e, t), n && "" !== t && this.options.onSave.call(this)
                                    },
                                    bindSaveDataOnChange: function(e) {
                                        var t = this;
                                        e.change(function() {
                                            t.saveAllData()
                                        })
                                    },
                                    saveDataByTimeout: function() {
                                        var e = this,
                                            t = e.targets;
                                        setTimeout(function() {
                                            function t() {
                                                e.saveAllData(), setTimeout(t, 1e3 * e.options.timeout)
                                            }
                                            return t
                                        }(t), 1e3 * e.options.timeout)
                                    },
                                    bindReleaseData: function() {
                                        var t = this;
                                        t.targets.each(function() {
                                            var n = e(this),
                                                r = n.find(":input").not(":submit").not(":reset").not(":button").not(":file").not(":password"),
                                                i = n.attr("id") + n.attr("name");
                                            e(this).bind("submit reset", function() {
                                                t.releaseData(i, r)
                                            })
                                        })
                                    },
                                    manuallyReleaseData: function() {
                                        var t = this;
                                        t.targets.each(function() {
                                            var n = e(this),
                                                r = n.find(":input").not(":submit").not(":reset").not(":button").not(":file").not(":password"),
                                                i = n.attr("id") + n.attr("name");
                                            t.releaseData(i, r)
                                        })
                                    },
                                    releaseData: function(t, n) {
                                        var r = !1,
                                            i = this;
                                        n.each(function() {
                                            if (-1 !== e.inArray(this, i.options.excludeFields)) return !0;
                                            var n = e(this),
                                                o = (i.options.locationBased ? i.href : "") + t + n.attr("name") + i.options.customKeySuffix;
                                            i.browserStorage.remove(o), r = !0
                                        }), r && i.options.onRelease.call(i)
                                    }
                                }
                            }
                            var r = {
                                instantiated: [],
                                started: []
                            };
                            return {
                                getInstance: function(e) {
                                    return r.instantiated[e] || (r.instantiated[e] = n(), r.instantiated[e].setInstanceIdentifier(e), r.instantiated[e].setInitialOptions()), e ? r.instantiated[e] : r.instantiated[e]
                                },
                                free: function() {
                                    return r = {}, null
                                },
                                version: "1.1.103"
                            }
                        }()
                    }(jQuery)
            }).call(n, t, void 0)
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "/tmp/build_d4f30c2e27a428ee9e16099785947a07/vendor/assets/components/jquery/dist/jquery.min.js": 24
    }]
}, {}, [1]);