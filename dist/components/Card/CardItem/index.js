"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardFooter = exports.CardDescription = exports.CardImage = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FooterItem = require("../../Footer/FooterItem");

var _Footer2 = require("../../Footer");

var _Footer3 = _interopRequireDefault(_Footer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardImage = exports.CardImage = function (_Component) {
    _inherits(CardImage, _Component);

    function CardImage(props) {
        _classCallCheck(this, CardImage);

        var _this = _possibleConstructorReturn(this, (CardImage.__proto__ || Object.getPrototypeOf(CardImage)).call(this, props));

        _this.className = props.className;
        _this.source = props.src;
        return _this;
    }

    _createClass(CardImage, [{
        key: "getClassName",
        value: function getClassName() {
            return "card-image h-align-center" + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("img", { src: this.source, className: this.getClassName(), style: { maxHeight: '50rem' } });
        }
    }]);

    return CardImage;
}(_react.Component);

var CardDescription = exports.CardDescription = function (_Component2) {
    _inherits(CardDescription, _Component2);

    function CardDescription(props) {
        _classCallCheck(this, CardDescription);

        var _this2 = _possibleConstructorReturn(this, (CardDescription.__proto__ || Object.getPrototypeOf(CardDescription)).call(this, props));

        _this2.className = props.className;
        _this2.children = props.children;
        return _this2;
    }

    _createClass(CardDescription, [{
        key: "getClassName",
        value: function getClassName() {
            return "card-description h-align-center" + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: this.getClassName() },
                this.children
            );
        }
    }]);

    return CardDescription;
}(_react.Component);

var CardFooter = exports.CardFooter = function (_Footer) {
    _inherits(CardFooter, _Footer);

    function CardFooter() {
        _classCallCheck(this, CardFooter);

        return _possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
    }

    _createClass(CardFooter, [{
        key: "getClassName",
        value: function getClassName() {
            return "footer h-align-center" + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            return _react2.default.createElement(
                _FooterItem.FooterLine,
                { className: this.getClassName() },
                _get(CardFooter.prototype.__proto__ || Object.getPrototypeOf(CardFooter.prototype), "renderChildren", this).call(this)
            );
        }
    }]);

    return CardFooter;
}(_Footer3.default);