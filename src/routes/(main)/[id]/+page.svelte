<script lang="ts">
  import StatusTag from "../../../lib/components/StatusTag.svelte";

  import Title from "$lib/components/Title.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  let item = data.data;
</script>

<div class="datacard">
  <Title>{item.type}: {item.title}</Title>
  <div class="data">
    Publicado:
    {new Date(item.date).toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
    <div class="tag category">
      <p>{item.category}</p>
    </div>
    <StatusTag status={item.status} />
  </div>
</div>
<div class="container">
  <img src={item.image} alt="{item.title} poster" />
  <div class="description">
    <h2>Descripción</h2>
    <p>{item.description}</p>
  </div>
</div>

<style>
  @media (orientation: landscape) {
    img {
      max-width: 50%;
    }
  }
  @media (orientation: portrait) {
    img {
      max-width: 100%;
    }
  }
  img {
    flex: 1;
    object-fit: fill;
    border-radius: 24px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  }
  .container {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    gap: 8px;
  }
  .data {
    margin-top: 8px;
    list-style-type: none;
    font-size: 20px;
  }
  .datacard {
    border-radius: 24px;
    padding: 16px;
    max-height: fit-content;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  }
  .tag {
    border-radius: 24px;
    width: max-content;
    padding: 8px;
    color: white;
    margin-top: 8px;
    border: 2px solid transparent;
  }
  .category {
    border: 2px solid #5fb030;
    color: #5fb030;
    font-weight: 600;
    border-radius: 24px;
  }
  .description {
    border-radius: 24px;
    padding: 16px;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    flex: 1;
    text-align: justify;
    overflow-y: auto;
    font-size: 20px;
  }
  .description p {
    margin-top: 8px;
  }
</style>
