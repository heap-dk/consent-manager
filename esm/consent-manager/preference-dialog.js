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
import React, { PureComponent } from 'react'
import styled, { css } from 'react-emotion'
import Dialog from './dialog'
import { DefaultButton, GreenButton } from './buttons'
var hideOnMobile = css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = styled('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = styled('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = styled('th')(
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
var RowHeading = styled('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = styled('tr')(
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
var InputCell = styled('td')(
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
    var buttons = React.createElement(
      'div',
      null,
      React.createElement(DefaultButton, { type: 'button', onClick: onCancel }, 'Fortryd'),
      React.createElement(GreenButton, { type: 'submit' }, 'Gem')
    )
    return React.createElement(
      Dialog,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit
      },
      content,
      React.createElement(
        TableScroll,
        null,
        React.createElement(
          Table,
          null,
          React.createElement(
            'thead',
            null,
            React.createElement(
              Row,
              null,
              React.createElement(ColumnHeading, { scope: 'col' }, 'Tillad'),
              React.createElement(ColumnHeading, { scope: 'col' }, 'Kategori'),
              React.createElement(ColumnHeading, { scope: 'col' }, 'Form\u00E5l'),
              React.createElement(
                ColumnHeading,
                { scope: 'col', className: hideOnMobile },
                'V\u00E6rkt\u00F8j'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            !customCategories &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, 'Funktionelle'),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      'Funktionelle cookies hj\u00E6lper os med at monitorere vores hjemmeside. Funktionelle cookies g\u00F8r det eksempelvis ogs\u00E5 muligt at chatte med os.'
                    )
                  ),
                  React.createElement(
                    'td',
                    { className: hideOnMobile },
                    functionalDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, 'Marketing og statistiske'),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      'Vi indsamler oplysninger om, hvordan du interagerer med hjemmesiden, herunder hvor ofte du bes\u00F8ger siden, og hvilke sider du kigger p\u00E5. Det g\u00F8r vi for at kunne optimere design, brugervenlighed og styrke effektiviteten af hjemmesiden. Derudover bruger vi oplysningerne til at give dig personaliseret indhold og udarbejde analyser.'
                    )
                  ),
                  React.createElement(
                    'td',
                    { className: hideOnMobile },
                    marketingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, 'Annoncering'),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      'Vi indsamler oplysninger om dine interesser, herunder hvilke sider og annoncer du klikker p\u00E5, hvilke produkter eller ydelser du viser interesse for, eller k\u00F8ber, p\u00E5 denne og andre hjemmesider. Det g\u00F8r vi for at kunne vise dig annoncer, der er relevante for dig og dine interesser. For at kunne vise dig m\u00E5lrettede annoncer p\u00E5 denne og andre hjemmesider, samarbejder vi med andre virksomheder, som vi deler oplysninger med.'
                    )
                  ),
                  React.createElement(
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
                return React.createElement(
                  Row,
                  { key: categoryName },
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, categoryName),
                  React.createElement('td', null, React.createElement('p', null, purpose)),
                  React.createElement(
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
            React.createElement(
              Row,
              null,
              React.createElement('td', null, 'N/A'),
              React.createElement(RowHeading, { scope: 'row' }, 'N\u00F8dvendige'),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'p',
                  null,
                  'N\u00F8dvendige cookies sikrer, at hjemmesiden fungerer, som den skal. Vi gemmer eksempelvis dine cookie pr\u00E6ferencer som en cookie, s\u00E5 vi kan huske dine indstillinger til n\u00E6ste gang du bes\u00F8ger vores hjemmeside.'
                )
              ),
              React.createElement('td', { className: hideOnMobile })
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
})(PureComponent)
export default PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQzVDLE9BQU8sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzNDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUd0RCxJQUFNLFlBQVksR0FBRyxHQUFHLCtIQUFBLDREQUl2QixJQUFBLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGlIQUFBLDhDQUdoQyxJQUFBLENBQUE7QUFFRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtMQUFBLCtHQU1qQyxJQUFBLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9IQUFBLGlEQUc5QixJQUFBLENBQUE7QUFFRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDRNQUFBLHlJQVM3QixJQUFBLENBQUE7QUFvQkQ7SUFBOEMsb0NBQXdDO0lBQXRGO1FBQUEscUVBeVJDO1FBakNDLGtCQUFZLEdBQUcsVUFBQSxDQUFDO1lBQ04sSUFBQSwrQkFBUSxDQUFlO1lBQy9CLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFB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
