"use strict";

const xmlnsAttr = {
  name: "xmlns",
  value: "http://foo",
  prefix: "xmlns",
  local: "",
  uri: "http://www.w3.org/2000/xmlns/",
};

const attrAttr = {
  name: "attr",
  value: "bar",
  prefix: "",
  local: "attr",
  uri: "",
};

require(".").test({
  name: "xmlns set default namespace",
  xml: "<elm xmlns='http://foo' attr='bar'/>",
  expect: [
    [
      "opentagstart",
      {
        name: "elm",
        attributes: {},
        ns: {},
      },
    ],
    [
      "opennamespace",
      { prefix: "", uri: "http://foo" },
    ],
    [
      "opentag",
      {
        name: "elm",
        prefix: "",
        local: "elm",
        uri: "http://foo",
        ns: { "": "http://foo" },
        attributes: {
          xmlns: xmlnsAttr,
          attr: attrAttr,
        },
        isSelfClosing: true,
      },
    ],
    [
      "closetag",
      "elm",
    ],
    [
      "closenamespace",
      {
        prefix: "",
        uri: "http://foo",
      },
    ],
  ],
  opt: {
    xmlns: true,
  },
});
