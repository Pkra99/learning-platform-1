import {
  require_react
} from "./chunk-RHPDEHY5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/domelementtype/lib/index.js
var require_lib = __commonJS({
  "node_modules/domelementtype/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
    var ElementType;
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType = exports.ElementType || (exports.ElementType = {}));
    function isTag(elem) {
      return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
    }
    exports.isTag = isTag;
    exports.Root = ElementType.Root;
    exports.Text = ElementType.Text;
    exports.Directive = ElementType.Directive;
    exports.Comment = ElementType.Comment;
    exports.Script = ElementType.Script;
    exports.Style = ElementType.Style;
    exports.Tag = ElementType.Tag;
    exports.CDATA = ElementType.CDATA;
    exports.Doctype = ElementType.Doctype;
  }
});

// node_modules/domhandler/lib/node.js
var require_node = __commonJS({
  "node_modules/domhandler/lib/node.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
    var domelementtype_1 = require_lib();
    var Node = (
      /** @class */
      function() {
        function Node2() {
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node2.prototype, "parentNode", {
          // Read-write aliases for properties
          /**
           * Same as {@link parent}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "previousSibling", {
          /**
           * Same as {@link prev}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "nextSibling", {
          /**
           * Same as {@link next}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node2.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node2;
      }()
    );
    exports.Node = Node;
    var DataNode = (
      /** @class */
      function(_super) {
        __extends(DataNode2, _super);
        function DataNode2(data) {
          var _this = _super.call(this) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          /**
           * Same as {@link data}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      }(Node)
    );
    exports.DataNode = DataNode;
    var Text2 = (
      /** @class */
      function(_super) {
        __extends(Text3, _super);
        function Text3() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Text;
          return _this;
        }
        Object.defineProperty(Text3.prototype, "nodeType", {
          get: function() {
            return 3;
          },
          enumerable: false,
          configurable: true
        });
        return Text3;
      }(DataNode)
    );
    exports.Text = Text2;
    var Comment2 = (
      /** @class */
      function(_super) {
        __extends(Comment3, _super);
        function Comment3() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Comment;
          return _this;
        }
        Object.defineProperty(Comment3.prototype, "nodeType", {
          get: function() {
            return 8;
          },
          enumerable: false,
          configurable: true
        });
        return Comment3;
      }(DataNode)
    );
    exports.Comment = Comment2;
    var ProcessingInstruction2 = (
      /** @class */
      function(_super) {
        __extends(ProcessingInstruction3, _super);
        function ProcessingInstruction3(name, data) {
          var _this = _super.call(this, data) || this;
          _this.name = name;
          _this.type = domelementtype_1.ElementType.Directive;
          return _this;
        }
        Object.defineProperty(ProcessingInstruction3.prototype, "nodeType", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        return ProcessingInstruction3;
      }(DataNode)
    );
    exports.ProcessingInstruction = ProcessingInstruction2;
    var NodeWithChildren = (
      /** @class */
      function(_super) {
        __extends(NodeWithChildren2, _super);
        function NodeWithChildren2(children) {
          var _this = _super.call(this) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          // Aliases
          /** First child of the node. */
          get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          /** Last child of the node. */
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          /**
           * Same as {@link children}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      }(Node)
    );
    exports.NodeWithChildren = NodeWithChildren;
    var CDATA = (
      /** @class */
      function(_super) {
        __extends(CDATA2, _super);
        function CDATA2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.CDATA;
          return _this;
        }
        Object.defineProperty(CDATA2.prototype, "nodeType", {
          get: function() {
            return 4;
          },
          enumerable: false,
          configurable: true
        });
        return CDATA2;
      }(NodeWithChildren)
    );
    exports.CDATA = CDATA;
    var Document = (
      /** @class */
      function(_super) {
        __extends(Document2, _super);
        function Document2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Root;
          return _this;
        }
        Object.defineProperty(Document2.prototype, "nodeType", {
          get: function() {
            return 9;
          },
          enumerable: false,
          configurable: true
        });
        return Document2;
      }(NodeWithChildren)
    );
    exports.Document = Document;
    var Element2 = (
      /** @class */
      function(_super) {
        __extends(Element3, _super);
        function Element3(name, attribs, children, type) {
          if (children === void 0) {
            children = [];
          }
          if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
          }
          var _this = _super.call(this, children) || this;
          _this.name = name;
          _this.attribs = attribs;
          _this.type = type;
          return _this;
        }
        Object.defineProperty(Element3.prototype, "nodeType", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element3.prototype, "tagName", {
          // DOM Level 1 aliases
          /**
           * Same as {@link name}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element3.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              var _a, _b;
              return {
                name,
                value: _this.attribs[name],
                namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element3;
      }(NodeWithChildren)
    );
    exports.Element = Element2;
    function isTag(node) {
      return (0, domelementtype_1.isTag)(node);
    }
    exports.isTag = isTag;
    function isCDATA(node) {
      return node.type === domelementtype_1.ElementType.CDATA;
    }
    exports.isCDATA = isCDATA;
    function isText(node) {
      return node.type === domelementtype_1.ElementType.Text;
    }
    exports.isText = isText;
    function isComment(node) {
      return node.type === domelementtype_1.ElementType.Comment;
    }
    exports.isComment = isComment;
    function isDirective(node) {
      return node.type === domelementtype_1.ElementType.Directive;
    }
    exports.isDirective = isDirective;
    function isDocument(node) {
      return node.type === domelementtype_1.ElementType.Root;
    }
    exports.isDocument = isDocument;
    function hasChildren(node) {
      return Object.prototype.hasOwnProperty.call(node, "children");
    }
    exports.hasChildren = hasChildren;
    function cloneNode(node, recursive) {
      if (recursive === void 0) {
        recursive = false;
      }
      var result;
      if (isText(node)) {
        result = new Text2(node.data);
      } else if (isComment(node)) {
        result = new Comment2(node.data);
      } else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element2(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
          return child.parent = clone_1;
        });
        if (node.namespace != null) {
          clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
          clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
          clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
      } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function(child) {
          return child.parent = clone_2;
        });
        result = clone_2;
      } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
          return child.parent = clone_3;
        });
        if (node["x-mode"]) {
          clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
      } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction2(node.name, node.data);
        if (node["x-name"] != null) {
          instruction["x-name"] = node["x-name"];
          instruction["x-publicId"] = node["x-publicId"];
          instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
      } else {
        throw new Error("Not implemented yet: ".concat(node.type));
      }
      result.startIndex = node.startIndex;
      result.endIndex = node.endIndex;
      if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
      }
      return result;
    }
    exports.cloneNode = cloneNode;
    function cloneChildren(childs) {
      var children = childs.map(function(child) {
        return cloneNode(child, true);
      });
      for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
      }
      return children;
    }
  }
});

// node_modules/domhandler/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/domhandler/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomHandler = void 0;
    var domelementtype_1 = require_lib();
    var node_js_1 = require_node();
    __exportStar(require_node(), exports);
    var defaultOpts = {
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = (
      /** @class */
      function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_js_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_js_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_js_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node = new node_js_1.Comment(data);
          this.addNode(node);
          this.lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_js_1.Text("");
          var node = new node_js_1.CDATA([text]);
          this.addNode(node);
          text.parent = node;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_js_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
          }
          parent.children.push(node);
          if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
          }
          node.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      }()
    );
    exports.DomHandler = DomHandler;
    exports.default = DomHandler;
  }
});

// node_modules/html-dom-parser/lib/client/domparser.js
var require_domparser = __commonJS({
  "node_modules/html-dom-parser/lib/client/domparser.js"(exports, module) {
    var HTML = "html";
    var HEAD = "head";
    var BODY = "body";
    var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/;
    var HEAD_TAG_REGEX = /<head[^]*>/i;
    var BODY_TAG_REGEX = /<body[^]*>/i;
    var parseFromDocument = function() {
      throw new Error(
        "This browser does not support `document.implementation.createHTMLDocument`"
      );
    };
    var parseFromString = function() {
      throw new Error(
        "This browser does not support `DOMParser.prototype.parseFromString`"
      );
    };
    var DOMParser = typeof window === "object" && window.DOMParser;
    if (typeof DOMParser === "function") {
      domParser = new DOMParser();
      mimeType = "text/html";
      parseFromString = function(html, tagName) {
        if (tagName) {
          html = "<" + tagName + ">" + html + "</" + tagName + ">";
        }
        return domParser.parseFromString(html, mimeType);
      };
      parseFromDocument = parseFromString;
    }
    var domParser;
    var mimeType;
    if (typeof document === "object" && document.implementation) {
      doc = document.implementation.createHTMLDocument();
      parseFromDocument = function(html, tagName) {
        if (tagName) {
          var element = doc.documentElement.querySelector(tagName);
          element.innerHTML = html;
          return doc;
        }
        doc.documentElement.innerHTML = html;
        return doc;
      };
    }
    var doc;
    var template = typeof document === "object" ? document.createElement("template") : {};
    var parseFromTemplate;
    if (template.content) {
      parseFromTemplate = function(html) {
        template.innerHTML = html;
        return template.content.childNodes;
      };
    }
    function domparser(html) {
      var firstTagName;
      var match = html.match(FIRST_TAG_REGEX);
      if (match && match[1]) {
        firstTagName = match[1].toLowerCase();
      }
      var doc2;
      var element;
      var elements;
      switch (firstTagName) {
        case HTML:
          doc2 = parseFromString(html);
          if (!HEAD_TAG_REGEX.test(html)) {
            element = doc2.querySelector(HEAD);
            if (element) {
              element.parentNode.removeChild(element);
            }
          }
          if (!BODY_TAG_REGEX.test(html)) {
            element = doc2.querySelector(BODY);
            if (element) {
              element.parentNode.removeChild(element);
            }
          }
          return doc2.querySelectorAll(HTML);
        case HEAD:
        case BODY:
          doc2 = parseFromDocument(html);
          elements = doc2.querySelectorAll(firstTagName);
          if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
            return elements[0].parentNode.childNodes;
          }
          return elements;
        default:
          if (parseFromTemplate) {
            return parseFromTemplate(html);
          }
          element = parseFromDocument(html, BODY).querySelector(BODY);
          return element.childNodes;
      }
    }
    module.exports = domparser;
  }
});

// node_modules/html-dom-parser/lib/client/constants.js
var require_constants = __commonJS({
  "node_modules/html-dom-parser/lib/client/constants.js"(exports) {
    exports.CASE_SENSITIVE_TAG_NAMES = [
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "linearGradient",
      "radialGradient",
      "textPath"
    ];
  }
});

// node_modules/html-dom-parser/lib/client/utilities.js
var require_utilities = __commonJS({
  "node_modules/html-dom-parser/lib/client/utilities.js"(exports) {
    var domhandler = require_lib2();
    var constants = require_constants();
    var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;
    var Comment2 = domhandler.Comment;
    var Element2 = domhandler.Element;
    var ProcessingInstruction2 = domhandler.ProcessingInstruction;
    var Text2 = domhandler.Text;
    var caseSensitiveTagNamesMap = {};
    var tagName;
    for (i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
      tagName = CASE_SENSITIVE_TAG_NAMES[i];
      caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
    }
    var i;
    var len;
    function getCaseSensitiveTagName(tagName2) {
      return caseSensitiveTagNamesMap[tagName2];
    }
    function formatAttributes(attributes) {
      var result = {};
      var attribute;
      for (var i2 = 0, len2 = attributes.length; i2 < len2; i2++) {
        attribute = attributes[i2];
        result[attribute.name] = attribute.value;
      }
      return result;
    }
    function formatTagName(tagName2) {
      tagName2 = tagName2.toLowerCase();
      var caseSensitiveTagName = getCaseSensitiveTagName(tagName2);
      if (caseSensitiveTagName) {
        return caseSensitiveTagName;
      }
      return tagName2;
    }
    function formatDOM(nodes, parent, directive) {
      parent = parent || null;
      var result = [];
      var tagName2;
      for (var index = 0, len2 = nodes.length; index < len2; index++) {
        var node = nodes[index];
        var current;
        switch (node.nodeType) {
          case 1:
            tagName2 = formatTagName(node.nodeName);
            current = new Element2(tagName2, formatAttributes(node.attributes));
            current.children = formatDOM(
              // template children are on content
              tagName2 === "template" ? node.content.childNodes : node.childNodes,
              current
            );
            break;
          case 3:
            current = new Text2(node.nodeValue);
            break;
          case 8:
            current = new Comment2(node.nodeValue);
            break;
          default:
            continue;
        }
        var prev = result[index - 1] || null;
        if (prev) {
          prev.next = current;
        }
        current.parent = parent;
        current.prev = prev;
        current.next = null;
        result.push(current);
      }
      if (directive) {
        current = new ProcessingInstruction2(
          directive.substring(0, directive.indexOf(" ")).toLowerCase(),
          directive
        );
        current.next = result[0] || null;
        current.parent = parent;
        result.unshift(current);
        if (result[1]) {
          result[1].prev = result[0];
        }
      }
      return result;
    }
    exports.formatAttributes = formatAttributes;
    exports.formatDOM = formatDOM;
  }
});

// node_modules/html-dom-parser/lib/client/html-to-dom.js
var require_html_to_dom = __commonJS({
  "node_modules/html-dom-parser/lib/client/html-to-dom.js"(exports, module) {
    var domparser = require_domparser();
    var utilities = require_utilities();
    var formatDOM = utilities.formatDOM;
    var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/;
    function HTMLDOMParser(html) {
      if (typeof html !== "string") {
        throw new TypeError("First argument must be a string");
      }
      if (html === "") {
        return [];
      }
      var match = html.match(DIRECTIVE_REGEX);
      var directive;
      if (match && match[1]) {
        directive = match[1];
      }
      return formatDOM(domparser(html), null, directive);
    }
    module.exports = HTMLDOMParser;
  }
});

// node_modules/react-property/lib/possibleStandardNamesOptimized.js
var require_possibleStandardNamesOptimized = __commonJS({
  "node_modules/react-property/lib/possibleStandardNamesOptimized.js"(exports) {
    var SAME = 0;
    exports.SAME = SAME;
    var CAMELCASE = 1;
    exports.CAMELCASE = CAMELCASE;
    exports.possibleStandardNames = {
      accept: 0,
      acceptCharset: 1,
      "accept-charset": "acceptCharset",
      accessKey: 1,
      action: 0,
      allowFullScreen: 1,
      alt: 0,
      as: 0,
      async: 0,
      autoCapitalize: 1,
      autoComplete: 1,
      autoCorrect: 1,
      autoFocus: 1,
      autoPlay: 1,
      autoSave: 1,
      capture: 0,
      cellPadding: 1,
      cellSpacing: 1,
      challenge: 0,
      charSet: 1,
      checked: 0,
      children: 0,
      cite: 0,
      class: "className",
      classID: 1,
      className: 1,
      cols: 0,
      colSpan: 1,
      content: 0,
      contentEditable: 1,
      contextMenu: 1,
      controls: 0,
      controlsList: 1,
      coords: 0,
      crossOrigin: 1,
      dangerouslySetInnerHTML: 1,
      data: 0,
      dateTime: 1,
      default: 0,
      defaultChecked: 1,
      defaultValue: 1,
      defer: 0,
      dir: 0,
      disabled: 0,
      disablePictureInPicture: 1,
      disableRemotePlayback: 1,
      download: 0,
      draggable: 0,
      encType: 1,
      enterKeyHint: 1,
      for: "htmlFor",
      form: 0,
      formMethod: 1,
      formAction: 1,
      formEncType: 1,
      formNoValidate: 1,
      formTarget: 1,
      frameBorder: 1,
      headers: 0,
      height: 0,
      hidden: 0,
      high: 0,
      href: 0,
      hrefLang: 1,
      htmlFor: 1,
      httpEquiv: 1,
      "http-equiv": "httpEquiv",
      icon: 0,
      id: 0,
      innerHTML: 1,
      inputMode: 1,
      integrity: 0,
      is: 0,
      itemID: 1,
      itemProp: 1,
      itemRef: 1,
      itemScope: 1,
      itemType: 1,
      keyParams: 1,
      keyType: 1,
      kind: 0,
      label: 0,
      lang: 0,
      list: 0,
      loop: 0,
      low: 0,
      manifest: 0,
      marginWidth: 1,
      marginHeight: 1,
      max: 0,
      maxLength: 1,
      media: 0,
      mediaGroup: 1,
      method: 0,
      min: 0,
      minLength: 1,
      multiple: 0,
      muted: 0,
      name: 0,
      noModule: 1,
      nonce: 0,
      noValidate: 1,
      open: 0,
      optimum: 0,
      pattern: 0,
      placeholder: 0,
      playsInline: 1,
      poster: 0,
      preload: 0,
      profile: 0,
      radioGroup: 1,
      readOnly: 1,
      referrerPolicy: 1,
      rel: 0,
      required: 0,
      reversed: 0,
      role: 0,
      rows: 0,
      rowSpan: 1,
      sandbox: 0,
      scope: 0,
      scoped: 0,
      scrolling: 0,
      seamless: 0,
      selected: 0,
      shape: 0,
      size: 0,
      sizes: 0,
      span: 0,
      spellCheck: 1,
      src: 0,
      srcDoc: 1,
      srcLang: 1,
      srcSet: 1,
      start: 0,
      step: 0,
      style: 0,
      summary: 0,
      tabIndex: 1,
      target: 0,
      title: 0,
      type: 0,
      useMap: 1,
      value: 0,
      width: 0,
      wmode: 0,
      wrap: 0,
      about: 0,
      accentHeight: 1,
      "accent-height": "accentHeight",
      accumulate: 0,
      additive: 0,
      alignmentBaseline: 1,
      "alignment-baseline": "alignmentBaseline",
      allowReorder: 1,
      alphabetic: 0,
      amplitude: 0,
      arabicForm: 1,
      "arabic-form": "arabicForm",
      ascent: 0,
      attributeName: 1,
      attributeType: 1,
      autoReverse: 1,
      azimuth: 0,
      baseFrequency: 1,
      baselineShift: 1,
      "baseline-shift": "baselineShift",
      baseProfile: 1,
      bbox: 0,
      begin: 0,
      bias: 0,
      by: 0,
      calcMode: 1,
      capHeight: 1,
      "cap-height": "capHeight",
      clip: 0,
      clipPath: 1,
      "clip-path": "clipPath",
      clipPathUnits: 1,
      clipRule: 1,
      "clip-rule": "clipRule",
      color: 0,
      colorInterpolation: 1,
      "color-interpolation": "colorInterpolation",
      colorInterpolationFilters: 1,
      "color-interpolation-filters": "colorInterpolationFilters",
      colorProfile: 1,
      "color-profile": "colorProfile",
      colorRendering: 1,
      "color-rendering": "colorRendering",
      contentScriptType: 1,
      contentStyleType: 1,
      cursor: 0,
      cx: 0,
      cy: 0,
      d: 0,
      datatype: 0,
      decelerate: 0,
      descent: 0,
      diffuseConstant: 1,
      direction: 0,
      display: 0,
      divisor: 0,
      dominantBaseline: 1,
      "dominant-baseline": "dominantBaseline",
      dur: 0,
      dx: 0,
      dy: 0,
      edgeMode: 1,
      elevation: 0,
      enableBackground: 1,
      "enable-background": "enableBackground",
      end: 0,
      exponent: 0,
      externalResourcesRequired: 1,
      fill: 0,
      fillOpacity: 1,
      "fill-opacity": "fillOpacity",
      fillRule: 1,
      "fill-rule": "fillRule",
      filter: 0,
      filterRes: 1,
      filterUnits: 1,
      floodOpacity: 1,
      "flood-opacity": "floodOpacity",
      floodColor: 1,
      "flood-color": "floodColor",
      focusable: 0,
      fontFamily: 1,
      "font-family": "fontFamily",
      fontSize: 1,
      "font-size": "fontSize",
      fontSizeAdjust: 1,
      "font-size-adjust": "fontSizeAdjust",
      fontStretch: 1,
      "font-stretch": "fontStretch",
      fontStyle: 1,
      "font-style": "fontStyle",
      fontVariant: 1,
      "font-variant": "fontVariant",
      fontWeight: 1,
      "font-weight": "fontWeight",
      format: 0,
      from: 0,
      fx: 0,
      fy: 0,
      g1: 0,
      g2: 0,
      glyphName: 1,
      "glyph-name": "glyphName",
      glyphOrientationHorizontal: 1,
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphOrientationVertical: 1,
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphRef: 1,
      gradientTransform: 1,
      gradientUnits: 1,
      hanging: 0,
      horizAdvX: 1,
      "horiz-adv-x": "horizAdvX",
      horizOriginX: 1,
      "horiz-origin-x": "horizOriginX",
      ideographic: 0,
      imageRendering: 1,
      "image-rendering": "imageRendering",
      in2: 0,
      in: 0,
      inlist: 0,
      intercept: 0,
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0,
      k: 0,
      kernelMatrix: 1,
      kernelUnitLength: 1,
      kerning: 0,
      keyPoints: 1,
      keySplines: 1,
      keyTimes: 1,
      lengthAdjust: 1,
      letterSpacing: 1,
      "letter-spacing": "letterSpacing",
      lightingColor: 1,
      "lighting-color": "lightingColor",
      limitingConeAngle: 1,
      local: 0,
      markerEnd: 1,
      "marker-end": "markerEnd",
      markerHeight: 1,
      markerMid: 1,
      "marker-mid": "markerMid",
      markerStart: 1,
      "marker-start": "markerStart",
      markerUnits: 1,
      markerWidth: 1,
      mask: 0,
      maskContentUnits: 1,
      maskUnits: 1,
      mathematical: 0,
      mode: 0,
      numOctaves: 1,
      offset: 0,
      opacity: 0,
      operator: 0,
      order: 0,
      orient: 0,
      orientation: 0,
      origin: 0,
      overflow: 0,
      overlinePosition: 1,
      "overline-position": "overlinePosition",
      overlineThickness: 1,
      "overline-thickness": "overlineThickness",
      paintOrder: 1,
      "paint-order": "paintOrder",
      panose1: 0,
      "panose-1": "panose1",
      pathLength: 1,
      patternContentUnits: 1,
      patternTransform: 1,
      patternUnits: 1,
      pointerEvents: 1,
      "pointer-events": "pointerEvents",
      points: 0,
      pointsAtX: 1,
      pointsAtY: 1,
      pointsAtZ: 1,
      prefix: 0,
      preserveAlpha: 1,
      preserveAspectRatio: 1,
      primitiveUnits: 1,
      property: 0,
      r: 0,
      radius: 0,
      refX: 1,
      refY: 1,
      renderingIntent: 1,
      "rendering-intent": "renderingIntent",
      repeatCount: 1,
      repeatDur: 1,
      requiredExtensions: 1,
      requiredFeatures: 1,
      resource: 0,
      restart: 0,
      result: 0,
      results: 0,
      rotate: 0,
      rx: 0,
      ry: 0,
      scale: 0,
      security: 0,
      seed: 0,
      shapeRendering: 1,
      "shape-rendering": "shapeRendering",
      slope: 0,
      spacing: 0,
      specularConstant: 1,
      specularExponent: 1,
      speed: 0,
      spreadMethod: 1,
      startOffset: 1,
      stdDeviation: 1,
      stemh: 0,
      stemv: 0,
      stitchTiles: 1,
      stopColor: 1,
      "stop-color": "stopColor",
      stopOpacity: 1,
      "stop-opacity": "stopOpacity",
      strikethroughPosition: 1,
      "strikethrough-position": "strikethroughPosition",
      strikethroughThickness: 1,
      "strikethrough-thickness": "strikethroughThickness",
      string: 0,
      stroke: 0,
      strokeDasharray: 1,
      "stroke-dasharray": "strokeDasharray",
      strokeDashoffset: 1,
      "stroke-dashoffset": "strokeDashoffset",
      strokeLinecap: 1,
      "stroke-linecap": "strokeLinecap",
      strokeLinejoin: 1,
      "stroke-linejoin": "strokeLinejoin",
      strokeMiterlimit: 1,
      "stroke-miterlimit": "strokeMiterlimit",
      strokeWidth: 1,
      "stroke-width": "strokeWidth",
      strokeOpacity: 1,
      "stroke-opacity": "strokeOpacity",
      suppressContentEditableWarning: 1,
      suppressHydrationWarning: 1,
      surfaceScale: 1,
      systemLanguage: 1,
      tableValues: 1,
      targetX: 1,
      targetY: 1,
      textAnchor: 1,
      "text-anchor": "textAnchor",
      textDecoration: 1,
      "text-decoration": "textDecoration",
      textLength: 1,
      textRendering: 1,
      "text-rendering": "textRendering",
      to: 0,
      transform: 0,
      typeof: 0,
      u1: 0,
      u2: 0,
      underlinePosition: 1,
      "underline-position": "underlinePosition",
      underlineThickness: 1,
      "underline-thickness": "underlineThickness",
      unicode: 0,
      unicodeBidi: 1,
      "unicode-bidi": "unicodeBidi",
      unicodeRange: 1,
      "unicode-range": "unicodeRange",
      unitsPerEm: 1,
      "units-per-em": "unitsPerEm",
      unselectable: 0,
      vAlphabetic: 1,
      "v-alphabetic": "vAlphabetic",
      values: 0,
      vectorEffect: 1,
      "vector-effect": "vectorEffect",
      version: 0,
      vertAdvY: 1,
      "vert-adv-y": "vertAdvY",
      vertOriginX: 1,
      "vert-origin-x": "vertOriginX",
      vertOriginY: 1,
      "vert-origin-y": "vertOriginY",
      vHanging: 1,
      "v-hanging": "vHanging",
      vIdeographic: 1,
      "v-ideographic": "vIdeographic",
      viewBox: 1,
      viewTarget: 1,
      visibility: 0,
      vMathematical: 1,
      "v-mathematical": "vMathematical",
      vocab: 0,
      widths: 0,
      wordSpacing: 1,
      "word-spacing": "wordSpacing",
      writingMode: 1,
      "writing-mode": "writingMode",
      x1: 0,
      x2: 0,
      x: 0,
      xChannelSelector: 1,
      xHeight: 1,
      "x-height": "xHeight",
      xlinkActuate: 1,
      "xlink:actuate": "xlinkActuate",
      xlinkArcrole: 1,
      "xlink:arcrole": "xlinkArcrole",
      xlinkHref: 1,
      "xlink:href": "xlinkHref",
      xlinkRole: 1,
      "xlink:role": "xlinkRole",
      xlinkShow: 1,
      "xlink:show": "xlinkShow",
      xlinkTitle: 1,
      "xlink:title": "xlinkTitle",
      xlinkType: 1,
      "xlink:type": "xlinkType",
      xmlBase: 1,
      "xml:base": "xmlBase",
      xmlLang: 1,
      "xml:lang": "xmlLang",
      xmlns: 0,
      "xml:space": "xmlSpace",
      xmlnsXlink: 1,
      "xmlns:xlink": "xmlnsXlink",
      xmlSpace: 1,
      y1: 0,
      y2: 0,
      y: 0,
      yChannelSelector: 1,
      z: 0,
      zoomAndPan: 1
    };
  }
});

// node_modules/react-property/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/react-property/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var RESERVED = 0;
    var STRING = 1;
    var BOOLEANISH_STRING = 2;
    var BOOLEAN = 3;
    var OVERLOADED_BOOLEAN = 4;
    var NUMERIC = 5;
    var POSITIVE_NUMERIC = 6;
    function getPropertyInfo(name) {
      return properties.hasOwnProperty(name) ? properties[name] : null;
    }
    function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
      this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
      this.attributeName = attributeName;
      this.attributeNamespace = attributeNamespace;
      this.mustUseProperty = mustUseProperty;
      this.propertyName = name;
      this.type = type;
      this.sanitizeURL = sanitizeURL;
      this.removeEmptyString = removeEmptyString;
    }
    var properties = {};
    var reservedProps = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    reservedProps.forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        RESERVED,
        false,
        // mustUseProperty
        name,
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], attributeName = _ref2[1];
      properties[name] = new PropertyInfoRecord(
        name,
        STRING,
        false,
        // mustUseProperty
        attributeName,
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        BOOLEANISH_STRING,
        false,
        // mustUseProperty
        name.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        BOOLEANISH_STRING,
        false,
        // mustUseProperty
        name,
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        BOOLEAN,
        false,
        // mustUseProperty
        name.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        BOOLEAN,
        true,
        // mustUseProperty
        name,
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        OVERLOADED_BOOLEAN,
        false,
        // mustUseProperty
        name,
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        POSITIVE_NUMERIC,
        false,
        // mustUseProperty
        name,
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    ["rowSpan", "start"].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(
        name,
        NUMERIC,
        false,
        // mustUseProperty
        name.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    var CAMELIZE = /[\-\:]([a-z])/g;
    var capitalize = function capitalize2(token) {
      return token[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(
        name,
        STRING,
        false,
        // mustUseProperty
        attributeName,
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(
        name,
        STRING,
        false,
        // mustUseProperty
        attributeName,
        "http://www.w3.org/1999/xlink",
        false,
        // sanitizeURL
        false
      );
    });
    [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(
        name,
        STRING,
        false,
        // mustUseProperty
        attributeName,
        "http://www.w3.org/XML/1998/namespace",
        false,
        // sanitizeURL
        false
      );
    });
    ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
      properties[attributeName] = new PropertyInfoRecord(
        attributeName,
        STRING,
        false,
        // mustUseProperty
        attributeName.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        false,
        // sanitizeURL
        false
      );
    });
    var xlinkHref = "xlinkHref";
    properties[xlinkHref] = new PropertyInfoRecord(
      "xlinkHref",
      STRING,
      false,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      true,
      // sanitizeURL
      false
    );
    ["src", "href", "action", "formAction"].forEach(function(attributeName) {
      properties[attributeName] = new PropertyInfoRecord(
        attributeName,
        STRING,
        false,
        // mustUseProperty
        attributeName.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        true,
        // sanitizeURL
        true
      );
    });
    var _require = require_possibleStandardNamesOptimized();
    var CAMELCASE = _require.CAMELCASE;
    var SAME = _require.SAME;
    var possibleStandardNamesOptimized = _require.possibleStandardNames;
    var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var isCustomAttribute = RegExp.prototype.test.bind(
      // eslint-disable-next-line no-misleading-character-class
      new RegExp("^(data|aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$")
    );
    var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function(accumulator, standardName) {
      var propName = possibleStandardNamesOptimized[standardName];
      if (propName === SAME) {
        accumulator[standardName] = standardName;
      } else if (propName === CAMELCASE) {
        accumulator[standardName.toLowerCase()] = standardName;
      } else {
        accumulator[standardName] = propName;
      }
      return accumulator;
    }, {});
    exports.BOOLEAN = BOOLEAN;
    exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
    exports.NUMERIC = NUMERIC;
    exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
    exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
    exports.RESERVED = RESERVED;
    exports.STRING = STRING;
    exports.getPropertyInfo = getPropertyInfo;
    exports.isCustomAttribute = isCustomAttribute;
    exports.possibleStandardNames = possibleStandardNames;
  }
});

