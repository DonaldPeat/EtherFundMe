webpackHotUpdate(5,{

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(436);

var _Layout = __webpack_require__(949);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(663);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(510);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1126);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(509);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/donquixote/PROJECTS/BlockchainApps/ether-fund-react/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          campaignTitle = _props.campaignTitle,
          campaignDescription = _props.campaignDescription,
          approvalThreshold = _props.approvalThreshold;

      var items = [{
        header: campaignTitle,
        meta: 'Campaign Title',
        description: 'The title of the contract, project, or campaign.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: campaignDescription,
        meta: 'Campaign Description',
        description: 'Description of the contract terms, goal, purpose.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: manager,
        meta: 'Address of Manager',
        description: 'Manager is the creator of campaign, sets the minimum contribution and creates requests.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'Minimum contribution is the smallest amount that can be contributed to a campaign. Each contribution address has the ability to approve funding requests.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: approvalThreshold,
        meta: 'Approval Threshold',
        description: 'Percentage of contributors required to approve funding requests.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'Total number of funding requests made by campaign manager. Requests must be approved by a majority of connributors.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: approversCount,
        meta: 'Number of Contributors',
        description: 'Total number of contributors that',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'Current balance of total contributions available for funding requests.',
        style: { overflowWrap: 'break-word' }
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, ' View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  manager: summary[4],
                  approversCount: summary[3],
                  campaignTitle: summary[5],
                  campaignDescription: summary[6],
                  approvalThreshold: summary[7]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsImNhbXBhaWduVGl0bGUiLCJjYW1wYWlnbkRlc2NyaXB0aW9uIiwiYXBwcm92YWxUaHJlc2hvbGQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7a0NBa0JVO21CQVVSLEtBVlEsQUFVSDtVQVZHLEFBRVYsaUJBRlUsQUFFVjtVQUZVLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsNkJBSlUsQUFJVjtVQUpVLEFBS1YsdUJBTFUsQUFLVjtVQUxVLEFBTVYsd0JBTlUsQUFNVjtVQU5VLEFBT1YsdUJBUFUsQUFPVjtVQVBVLEFBUVYsNkJBUlUsQUFRVjtVQVJVLEFBU1YsMkJBVFUsQUFTVixBQUdGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFPWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQVhDLEFBT1osQUFJUyxBQUFnQjtBQUp6QixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBbEJDLEFBYVosQUFLUyxBQUFnQjtBQUx6QixBQUNFO2dCQU1GLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBekJDLEFBb0JaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRTtnQkFNRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQWhDQyxBQTJCWixBQUtTLEFBQWdCO0FBTHpCLEFBQ0U7Z0JBTUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0F2Q0MsQUFrQ1osQUFLUyxBQUFnQjtBQUx6QixBQUNFO2dCQU1GLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBN0NDLEFBeUNaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEN0IsQUFDVSxBQUE0QixBQUNwQztjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBcERiLEFBQWMsQUErQ1osQUFLUyxBQUFnQixBQUczQjtBQVJFLEFBQ0U7MkNBT0csQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFDOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBR0o7QUFISTs0QkFHSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWRkLEFBQ0UsQUFFRSxBQU9FLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFRZjs7Ozs7MkcsQUE5RzRCOzs7OzttQkFDckI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1QkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7bUJBQTlDO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCOzJCQUFTLFFBSEosQUFHSSxBQUFRLEFBQ2pCO2lDQUFlLFFBSlYsQUFJVSxBQUFRLEFBQ3ZCOzJCQUFTLFFBTEosQUFLSSxBQUFRLEFBQ2pCO2tDQUFnQixRQU5YLEFBTVcsQUFBUSxBQUN4QjtpQ0FBZSxRQVBWLEFBT1UsQUFBUSxBQUN2Qjt1Q0FBcUIsUUFSaEIsQUFRZ0IsQUFBUSxBQUM3QjtxQ0FBbUIsUUFUZCxBQVNjLEFBQVEsQTtBQVR0QixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTnFCLEEsQUFrSDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZG9ucXVpeG90ZS9QUk9KRUNUUy9CbG9ja2NoYWluQXBwcy9ldGhlci1mdW5kLXJlYWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/donquixote/PROJECTS/BlockchainApps/ether-fund-react/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/donquixote/PROJECTS/BlockchainApps/ether-fund-react/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zZTY3ZGYwYWM1OTkzMzQzN2FkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ODE4NGQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcbiAgICAgIGJhbGFuY2U6IHN1bW1hcnlbMV0sXG4gICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgY2FtcGFpZ25UaXRsZTogc3VtbWFyeVs1XSxcbiAgICAgIGNhbXBhaWduRGVzY3JpcHRpb246IHN1bW1hcnlbNl0sXG4gICAgICBhcHByb3ZhbFRocmVzaG9sZDogc3VtbWFyeVs3XVxuICAgIH07XG4gIH1cblxuICByZW5kZXJDYXJkcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBiYWxhbmNlLFxuICAgICAgbWFuYWdlcixcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICByZXF1ZXN0c0NvdW50LFxuICAgICAgYXBwcm92ZXJzQ291bnQsXG4gICAgICBjYW1wYWlnblRpdGxlLFxuICAgICAgY2FtcGFpZ25EZXNjcmlwdGlvbixcbiAgICAgIGFwcHJvdmFsVGhyZXNob2xkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBjYW1wYWlnblRpdGxlLFxuICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gVGl0bGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSB0aXRsZSBvZiB0aGUgY29udHJhY3QsIHByb2plY3QsIG9yIGNhbXBhaWduLicsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogY2FtcGFpZ25EZXNjcmlwdGlvbixcbiAgICAgICAgbWV0YTogJ0NhbXBhaWduIERlc2NyaXB0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBvZiB0aGUgY29udHJhY3QgdGVybXMsIGdvYWwsIHB1cnBvc2UuJyxcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBNYW5hZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ01hbmFnZXIgaXMgdGhlIGNyZWF0b3Igb2YgY2FtcGFpZ24sIHNldHMgdGhlIG1pbmltdW0gY29udHJpYnV0aW9uIGFuZCBjcmVhdGVzIHJlcXVlc3RzLicsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ01pbmltdW0gY29udHJpYnV0aW9uIGlzIHRoZSBzbWFsbGVzdCBhbW91bnQgdGhhdCBjYW4gYmUgY29udHJpYnV0ZWQgdG8gYSBjYW1wYWlnbi4gRWFjaCBjb250cmlidXRpb24gYWRkcmVzcyBoYXMgdGhlIGFiaWxpdHkgdG8gYXBwcm92ZSBmdW5kaW5nIHJlcXVlc3RzLicsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYXBwcm92YWxUaHJlc2hvbGQsXG4gICAgICAgIG1ldGE6ICdBcHByb3ZhbCBUaHJlc2hvbGQnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnUGVyY2VudGFnZSBvZiBjb250cmlidXRvcnMgcmVxdWlyZWQgdG8gYXBwcm92ZSBmdW5kaW5nIHJlcXVlc3RzLicsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdUb3RhbCBudW1iZXIgb2YgZnVuZGluZyByZXF1ZXN0cyBtYWRlIGJ5IGNhbXBhaWduIG1hbmFnZXIuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYSBtYWpvcml0eSBvZiBjb25ucmlidXRvcnMuJyxcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBDb250cmlidXRvcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RvdGFsIG51bWJlciBvZiBjb250cmlidXRvcnMgdGhhdCcsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpLFxuICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0N1cnJlbnQgYmFsYW5jZSBvZiB0b3RhbCBjb250cmlidXRpb25zIGF2YWlsYWJsZSBmb3IgZnVuZGluZyByZXF1ZXN0cy4nLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPkNhbXBhaWduIFNob3c8L2gzPlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSAvPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PiBWaWV3IFJlcXVlc3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFVQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBRUE7QUFFQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7Ozs7QUE3R0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=