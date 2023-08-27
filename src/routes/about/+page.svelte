<script lang="ts">
  import Grid from "$lib/components/Grid.svelte";
  import PeopleCard from "$lib/components/PeopleCard.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<Title>Sobre Nosotros</Title>
<p class="about">
  Core Dumped es una asociacion de estudiantes de la ETSISI-UPM. <br />
  Nos dedicamos a organizar proyectos, eventos y talleres educativos para nuestra
  escuela. <br /> ¡Ven a visitarnos en la zona de asociaciones bajo al rotonda, al
  lado de la cafetería!
</p>
<Title>Directiva</Title>
<Grid width={225}>
  <PeopleCard
    name="Sofia"
    appointment="Presidenta"
    socials={new Map([
      ["discord", "www.discord.com"],
      ["email", "sofia@gmail.com"],
    ])}
  />
  <PeopleCard name="Sebas" appointment="Vicepresidente" socials={new Map([])} />
  <PeopleCard
    name="Daniel"
    appointment="Secretario"
    socials={new Map([
      ["linkedin", "www.linkedin.com"],
      ["email", "daniel@gmail.com"],
      ["discord", "discord.com"],
      ["instagram", "instagram.com"],
      ["github", "github.com"],
      ["telegram", "telegram.com"],
    ])}
  />
</Grid>

<style>
  .about {
    text-align: left;
    padding: 8px;
    margin-bottom: 16px;
  }
</style>
