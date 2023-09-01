<script lang="ts">
  import Title from "$lib/components/Title.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  let item = data.data;
  const colors: Map<string, string> = new Map<string, string>();
  colors.set("Próximamente", "blue");
  colors.set("En progreso", "orange");
  colors.set("Completado", "#5fb030");
  colors.set("Cancelado", "red");
  let status_color: string = colors.get(item.status) || "black";
</script>

<div class="container">
  <img src={item.image} alt="{item.title} poster" />
  <div class="column">
    <div class="datacard">
      <Title>{item.type}: {item.title}</Title>
      <ul class="data">
        <li style="font-size: 16px;">
          Publicado:
          {new Date(item.date).toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </li>
        <li>
          <div class="tag category">
            <p>{item.category}</p>
          </div>
        </li>
        <li>
          <div class="tag" style="background-color: {status_color};">
            <p>{item.status}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="datacard description">
      <h2>Descripción</h2>
      <p>{item.description}</p>
    </div>
  </div>
</div>

<style>
  img {
    width: 40%;
    height: 100%;
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
  .column {
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
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
    flex-grow: 1 1 auto;
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
    padding-right: 25%;
    flex-grow: 1;
    text-align: justify;
    overflow-y: auto;
  }
</style>
