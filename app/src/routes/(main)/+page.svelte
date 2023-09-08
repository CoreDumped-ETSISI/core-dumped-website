<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  import CardComponent from "$lib/components/CardComponent.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<!--Home page, here new projects and events will be shown-->
<div class="news_wrap">
  <Title>Novedades</Title>
  <Grid>
    {#each data.data as item}
      <CardComponent
        id={item._id}
        title={item.title}
        description={item.description}
        image_src={item.image}
        date={item.date}
        category={item.category}
        status={item.status}
      />
    {/each}
  </Grid>
</div>
