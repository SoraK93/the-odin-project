# Basic Syntax
```
selector {
    property: value;
}
```


# SELECTOR:
## Class selection syntax: 
Selects target class
```
.class-name {
    property: value;
}
```
## ID Selection Syntax: 
Selects target ID
```
#id-name {
    property: value;
}
```

## Grouping Selector: 
Used when we have come style for different selectors
```
.element1 #element2 element3 {
    property: value;
}
```

## Chaining Selector: 
When multiple class/id is used in single element.  

Selecting element with 2 or more specific classes  
```
.class-name1.class-name2 {
    property: value;
}
```
Selecting element with a id and classes  
```
.class-name1#id-name1{
    property: value;
}
```

# FOUR TYPES OF COMBINATORS
## Desendant Combinator: 
As the name suggests, it selects the descendent.

Lets say we have .ancestor .child {}, here the .child will be selected which resides inside a .ancestor

```
.ancestor .child {
    property: value;
}
```

## BASIC CSS PROPERTIES:
- color
- background-color
- font-family
- font-weight
- font-size