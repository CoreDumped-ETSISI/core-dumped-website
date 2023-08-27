<!-- @component
# Fake Terminal
This terminal is intended for use with error pages.
It exports a `link` intended as an input which will be displayed in the message,
as well as a `<slot>` intended for displaying the error message.
It always links to the homepage.
-->
<script lang="ts">
  export let link: string;
</script>

<div class="fakeMenu">
  <div class="fakeButtons fakeClose" />
  <div class="fakeButtons fakeMinimize" />
  <div class="fakeButtons fakeZoom" />
</div>
<div class="fakeScreen">
  <p class="line1">
    user@coredumped.es $ wget {link}<span class="cursor1">_</span>
  </p>
  <p class="line2">
    <slot /><span class="cursor2">_</span>
  </p>
  <p class="line3">
    <a href="/">[?] Let's go back $HOME$ (click here to go back)</a><span
      class="cursor3">_</span
    >
  </p>
  <p class="line4">><span class="cursor4">_</span></p>
</div>

<style>
  .fakeButtons {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    top: 6px;
    left: 6px;
    background-color: #ff3b47;
    border-color: #9d252b;
    display: inline-block;
  }

  .fakeMinimize {
    left: 11px;
    background-color: #ffc100;
    border-color: #9d802c;
  }

  .fakeZoom {
    left: 16px;
    background-color: #00d742;
    border-color: #049931;
  }

  .fakeMenu {
    width: 550px;
    box-sizing: border-box;
    height: 25px;
    background-color: #bbb;
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .fakeScreen {
    background-color: #151515;
    box-sizing: border-box;
    width: 550px;
    height: 600px;
    margin: 0 auto;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  p {
    position: relative;
    left: 50%;
    margin-left: -13em;
    text-align: left;
    font-size: 1.25em;
    font-family: monospace;
    white-space: normal;
    overflow: hidden;
    width: 0;
  }

  span {
    color: #fff;
    font-weight: bold;
  }

  .line1 {
    color: #9cd9f0;
    -webkit-animation: type 0.5s 1s steps(20, end) forwards;
    -moz-animation: type 0.5s 1s steps(20, end) forwards;
    -o-animation: type 0.5s 1s steps(20, end) forwards;
    animation: type 0.5s 1s steps(20, end) forwards;
  }

  .cursor1 {
    -webkit-animation: blink 1s 2s 2 forwards;
    -moz-animation: blink 1s 2s 2 forwards;
    -o-animation: blink 1s 2s 2 forwards;
    animation: blink 1s 2s 2 forwards;
  }

  .line2 {
    color: #cdee69;
    -webkit-animation: type 0.5s 4.25s steps(20, end) forwards;
    -moz-animation: type 0.5s 4.25s steps(20, end) forwards;
    -o-animation: type 0.5s 4.25s steps(20, end) forwards;
    animation: type 0.5s 4.25s steps(20, end) forwards;
  }

  .cursor2 {
    -webkit-animation: blink 1s 5.25s 2 forwards;
    -moz-animation: blink 1s 5.25s 2 forwards;
    -o-animation: blink 1s 5.25s 2 forwards;
    animation: blink 1s 5.25s 2 forwards;
  }

  .line3 {
    color: #e09690;
    -webkit-animation: type 0.5s 7.5s steps(20, end) forwards;
    -moz-animation: type 0.5s 7.5s steps(20, end) forwards;
    -o-animation: type 0.5s 7.5s steps(20, end) forwards;
    animation: type 0.5s 7.5s steps(20, end) forwards;
  }

  .cursor3 {
    -webkit-animation: blink 1s 8.5s 2 forwards;
    -moz-animation: blink 1s 8.5s 2 forwards;
    -o-animation: blink 1s 8.5s 2 forwards;
    animation: blink 1s 8.5s 2 forwards;
  }

  .line4 {
    color: #fff;
    -webkit-animation: type 0.5s 10.75s steps(20, end) forwards;
    -moz-animation: type 0.5s 10.75s steps(20, end) forwards;
    -o-animation: type 0.5s 10.75s steps(20, end) forwards;
    animation: type 0.5s 10.75s steps(20, end) forwards;
  }

  .cursor4 {
    -webkit-animation: blink 1s 11.5s infinite;
    -moz-animation: blink 1s 8.5s infinite;
    -o-animation: blink 1s 8.5s infinite;
    animation: blink 1s 8.5s infinite;
  }
  a {
    all: unset;
    border-bottom: 1px solid #5fb030;
    cursor: pointer;
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes type {
    to {
      width: 30em;
    }
  }

  @-moz-keyframes type {
    to {
      width: 30em;
    }
  }

  @-o-keyframes type {
    to {
      width: 30em;
    }
  }

  @keyframes type {
    to {
      width: 30em;
    }
  }
</style>
