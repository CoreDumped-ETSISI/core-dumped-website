<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from "$app/stores";

  export let data: PageData;
  import Card from "$lib/components/Card.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<!--Home page, here new projects and events will be shown-->
<div class="news_wrap">
  <Title>Novedades</Title>
  <Grid>
    {#each data.data as item}
      <Card
        title={item.title}
        description={item.description}
        image_src={item.image}
        date={new Date(item.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
        category={item.category}
        status={item.status}
        url={$page.url + item.url.substr(item.url.indexOf("/") + 1)}
      />
    {/each}
  </Grid>
</div>
