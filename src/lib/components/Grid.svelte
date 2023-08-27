<!-- @component
# Grid
Grid to display cards, it resizes itself with the width of the display.
  #### The exported variables are all intended as inputs:
  - width, number in pixels that determines the width of the cells, default 300
  - gap, number in pixels that determines the gap between the cells, default 16
-->
<script lang="ts">
  export let width: number = 300;
  export let gap: number = 16;
</script>

<div
  class="grid"
  style="grid-template-columns: repeat(auto-fit, minmax({width}px, 1fr)); grid-gap: {gap}px {gap}px;"
>
  <slot />
</div>

<style>
  .grid {
    align-items: center;
    justify-items: center;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 16px 16px;
  }
</style>