// node_modules/inline-style-parser/index.js
var require_inline_style_parser = __commonJS({
  "node_modules/inline-style-parser/index.js"(exports, module) {
    var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    var NEWLINE_REGEX = /\n/g;
    var WHITESPACE_REGEX = /^\s*/;
    var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
    var COLON_REGEX = /^:\s*/;
    var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
    var SEMICOLON_REGEX = /^[;\s]*/;
    var TRIM_REGEX = /^\s+|\s+$/g;
    var NEWLINE = "\n";
    var FORWARD_SLASH = "/";
    var ASTERISK = "*";
    var EMPTY_STRING = "";
    var TYPE_COMMENT = "comment";
    var TYPE_DECLARATION = "declaration";
    module.exports = function(style, options) {
      if (typeof style !== "string") {
        throw new TypeError("First argument must be a string");
      }
      if (!style) return [];
      options = options || {};
      var lineno = 1;
      var column = 1;
      function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
      }
      function position() {
        var start = { line: lineno, column };
        return function(node) {
          node.position = new Position(start);
          whitespace();
          return node;
        };
      }
      function Position(start) {
        this.start = start;
        this.end = { line: lineno, column };
        this.source = options.source;
      }
      Position.prototype.content = style;
      var errorsList = [];
      function error(msg) {
        var err = new Error(
          options.source + ":" + lineno + ":" + column + ": " + msg
        );
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) {
          errorsList.push(err);
        } else {
          throw err;
        }
      }
      function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
      }
      function whitespace() {
        match(WHITESPACE_REGEX);
      }
      function comments(rules) {
        var c;
        rules = rules || [];
        while (c = comment()) {
          if (c !== false) {
            rules.push(c);
          }
        }
        return rules;
      }
      function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i = 2;
        while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
          ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
          return error("End of comment missing");
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
          type: TYPE_COMMENT,
          comment: str
        });
      }
      function declaration() {
        var pos = position();
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        if (!match(COLON_REGEX)) return error("property missing ':'");
        var val = match(VALUE_REGEX);
        var ret = pos({
          type: TYPE_DECLARATION,
          property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
          value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        match(SEMICOLON_REGEX);
        return ret;
      }
      function declarations() {
        var decls = [];
        comments(decls);
        var decl;
        while (decl = declaration()) {
          if (decl !== false) {
            decls.push(decl);
            comments(decls);
          }
        }
        return decls;
      }
      whitespace();
      return declarations();
    };
    function trim(str) {
      return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
    }
  }
});

