Alegrify UI Components
----------

**lib/alert.js**

### 1. Alert

<Alert />

Show a short and temporary message

```jsx
<Alert
  open={true}
>
  Message sent
</Alert>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Content of the alert
className|string|no||Additional classnames
open|bool|no||Show the alert?
-----
**lib/article.js**

### 1. Article

<Article />

Simple HTML article.

Full width on smaller viewports, 2/3 on larger viewports

```jsx
<Article>
  Amazing content
</Article>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Content of the article
className|string|no||Additional classnames
-----
**lib/aside.js**

### 1. Aside

<Aside />

Simple HTML aside

Small viewports: full width,

Large viewports: 1/3 width

```jsx
<Aside>
 Some extra information on the side
</Aside>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Content of the aside
className|string|no||Additional classnames
-----
**lib/button.js**

### 1. Button

<Button />

Regular HTML button

```jsx
<Button
  primary
>
 Hi, I'm a primary button! 🎉
</Button>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Button text / button content
className|string|no||Additional classnames
primary|bool|no|false|Is this a primary button?
full|bool|no|false|Is this a full width button?
small|bool|no|false|Is this a small variant button?
type|string|no|&lt;See the source code&gt;|button|submit
disabled|bool|no|false|Disabled?
onClick|func|no||Click action
-----
**lib/card.js**

### 1. Card

<Card />

Card component

Consists out of a header, content and footer

```jsx
<Card
 title="Card title"
 footer={<FooterComponent />}
>
  <P>
    Card content
  </P>
</Card>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Card content
footer|union|no||Footer component
className|string|no||Additional classnames
small|bool|no|false|Small card variant
title|string|no||Card title
headerImage|string|no||Background image of the card header
-----
**lib/checkbox.js**

### 1. Checkbox

<Checkbox />

```jsx
<Checkbox
 id="my_checkbox"
 name="my_checkbox"
 checked={false}
>
  I agree to GDPR, cookie banners, my local law and the fact that bears have feelings
</Checkbox>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||input id
name|string|yes||input name
children|union|yes||Label content checkbox
disabled|bool|no||Is checkbox disabled?
checked|bool|no||Is checkbox checked?
className|string|no||Additional classnames
-----
**lib/date-indicator.js**

### 1. DateIndicator

<DateIndicator />

```jsx
<DateIndicator
  date={'2018-10-28T00:00:00'}
/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
date|union|no|&lt;See the source code&gt;|Content
className|string|no|&lt;See the source code&gt;|Additional classnames
-----
**lib/dialog.js**

### 1. Dialog

<Dialog />

```jsx
<Dialog
  open={true}
>
  Some dialog content
</Dialog>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Content
className|string|no||Additional classnames
open|bool|no|false|Should the dialog be shown?
-----
**lib/dropdown-item.js**

### 1. DropdownItem

```jsx
<DropdownItem
 id="cookies"
 name="cookies"
 value="cookies"
>
     cookies
</DropdownItem>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|yes||Value of the item
id|string|yes||Id of the item
children|union|yes||Content for item
-----
**lib/dropdown.js**

### 1. Dropdown

```jsx
<Dropdown>
     <DropdownItem
         value="cookies"
     >
         Cookies
     </DropdownItem>
     <DropdownItem
         value="apples"
     >
         Apples
     </DropdownItem>
</Dropdown>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||Id of the dropdown
name|string|yes||Name of the dropdown
children|union|yes||Items for the dropdown
className|string|no||Additional classnames
value|string|no|null|Selected value of the dropdown
placeholder|string|no|&lt;See the source code&gt;|Placeholder message for dropdown label
disabled|bool|no|false|Should the dropdown be disabled?
onValueChange|func|no||Gets triggered when value changes
Passes value string as argument
multiSelect||no|false|
-----
**lib/footer.js**

### 1. Footer

```jsx
 <Footer
     links={[
         { href: '/', title: 'Home', label: 'Home' },
         { href: '/info', title: 'Info', label: 'Info' },
     ]}
 >
     <Logo />
 </Footer>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Children to add on the end of the footer
className|string|no||Additional classnames
links|arrayOf|no||List of links to show in the footer
logo|node|no||Logo component
-----
**lib/grid.js**

### 1. Grid

<Grid />

```jsx
<Grid
  reversed
>
  <Article
     className="alegrify-grid__cell alegrify-grid__cell--8"
  />
  <Aside
     className="alegrify-grid__cell alegrify-grid__cell--4"
  />
</Grid>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Content
className|string|no||Additional classnames
-----
**lib/historic-item.js**

### 1. HistoricItem

```jsx
<HistoricItem
  date="2018-10-28T09:00:00"
>
    <H2>Something interesting happened</H2>
    <P>Lorem ipsum...</P>
</HistoricItem>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|no|null|Content for the historic item
className|string|no|&lt;See the source code&gt;|Additional classnames
date|union|no|&lt;See the source code&gt;|Date to show / When did this occur?
-----
**lib/input.js**

### 1. Input

<Input />

```jsx
<Input
  id="my_input"
  name="my_input"
  multiline={true}
  value="default value"
