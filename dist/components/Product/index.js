'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ProductItem = require('./ProductItem');

Object.keys(_ProductItem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _ProductItem[key];
        }
    });
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid2 = require('../Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

require('./index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = function (_Grid) {
    _inherits(Product, _Grid);

    function Product(props) {
        _classCallCheck(this, Product);

        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));

        _this.reverted = props.reverted;
        return _this;
    }

    _createClass(Product, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'product' + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            if (this.reverted) {
                this.children = this.children.map(function (element) {
                    return _extends({}, element, { props: _extends({}, element.props, { reverted: _this2.reverted }) });
                });
            }
            return this.children;
        }
    }]);

    return Product;
}(_Grid3.default);

exports.default = Product;