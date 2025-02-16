+++
title = 'First Class for front end'
summary = 'To help front-end beginners get started quickly, this guide aims to help them build their own web pages from scratch.'
description = 'To help front-end beginners get started quickly, this guide aims to help them build their own web pages from scratch.'
tags = ['front-end', 'beginner', 'HTML']
date = '2025-02-07T20:35:36+08:00'
slug = '2025-02-07'
keywords = ['front-end', 'beginner', 'HTML']
image = "images/front-end.jpeg"
author = 'Max'
draft = false
isCJKLanguage = false
+++

# Preface

My Name is Max, and I currently work as an AI R&D Engineer (Artificial Intelligence Research and Development Engineer). Graduating from a non-computer science background, my prior knowledge of front-end development was quite limited. This section is primarily intended to document my journey of quick self-learning front-end development and building a personal blog webpage. It will also serve as a reference for future optimizations and functional improvements to my personal website.

# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure of a website using elements and tags. This blog will guide you from the basic of HTML to quick go through its elements, attributes, and practical exercises. 

---

## Basic Structure of an HTML Document

Every HTML document starts with a basic structure:
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```

### Explanation of the Structure:

- <!DOCTYPE html>: Declares the document type as HTML.
- <html>: the root element that wraps all content on the page.
- <head>: Contains metadata, these content will not be displayed in the visible area of the web page.
- <body>: Contains the visible content of the web page.

---

# Common HTML Elements

## Headings

Predefined font size.
```html
<h1>First Level Heading</h1>
<h2>Second Level Heading</h2>
<h3>Third Level Heading</h3>
<h4>Forth Level Heading</h4>
<h5>Fifth Level Heading</h5>
<h6>Sixth Level Heading</h6>
```

## Paragraphs

display content in default style.
```html
<p>This is a paragraph. It will display content in default style.</p>
```

## Preformatted text

display content in precise formatting.
```html
<pre>
    This is a poem:
    
    Because I could not stop for Death,

    He kindly stopped for me;

    The carriage held but just ourselves

    And Immortality. 
</pre>
```

## Links

used to create hyperlinks to other pages or resources.
```html
<a href="links">{{block}}</a>
```

## Images

used to embed images.
```html
<img src="/path/to/image.jpg" alt="Description of the image">
```

## List

- Unordered List(<ul>): Creates bullet-points lists.
- Ordered List(<ol>): Creates numbered lists.
> `<li>` represents a list item.
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
    <li>Step 3</li>
</ol>
```

## Tables

Used to display data in rows and in columns.
> `<th>` Defines a table header cell, usually bold and centered by default, to describe columns or rows in a table.
> `<td>` Represents a standard table cell, used to hold data within a table.
```html
<table>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```
## Forms
## Div
## Span