// node_modules/style-to-object/index.js
var require_style_to_object = __commonJS({
  "node_modules/style-to-object/index.js"(exports, module) {
    var parse = require_inline_style_parser();
    function StyleToObject(style, iterator) {
      var output = null;
      if (!style || typeof style !== "string") {
        return output;
      }
      var declaration;
      var declarations = parse(style);
      var hasIterator = typeof iterator === "function";
      var property;
      var value;
      for (var i = 0, len = declarations.length; i < len; i++) {
        declaration = declarations[i];
        property = declaration.property;
        value = declaration.value;
        if (hasIterator) {
          iterator(property, value, declaration);
        } else if (value) {
          output || (output = {});
          output[property] = value;
        }
      }
      return output;
    }
    module.exports = StyleToObject;
    module.exports.default = StyleToObject;
  }
});

// node_modules/style-to-js/cjs/utilities.js
var require_utilities2 = __commonJS({
  "node_modules/style-to-js/cjs/utilities.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.camelCase = void 0;
    var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
    var HYPHEN_REGEX = /-([a-z])/g;
    var NO_HYPHEN_REGEX = /^[^-]+$/;
    var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
    var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
    var skipCamelCase = function(property) {
      return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
    };
    var capitalize = function(match, character) {
      return character.toUpperCase();
    };
    var trimHyphen = function(match, prefix) {
      return "".concat(prefix, "-");
    };
    var camelCase = function(property, options) {
      if (options === void 0) {
        options = {};
      }
      if (skipCamelCase(property)) {
        return property;
      }
      property = property.toLowerCase();
      if (options.reactCompat) {
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
      } else {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
      }
      return property.replace(HYPHEN_REGEX, capitalize);
    };
    exports.camelCase = camelCase;
  }
});

