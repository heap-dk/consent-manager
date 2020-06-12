import React, { PureComponent } from 'react'
import styled, { css } from 'react-emotion'
import Dialog from './dialog'
import { DefaultButton, GreenButton } from './buttons'
import { Destination, CustomCategories, CategoryPreferences } from '../types'

const hideOnMobile = css`
  @media (max-width: 600px) {
    display: none;
  }
`

const TableScroll = styled('div')`
  overflow-x: auto;
  margin-top: 16px;
`

const Table = styled('table')`
  border-collapse: collapse;
  font-size: 12px;
`

const ColumnHeading = styled('th')`
  background: #f7f8fa;
  color: #1f4160;
  font-weight: 600;
  text-align: left;
  border-width: 2px;
`

const RowHeading = styled('th')`
  font-weight: normal;
  text-align: left;
`

const Row = styled('tr')`
  th,
  td {
    vertical-align: top;
    padding: 8px 12px;
    border: 1px solid rgba(67, 90, 111, 0.114);
  }
  td {
    border-top: none;
  }
`

const InputCell = styled('td')`
  input {
    vertical-align: middle;
  }
  label {
    display: block;
    margin-bottom: 4px;
    white-space: nowrap;
  }
`

interface PreferenceDialogProps {
  innerRef: (element: HTMLElement | null) => void
  onCancel: () => void
  onSave: () => void
  onChange: (name: string, value: boolean) => void
  marketingDestinations: Destination[]
  advertisingDestinations: Destination[]
  functionalDestinations: Destination[]
  marketingAndAnalytics?: boolean | null
  advertising?: boolean | null
  functional?: boolean | null
  customCategories?: CustomCategories
  destinations: Destination[]
  preferences: CategoryPreferences
  title: React.ReactNode
  content: React.ReactNode
}

export default class PreferenceDialog extends PureComponent<PreferenceDialogProps, {}> {
  static displayName = 'PreferenceDialog'

  static defaultProps = {
    marketingAndAnalytics: null,
    advertising: null,
    functional: null
  }

