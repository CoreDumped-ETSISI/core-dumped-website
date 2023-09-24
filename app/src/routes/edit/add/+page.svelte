<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import CardComponent from "$lib/components/CardComponent.svelte";
  import Title from "$lib/components/Title.svelte";
  import type { ActionData, PageData } from "./$types";
  import type { Snapshot } from "./$types";

  export let data: PageData;
  export let form: ActionData;

  let disable: boolean = true;
  let disableNewCategory: boolean = true;
  let categories: string[] = [];

  let formData: any = {
    type: "",
    title: "",
    description: "",
    image: "",
    date: "",
    category: "",
    newCategory: "",
    status: "",
    clickable_link: "",
    clickable_link_text: "",
  };
  $: disable = formData.type === "";
  $: disableNewCategory = formData.category !== "new";
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
      <CardComponent
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
        id=""
      />
    {/key}
  </div>
  <div class="formColumn">
    <form method="POST" use:enhance>
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
        cols="30"
        rows="10"
        minlength="100"
        required
        disabled={disable}
      />
      <br />
      <label for="image">URL de la imagen</label>
      <br />
      <small
        >Súbela a <a
          href="https://drive.google.com/drive/u/0/folders/1URdPcjS6ty99Azp1RZMF6ohupAGnt2TO"
          >Drive</a
        >
        de manera publica
        <br />
        Consigue el link para insertarla
        <a href="https://www.labnol.org/embed/google/drive/">aquí</a>
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
      <small> Si se deja vacía se guardará como hoy </small>
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
        disabled={disable || disableNewCategory}
        required={!disableNewCategory}
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
      <label for="clickable_link">Link externo</label>
      <br />
      <small
        >Opcional: link para añadir en la página del evento/proyecto.
        <br /> (Por ejemplo un link a un formulario de inscripción)
      </small>
      <br />
      <input
        type="url"
        name="clickable_link"
        id="clickable_link"
        bind:value={formData.clickable_link}
        placeholder="https://site.com"
        disabled={disable}
      />
      <label for="clickable_link_text" style="font-size:smaller;"
        >Texto para el link:</label
      >
      <input
        type="text"
        name="clickable_link_text"
        id="clickable_link_text"
        bind:value={formData.clickable_link_text}
        maxlength="30"
        placeholder="Inscríbase aquí!"
        disabled={disable || formData.clickable_link === ""}
      />
      <br />
      <button type="submit" disabled={disable}>Publicar</button>
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