// node_modules/style-to-js/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/style-to-js/cjs/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var style_to_object_1 = __importDefault(require_style_to_object());
    var utilities_1 = require_utilities2();
    function StyleToJS(style, options) {
      var output = {};
      if (!style || typeof style !== "string") {
        return output;
      }
      (0, style_to_object_1.default)(style, function(property, value) {
        if (property && value) {
          output[(0, utilities_1.camelCase)(property, options)] = value;
        }
      });
      return output;
    }
    exports.default = StyleToJS;
  }
});

// node_modules/html-react-parser/lib/utilities.js
var require_utilities3 = __commonJS({
  "node_modules/html-react-parser/lib/utilities.js"(exports, module) {
    var React = require_react();
    var styleToJS = require_cjs().default;
    function invertObject(obj, override) {
      if (!obj || typeof obj !== "object") {
        throw new TypeError("First argument must be an object");
      }
      var isOverridePresent = typeof override === "function";
      var overrides = {};
      var result = {};
      for (var key in obj) {
        var value = obj[key];
        if (isOverridePresent) {
          overrides = override(key, value);
          if (overrides && overrides.length === 2) {
            result[overrides[0]] = overrides[1];
            continue;
          }
        }
        if (typeof value === "string") {
          result[value] = key;
        }
      }
      return result;
    }
    var RESERVED_SVG_MATHML_ELEMENTS = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function isCustomComponent(tagName, props) {
      if (tagName.indexOf("-") === -1) {
        return props && typeof props.is === "string";
      }
      if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
        return false;
      }
      return true;
    }
    var STYLE_TO_JS_OPTIONS = { reactCompat: true };
    function setStyleProp(style, props) {
      if (style === null || style === void 0) {
        return;
      }
      try {
        props.style = styleToJS(style, STYLE_TO_JS_OPTIONS);
      } catch (err) {
        props.style = {};
      }
    }
    var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split(".")[0] >= 16;
    var ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "colgroup",
      "table",
      "head",
      "html",
      "frameset"
    ]);
    function canTextBeChildOfNode(node) {
      return !ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
    }
    function returnFirstArg(arg) {
      return arg;
    }
    module.exports = {
      PRESERVE_CUSTOM_ATTRIBUTES,
      ELEMENTS_WITH_NO_TEXT_CHILDREN,
      invertObject,
      isCustomComponent,
      setStyleProp,
      canTextBeChildOfNode,
      returnFirstArg
    };
  }
});

