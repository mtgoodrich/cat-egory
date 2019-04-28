(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    19: function(e, t, a) {
      e.exports = a(52);
    },
    25: function(e, t, a) {},
    26: function(e, t, a) {},
    48: function(e, t, a) {},
    49: function(e, t, a) {},
    50: function(e, t, a) {},
    51: function(e, t, a) {},
    52: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a(0),
        n = a.n(r),
        c = a(15),
        o = a.n(c),
        s = (a(25), a(18)),
        i = a(2),
        l = a(3),
        m = a(5),
        u = a(4),
        g = a(6),
        d = (a(26), a(8)),
        y = a.n(d),
        f = a(16),
        p = a(17),
        h = a.n(p);
      a(48), a(49);
      var v = function(e) {
        return n.a.createElement(
          "div",
          { className: "mx-auto text-center" },
          n.a.createElement(
            "div",
            { className: "spinner-border", role: "status" },
            n.a.createElement("span", { className: "sr-only" })
          ),
          n.a.createElement("div", null, e.message)
        );
      };
      v.defaultProps = { message: "Snatching your first cat..." };
      var C = v,
        b = (a(50),
        (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++)
              n[c] = arguments[c];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(n))
              )).state = { categoryName: "" }),
              (a.onFormSubmit = function(e) {
                e.preventDefault();
                var t = a.state.categoryName || "un-CAT-egorized";
                a.props.submitName(t);
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this;
                  return n.a.createElement(
                    "form",
                    {
                      className: "cat-saver__form",
                      onSubmit: this.onFormSubmit
                    },
                    n.a.createElement(
                      "div",
                      { className: "row" },
                      n.a.createElement(
                        "div",
                        { className: "col-sm-8" },
                        n.a.createElement(
                          "label",
                          {
                            htmlFor: "category",
                            className: "cat-saver__form--label"
                          },
                          n.a.createElement("input", {
                            "aria-describedby": "categoryHelp",
                            className: "form-control",
                            type: "text",
                            name: "categoryName",
                            id: "categoryName",
                            onChange: function(t) {
                              return e.setState({
                                categoryName: t.target.value.toString()
                              });
                            },
                            placeholder: "add a category",
                            value: this.state.categoryName
                          }),
                          n.a.createElement(
                            "small",
                            {
                              id: "categoryHelp",
                              className: "form-text text-muted"
                            },
                            "Type a category to revisit your furry friend later"
                          )
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-sm-4" },
                        n.a.createElement(
                          "button",
                          {
                            className: "btn btn-success cat-saver__form--btn",
                            type: "submit"
                          },
                          "Save"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        E = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++)
              n[c] = arguments[c];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(n))
              )).state = { randomCatUrl: "" }),
              (a.addToCategoryList = function(e) {
                var t = { catName: e, imageUrl: a.state.randomCatUrl };
                a.props.submitCategory(t);
              }),
              (a.getRandomCat = Object(f.a)(
                y.a.mark(function e() {
                  var t;
                  return y.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            h.a
                              .get("https://aws.random.cat/meow")
                              .then(function(e) {
                                return e.data;
                              })
                              .catch(function(e) {
                                console.log("Error: ".concat(e.message));
                              })
                          );
                        case 2:
                          (t = e.sent), a.setState({ randomCatUrl: t.file });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.getRandomCat();
                }
              },
              {
                key: "renderContent",
                value: function() {
                  return this.state.randomCatUrl
                    ? n.a.createElement(
                        "div",
                        null,
                        n.a.createElement(
                          "div",
                          { className: "cat-loader" },
                          n.a.createElement(
                            "div",
                            { className: "cat-loader__img-wrapper" },
                            n.a.createElement("img", {
                              src: this.state.randomCatUrl,
                              alt: "Cat-egory cats"
                            })
                          ),
                          n.a.createElement(
                            "div",
                            { className: "row" },
                            n.a.createElement(
                              "div",
                              { className: "col-sm-4 offset-sm-8" },
                              n.a.createElement(
                                "div",
                                {
                                  className: "btn btn-primary cat-loader__btn",
                                  onClick: this.getRandomCat,
                                  title: "click to see another random cat"
                                },
                                "next image \xbb"
                              )
                            )
                          )
                        ),
                        n.a.createElement(b, {
                          submitName: this.addToCategoryList
                        })
                      )
                    : n.a.createElement(C, {
                        message: "Getting you a random cat"
                      });
                }
              },
              {
                key: "render",
                value: function() {
                  return n.a.createElement("div", null, this.renderContent());
                }
              }
            ]),
            t
          );
        })(n.a.Component),
        N = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++)
              n[c] = arguments[c];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(n))
              )).onCategoryChange = function(e) {
                e.preventDefault();
                var t = e.target.innerText;
                a.props.changeCategory(t);
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.categories.reduce(function(e, t) {
                      return (e[t.catName] = e[t.catName] + 1 || 1), e;
                    }, []),
                    a = Object.keys(t).map(function(a) {
                      return n.a.createElement(
                        "div",
                        { className: "list-group list-group-flush", key: a },
                        n.a.createElement(
                          "li",
                          { className: "list-group-item" },
                          n.a.createElement(
                            "a",
                            { href: a, onClick: e.onCategoryChange },
                            a
                          ),
                          n.a.createElement(
                            "span",
                            { className: "float-right" },
                            t[a]
                          )
                        )
                      );
                    });
                  return n.a.createElement(
                    "div",
                    { className: "card" },
                    n.a.createElement(
                      "div",
                      { className: "card-header" },
                      n.a.createElement("strong", null, "Cat-egories")
                    ),
                    n.a.createElement("div", { className: "card-body" }, a)
                  );
                }
              }
            ]),
            t
          );
        })(n.a.Component),
        O = (a(51),
        (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(m.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(t, e),
            Object(l.a)(t, [
              {
                key: "renderCatList",
                value: function() {
                  var e = this.props,
                    t = e.categories,
                    a = e.currentCategory;
                  return t
                    .filter(function(e) {
                      return e.catName === a;
                    })
                    .map(function(e, t) {
                      return n.a.createElement(
                        "div",
                        {
                          key: t,
                          className: "cat-list__image-wrapper col-sm-6"
                        },
                        n.a.createElement("img", {
                          src: e.imageUrl,
                          alt: "Here's another ".concat(e.catName, " cat"),
                          className: "cat-list__image-wrapper--image"
                        })
                      );
                    });
                }
              },
              {
                key: "displayCurrentCount",
                value: function() {
                  var e = this.props,
                    t = e.categories,
                    a = e.currentCategory;
                  return (
                    t.filter(function(e) {
                      return e.catName === a;
                    }).length || null
                  );
                }
              },
              {
                key: "renderCategoryList",
                value: function() {
                  if (this.displayCurrentCount())
                    return n.a.createElement(
                      "div",
                      null,
                      n.a.createElement(
                        "div",
                        { className: "bordered cat-list" },
                        n.a.createElement(
                          "div",
                          { className: "bordered-body" },
                          n.a.createElement(
                            "strong",
                            null,
                            this.props.currentCategory
                          ),
                          n.a.createElement(
                            "span",
                            { className: "float-right" },
                            this.displayCurrentCount()
                          )
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "row" },
                        this.renderCatList()
                      )
                    );
                }
              },
              {
                key: "render",
                value: function() {
                  return n.a.createElement(
                    "div",
                    null,
                    this.renderCategoryList()
                  );
                }
              }
            ]),
            t
          );
        })(n.a.Component)),
        j = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++)
              n[c] = arguments[c];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(n))
              )).state = {
                categories:
                  JSON.parse(localStorage.getItem("categories")) || [],
                currentCategory:
                  JSON.parse(localStorage.getItem("currentCategory")) || ""
              }),
              (a.onCategorySubmit = function(e) {
                a.setState(
                  {
                    categories: [].concat(Object(s.a)(a.state.categories), [e])
                  },
                  function() {
                    return localStorage.setItem(
                      "categories",
                      JSON.stringify(a.state.categories)
                    );
                  }
                );
              }),
              (a.onCategoryChange = function(e) {
                a.setState({ currentCategory: e }, function() {
                  return localStorage.setItem(
                    "currentCategory",
                    JSON.stringify(a.state.currentCategory)
                  );
                });
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  return n.a.createElement(
                    "div",
                    { className: "container mx-auto" },
                    n.a.createElement("h2", null, "Cat-egory"),
                    n.a.createElement(E, {
                      submitCategory: this.onCategorySubmit
                    }),
                    n.a.createElement(N, {
                      categories: this.state.categories,
                      changeCategory: this.onCategoryChange
                    }),
                    n.a.createElement(O, {
                      categories: this.state.categories,
                      currentCategory: this.state.currentCategory
                    })
                  );
                }
              }
            ]),
            t
          );
        })(r.Component);
      o.a.render(n.a.createElement(j, null), document.getElementById("root"));
    }
  },
  [[19, 1, 2]]
]);
//# sourceMappingURL=main.6932ff18.chunk.js.map
