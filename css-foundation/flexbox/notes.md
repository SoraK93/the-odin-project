# FlexBox
The "Flexible Box" or "Flexbox" layout mode offers an alternative to Floats for defining the overall appearance of a web page. Flexbox gives full control over alignment, size, order, direction of our boxes.

### <ins>Flexbox contains two types of boxes</ins>:
- **Flex Containers** - Groups up a bunch of flex-items together and defines how they are positioned.
- **Flex Items** - Every HTML element that is a direct child of a flex-container is an item.

> [!NOTE]  
> Defining complex web pages with *flexbox is all about nesting boxes*.  
> [Nesting boxes means aliging items inside containers which is inside a container]

## Flex Containers
First step is to turn a HTML element into flex container using `display` property.
> **Reminder** : Flex is a type of box model.
```
/* This enables flexbox layout mode */
.container {
    display: flex;
}
```
Explicitly defining flex containers means that you can mix and match flexbox with other layout models.

## Aligning a Flex Item
We can use `justify-content` property to align items. This has the same effect as adding `margin: 0 auto;` declaration to the element.

Values of `justify-content` property:
- center - Moves item to center
- flex-start - Move item to left side
- flex-end - Move item to right side
- space-around - Even spacing around each items
- space-between - Even spacing between items

In case of `flex-direction: column;` - Main axis for aligning changes to horizontal  
In case of `flex-direction: row;` -  Main axis for aligning changes to vertical

## Grouping Flex Items
Flex containers only know how to **position elements that are one level deep** (i.e., their child elements). They don't care one bit about what's inside their flex items.

## Cross-Axis (Vertical) Alignment
Flex container can define horizontal as well as vertical alignment of their items. Cross-Axis Alignment is defined by adding an `align-items` property to a flex container.

#### Flex Item Alignment
To align items individually use `align-self` property. Adding this to a flex item will override the align-items value from its container.

## Wrapping Flex Items
Flexbox is a more powerful alternative to float-based grids. To create a grid, we need the `flex-wrap` property.

## Flex Container Direction
"Direction" refers to whether a container renders its items horizontally or vertically. So far, all the containers we've seen use the default horizontal direction. Flexbox can transform from row into column using `flex-direction` declaration.

> [!NOTE]  
> **Alignment Consideration**: When we rotate the direction of flex container, we also rotate the direction of justify-content property. (Horizontal to vertical and vice-versa).  
> In this state, to horizontally align our columns, use `align-items` property.

#### Flex Container Order
The `flex-direction` property also offers you control over the order in which items appear via the `row-reverse` and `column-reverse` properties.

## Flex Item Order
It's also possible to manipulate individual items order. Adding an `order` property to a flex item defines its order in the container without affecting surrounding items. Its default value is 0, and changes to this value (+ / -) will move the item to the right/ left, respectively.

# Flexible Items
Flex items are flexible, they can shrink and stretch to match the width of their containers. The `flex` property defines the width of individual items in a flex container.

### Static Item Widths
Let's combine static and flexible boxes in complex ways, mix-and-match flexible boxes with fixed-width ones. Use `flex: initial;` to go back to items explicit width property.

## Flex Items and Auto-Margins
It can be used as an alternative to an extra <div> when trying to align a group of items to the left/ right of a container. Auto-margins eat up all the extra space in a flex container instead of distributing items equally.

### Flex Shorthand
The `flex` declaration is actually shorthand for 3 properties that you can set on a flex item, namely `flex-grow`, `flex-shrink` and `flex-basis`.
```
selector{
    flex: 1 1 0; // flex-grow flex-shrink flex-basis <-> default values
}
```

#### Flex-grow
It expects a single number as its value (`flex-grow: number;`), and that number is used as the flex-items (growth factor). Default value is 1.

#### Flex-shrink
Its similar to flex-grow, but sets the shrink-factor (`flex-shrink: number;`). This only applies when size of all flex items is larger than its parent container. Default value is 1.

> [!IMPORTANT]  
> When you specify `flex-grow` or `flex-shrink`, flex items do not necessarily respect your given values for width.
> When parent is too small, the default behavior is for them to shrink to fit.
> When parent is too big, the default behavior is for them to grow to fill.

#### Flex-Basis
Sets the initial size of a flex ite, so any sort of `flex-grow`ing or `flex-shrink`ing starts from the baseline size. The shorthand value defaults to `flex-basis: 0%;`. Using `auto` as a flex-basis tells the item to check for a width declaration (`width: size px`).

> [!IMPORTANT]  
> The actual default value is `flex-basis: auto;`, but when we use `flex: 1;` on an element, it interprets as `flex: 1 1 0;`.
> The shorthand value for `flex: 1 1 auto;` is `flex: auto;`.

## Basic Values of 'flex'
- **flex: initial**  
This is the initial value equivalent to `flex: 0 1 auto;`. Makes the flex item inflexible when there is positive free space, but allows it to shrink to its minimum size when there is insufficient space.
- **flex: auto**  
Equivalent to `flex: 1 1 auto;`. Any positive free space after the items have been sized will be distributed evenly to the items with `flex: auto;`.
- **flex: none**  
Equivalent to `flex: 0 0 auto`. This is similar to `initial`, except that flex items are not allowerd to shrink, even in overflow situations.
- **flex: <positive-number>**  
Equivalent to `flex: <positive-number> 1 0`. Makes the flex item flexible and sets the flex basis to zero, resulting in an item that receives the specified proportion of the free space in the flex container.

> [!NOTE]  
> By default, flex items won't shrink below their minimum content size, use `min-width` or `min-height` property.