// node_modules/html-react-parser/lib/attributes-to-props.js
var require_attributes_to_props = __commonJS({
  "node_modules/html-react-parser/lib/attributes-to-props.js"(exports, module) {
    var reactProperty = require_lib3();
    var utilities = require_utilities3();
    var UNCONTROLLED_COMPONENT_ATTRIBUTES = ["checked", "value"];
    var UNCONTROLLED_COMPONENT_NAMES = ["input", "select", "textarea"];
    var VALUE_ONLY_INPUTS = {
      reset: true,
      submit: true
    };
    module.exports = function attributesToProps2(attributes, nodeName) {
      attributes = attributes || {};
      var attributeName;
      var attributeNameLowerCased;
      var attributeValue;
      var propName;
      var propertyInfo;
      var props = {};
      var inputIsValueOnly = attributes.type && VALUE_ONLY_INPUTS[attributes.type];
      for (attributeName in attributes) {
        attributeValue = attributes[attributeName];
        if (reactProperty.isCustomAttribute(attributeName)) {
          props[attributeName] = attributeValue;
          continue;
        }
        attributeNameLowerCased = attributeName.toLowerCase();
        propName = getPropName(attributeNameLowerCased);
        if (propName) {
          propertyInfo = reactProperty.getPropertyInfo(propName);
          if (UNCONTROLLED_COMPONENT_ATTRIBUTES.indexOf(propName) !== -1 && UNCONTROLLED_COMPONENT_NAMES.indexOf(nodeName) !== -1 && !inputIsValueOnly) {
            propName = getPropName("default" + attributeNameLowerCased);
          }
          props[propName] = attributeValue;
          switch (propertyInfo && propertyInfo.type) {
            case reactProperty.BOOLEAN:
              props[propName] = true;
              break;
            case reactProperty.OVERLOADED_BOOLEAN:
              if (attributeValue === "") {
                props[propName] = true;
              }
              break;
          }
          continue;
        }
        if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
          props[attributeName] = attributeValue;
        }
      }
      utilities.setStyleProp(attributes.style, props);
      return props;
    };
    function getPropName(attributeName) {
      return reactProperty.possibleStandardNames[attributeName];
    }
  }
});

