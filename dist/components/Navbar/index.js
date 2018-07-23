'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NavItem = require('./NavItem');

Object.keys(_NavItem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _NavItem[key];
        }
    });
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.styl');

var _Grid2 = require('../Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Grid) {
    _inherits(Navbar, _Grid);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.forceTemplate = true;
        _this.propsColumnsTemplate = _this.generateColumnsTemplate();
        _this.propsRowsTemplate = '1fr';

        _this.justifyCollapseIcon = props.justifyCollapseIcon || 'right';
        _this.collapseIcon = props.collapseIcon || 'menu';
        return _this;
    }

    _createClass(Navbar, [{
        key: 'addCollapseIconToChildren',
        value: function addCollapseIconToChildren() {
            var collaspeIconChild = _react2.default.createElement(
                _NavItem.NavIcon,
                { className: 'collapse-icon', col: this.columns.length || 0, large: true, icon: this.collapseIcon },
                this.children
            );
            this.children = [].concat(_toConsumableArray(this.children), [collaspeIconChild]);
        }
    }, {
        key: 'calculateColumnsRepartition',
        value: function calculateColumnsRepartition() {
            if (!this.children) return null;
            var columns = { start: [], left: [], center: [], right: [], end: [] };
            this.children.map(function (child) {
                columns[child.props.justify || 'left'].push(child);
            });
            this.columns = [].concat(_toConsumableArray(columns.start), _toConsumableArray(columns.left), [null], _toConsumableArray(columns.center), [null], _toConsumableArray(columns.right), _toConsumableArray(columns.end)) || this.columns;
            return this.columns;
        }
    }, {
        key: 'generateColumnsTemplate',
        value: function generateColumnsTemplate() {
            this.calculateColumnsRepartition();

            var template = { start: '', left: '', center: '', right: '', end: '' };
            this.columns.map(function (col) {
                if (col) {
                    template[col.props.justify || 'left'] += 'max-content ';
                }
            });
            return template.start + template.left + '1fr ' + template.center + '1fr ' + template.right + template.end;
        }
    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'navbar' + (this.className && ' ' + this.className);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            this.addCollapseIconToChildren();
            if (!this.children) return null;
            return this.children.map(function (element, index) {
                var col = _this2.columns.findIndex(function (col) {
                    return col === element;
                }) + 1 || element.props && element.props.col;
                return _react2.default.createElement(
                    _Grid2.GridElement,
                    { key: index, row: 1, col: col },
                    element
                );
            });
        }
    }]);

    return Navbar;
}(_Grid3.default);

exports.default = Navbar;
;