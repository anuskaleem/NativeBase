"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickerNB = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

var _reactNative = require("react-native");

var _nativeBaseShoutemTheme = require("native-base-shoutem-theme");

var _lodash = require("lodash");

var _computeProps = _interopRequireDefault(require("../utils/computeProps"));

var _mapPropsToStyleNames = _interopRequireDefault(require("../utils/mapPropsToStyleNames"));

var _Text = require("./Text");

var _Radio = require("./Radio");

var _Container = require("./Container");

var _ListItem = require("./ListItem");

var _Button = require("./Button");

var _Header = require("./Header");

var _Title = require("./Title");

var _Left = require("./Left");

var _Right = require("./Right");

var _Body = require("./Body");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PickerNB =
/*#__PURE__*/
function (_Component) {
  _inherits(PickerNB, _Component);

  function PickerNB(props) {
    var _this;

    _classCallCheck(this, PickerNB);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PickerNB).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getInitialStyle", function () {
      return {
        picker: {// alignItems: 'flex-end'
        },
        pickerItem: {}
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function (children) {
      if (children && !Array.isArray(children)) {
        return [].concat(children);
      } // eslint-disable-next-line prefer-spread


      var appliedChildren = [].concat.apply([], children);
      return appliedChildren;
    });

    _this.state = {
      modalVisible: false,
      currentLabel: _this.getLabel(props),
      dataSource: _this.getChildren(props.children)
    };
    return _this;
  }

  _createClass(PickerNB, [{
    key: "getLabel",
    value: function getLabel(props) {
      var children = this.getChildren(props.children);
      var item = (0, _lodash.find)(children, function (child) {
        return child.props.value === props.selectedValue;
      });
      return (0, _lodash.get)(item, 'props.label');
    }
  }, {
    key: "getSelectedItem",
    value: function getSelectedItem() {
      var _this2 = this;

      return (0, _lodash.find)(this.props.children, function (child) {
        return child.props.value === _this2.props.selectedValue;
      });
    }
  }, {
    key: "prepareRootProps",
    value: function prepareRootProps() {
      var defaultProps = {
        style: this.getInitialStyle().picker,
        itemStyle: this.getInitialStyle().pickerItem
      };
      return (0, _computeProps.default)(this.props, defaultProps);
    }
  }, {
    key: "_setModalVisible",
    value: function _setModalVisible(visible) {
      this.setState({
        modalVisible: visible
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      return _react.default.cloneElement(this.props.iosIcon, {
        style: [{
          fontSize: 22,
          lineHeight: 26
        }, { ...this.props.iosIcon.props.style
        }]
      });
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      var _this3 = this;

      var onPress = function onPress() {
        if (_this3.props.enabled !== undefined && !_this3.props.enabled) return;

        _this3._setModalVisible(true);
      };

      var text = this.state.currentLabel ? this.state.currentLabel : this.props.placeholder;

      if (this.props.renderButton) {
        return this.props.renderButton({
          onPress: onPress,
          text: text,
          picker: this,
          selectedItem: this.getSelectedItem()
        });
      }

      return _react.default.createElement(_Button.Button, {
        style: this.props.style,
        dark: true,
        picker: true,
        transparent: true,
        onPress: onPress
      }, this.state.currentLabel ? _react.default.createElement(_Text.Text, {
        style: [this.props.textStyle],
        note: this.props.note,
        numberOfLines: 1,
        ellipsizeMode: "tail"
      }, this.state.currentLabel) : _react.default.createElement(_Text.Text, {
        style: [this.props.textStyle, this.props.placeholderStyle],
        note: this.props.note !== false,
        numberOfLines: 1,
        ellipsizeMode: "tail"
      }, this.props.placeholder), this.props.iosIcon === undefined ? null : this.renderIcon());
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this4 = this;

      return this.props.renderHeader ? this.props.renderHeader(function () {
        return _this4._setModalVisible(false);
      }) : _react.default.createElement(_Header.Header, {
        style: this.props.headerStyle
      }, _react.default.createElement(_Left.Left, null, _react.default.createElement(_Button.Button, {
        style: {
          shadowOffset: null,
          shadowColor: null,
          shadowRadius: null,
          shadowOpacity: null,
          marginLeft: 3,
          ...this.props.headerBackButtonStyle
        },
        transparent: true,
        onPress: function onPress() {
          _this4._setModalVisible(false);
        }
      }, _react.default.createElement(_Text.Text, {
        style: this.props.headerBackButtonTextStyle
      }, this.props.headerBackButtonText || "Back"))), _react.default.createElement(_Body.Body, null, _react.default.createElement(_Title.Title, {
        style: this.props.headerTitleStyle
      }, this.props.iosHeader || "Select One")), _react.default.createElement(_Right.Right, null));
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var currentLabel = this.state.currentLabel;
      var nextLabel = this.getLabel(nextProps);
      var currentDS = this.state.dataSource;
      var nextDS = this.getChildren(nextProps.children);

      if (currentLabel !== nextLabel) {
        this.setState({
          currentLabel: nextLabel
        });
      }

      if (currentDS !== nextDS) {
        this.setState({
          dataSource: nextDS
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return _react.default.createElement(_reactNative.View, {
        ref: function ref(c) {
          return _this5._root = c;
        }
      }, this.renderButton(), _react.default.createElement(_reactNative.Modal // supportedOrientations={this.props.supportedOrientations || null}
      , {
        supportedOrientations: ['portrait', 'landscape'],
        animationType: "slide",
        transparent: false,
        visible: this.state.modalVisible,
        onRequestClose: function onRequestClose() {
          _this5._setModalVisible(false);
        }
      }, _react.default.createElement(_Container.Container, {
        style: this.props.modalStyle
      }, this.renderHeader(), _react.default.createElement(_reactNative.FlatList, {
        testID: this.props.pickerListID,
        data: this.state.dataSource,
        keyExtractor: function keyExtractor(item, index) {
          return String(index);
        },
        renderItem: function renderItem(_ref) {
          var item = _ref.item;
          return _react.default.createElement(_ListItem.ListItem, {
            accessible: _this5.props.pickerAccessible,
            testID: item.props.testID,
            selected: item.props.value === _this5.props.selectedValue,
            button: true,
            style: _this5.props.itemStyle,
            onPress: function onPress() {
              _this5._setModalVisible(false);

              _this5.props.onValueChange(item.props.value);

              _this5.setState({
                current: item.props.label
              });
            }
          }, _react.default.createElement(_Left.Left, null, _react.default.createElement(_Text.Text, {
            style: _this5.props.itemTextStyle,
            testID: item.props.testID
          }, item.props.label)), _react.default.createElement(_Right.Right, null, item.props.value === _this5.props.selectedValue ? _react.default.createElement(_Radio.Radio, {
            selected: true
          }) : _react.default.createElement(_Radio.Radio, {
            selected: false
          })));
        }
      }))));
    }
  }]);

  return PickerNB;
}(_react.Component); // eslint-disable-next-line react/no-multi-comp


PickerNB.Item = (0, _createReactClass.default)({
  displayName: "Item",
  render: function render() {
    return _react.default.createElement(_reactNative.Picker.Item, this.props());
  }
});
PickerNB.propTypes = { ..._reactNative.ViewPropTypes,
  renderButton: _propTypes.default.func
};
var StyledPickerNB = (0, _nativeBaseShoutemTheme.connectStyle)('NativeBase.PickerNB', {}, _mapPropsToStyleNames.default)(PickerNB);
exports.PickerNB = StyledPickerNB;
//# sourceMappingURL=Picker.ios.js.map
