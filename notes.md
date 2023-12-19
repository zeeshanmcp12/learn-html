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
  - It telss which we don't want to display on webpage
  - it contains meta information which is useful but we don't want to make it visible on webpage.
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

### Anchor Tag

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