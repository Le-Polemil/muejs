'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GridElement = require('./GridElement');

Object.keys(_GridElement).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _GridElement[key];
        }
    });
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Component) {
    _inherits(Grid, _Component);

    function Grid(props) {
        _classCallCheck(this, Grid);

        var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

        _this.className = props.className || '';
        _this.style = props.style;

        _this.children = props.children;
        if (!Array.isArray(_this.children)) _this.children = [_this.children];

        _this.forceTemplate = props.forceTemplate;
        _this.propsColumnsTemplate = props.columnsTemplate;
        _this.propsRowsTemplate = props.rowsTemplate;

        return _this;
    }

    _createClass(Grid, [{
        key: 'calculateOfColumnsAndRows',
        value: function calculateOfColumnsAndRows() {
            if (!this.children) return { maxCol: 0, maxRow: 0 };
            var rows = [];
            this.children.forEach(function (child) {
                var details = {
                    col: child.props.col || 'auto',
                    row: child.props.row || 'auto',
                    width: child.props.width || 'auto',
                    height: child.props.height || 'auto'
                };
                if (!rows[details.row]) rows[details.row] = { width: 0, height: 0 }; // create row on first entry of this row

                var colSize = Grid.returnNumberOrOne(details.col) + Grid.returnNumberOrOne(details.width) - 1; // Because col n + width 1 = n +1 instead of n

                var width = details.col === 'auto' ? rows[details.row].width + colSize : Math.max(rows[details.row].width, colSize);
                var height = details.row === 'auto' ? rows[details.row].height + Grid.returnNumberOrOne(details.height) : Math.max(rows[details.row].height, Grid.returnNumberOrOne(details.height));

                rows[details.row] = { width: width, height: height };
            });
            var maxCol = 0;
            var maxRow = 0;

            rows.forEach(function (row, index) {
                maxCol = Math.max(maxCol, row.width);
                maxRow = Math.max(maxRow, Grid.returnNumberOrOne(index) + row.height - 1);
            });

            return { maxCol: maxCol, maxRow: maxRow };
        }
    }, {
        key: 'keepUpToDateChildren',
        value: function keepUpToDateChildren() {
            var _calculateOfColumnsAn = this.calculateOfColumnsAndRows(),
                maxCol = _calculateOfColumnsAn.maxCol,
                maxRow = _calculateOfColumnsAn.maxRow;

            this.maxWidth = maxCol;
            this.maxHeight = maxRow;
        }
    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'grid' + (this.className ? ' ' + this.className : '');
        }
    }, {
        key: 'getStyle',
        value: function getStyle() {
            var style = {
                gridTemplateColumns: this.forceTemplate && this.propsColumnsTemplate || 'auto-fit',
                gridTemplateRows: this.forceTemplate && this.propsRowsTemplate || 'auto-fit'
            };
            return _extends({}, style, this.style);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            if (!this.children) return null;
            return this.children.map(function (element) {
                // because element.props is not flexible
                element = _extends({}, element, { props: _extends({}, element.props, { maxwidth: _this2.maxWidth, maxheight: _this2.maxHeight }) });
                return element;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            this.keepUpToDateChildren();
            return _react2.default.createElement(
                'div',
                { className: this.getClassName(), style: this.getStyle() },
                this.renderChildren()
            );
        }
    }], [{
        key: 'returnNumberOrOne',
        value: function returnNumberOrOne(number) {
            return Number.isInteger(number) ? number : 1;
        }
    }]);

    return Grid;
}(_react.Component);

exports.default = Grid;