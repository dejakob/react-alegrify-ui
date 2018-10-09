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
@param {Object} props   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||
className|string|no||
htmlFor|string|no||
error|bool|no||
-----
**lib/main.js**

### 1. Main

<Main />
@param {Object} props   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|union|yes||
className|string|no||
-----
**lib/number-input.js**

### 1. NumberInput

<NumberInput />
@param {Object} props   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no||
id|string|yes||
name|string|yes||
value|number|no||
disabled|bool|no||
wide|bool|no||
full|bool|no||
min|number|no||
max|number|no||
onValueChange|func|no||
-----
**lib/radio.js**

### 1. Radio

<Radio />
@param {Object} props   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||
name|string|yes||
children|union|yes||
disabled|bool|no||
checked|bool|no||
className|string|no||
-----
**lib/range-input.js**

### 1. RangeInput

<RangeInput />
@param {Object} props   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no||
id|string|yes||
name|string|yes||
value|number|no||
disabled|bool|no||
lowIndicator|string|no||
highIndicator|string|no||
min|number|no||
max|number|no||
step|number|no||
onValueChange|func|no||
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
