# Csshake [![npm version](https://badge.fury.io/js/csshake.svg)](http://badge.fury.io/js/csshake)
Some CSS classes to move your DOM!
[Live Demo](http://elrumordelaluz.github.io/csshake/)

### Origins
I had to do a 'shake-animation' for a big project. First, I did it in vanilla CSS.
After finish it I discover [this](http://jackrugile.com/jrumble/) cool jQuery plugin by [@jackrugile](https://twitter.com/jackrugile).
Then I started to think in made *[this little CSS project](http://elrumordelaluz.github.io/csshake/)*

### Install
Fork this repo
```
  $ git clone https://github.com/elrumordelaluz/csshake.git
```

or via Bower
```
  $ bower install csshake
```

or via npm
```
  $ npm i csshake
```

#### scripts
```
  $ npm run watch
  $ npm run build:raw
  $ npm run build:min
```

#### Download Center http://csshake.surge.sh/
You could download the complete `csshake.css` file or separated files for each shake animation (i.e `csshake-little.css`).
Each one expanded or minified.

### CDN
Now is also available in `cdnjs` for each shake animation: https://cdnjs.com/libraries/csshake


### How to use
First include the CSS file 
```html
  <link rel="stylesheet" type="text/css" href="csshake.css">` 
```

Then call the diffetent classes on the element you want to shake!
```html
  <div class="shake"></div>
  <div class="shake shake-hard"></div>
  <div class="shake shake-slow"></div>
  <div class="shake shake-little"></div>
  <div class="shake shake-horizontal"></div>
  <div class="shake shake-vertical"></div>
  <div class="shake shake-rotate"></div>
  <div class="shake shake-opacity"></div>
  <div class="shake shake-crazy"></div>
```

Add also classes to control the `animation-play-state`.
```html
<!-- Freeze the animation at that point when :hover -->
<div class="shake shake-freeze"></div>
<!-- Continuous animation instead on :hover -->
<div class="shake shake-constant"></div>
<!-- and stop when :hover -->
<div class="shake shake-constant shake-constant--hover"></div>
```

### Customize
You could customize the Sass @mixins to create new shaking animations, yeah!
Editing the `do-shake` mixin in `scss/_tools.scss` file
```scss
.my-custom-shake {
  @include do-shake(
        $name: 'my-custom-shake', 
        $h: 5px, 
        $v: 5px, 
        $r: 3deg, 
        $dur: 100ms, 
        $precision: .02, 
        $opacity: false, 
        $q: infinite, 
        $t: ease-in-out, 
        $delay: null,
        $chunk: 100%);
}
```

`$name` {String} is the name for the keyframes animation

`$h` {Number} is the max number for random to assign in x axis

`$v` {Number} is the max number for random to assign in y axis

`$r` {Number} is the max number for random rotation

`$dur` {Number} is the `animation-duration` time value

`$precision` {Number} is the precision of the keyframes animation. For example `.02` generates keyframes each 2% and `.1` each 10%. The calculation is `$step: 100 * $precision;`

`$opacity` {Boolean} to apply random animation also in the opacity property

`$q` {String} is the `animation-iteration-count` value

`$t` {String} `animation-timing-function` value

`$delay` {Number} `animation-delay` time value

`$chunk` {Number} is the part of the keyframes where apply the animation

=======

### Changelog
#### [v1.5.0](https://github.com/elrumordelaluz/csshake/releases/tag/v1.5) (October 5, 2015)
- Improve the core mixin for a better output code
- Generate the entire 'shake' animation from only one [@mixin](https://github.com/elrumordelaluz/csshake/blob/master/scss/_tools.scss#L30). Easier to cerate custom shakes animations classes.
- Add a [new argument](https://github.com/elrumordelaluz/csshake/blob/master/scss/_tools.scss#L41) to allow animate only part of the 100% of keyframes. Solves [issue #25](https://github.com/elrumordelaluz/csshake/issues/25)
- Add a [class](https://github.com/elrumordelaluz/csshake/blob/master/scss/_tools.scss#L3) to allow fire animation from a parent element. Solves [issue #16](https://github.com/elrumordelaluz/csshake/issues/16)
- Update semanthics on modifiers classes
- Export separated stylesheets for each animation. Solves [issue #20](https://github.com/elrumordelaluz/csshake/issues/20)

======

Made with ♥ by [@elrumordelaluz](http://twitter.com/elrumordelaluz) using [Sass](http://sass-lang.com/).