// node_modules/html-react-parser/lib/dom-to-react.js
var require_dom_to_react = __commonJS({
  "node_modules/html-react-parser/lib/dom-to-react.js"(exports, module) {
    var React = require_react();
    var attributesToProps2 = require_attributes_to_props();
    var utilities = require_utilities3();
    var setStyleProp = utilities.setStyleProp;
    var canTextBeChildOfNode = utilities.canTextBeChildOfNode;
    function domToReact2(nodes, options) {
      options = options || {};
      var library = options.library || React;
      var cloneElement = library.cloneElement;
      var createElement = library.createElement;
      var isValidElement = library.isValidElement;
      var result = [];
      var node;
      var isWhitespace;
      var hasReplace = typeof options.replace === "function";
      var transform = options.transform || utilities.returnFirstArg;
      var replaceElement;
      var props;
      var children;
      var trim = options.trim;
      for (var i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        if (hasReplace) {
          replaceElement = options.replace(node);
          if (isValidElement(replaceElement)) {
            if (len > 1) {
              replaceElement = cloneElement(replaceElement, {
                key: replaceElement.key || i
              });
            }
            result.push(transform(replaceElement, node, i));
            continue;
          }
        }
        if (node.type === "text") {
          isWhitespace = !node.data.trim().length;
          if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
            continue;
          }
          if (trim && isWhitespace) {
            continue;
          }
          result.push(transform(node.data, node, i));
          continue;
        }
        props = node.attribs;
        if (skipAttributesToProps(node)) {
          setStyleProp(props.style, props);
        } else if (props) {
          props = attributesToProps2(props, node.name);
        }
        children = null;
        switch (node.type) {
          case "script":
          case "style":
            if (node.children[0]) {
              props.dangerouslySetInnerHTML = {
                __html: node.children[0].data
              };
            }
            break;
          case "tag":
            if (node.name === "textarea" && node.children[0]) {
              props.defaultValue = node.children[0].data;
            } else if (node.children && node.children.length) {
              children = domToReact2(node.children, options);
            }
            break;
          default:
            continue;
        }
        if (len > 1) {
          props.key = i;
        }
        result.push(transform(createElement(node.name, props, children), node, i));
      }
      return result.length === 1 ? result[0] : result;
    }
    function skipAttributesToProps(node) {
      return utilities.PRESERVE_CUSTOM_ATTRIBUTES && node.type === "tag" && utilities.isCustomComponent(node.name, node.attribs);
    }
    module.exports = domToReact2;
  }
});

