<!--
  @component
  # Title
  Styled title component to use for section titles, insert the title in the `<slot>`
-->

<h1><slot /></h1>

<style>
  h1 {
    color: #5fb030;
    text-align: center;
  }
  h1:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 100%;
    padding-top: 5px;
    border-bottom: 2px solid #5fb030;
  }
</style>
