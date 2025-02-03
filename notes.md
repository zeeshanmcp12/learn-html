# HTML Notes

## HTML

- Hypertext Markup Language

## HTML Files

- Html file ends with .html. It can also be end at .htm but in latest version it is .html

>Note: Emmet is a toolkit that adds so many capabilities to work with HTML.
>Note: It comes by default with IDE
>Note: Lorm -> Ye likhne se Lorem ipsum wala complete text emmet ho jayega

## HTML Boilerplate Code

- Html tag is a container of some content or other HTML tags
  - `<p></p>`
- Element
  - It is everything along with the tags and it's content.
- `<!DOCTYPE html>`
  - Iska matlab hai ye `document` **HTML** ka hai.
  - Iska matlab hai k ham version 5 use kar rahe hain
- `<html>`
  - This is called root element
  - This is parent tag of head and body tags.
- `<head>`
  - In this section, we write which we don't want to display on webpage
  - It contains meta information which is useful but we don't want to make it visible on webpage.
  - It has viewport which means responsivenss of website
  - We can define our webpage title in head.
- `<body>`
  - Wo sab chezen jo data ko render karane main help karti hain.
- Tags with no closing tags
  - `<br>`

## Comments in HTML

- This is how we write comment in HTML. `<!-- -->`
- Our Browser does not render anything between this.

>Note: HTML is not case-sensitive. Means capital p and small p is same in HTML. It is different than other programming languages.
>If we write `<P></P>` instead of `<p></p>`, it will be a valid tag.

## HTML Tags

- Html tag is a container of some content or other HTML tags

### HTML Attributes

- It is used to add more information to the tag
  - `<html lang="en"></html>` **-** `lang="en"` is an attribute

### HTML Headings

- h1
- h2
- h3
- h4
- h5
- h6

>Note: Only use heading to show/give the importance to text
>Note: Don't use heading tags to increase or decrease the size. It does also effect the SEO of web page.
>Note: To increase or decrease the size of fonts, use attributes or CSS properties.

### Paragraph Tags

- `<p></p>`
  - This is paragraph text.

### Anchor Tag - Basic

- To add links to pages
  - `<a href="https://www.google.com">Google</a>`

### Move to different pages on same website

- `<a href="/hello.html">Go to Hello</a>`

>Note: Absolute Link: kisi dosri website ka link
>Note: Relative link: hamari apni website ka link means k dosra page.

### Image Tag

- `<img src="/image.png" alt="Random Image"/>`
  - "/image.png" this is relative link
  - alt
    - Ham apni image ko aik name de dete hain jiski wajah se kya hota hai agar image load nahi ho rahi tu uski name ajata hai.
  - Resize image
    - height attribute `height="100"`
    - width attribute

>Note: It is advisable to use either height or width attribute and not both together.

### br tag

- to add next line
- This is empty tag
- It does not contain any attribute etc

### Bold, Italic, & Underline Tags

- `<b></b>`
- `<i></i>`
- `<u></u>`

### Big & Small tags

`<big></big>`
`<small></small>`

### Hr tag

- `<hr />`
- Horizontal Ruler
- It is used to separate content.

### Subscript & Superscript tags

- `<sub></sub>`
- `<sup></sup>`

### Pre Tag

- It is used to display text without ignoring spaces & next line
- Means k agar hame paragraph (text) k between spaces ya next line required ho tu ham `pre` tag ka use karte hain.

## Page Layout Techniques

>Note: These are level 3 topics

### Semantic Tags for Layout

- wo tags jin ko dekh kar unka matlab samajh ajaye. Like
  - Header
  - Footer
- Benefits of using Semantic tags
  - Code readability
  - SEO benefits

### Non-Semantic Tags for Layout

- Inko dekh kar clear nahi hota k inka kya matlab hai. for example:
  - div
  - span
  - ...etc

#### Semantic Tags in Detail

- Header
  - We define header tag in our body
  - `<header></header>`
  - `<footer></footer>`
- Main tag
  - header and footer k between ham `main` tag define kar k apna web page design karte hain.

##### main tag

- Section tag
- Article tag
- Aside tag
  - For content aside main content (ads)
  - SEO will not detect this tag

##### Anchor Tag

- `<a href="any_link"></a>`
- target
  - It's an attribute
  - Link ko new tab main open karwana ho tu ye use karte hain.
    - `target="_main"`
    - `<a href="https://google.com" target="_main" alt="Google">Google</a>`
