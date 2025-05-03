# display
It is used for controlling layout and it is present in every element. Default value can be **block**, **inline** depending on the element.

There are many other display values and those are **none**, **list-item**, **table**, **flex**, **block**,**inline**, and **inline-block**.
```
.selector {
    display: block/ inline/ inline-block;
}
```

# Block-level Elements
A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element, and takes up the full width available.

# Inline-level Element
An inline element does not start on a new line and only takes up as much width as necessary. Also styles like width, height, margin (top and bottom), padding are not respected.

# Inline-block-level Element
A inline-block brought a enw way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element.  
Compared to inline, inline-block lets you set width and height on the elements.

# none-level
Setting `display: none;` means the page will load without the element. It works differently to `visibility: hidden;`, which just hides the element but still takes up space. 
> \<Script> tag uses it as default value
