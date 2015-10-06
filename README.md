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

or with Bower
```
  $ bower install csshake
```

or with npm
```
  $ npm i csshake
```

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
  <div class="shake shake.vertical"></div>
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

`$q` {String} is the `animation-iteration-count` value

`$t` {String} `animation-timing-function` value

`$delay` {Number} `animation-delay` time value

`$chunk` {Number} is the part of the keyframes where apply the animation

=======

Made with ♥ by [@elrumordelaluz](http://twitter.com/elrumordelaluz) using [Sass](http://sass-lang.com/).