- Image as clickable
  - Image ko clickable banana ho tu:
    - href tag use karte hoe jahan ham text define karte hain wahan ham `img` tag use kar sakte hain. This will make the image clickable.
    - `<img src="https://image_link" alt="Simple Image">`
    - `<a href="https://google.com" target="_main" alt="Google"><img src="https://image_link" alt="Simple Image"></a>`

##### Revisiting img tag

- Using attributes
  - height
    - `<img src="link" height=50>`
  - width
    - `<img src="link" width=50>`

#### Non-Semantic Tags in Detail

##### div Tag

- iska khud se apna koi role nahi hota. It only holds other elements of web page.
- div is a block element.
- div takes full width of page.
  - Means k ye page ki pori ki pori width ko use karta hai
  - We can verify it through inspection.
- By default div height is set to 0.

>Note: Inline elements ko jitni space required hoti hai sirf utni hi consume karte hain.
>Note: check list of block elements (tags) which takes full width of page.

###### List of block elements (tags)

- Some are
  - footer
  - div
  - hr
  - header
  - article
  - h1 to h6
  - main
  - nav
  - noscript

##### span tag

- It is also use to contain other HTML elements
- Inline elements
  - It takes only space with is required

###### List of inline elements (tags)

- Some of the inline elements
  - a
  - abbr
  - b
  - big
  - br
  - button
  - code
  - em
  - i
  - img
  - input
  - map
  - object
  - tt
  - var
  - q
  - script
  - select
  - small

### Project - Level 3

- Add your image on the home page & useful links to your GitHub/LinkedIn profiles. Also, improve your project layout.

## Level Pro

### List in HTML

- unordered
  - Data will be shown in bullet forms
- ordered
  - Roman numerals
  - ABCD etc

#### unordered list

- ul
  - li

#### ordered list

- ol
  - li

### Tables in HTML

- table tag
- tr
  - table row
- td
  - table data
- th
  - table header
- caption in tables
- thead
  - to wrap table head
- tbody
  - to wrap table body
- colspan - attribute in table tag
  - Similar to merge in excel
  - Excel main jis tarah ham 2 cells ko merge kar dete hain, usi tarah colspan attribute bhi kam karta hai.
  - Ye attribute define kar k ham bata dete hain k kitne cells ko merge karna hai. For example:
  - `<th colspan="2"></th>`

### Form in HTML

>Note: Most important topic in HTML

- form tag
  - `<form></form>`

#### Action in Form

- `action` attribute in form tag
  - `<form action="script.js"></form>`

##### Form elements

- Input
  - type="text" placeholde="Type something here"
  - type="password" placeholde="Password here"
  - `<input type="text|password|radio|checkbox|submit">`

```html
<form action="/script.js">
  <input type="text" placeholder="Type something here">
  <input type="password" placeholder="Enter your password">
</form>
```

- Radio
  - Ye input ki wo type hai jis main ham koi single option select kar sakte hain.
    - type="radio" value="class XI" name="class"
    - type="radio" value="class XII" name="class"
      - "radio" type k input main ham 2 attributes define karte hain:
      - value `value="JavaScript"`
      - name `name="programming-language"`

```html
<form>
    <input type="radio" value="javascript" name="programming-language" id="javascript">Javascript
        <input type="radio" value="java" name="programming-language" id="java">Java
</form>
```

>Note: "radio" button 'type' main hame placeholder define karne ki zaroorat nahi parti.
>Note: "radio" button 'type' main 'name' attribute ki value same honi chahiye agar dono radio buttons same group se hain, otherwise dono radio buttons selected (checked) state main rahenge.

- Radio - detail from backend perspective
  - `<input type="radio" value="javascript" name="programming-language"/> Javascript`
    - value `value="JavaScript"`
      - Ye value backend k liye hai. Means k backend ko ye wali value visible hoti hai.
    - name `name="programming-language"`
    - "Javascript"
      - Ye wali value user ko website par visible hoti hai.

>Note: Agar hamne `value` or `input` tag close k bad jo value ati hai (placeholder value) wo same nahi ki tu error asakte hain because user ko `value` show nahi hoti and backend ko `placeholder` wali value (Javascript) show nahi hoti. For example:

```html
<input type="radio" value="javascript" name="programming-language"> Javascript
```

>Note: Yahan `value="javascript"` sirf backend k liye visible hoti hai
>Note: `Javascript` ye website k user ko visible hoti hai

