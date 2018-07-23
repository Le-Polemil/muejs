'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('../Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Navbar = require('../Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Body = require('../Body');

var _Body2 = _interopRequireDefault(_Body);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Product = require('../Product');

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Grid2.default,
                null,
                _react2.default.createElement(
                    _Grid.Row,
                    { pos: 1 },
                    _react2.default.createElement(
                        _Navbar2.default,
                        null,
                        _react2.default.createElement(
                            _Navbar.NavLogo,
                            { justify: 'left' },
                            'MueJS'
                        ),
                        _react2.default.createElement(_Navbar.NavLabel, { justify: 'right', label: 'cobelt.fr', route: 'http://cobelt.fr' }),
                        _react2.default.createElement(_Navbar.NavLabel, { justify: 'right', label: 'ophis.cobelt.fr', route: 'http://ophis.cobelt.fr' }),
                        _react2.default.createElement(_Navbar.NavLabel, { justify: 'right', label: 'Github', route: 'http://github.cobelt.fr' })
                    )
                ),
                _react2.default.createElement(
                    _Grid.Row,
                    { pos: 2 },
                    _react2.default.createElement(
                        _Body2.default,
                        { className: 'container' },
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { width: 2 },
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Card.CardImage, { src: 'https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg' }),
                                _react2.default.createElement(
                                    _Card.CardDescription,
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    )
                                ),
                                _react2.default.createElement(
                                    _Card.CardFooter,
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'More to come...'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://twitter.com/' },
                                        'twitwi'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { col: 3, width: 2 },
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Card.CardImage, { src: 'https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg' }),
                                _react2.default.createElement(
                                    _Card.CardDescription,
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    )
                                ),
                                _react2.default.createElement(
                                    _Card.CardFooter,
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'More to come...'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://twitter.com/' },
                                        'twitwi'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { col: 5, width: 2 },
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Card.CardImage, { src: 'https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg' }),
                                _react2.default.createElement(
                                    _Card.CardDescription,
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    )
                                ),
                                _react2.default.createElement(
                                    _Card.CardFooter,
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'More to come...'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://twitter.com/' },
                                        'twitwi'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { col: 7, width: 2 },
                            _react2.default.createElement(
                                _Card2.default,
                                null,
                                _react2.default.createElement(_Card.CardImage, { src: 'https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg' }),
                                _react2.default.createElement(
                                    _Card.CardDescription,
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    )
                                ),
                                _react2.default.createElement(
                                    _Card.CardFooter,
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'More to come...'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://twitter.com/' },
                                        'twitwi'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { col: 2, width: 6, className: 'bg-info' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'h-align-center' },
                                'Information'
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { width: 3 },
                            _react2.default.createElement(
                                _Product2.default,
                                null,
                                _react2.default.createElement(_Product.ProductImage, { src: 'https://i.redd.it/2t68z42blebz.jpg' }),
                                _react2.default.createElement(
                                    _Product.ProductInfo,
                                    { col: 2 },
                                    _react2.default.createElement(
                                        _Product.ProductTitle,
                                        null,
                                        'Python Regius'
                                    ),
                                    _react2.default.createElement(
                                        _Product.ProductDescription,
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { col: 6, width: 3 },
                            _react2.default.createElement(
                                _Product2.default,
                                { reverted: true },
                                _react2.default.createElement(
                                    _Product.ProductInfo,
                                    null,
                                    _react2.default.createElement(
                                        _Product.ProductTitle,
                                        null,
                                        'Python Regius'
                                    ),
                                    _react2.default.createElement(
                                        _Product.ProductDescription,
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    )
                                ),
                                _react2.default.createElement(_Product.ProductImage, { col: 2, src: 'https://i.redd.it/2t68z42blebz.jpg' })
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { col: 2, width: 3 },
                            _react2.default.createElement(
                                _Product2.default,
                                { reverted: true },
                                _react2.default.createElement(
                                    _Product.ProductInfo,
                                    null,
                                    _react2.default.createElement(
                                        _Product.ProductTitle,
                                        null,
                                        'Python Regius'
                                    ),
                                    _react2.default.createElement(
                                        _Product.ProductDescription,
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    )
                                ),
                                _react2.default.createElement(_Product.ProductImage, { col: 2, src: 'https://i.redd.it/2t68z42blebz.jpg' })
                            )
                        ),
                        _react2.default.createElement(
                            _Body.BodyElement,
                            { width: 3 },
                            _react2.default.createElement(
                                _Product2.default,
                                null,
                                _react2.default.createElement(_Product.ProductImage, { src: 'https://i.redd.it/2t68z42blebz.jpg' }),
                                _react2.default.createElement(
                                    _Product.ProductInfo,
                                    { col: 2 },
                                    _react2.default.createElement(
                                        _Product.ProductTitle,
                                        null,
                                        'Python Regius'
                                    ),
                                    _react2.default.createElement(
                                        _Product.ProductDescription,
                                        null,
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _Grid.Row,
                    { pos: 3 },
                    _react2.default.createElement(
                        _Footer2.default,
                        null,
                        _react2.default.createElement(
                            _Footer.FooterList,
                            { row: 1 },
                            _react2.default.createElement(
                                'h5',
                                null,
                                'Groupe 1'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '1'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '1'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '1'
                            )
                        ),
                        _react2.default.createElement(
                            _Footer.FooterList,
                            { className: 'social', row: 1 },
                            _react2.default.createElement(
                                'h5',
                                null,
                                'Social'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '4'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '4'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '4'
                            )
                        ),
                        _react2.default.createElement(
                            _Footer.FooterList,
                            { className: 'donation', row: 1 },
                            _react2.default.createElement(
                                'h5',
                                null,
                                'Donation'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '7'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '7'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '7'
                            )
                        ),
                        _react2.default.createElement(
                            _Footer.FooterLine,
                            null,
                            _react2.default.createElement(
                                'a',
                                { classIcon: true },
                                'fb'
                            ),
                            _react2.default.createElement(
                                'a',
                                null,
                                'twitwi'
                            ),
                            _react2.default.createElement(
                                'a',
                                null,
                                'twitwi'
                            ),
                            _react2.default.createElement(
                                'a',
                                null,
                                'twitwi'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;