'use strict'
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var react_emotion_1 = __importStar(require('react-emotion'))
var dialog_1 = __importDefault(require('./dialog'))
var buttons_1 = require('./buttons')
var hideOnMobile = react_emotion_1.css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = react_emotion_1.default('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = react_emotion_1.default('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = react_emotion_1.default('th')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ],
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ]
    ))
)
var RowHeading = react_emotion_1.default('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = react_emotion_1.default('tr')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ],
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ]
    ))
)
var InputCell = react_emotion_1.default('td')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n'
      ],
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n'
      ]
    ))
)
var PreferenceDialog = /** @class */ (function(_super) {
  __extends(PreferenceDialog, _super)
  function PreferenceDialog() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.handleChange = function(e) {
      var onChange = _this.props.onChange
      onChange(e.target.name, e.target.value === 'true')
    }
    _this.handleSubmit = function(e) {
      var _a = _this.props,
        onSave = _a.onSave,
        preferences = _a.preferences,
        marketingAndAnalytics = _a.marketingAndAnalytics,
        advertising = _a.advertising,
        functional = _a.functional,
        customCategories = _a.customCategories
      e.preventDefault()
      // Safe guard against browsers that don't prevent the
      // submission of invalid forms (Safari < 10.1)
      if (
        !customCategories &&
        (marketingAndAnalytics === null || advertising === null || functional === null)
      ) {
        return
      }
      // Safe guard against custom categories being null
      if (
        customCategories &&
        Object.keys(customCategories).some(function(category) {
          return preferences[category] === null
        })
      ) {
        return
      }
      onSave()
    }
    return _this
  }
  PreferenceDialog.prototype.render = function() {
    var _this = this
    var _a = this.props,
      innerRef = _a.innerRef,
      onCancel = _a.onCancel,
      marketingDestinations = _a.marketingDestinations,
      advertisingDestinations = _a.advertisingDestinations,
      functionalDestinations = _a.functionalDestinations,
      marketingAndAnalytics = _a.marketingAndAnalytics,
      advertising = _a.advertising,
      functional = _a.functional,
      customCategories = _a.customCategories,
      destinations = _a.destinations,
      title = _a.title,
      content = _a.content,
      preferences = _a.preferences
    var buttons = react_1.default.createElement(
      'div',
      null,
      react_1.default.createElement(
        buttons_1.DefaultButton,
        { type: 'button', onClick: onCancel },
        'Fortryd'
      ),
      react_1.default.createElement(buttons_1.GreenButton, { type: 'submit' }, 'Gem')
    )
    return react_1.default.createElement(
      dialog_1.default,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit
      },
      content,
      react_1.default.createElement(
        TableScroll,
        null,
        react_1.default.createElement(
          Table,
          null,
          react_1.default.createElement(
            'thead',
            null,
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Tillad'),
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Kategori'),
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Form\u00E5l'),
              react_1.default.createElement(
                ColumnHeading,
                { scope: 'col', className: hideOnMobile },
                'V\u00E6rkt\u00F8j'
              )
            )
          ),
          react_1.default.createElement(
            'tbody',
            null,
            !customCategories &&
              react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'true',
                        checked: functional === true,
                        onChange: this.handleChange,
                        'aria-label': 'Tillad funktionel tracking',
                        required: true
                      }),
                      ' ',
                      'Ja'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'false',
                        checked: functional === false,
                        onChange: this.handleChange,
                        'aria-label': 'Afvis funktionel tracking',
                        required: true
                      }),
                      ' ',
                      'Nej'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, 'Funktionelle'),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'Funktionelle cookies hj\u00E6lper os med at monitorere vores hjemmeside. Funktionelle cookies g\u00F8r det eksempelvis ogs\u00E5 muligt at chatte med os.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    functionalDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'true',
                        checked: marketingAndAnalytics === true,
                        onChange: this.handleChange,
                        'aria-label': 'Tillad marketing og statistisk tracking',
                        required: true
                      }),
                      ' ',
                      'Ja'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'false',
                        checked: marketingAndAnalytics === false,
                        onChange: this.handleChange,
                        'aria-label': 'Afvis marketing og statistisk tracking',
                        required: true
                      }),
                      ' ',
                      'Nej'
                    )
                  ),
                  react_1.default.createElement(
                    RowHeading,
                    { scope: 'row' },
                    'Marketing og statistiske'
                  ),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'Vi indsamler oplysninger om, hvordan du interagerer med hjemmesiden, herunder hvor ofte du bes\u00F8ger siden, og hvilke sider du kigger p\u00E5. Det g\u00F8r vi for at kunne optimere design, brugervenlighed og styrke effektiviteten af hjemmesiden. Derudover bruger vi oplysningerne til at give dig personaliseret indhold og udarbejde analyser.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    marketingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'true',
                        checked: advertising === true,
                        onChange: this.handleChange,
                        'aria-label': 'Tillad annoncerings tracking',
                        required: true
                      }),
                      ' ',
                      'Ja'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'false',
                        checked: advertising === false,
                        onChange: this.handleChange,
                        'aria-label': 'Afvis annoncerings tracking',
                        required: true
                      }),
                      ' ',
                      'Nej'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, 'Annoncering'),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'Vi indsamler oplysninger om dine interesser, herunder hvilke sider og annoncer du klikker p\u00E5, hvilke produkter eller ydelser du viser interesse for, eller k\u00F8ber, p\u00E5 denne og andre hjemmesider. Det g\u00F8r vi for at kunne vise dig annoncer, der er relevante for dig og dine interesser. For at kunne vise dig m\u00E5lrettede annoncer p\u00E5 denne og andre hjemmesider, samarbejder vi med andre virksomheder, som vi deler oplysninger med.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    advertisingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              ),
            customCategories &&
              Object.entries(customCategories).map(function(_a) {
                var categoryName = _a[0],
                  _b = _a[1],
                  integrations = _b.integrations,
                  purpose = _b.purpose
                return react_1.default.createElement(
                  Row,
                  { key: categoryName },
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'true',
                        checked: preferences[categoryName] === true,
                        onChange: _this.handleChange,
                        'aria-label': 'Tillad "' + categoryName + '" tracking',
                        required: true
                      }),
                      ' ',
                      'Ja'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'false',
                        checked: preferences[categoryName] === false,
                        onChange: _this.handleChange,
                        'aria-label': 'Afvis "' + categoryName + '" tracking',
                        required: true
                      }),
                      ' ',
                      'Nej'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, categoryName),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement('p', null, purpose)
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    destinations
                      .filter(function(d) {
                        return integrations.includes(d.id)
                      })
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              }),
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement('td', null, 'N/A'),
              react_1.default.createElement(RowHeading, { scope: 'row' }, 'N\u00F8dvendige'),
              react_1.default.createElement(
                'td',
                null,
                react_1.default.createElement(
                  'p',
                  null,
                  'N\u00F8dvendige cookies sikrer, at hjemmesiden fungerer, som den skal. Vi gemmer eksempelvis dine cookie pr\u00E6ferencer som en cookie, s\u00E5 vi kan huske dine indstillinger til n\u00E6ste gang du bes\u00F8ger vores hjemmeside.'
                )
              ),
              react_1.default.createElement('td', { className: hideOnMobile })
            )
          )
        )
      )
    )
  }
  PreferenceDialog.displayName = 'PreferenceDialog'
  PreferenceDialog.defaultProps = {
    marketingAndAnalytics: null,
    advertising: null,
    functional: null
  }
  return PreferenceDialog
})(react_1.PureComponent)
exports.default = PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyw2REFBMkM7QUFDM0Msb0RBQTZCO0FBQzdCLHFDQUFzRDtBQUd0RCxJQUFNLFlBQVksR0FBRyxtQkFBRywrSEFBQSw0REFJdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxLQUFLLENBQUMsaUhBQUEsOENBR2hDLElBQUEsQ0FBQTtBQUVELElBQU0sS0FBSyxHQUFHLHVCQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyxrTEFBQSwrR0FNakMsSUFBQSxDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUcsdUJBQU0sQ0FBQyxJQUFJLENBQUMsb0hBQUEsaURBRzlCLElBQUEsQ0FBQTtBQUVELElBQU0sR0FBRyxHQUFHLHVCQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyw0TUFBQSx5SUFTN0IsSUFBQSxDQUFBO0FBb0JEO0lBQThDLG9DQUF3QztJQUF0RjtRQUFBLHFFQXlSQztRQWpDQyxrQkFBWSxHQUFHLFVBQUEsQ0FBQztZQUNOLElBQUEsK0JBQVEsQ0FBZTtZQUMvQixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFBO1FBRUQsa0JBQVksR0FBRyxVQUFDLENBQW1DO1lBQzNDLElBQUEsZ0JBT1EsRUFOWixr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