- Label
  - One usage of "Label" in HTML
    - Kisi bhi input k opper ham aik label assign kar dete hain. Is label ki wajah se ham us 'input' ko recognize karwa sakte hain based on 'id', and 'value' attribute.
    - Labels is liye bhi define kiye jate hain k jo log visually impaired hote hain un logon k liye websites par voice add kardi jati hai jo 'labels' ki help se unko batate hain k websites par kya content hai...etc
    - "Labels" input k opper par define kiya jata hai.
  - Another usage of "Label" in HTML
    - "Labels" ham radio button define karte waqt bhi use karte hain.
  - Ham "Lables" `id` ki base par assign karte hain.

>Note: Radio button main 'id' attribute aur 'label' ki value agar same hai tu benefit ye hoga k jab ham text par click karenge tab bhi radio button select ho jayega and hame 'especially' radio button par le ja kar click karne ki zaroorat nahi paregi. For example:

```html
<label for="javascript">
<input type="radio" value="javascript" name="programing-language" id="javascript"> Javascript
</label>
<label for="java">
<input type="radio" value="java" name="programing-language" id="java"> Java
</label>
```

### Class & Id in HTML

- One single element in HTML can be assigned both an 'id' and 'class'. for example
  - `<div id="angular" class="frontend"></div>`
  - `<div id="reactjs" class="frontend"></div>`
  - `<div id="javascript" class="backend"></div>`
  - `<div id="php" class="backend"></div>`

### Checkbox in HTML

- When we need to select multiple options instead of only one.
- We can label checkboxes with a value. for example
  - `<label for="103"><input type="checkbox" value="javascript" name="programming-language" id="103">Javascript</label>`
  - `<label for="104"><input type="checkbox" value="python" name="programming-language" id="104">Python</label>`

>Note: checkbox main 'id' attribute aur 'label' ki value agar same hai tu benefit ye hoga k jab ham text par click karenge tab bhi checkbox select ho jayega and hame 'especially' checkbox par le ja kar click karne ki zaroorat nahi paregi. For example:

```html
<label for="103">
  <input type="checkbox" name="javascript" id="103"> Frontend
</label>
<label for="104">
  <input type="checkbox" name="java" id="104"> Backend
</label>
```

### Text Area in HTML

- textarea
  - `<textarea></textarea>`

```html
<textarea name="feeback" id="101" placeholder="Please give your input here"></textarea>
```

>Note: We can increase the size of this `textarea` by adding `rows` and `columns`. for example

```html
<textarea name="feedback" id="101" placeholder="Please give your input here" rows="5" cols="10"></textarea>
```

### Select in HTML

- select tag
  - `<select></select>`
- We also need to use `option` tag inside the select to make it `drop-down` menu.

```html
<select name="programming-language">
  <option value="Javascript">Javascript</option>
  <option value="Python">Python</option>
  <option value="Php">Php</option>
  <option value="Java">Java</option>
</select>
```

#### Submit Input Type in HTML

- `<input type="submit" value="submit">`
- 'Submit' can also be used with button

```html
<button type="submit" onclick="formSubmit()">Submit</button>
```

### iframe tag in HTML

- website inside website
- to show a website inside a website
  - `<iframe src="link"></iframe>`
- 'height' and 'width' attributes can be used here.

### Video tag in HTML

- `<video src="link">MyVideo</video>`

#### Attributes in Video tag

- controls = attribute
- controls loop = attribute
- controls auto = attribute
- height
- width

```html
<video controls >My Video</video>
<video controls loop>My Video</video>
<video controls autoplay>My Video</video>
<!-- autoplay is not recommended -->
<video controls height="315" width="560">My Video</video>
```

>Note: Video tag is not working in HTML at the time of writing these notes. Some workarounds found on Google.

### Project - Level 4

- Add a Contact Me page for your Portfolio
  - Input fields for
    - name
    - contact
    - email
    - message
  - drop down for visitor i.e. Recruiter, HR Manager, and Client etc
- Make a website for students
  - Make a signup form
  - Add links/iframes to Youtube videos
  - Make a table on home page to show the different topics covered in your page.

## Extras

- `style="margin: 10px 5px"`
  - 10px top and bottom
  - 5px right and left
- `h2>lorem4` - It will add `h2` element followed by 4 words. For example:

```html
<h2>Lorem ipsum dolor sit.</h2>
```

- `p>lorem50` - It will add `p` element followed by 50 words. For example:

```html
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore tenetur natus ex. Quia, animi cumque! Eius vitae aut aliquam, corrupti voluptas quod alias assumenda aperiam obcaecati, ex provident libero accusamus voluptatum placeat. Ut beatae quo quam deserunt impedit repellendus repudiandae est at, autem debitis quidem ducimus officiis dolorem sequi!</p>
```

- `<hr>` - Horizontal ruler (Horizontal rule) - this is to add a line