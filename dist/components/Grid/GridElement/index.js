'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Col = exports.Row = exports.GridElement = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridElement = exports.GridElement = function (_Component) {
    _inherits(GridElement, _Component);

    function GridElement(props) {
        _classCallCheck(this, GridElement);

        var _this = _possibleConstructorReturn(this, (GridElement.__proto__ || Object.getPrototypeOf(GridElement)).call(this, props));

        _this.style = props.style;
        _this.className = props.className || '';

        _this.children = props.children;
        if (!Array.isArray(_this.children)) _this.children = [_this.children];

        _this.maxWidthPossible = props.maxwidth || props.width || 1;
        _this.maxHeightPossible = props.maxheight || props.width || 1;

        _this.state = {
            col: props.col || 'auto',
            row: props.row || 'auto',
            width: props.width || 1,
            height: props.height || 1,
            isFullWidth: props.fullWidth,
            isFullHeight: props.fullHeight
        };
        return _this;
    }

    _createClass(GridElement, [{
        key: 'checkIfFullWidth',
        value: function checkIfFullWidth() {
            if (this.state.isFullWidth || this.state.width === 'max') {
                this.state.width = this.maxWidthPossible;
            }
        }
    }, {
        key: 'checkIfFullHeight',
        value: function checkIfFullHeight() {
            if (this.state.isFullHeight || this.state.height === 'max') {
                this.state.height = this.maxHeightPossible;
            }
        }
    }, {
        key: 'getStyle',
        value: function getStyle() {
            this.checkIfFullWidth();
            this.checkIfFullHeight();

            var style = {
                gridColumn: this.state.col + ' / span ' + this.state.width,
                gridRow: this.state.row + ' / span ' + this.state.height
            };

            return _extends({}, style, this.style);
        }
    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'grid-element' + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.getClassName(), style: this.getStyle() },
                this.children
            );
        }
    }]);

    return GridElement;
}(_react.Component);

var Row = exports.Row = function (_GridElement) {
    _inherits(Row, _GridElement);

    function Row(props) {
        _classCallCheck(this, Row);

        var _this2 = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

        _this2.state.row = props.pos || props.row || _this2.state.row;
        _this2.state.isFullWidth = true;
        return _this2;
    }

    _createClass(Row, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'grid-row' + (this.className && ' ' + this.className);
        }
    }]);

    return Row;
}(GridElement);

var Col = exports.Col = function (_GridElement2) {
    _inherits(Col, _GridElement2);

    function Col(props) {
        _classCallCheck(this, Col);

        var _this3 = _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).call(this, props));

        _this3.state.col = props.pos || props.col || _this3.state.col;
        _this3.state.isFullHeight = true;
        return _this3;
    }

    _createClass(Col, [{
        key: 'getClassName',
        value: function getClassName() {
            return 'grid-col' + (this.className && ' ' + this.className);
        }
    }]);

    return Col;
}(GridElement);