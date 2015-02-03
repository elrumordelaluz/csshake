csshake
=======

Some CSS classes to move your DOM!
<a href="http://elrumordelaluz.github.io/csshake/">Live Demo</a>

<h3>Origins</h3>
<p>I had to do a shake-animation for a big project. I did it in vanilla CSS at the begining.<br>After finish it I discover <a class="shake shake-constant shake-little" href="http://jackrugile.com/jrumble/">this</a> cool jQuery plugin by <a class="shake" href="https://twitter.com/jackrugile">@jackrugile</a><br> Then I started to think in made <strong><a href="http://elrumordelaluz.github.io/csshake/">this little CSS project</a></strong></p>

<h3>How to use</h3>
<p>
Just include the CSS file <pre>&lt;link rel="stylesheet" type="text/css" href="csshake.css"&gt;</pre>
and call the diffetent classes on the DOM element you want to shake...
<pre>&lt;div class="shake"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake-hard"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake-slow"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake-little"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake-horizontal"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake.vertical"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake-rotate"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake-opacity"&gt;&lt;/div&gt;</pre>
<pre>&lt;div class="shake shake-crazy"&gt;&lt;/div&gt;</pre>
you could also add these classes to control the animation-play-state <code>.freez</code>, <code>.shake-constant</code> &amp; <code>.hover-stop</code>
</p>


<h3>Customize</h3>
<p>You could customize the SASS @mixins to create new shaking animations, yeah!</p>
Editing <code>_mixins.scss</code>
<pre> @include shake($x, $y, $rot, $name, $steps, $opacity);</pre>
where <code>$x</code> & <code>$y</code>: pixels to move on the X and Y axis,
		  <code>$rot</code>: deg to rotate,
		  <code>$name</code>: the name assigned to those parameters,
		  <code>$steps</code>: adjust the animation loop (i.e 10 makes an animation in steps of 10%),
		  <code>$opacity</code>: true/false to add opacity animation
<p>for example:
<pre>@include shake(40px, 40px, 20deg, 'shake-crazy', 10, true);</pre>
</p>

=======

Editing <code>_shake.scss</code>
<pre>@include animation($name, $dur, $iter, $tim, $del);</pre>
where <code>$name</code>: animation-name,
		  <code>$dur</code>: animation-duration,
		  <code>$iter</code>: animation-iteration-count,
		  <code>$tim</code>: animation-timing-function,
		  <code>$del</code>: animation-delay
<p>for example:
<pre>@include animation(shake-slow, 5s);</pre>
</p>

=======

<p>Attention: you have to use the <strong>random()</strong> function to compile Sass files. <br>You could read how to implement it <a href="https://github.com/nex3/sass/pull/968" class="shake freez">here</a> or <a href="http://blog.codepen.io/2013/09/17/adding-random-function-sass/" class="shake shake-hard freez">here</a> or <a href="http://hugogiraudel.com/2013/10/17/sass-random/" class="shake shake-rotate freez">here</a> much more information.</p>
~~And remember that there isn't -prefixes> on the main code~~. Hoping that one day we won't need it.<br>~~In the <a href="http://elrumordelaluz.github.io/csshake/">demo page</a> I use the magic <a href="http://leaverou.github.io/prefixfree/">prefixfree~~</a></p>
<p><strong>UPDATE:</strong> Just added -webkit &amp; -ms prefixes to the main @mixins. The most important thing is that renders the @keyframes <strong>without redundancy</strong>.</p>

=======


<footer>Made with ♥ by <a class="shake shake-constant hover-stop" href="http://twitter.com/elrumordelaluz">@elrumordelaluz</a>, using <a href="http://sass-lang.com/">Sass</a>.<br>In the <a href="http://elrumordelaluz.github.io/csshake/">Demo page</a> I used <a href="http://leaverou.github.io/prefixfree/">prefixfree</a> and <a href="http://prismjs.com/">Prism.js</a> both by <a href="http://twitter.com/LeaVerou">Lea Verou</a> and <a href="https://github.com/peachananr/onepage-scroll">One page scroll</a> plugin by <a href="https://twitter.com/peachananr">@peachananr</a> </footer>
