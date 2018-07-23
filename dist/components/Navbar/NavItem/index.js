'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavIcon = exports.NavLabel = exports.NavLogo = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLogo = exports.NavLogo = function NavLogo(_ref) {
    var children = _ref.children,
        imgSrc = _ref.imgSrc,
        className = _ref.className;

    if (!children && !imgSrc) return null;
    return imgSrc ? _react2.default.createElement('img', { className: 'navbar-element logo', src: imgSrc, alt: children }) : _react2.default.createElement(
        'a',
        { className: 'navbar-element brand', href: '/' },
        children
    );
};

var NavLabel = exports.NavLabel = function NavLabel(_ref2) {
    var label = _ref2.label,
        route = _ref2.route,
        className = _ref2.className;

    return _react2.default.createElement(
        'a',
        { className: 'navbar-element label', href: route },
        label
    );
};

var NavIcon = exports.NavIcon = function NavIcon(_ref3) {
    var icon = _ref3.icon,
        route = _ref3.route,
        className = _ref3.className,
        small = _ref3.small,
        big = _ref3.big,
        large = _ref3.large;

    return _react2.default.createElement(
        'a',
        { className: 'navbar-element icon' + (className ? ' ' + className : ''), href: route },
        _react2.default.createElement(
            'i',
            { className: 'material-icons',
                style: { fontSize: large ? '2.35rem' : big ? '2.05rem' : small ? '1.55rem' : '1.75rem' }
            },
            icon
        )
    );
};