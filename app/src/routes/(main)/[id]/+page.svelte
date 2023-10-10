<script lang="ts">
  import StatusTag from "../../../lib/components/StatusTag.svelte";

  import Title from "$lib/components/Title.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  let item = data.data;
  const desactivarBotón =
    item.type === "Evento" &&
    (item.status === "Completado" || item.status === "Cancelado");
  console.log(desactivarBotón);
</script>

<svelte:head>
  <title>{item.title}</title>
  <meta name="description" content={item.description} />
</svelte:head>
<div class="center">
  <div class="landscapeFlex">
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
    {#if item.clickable_link && !desactivarBotón}
      <a href={item.clickable_link}>{item.clickable_link_text}</a>
    {/if}
  </div>
</div>

<style>
  @media (orientation: landscape) {
    .center {
      display: flex;
      justify-content: center;
    }
    .landscapeFlex {
      display: flex;
      flex-direction: column;
      max-width: 80%;
      align-content: center;
      gap: 8px;
    }
    img {
      max-width: 50vh;
    }
    .container {
      flex-flow: row nowrap;
    }
    .datacard {
      flex: 1;
    }
  }
  @media (orientation: portrait) {
    img {
      max-width: 100%;
    }
    .container {
      flex-flow: row wrap;
    }
    .landscapeFlex {
      display: flex;
      flex-direction: column;
      align-content: center;
      gap: 8px;
    }
  }
  .container {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  img {
    object-fit: fill;
    border-radius: 24px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    flex: 1 1 auto;
  }
  .description {
    border-radius: 24px;
    padding: 8px;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    flex: 2 1 auto;
    text-align: left;
    overflow-wrap: break-word;
    font-size: 20px;
    line-height: 1.5;
  }
  .description p {
    margin-top: 8px;
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
  a {
    all: unset;
    cursor: pointer;
    align-items: center;
    width: 50%;
    background-color: #5fb030;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
    border-radius: 16px;
    border: transparent;
    padding: 6px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  a:active {
    box-shadow: none;
  }
</style>
