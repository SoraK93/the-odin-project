# Box Model

Every single thing on the webpage is a rectangular box and each of these boxes have there unique size, position, space (box taking entire width?).

```
<!-- Use this to get a general idea of how box model effects the page -->
* {
    outline: 2px solid red;
}
```

## Every box calculate its size using few different properties:

**<ins>Content-Box Size Calculation</ins>** :  
Actual Width + Padding + Border = Total Box Width  
100px + (10px _ 2) + (2px _ 2) = 124px

> [!NOTE]  
> As per code, padding and border rules contain both left and right size. Because of which padding and border gets multiplied by 2.

```
p {
    width: 100px;
    padding: 10px;
    border: 2px solid black;
}
```

**<ins>Border-box Size Calculation</ins>** :
Actual Width + Padding + Border = Total Box Width  
76px + (10px _ 2) + (2px _ 2) = 100px

> [!NOTE]  
> Due to border-box, the way box calculate its size has changed. Now width is defining the entire box rather than just the content part.

```
p {
    width: 100px;
    padding: 10px;
    border: 2px solid black;
    box-sizing: border-box;
}
```

### Margin

Increases the space between the borders of a box and the borders of adjacent boxes.
Margin can also help center elements horizontally, but two things are required for that to happen:

- Specify width of the target element.
- Set left and right margin to auto.

```
.container {
    width: 900px;
    margin: 0 auto;
}
```

> [!NOTE]  
> Only works for horizontal center and width is a must.

<ins>**Collapsing Margin**</ins>:
It simply means a instance when margin of two elements collapse/ overlap each other. This only effects top/bottom margin. Also, the highest margin of top & bottom element is present, margin of element with smaller top/bottom margin has no effect. 

### Padding

Increases the space between the border of a box and the content of the box.

### Borders

Adds space (even if it's only a pixel or two) between the margin and the padding.
