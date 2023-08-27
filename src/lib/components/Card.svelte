<!-- 
  @component
  # Card
  A component for project and event cards.
  #### The exported variables are all intended as inputs:
  - title
  - description
  - image_src
  - date
  - status
  - category
  - status_color (Color for the status card)
-->

<script lang="ts">
  export let title: string;
  export let description: string;
  export let image_src: string;
  export let date: string;
  export let status: string;
  export let category: string;
  export let status_color: string;
</script>

<div class="card">
  <img src={image_src} alt={title + "poster"} />
  <div class="card_text">
    <div class="title">
      <h3>{title}</h3>
      <div class="whitespace" />
      <h4>{date}</h4>
    </div>
    <p>{description}</p>
    <div class="tag" style="background-color: {status_color};">
      <p>{status}</p>
    </div>
    <div class="tag category">
      <p>{category}</p>
    </div>
  </div>
</div>

<style>
  .card {
    width: 300px;
    height: 400px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
    border-radius: 8px;
    background-color: white;
    margin: 8px;
  }
  .card_text {
    margin: 5px 10px 10px 10px;
  }
  .title {
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
  }
  .whitespace {
    flex: 1;
  }
  h3 {
    font-weight: 600;
  }
  h4 {
    font-weight: 100;
  }
  p {
    justify-content: left;
  }
  img {
    width: 300px;
    height: 250px;
    object-fit: fill;
    border-radius: 8px 8px 0 0;
  }
  .tag {
    float: right;
    border-radius: 16px;
    width: max-content;
    padding: 8px;
    color: white;
    margin-top: 8px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
  }
  .category {
    float: left;
    box-shadow: none;
    border: 3px solid #5fb030;
    color: #5fb030;
    font-weight: 600;
    border-radius: 24px;
  }
</style>
