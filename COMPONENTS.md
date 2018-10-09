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
footer|union|yes||Footer component
className|string|no||Additional classnames
small|bool|no|false|Small card variant
title|string|yes||Card title
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




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no||
placeholder|string|no||
onValueChange|func|no||
onFocus|func|no||
onBlur|func|no||
actions|arrayOf|no||
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
