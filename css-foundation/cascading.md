# CSS - Cascade

> [!IMPORTANT]  
> The CSS Cascade is the way our browsers resolve competing CSS declarations.

## Importance
Four basic types of rules:-
1. transition
    > Active transition take utmost importance
2. !important
    > Makes the declaration jump to this level of importance
3. animation
    > Active animation jumps to this level
4. normal
    > Level at which rest of the rules are  

If two rules are tied at the current tier of cascade, comparision is done again on the next tier until a difference is found.

## Origin
There are three places where a rule can be defined:
1. website
    > This is the only level we control over
2. user
3. browser
    > Each browser comes with its own style  

> [!NOTE]  
> `!important` browser rule wins over `!important` website rule  
> normal website rule wins over normal browser rule

## Specificity
There are five levels of selectors:
1. inline
    > A attribute used for styling `style="declaration;"`  
    > Since this type of style is read after external/ internal css. Thus layering apply here.
> [!WARNING]  
> Not recommended to use style this way
2. layer
    > When importance is a tie, layers decide which style to apply
3. id
    > Being unique makes them very specific `#id`
4. class | attribute | pseudo-class
    > - Target multiple elements using classes `.class`
    > - Attribute selectors are used to target element attribute like  
    `[href="https://waterberger.com"]`, `[checked]`
    > - Pseudo-selectors are `:hover`, `:first-of-type`, `:active`, . . .
5. type | pseudo-element
    > target multiple elements by there type `p`, `img`, `form`, . . .  

> [!NOTE]  
> Universal Selector (`*`) and combinators (`+`, `>`, `~`, `_`, `||`) have no effect on specificity!  
> The number of hits on the highest-reached level matter.  
> Ties can be broken: If two rules have the same number of hits on their highest level, one can win by having a hit on the next level down.

## Position
Rules that are defined later in linked stylesheets or \<style> tags will win, given that everything else in the Cascade is the same.

### Source
[The CSS Cascade](https://2019.wattenberger.com/blog/css-cascade) - How browsers resolve competing CSS styles.  




