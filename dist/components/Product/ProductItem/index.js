'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductFooter = exports.ProductInfo = exports.ProductTitle = exports.ProductDescription = exports.ProductImage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('../../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _GridElement6 = require('../../Grid/GridElement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductImage = exports.ProductImage = function (_GridElement) {
    _inherits(ProductImage, _GridElement);

    function ProductImage(props) {
        _classCallCheck(this, ProductImage);

        var _this = _possibleConstructorReturn(this, (ProductImage.__proto__ || Object.getPrototypeOf(ProductImage)).call(this, props));

        _this.source = props.src;
        _this.reverted = props.reverted;
        return _this;
    }

    _createClass(ProductImage, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'product-image h-align-' + (this.reverted ? 'right' : 'left') + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'render',
        value: function render() {
            this.children = _react2.default.createElement('img', { src: this.source, style: this.getStyle(), className: this.getClassName() });
            return _get(ProductImage.prototype.__proto__ || Object.getPrototypeOf(ProductImage.prototype), 'render', this).call(this);
        }
    }]);

    return ProductImage;
}(_GridElement6.GridElement);

var ProductDescription = exports.ProductDescription = function (_GridElement2) {
    _inherits(ProductDescription, _GridElement2);

    function ProductDescription(props) {
        _classCallCheck(this, ProductDescription);

        var _this2 = _possibleConstructorReturn(this, (ProductDescription.__proto__ || Object.getPrototypeOf(ProductDescription)).call(this, props));

        _this2.reverted = props.reverted;
        return _this2;
    }

    _createClass(ProductDescription, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'product-description text-align-' + (this.reverted ? 'right' : 'left') + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'getStyle',
        value: function getStyle() {
            var style = {
                alignSelf: 'center'
            };
            return _extends({}, this.style, style);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.getClassName(), style: this.getStyle() },
                _react2.default.createElement(
                    'span',
                    null,
                    this.children
                )
            );
        }
    }]);

    return ProductDescription;
}(_GridElement6.GridElement);

var ProductTitle = exports.ProductTitle = function (_GridElement3) {
    _inherits(ProductTitle, _GridElement3);

    function ProductTitle(props) {
        _classCallCheck(this, ProductTitle);

        var _this3 = _possibleConstructorReturn(this, (ProductTitle.__proto__ || Object.getPrototypeOf(ProductTitle)).call(this, props));

        _this3.reverted = props.reverted;
        return _this3;
    }

    _createClass(ProductTitle, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'product-title text-align-' + (this.reverted ? 'right' : 'left') + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'getStyle',
        value: function getStyle() {
            var style = {
                alignSelf: 'center'
            };
            return _extends({}, this.style, style);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.getClassName(), style: this.getStyle() },
                _react2.default.createElement(
                    'h4',
                    null,
                    this.children
                )
            );
        }
    }]);

    return ProductTitle;
}(_GridElement6.GridElement);

var ProductInfo = exports.ProductInfo = function (_GridElement4) {
    _inherits(ProductInfo, _GridElement4);

    function ProductInfo(props) {
        _classCallCheck(this, ProductInfo);

        var _this4 = _possibleConstructorReturn(this, (ProductInfo.__proto__ || Object.getPrototypeOf(ProductInfo)).call(this, props));

        _this4.reverted = props.reverted;
        return _this4;
    }

    _createClass(ProductInfo, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'product-info h-align-center' + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'transmitRevertedPropToChildren',
        value: function transmitRevertedPropToChildren() {
            var _this5 = this;

            if (!this.children) return null;
            if (!Array.isArray(this.children)) this.children = [this.children];
            this.children = this.children.map(function (element) {
                return _extends({}, element, { props: _extends({}, element.props, { reverted: _this5.reverted }) });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.reverted) this.transmitRevertedPropToChildren();
            return _get(ProductInfo.prototype.__proto__ || Object.getPrototypeOf(ProductInfo.prototype), 'render', this).call(this);
        }
    }]);

    return ProductInfo;
}(_GridElement6.GridElement);

var ProductFooter = exports.ProductFooter = function (_GridElement5) {
    _inherits(ProductFooter, _GridElement5);

    function ProductFooter(props) {
        _classCallCheck(this, ProductFooter);

        var _this6 = _possibleConstructorReturn(this, (ProductFooter.__proto__ || Object.getPrototypeOf(ProductFooter)).call(this, props));

        _this6.reverted = props.reverted;
        return _this6;
    }

    _createClass(ProductFooter, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'product-footer h-align-center' + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            return _react2.default.createElement(
                _Footer.FooterLine,
                { style: this.getStyle(), className: this.getClassName() },
                this.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Footer2.default,
                null,
                this.renderChildren()
            );
        }
    }]);

    return ProductFooter;
}(_GridElement6.GridElement);