// node_modules/html-react-parser/index.js
var require_html_react_parser = __commonJS({
  "node_modules/html-react-parser/index.js"(exports, module) {
    var domhandler = require_lib2();
    var htmlToDOM2 = require_html_to_dom();
    var attributesToProps2 = require_attributes_to_props();
    var domToReact2 = require_dom_to_react();
    htmlToDOM2 = /* istanbul ignore next */
    typeof htmlToDOM2.default === "function" ? htmlToDOM2.default : htmlToDOM2;
    var domParserOptions = { lowerCaseAttributeNames: false };
    function HTMLReactParser2(html, options) {
      if (typeof html !== "string") {
        throw new TypeError("First argument must be a string");
      }
      if (html === "") {
        return [];
      }
      options = options || {};
      return domToReact2(
        htmlToDOM2(html, options.htmlparser2 || domParserOptions),
        options
      );
    }
    HTMLReactParser2.domToReact = domToReact2;
    HTMLReactParser2.htmlToDOM = htmlToDOM2;
    HTMLReactParser2.attributesToProps = attributesToProps2;
    HTMLReactParser2.Comment = domhandler.Comment;
    HTMLReactParser2.Element = domhandler.Element;
    HTMLReactParser2.ProcessingInstruction = domhandler.ProcessingInstruction;
    HTMLReactParser2.Text = domhandler.Text;
    module.exports = HTMLReactParser2;
    HTMLReactParser2.default = HTMLReactParser2;
  }
});

// node_modules/html-react-parser/index.mjs
var import_index = __toESM(require_html_react_parser(), 1);
var domToReact = import_index.default.domToReact;
var htmlToDOM = import_index.default.htmlToDOM;
var attributesToProps = import_index.default.attributesToProps;
var Comment = import_index.default.Comment;
var Element = import_index.default.Element;
var ProcessingInstruction = import_index.default.ProcessingInstruction;
var Text = import_index.default.Text;
var html_react_parser_default = import_index.default;
export {
  Comment,
  Element,
  ProcessingInstruction,
  Text,
  attributesToProps,
  html_react_parser_default as default,
  domToReact,
  htmlToDOM
};
//# sourceMappingURL=html-react-parser.js.map