/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|yes||Value to show in the input
className|string|no||Additional classnames
type|string|no|&lt;See the source code&gt;|Input type
placeholder|string|no||Input placeholder
full|bool|no||100% width?
multiline|bool|no||Use textarea instead of input
id|string|yes||Input id
name|string|yes||Input name
onValueChange|func|no||On value change method (passes value)
onKeyUp|func|no||Native onKeyUp event
onKeyDown|func|no||Native onKeyDown event
onFocus|func|no||Native onFocus event
onBlur|func|no||Native onBlur event
-----
**lib/label.js**

### 1. Label

<Label />

```jsx
<Label
  htmlFor="input_id"
  error
>
  Something went wrong
</Label>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Label content
className|string|no||Additional classnames
htmlFor|string|no||for attribute referring to a form element
error|bool|no|false|Is this an error label?
-----
**lib/main.js**

### 1. Main

<Main />

```jsx
<Main>
  Page content...
</Main>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||Main content
className|string|no||Additional classnames
-----
**lib/number-input.js**

### 1. NumberInput

<NumberInput />

```jsx
<NumberInput
  id="number_input"
  name="number_input"
  min={1}
  value={6}
  max={10}
/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no||Additional classnames
id|string|yes||Input id
name|string|yes||Input name
value|number|no|0|Input value, must be a number
disabled|bool|no|false|Is input disabled?
wide|bool|no|false|Is this a wide variant?
full|bool|no|false|100% width?
min|number|no|0|Min value
max|number|no|10|Max value
onValueChange|func|no||On value change, param: number value
-----
**lib/radio.js**

### 1. Radio

<Radio />

```jsx
<Radio
  name="my_radio"
  id="my_radio"
  checked={true}
>
  Option value
</Radio>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||Input id
name|string|yes||Input value
children|union|yes||Radio label content
disabled|bool|no||Is radio disabled?
checked|bool|no||Is radio checked?
className|string|no||Additional classnames
-----
**lib/range-input.js**

### 1. RangeInput

<RangeInput />

```jsx
<RangeInput
  id="my_range_input"
  name="my_range_input"
  min={1}
  max={10}
  value={6}
/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no||Additional classnames
id|string|yes||Input id
name|string|yes||Input name
value|number|no||Input value
disabled|bool|no||Is range input disabled?
lowIndicator|string|no||Indicator at the start of the range input
highIndicator|string|no||Indicator at the end of the range input
min|number|no|1|Start of the range
max|number|no|10|End of the range
step|number|no|1|Range step
onValueChange|func|no||On value change, param: number
-----
**lib/status-input.js**

### 1. StatusInput

<StatusInput />

```jsx
<StatusInput

/>
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no||
placeholder|string|no||
name|string|yes||
id|string|yes||
onValueChange|func|no||
onFocus|func|no||
onBlur|func|no||
actions|arrayOf|no||
-----
**lib/week-schedule/index.js**

### 1. WeekSchedule




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no||
ranges|arrayOf|no||
cellHeight|number|no|DEFAULT_CELL_HEIGHT|
hoursPerCell|number|no|DEFAULT_HOURS_PER_CELL|
cellsPerTimeLabel|number|no|DEFAULT_CELLS_PER_TIME_LABEL|
onChange|func|yes||
-----
**lib/week-schedule/view-day.js**

### 1. WeekScheduleViewDay

<WeekScheduleViewDay />   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|no||
-----
**lib/week-schedule/view-days.js**

### 1. WeekScheduleViewDays

<WeekScheduleViewDays />   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
weekdayLabels|arrayOf|no|DEFAULT_WEEKDAY_LABELS|
-----
**lib/week-schedule/view-empty-cell.js**

### 1. WeekScheduleViewEmptyCell

<WeekScheduleViewEmptyCell />   




-----
**lib/week-schedule/view-range.js**

### 1. WeekScheduleViewRange

<WeekScheduleViewRange />   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onMouseDown|func|no||
cellHeight|number|no||
hoursPerCell|number|no||
range|object|no||
-----
**lib/week-schedule/view-time.js**

### 1. WeekScheduleViewTime

<WeekScheduleViewTime />   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|no||
-----
**lib/week-schedule/view-week-grid-body.js**

### 1. WeekScheduleViewWeekGridBody

<WeekScheduleViewWeekGridBody />   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
cellsPerTimeLabel|number|no||
cellHeight|number|no||
-----
**lib/week-schedule/view-week-grid.js**

### 1. WeekScheduleViewWeekGrid

<WeekScheduleViewWeekGrid />   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onDoubleClick|func|no||
cellsPerTimeLabel|number|no||
cellHeight|number|no||
tableRef|func|no||
-----
**lib/week-schedule/view.js**

### 1. WeekScheduleView

<WeekScheduleView />   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onGenericMouseMove|func|no||
onDoubleClick|func|no||
tableRef|func|no||
cellHeight|number|no||
hoursPerCell|number|no||
cellsPerTimeLabel|number|no||
ranges|arrayOf|no||
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
