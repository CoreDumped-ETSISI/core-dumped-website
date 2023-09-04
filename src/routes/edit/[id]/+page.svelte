<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import Card from "$lib/components/Card.svelte";
  import Title from "$lib/components/Title.svelte";
  import type { ActionData, PageData } from "./$types";
  import type { Snapshot } from "./$types";

  export let data: PageData;
  export let form: ActionData;

  let disable: boolean = true;
  let disableNew: boolean = true;
  let categories: string[] = [];

  let formData: any = {
    type: data.data.type,
    title: data.data.title,
    description: data.data.description,
    image: data.data.image,
    date: data.data.date,
    category: data.data.category,
    newCategory: "",
    status: data.data.status,
  };
  $: disable = formData.type === "";
  $: disableNew = formData.category !== "new";
  $: if (formData.type === "Proyecto") {
    categories = [...data.projects];
  } else if (formData.type === "Evento") {
    categories = [...data.events];
  }
  $: if (form?.error === "Unauthorized") {
    goto("/admin?back=true");
  } else if (form?.success) {
    goto("/edit/cartas");
  }
  export const snapshot: Snapshot = {
    capture: () => formData,
    restore: (value) => (formData = value),
  };
</script>

<Title>Crear nueva carta</Title>
<div class="container">
  <div class="cardColumn">
    {#key [formData.title, formData.image, formData.category, formData.newCategory, formData.status, formData.description]}
      <Card
        title={formData.title.length > 0 ? formData.title : "Título"}
        image_src={formData.image.length > 0 ? formData.image : "/fallback.png"}
        date={formData.date !== undefined && formData.date.length > 0
          ? formData.date
          : new Date().toISOString()}
        category={(formData.category !== "new"
          ? formData.category
          : formData.newCategory) || "Categoría"}
        status={formData.status.length > 0 ? formData.status : "Estado"}
        description={formData.description.length > 0
          ? formData.description
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat id leo eget tincidunt. Nullam ullamcorper."}
        adminMode={true}
        id=""
      />
    {/key}
  </div>
  <div class="formColumn">
    <form method="POST" use:enhance>
      <input type="text" name="id" id="id" value={data.data._id} hidden />
      <label for="type">Tipo</label>
      <select name="type" id="type" bind:value={formData.type} required>
        <option value="Proyecto">Proyecto</option>
        <option value="Evento">Evento</option>
      </select>
      <br />
      <label for="title">Título</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        bind:value={formData.title}
        placeholder="Título"
        size={20}
        maxlength="20"
        disabled={disable}
        required
      />
      <br />
      <label for="description">Descripción</label>
      <br />
      <small>
        La primera linea será la que aparezca en la carta, tiene que intentar
        enganchar al usuario.
        <br />
        Usa el resto de la descripción para dar todos los detalles relevantes.
      </small>
      <br />
      <textarea
        name="description"
        id="description"
        placeholder="Descripción"
        bind:value={formData.description}
        cols="50"
        rows="10"
        minlength="100"
        required
        disabled={disable}
      />
      <br />
      <label for="image">URL de la imagen</label>
      <br />
      <small
        >Subela a la unidad compartida de drive y hazla publica.
        <br />
        Para mayor calidad, la imagen tiene que tener un ratio de aspecto de 1:1
        (cuadrada) <br /> y una resolucion minima de 1000x1000 pixeles.
      </small>
      <br />
      <input
        type="url"
        name="image"
        id="image"
        placeholder="https://drive.google.com/file/d/..."
        bind:value={formData.image}
        required
        disabled={disable}
      />
      <br />
      <label for="date">Fecha de publicación</label>
      <br />
      <small> Dejala vacía para mantenerla </small>
      <br />
      <input
        type="date"
        name="date"
        id="date"
        bind:value={formData.date}
        max={new Date().toLocaleDateString("fr-ca")}
        disabled={disable}
      />
      <br />
      <label for="category">Categoria</label>
      <br />
      <select
        name="category"
        id="category"
        bind:value={formData.category}
        required
        disabled={disable}
      >
        <option value="new">Crear nueva</option>
        {#each categories as item}
          <option value={item}>{item}</option>
        {/each}
      </select>
      <input
        type="text"
        id="newcategory"
        name="newcategory"
        bind:value={formData.newCategory}
        placeholder="Nueva categoría"
        size="14"
        maxlength="16"
        disabled={disable || disableNew}
        required={!disableNew}
      />
      <br />
      <label for="status">Estado</label>
      <br />
      <select
        id="status"
        name="status"
        bind:value={formData.status}
        required
        disabled={disable}
      >
        <option value="Completado">Completado</option>
        <option value="En progreso">En progreso</option>
        <option value="Cancelado">Cancelado</option>
        <option value="Próximamente">Próximamente</option>
      </select>
      <br />
      <button type="submit" disabled={disable}>Actualizar</button>
      {#if form?.error}
        <div class="error">
          ! {form.error}
        </div>
      {/if}
    </form>
  </div>
</div>

<style>
  .formColumn {
    background-color: white;
    border-radius: 24px;
    padding: 20px;
  }
  .container {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
  }
  input {
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #5fb030;
    margin-bottom: 8px;
    background-color: whitesmoke;
  }
  select {
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #5fb030;
    margin-bottom: 8px;
    background-color: whitesmoke;
  }
  textarea {
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #5fb030;
    margin-bottom: 8px;
    background-color: whitesmoke;
  }
  button {
    width: fit-content;
    background-color: #5fb030;
    color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
    border-radius: 16px;
    border: transparent;
    padding: 6px;
  }
  button:active {
    box-shadow: none;
  }
  *:disabled {
    background-color: rgba(85, 159, 45, 0.049);
    border-bottom: 1px solid gray;
  }
  button:disabled {
    border-bottom: none;
    color: black;
    box-shadow: none;
  }
  .error {
    color: red;
  }
</style>
