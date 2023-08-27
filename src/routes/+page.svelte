<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<!--Home page, here new projects and events will be shown-->
<div class="news_wrap">
  <Title>Novedades</Title>
  <Grid>
    <Card
      title="Dimension 2023"
      image_src="/dimension.jpg"
      description="Feria de las asociaciones, con tematica de inteligencia artificial en esta edición."
      date="23/05/23"
      status="En progreso"
      category="Evento"
      status_color="orange"
    />
    <Card
      title="Dimension 2024"
      image_src="/dimension.jpg"
      description="Feria de las asociaciones, con tematica de inteligencia artificial en esta edición. Se trata
      sin duda..."
      date="23/05/23"
      status="Cancelado"
      category="Evento"
      status_color="red"
    />
    <Card
      title="Dimension 2023"
      image_src="/dimension.jpg"
      description="Feria de las asociaciones, con tematica de inteligencia artificial en esta edición."
      date="23/05/23"
      status="Completado"
      category="Evento"
      status_color="#5fb030"
    />
    <Card
      title="Dimension 2023"
      image_src="/dimension.jpg"
      description="Feria de las asociaciones, con tematica de inteligencia artificial en esta edición."
      date="23/05/23"
      status="Completado"
      category="Evento"
      status_color="#5fb030"
    />
    <Card
      title="Dimension 2023"
      image_src="/dimension.jpg"
      description="Feria de las asociaciones, con tematica de inteligencia artificial en esta edición."
      date="23/05/23"
      status="Completado"
      category="Evento"
      status_color="#5fb030"
    />
  </Grid>
</div>
