<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import Card from "$lib/components/Card.svelte";
  import PeopleCard from "$lib/components/PeopleCard.svelte";
  import Title from "$lib/components/Title.svelte";
  import type { ActionData, PageData } from "./$types";
  import type { Snapshot } from "./$types";

  export let data: PageData;
  export let form: ActionData;

  let gender: string;

  let formData: any = {
    name: data.data.name,
    appointment: data.data.appointment,
    image: data.data.image,
    email: data.data.email,
    discord: data.data.discord,
    github: data.data.github,
    telegram: data.data.telegram,
    instagram: data.data.instagram,
    linkedin: data.data.linkedin,
  };

  $: if (gender === "M") {
    if (
      formData.appointment.slice(0, -1) === "Tesorer" ||
      formData.appointment.slice(0, -1) === "Secretari"
    ) {
      formData.appointment = formData.appointment.slice(0, -1) + "o";
    } else {
      formData.appointment = formData.appointment.slice(0, -1) + "e";
    }
  } else {
    formData.appointment = formData.appointment.slice(0, -1) + "a";
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

<Title>Modificar persona</Title>
<div class="container">
  <div class="cardColumn">
    {#key formData}
      <PeopleCard
        name={formData.name}
        appointment={formData.appointment}
        photo={formData.image && formData.image.length > 0
          ? formData.image
          : "/PeoplePlaceholder.png"}
        socials={new Map([
          [
            "discord",
            formData.discord?.trim().length > 0 ? formData.discord : undefined,
          ],
          [
            "email",
            formData.email?.trim().length > 0 ? formData.email : undefined,
          ],
          [
            "instagram",
            formData.instagram?.trim().length > 0
              ? formData.instagram
              : undefined,
          ],
          [
            "telegram",
            formData.telegram?.trim().length > 0
              ? formData.telegram
              : undefined,
          ],
          [
            "github",
            formData.github?.trim().length > 0 ? formData.github : undefined,
          ],
          [
            "linkedin",
            formData.linkedin?.trim().length > 0
              ? formData.linkedin
              : undefined,
          ],
        ])}
      />
    {/key}
  </div>
  <div class="formColumn">
    <form method="POST" use:enhance>
      <label for="name">Nombre</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nombre"
        bind:value={formData.name}
        required
      />
      <br />
      <input
        type="text"
        id="appointment"
        name="appointment"
        bind:value={formData.appointment}
        hidden
      />
      <input type="text" id="id" name="id" bind:value={data.data._id} hidden />
      <label for="gender"
        >Género
        <br />
        <small
          >Unicamente usado para determinar la ultima letra del puesto (ej.
          presidente/presidenta)</small
        >
      </label>
      <br />
      <input
        type="radio"
        id="Masculino"
        name="gender"
        value="M"
        bind:group={gender}
      />
      <label for="Masculino">Masculino</label>
      <br />
      <input
        type="radio"
        id="Femenino"
        name="gender"
        value="F"
        bind:group={gender}
      />
      <label for="Femenino">Femenino</label>
      <br />
      <label for="image">URL de la imagen</label>
      <br />
      <small
        >Subela a la unidad compartida de drive y hazla publica.
        <br />
        Para mayor calidad, la imagen tiene que tener un ratio de aspecto de 1:1
        (cuadrada) <br /> y una resolucion minima de 200x200 pixeles.
      </small>
      <br />
      <input
        type="url"
        name="image"
        id="image"
        placeholder="https://drive.google.com/file/d/..."
        bind:value={formData.image}
      />
      <br />
      <p>Socials:</p>
      <input
        type="email"
        name="email"
        id="email"
        bind:value={formData.email}
        placeholder="Email"
      />
      <br />
      <input
        type="url"
        name="discord"
        id="discord"
        bind:value={formData.discord}
        placeholder="Discord"
      />
      <br />
      <input
        type="url"
        name="instagram"
        id="instagram"
        bind:value={formData.instagram}
        placeholder="Instagram"
      />
      <br />
      <input
        type="url"
        name="telegram"
        id="telegram"
        bind:value={formData.telegram}
        placeholder="Telegram"
      />
      <br />
      <input
        type="url"
        name="github"
        id="github"
        bind:value={formData.github}
        placeholder="Github"
      />
      <br />
      <input
        type="url"
        name="linkedin"
        id="linkedin"
        bind:value={formData.linkedin}
        placeholder="LinkedIn"
      />
      <br />
      <button type="submit">Actualizar</button>
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
  .error {
    color: red;
  }
</style>