  render() {
    const {
      innerRef,
      onCancel,
      marketingDestinations,
      advertisingDestinations,
      functionalDestinations,
      marketingAndAnalytics,
      advertising,
      functional,
      customCategories,
      destinations,
      title,
      content,
      preferences
    } = this.props
    const buttons = (
      <div>
        <DefaultButton type="button" onClick={onCancel}>
          Fortryd
        </DefaultButton>
        <GreenButton type="submit">Gem</GreenButton>
      </div>
    )
    return (
      <Dialog
        innerRef={innerRef}
        title={title}
        buttons={buttons}
        onCancel={onCancel}
        onSubmit={this.handleSubmit}
      >
        {content}

        <TableScroll>
          <Table>
            <thead>
              <Row>
                <ColumnHeading scope="col">Tillad</ColumnHeading>
                <ColumnHeading scope="col">Kategori</ColumnHeading>
                <ColumnHeading scope="col">Formål</ColumnHeading>
                <ColumnHeading scope="col" className={hideOnMobile}>
                  Værktøj
                </ColumnHeading>
              </Row>
            </thead>

            <tbody>
              {!customCategories && (
                <>
                  <Row>
                    <InputCell>
                      <label>
                        <input
                          type="radio"
                          name="functional"
                          value="true"
                          checked={functional === true}
                          onChange={this.handleChange}
                          aria-label="Tillad funktionel tracking"
                          required
                        />{' '}
                        Ja
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="functional"
                          value="false"
                          checked={functional === false}
                          onChange={this.handleChange}
                          aria-label="Afvis funktionel tracking"
                          required
                        />{' '}
                        Nej
                      </label>
                    </InputCell>
                    <RowHeading scope="row">Funktionelle</RowHeading>
                    <td>
                      <p>
                        Funktionelle cookies hjælper os med at monitorere vores hjemmeside.
                        Funktionelle cookies gør det eksempelvis også muligt at chatte med os.
                      </p>
                    </td>
                    <td className={hideOnMobile}>
                      {functionalDestinations.map(d => d.name).join(', ')}
                    </td>
                  </Row>

                  <Row>
                    <InputCell>
                      <label>
                        <input
                          type="radio"
                          name="marketingAndAnalytics"
                          value="true"
                          checked={marketingAndAnalytics === true}
                          onChange={this.handleChange}
                          aria-label="Tillad marketing og statistisk tracking"
                          required
                        />{' '}
                        Ja
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="marketingAndAnalytics"
                          value="false"
                          checked={marketingAndAnalytics === false}
                          onChange={this.handleChange}
                          aria-label="Afvis marketing og statistisk tracking"
                          required
                        />{' '}
                        Nej
                      </label>
                    </InputCell>
                    <RowHeading scope="row">Marketing og statistiske</RowHeading>
                    <td>
                      <p>
                        Vi indsamler oplysninger om, hvordan du interagerer med hjemmesiden,
                        herunder hvor ofte du besøger siden, og hvilke sider du kigger på. Det gør
                        vi for at kunne optimere design, brugervenlighed og styrke effektiviteten af
                        hjemmesiden. Derudover bruger vi oplysningerne til at give dig
                        personaliseret indhold og udarbejde analyser.
                      </p>
                    </td>
                    <td className={hideOnMobile}>
                      {marketingDestinations.map(d => d.name).join(', ')}
                    </td>
                  </Row>

                  <Row>
                    <InputCell>
                      <label>
                        <input
                          type="radio"
                          name="advertising"
                          value="true"
                          checked={advertising === true}
                          onChange={this.handleChange}
                          aria-label="Tillad annoncerings tracking"
                          required
                        />{' '}
                        Ja
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="advertising"
                          value="false"
                          checked={advertising === false}
                          onChange={this.handleChange}
                          aria-label="Afvis annoncerings tracking"
                          required
                        />{' '}
                        Nej
                      </label>
                    </InputCell>
                    <RowHeading scope="row">Annoncering</RowHeading>
                    <td>
                      <p>
                        Vi indsamler oplysninger om dine interesser, herunder hvilke sider og
                        annoncer du klikker på, hvilke produkter eller ydelser du viser interesse
                        for, eller køber, på denne og andre hjemmesider. Det gør vi for at kunne
                        vise dig annoncer, der er relevante for dig og dine interesser. For at kunne
                        vise dig målrettede annoncer på denne og andre hjemmesider, samarbejder vi
                        med andre virksomheder, som vi deler oplysninger med.
                      </p>
                    </td>
                    <td className={hideOnMobile}>
                      {advertisingDestinations.map(d => d.name).join(', ')}
                    </td>
                  </Row>
                </>
              )}

              {customCategories &&
                Object.entries(customCategories).map(
                  ([categoryName, { integrations, purpose }]) => (
                    <Row key={categoryName}>
                      <InputCell>
                        <label>
                          <input
                            type="radio"
                            name={categoryName}
                            value="true"
                            checked={preferences[categoryName] === true}
                            onChange={this.handleChange}
                            aria-label={`Tillad "${categoryName}" tracking`}
                            required
                          />{' '}
                          Ja
                        </label>
                        <label>
                          <input
                            type="radio"
                            name={categoryName}
                            value="false"
                            checked={preferences[categoryName] === false}
                            onChange={this.handleChange}
                            aria-label={`Afvis "${categoryName}" tracking`}
                            required
                          />{' '}
                          Nej
                        </label>
                      </InputCell>
                      <RowHeading scope="row">{categoryName}</RowHeading>
                      <td>
                        <p>{purpose}</p>
                      </td>
                      <td className={hideOnMobile}>
                        {destinations
                          .filter(d => integrations.includes(d.id))
                          .map(d => d.name)
                          .join(', ')}
                      </td>
                    </Row>
                  )
                )}

              <Row>
                <td>N/A</td>
                <RowHeading scope="row">Nødvendige</RowHeading>
                <td>
                  <p>
                    Nødvendige cookies sikrer, at hjemmesiden fungerer, som den skal. Vi gemmer
                    eksempelvis dine cookie præferencer som en cookie, så vi kan huske dine
                    indstillinger til næste gang du besøger vores hjemmeside.
                  </p>
                </td>
                <td className={hideOnMobile} />
              </Row>
            </tbody>
          </Table>
        </TableScroll>
      </Dialog>
    )
  }

  handleChange = e => {
    const { onChange } = this.props
    onChange(e.target.name, e.target.value === 'true')
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const {
      onSave,
      preferences,
      marketingAndAnalytics,
      advertising,
      functional,
      customCategories
    } = this.props
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
      Object.keys(customCategories).some(category => preferences[category] === null)
    ) {
      return
    }
    onSave()
  }
}
