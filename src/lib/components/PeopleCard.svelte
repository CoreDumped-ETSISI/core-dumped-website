<!-- 
  @component
  # People Card
  A component for cards displaying people.
  #### The exported variables are all intended as inputs:
  - name
  - photo (An image source)
  - appointment (Rank in the organization)
  - socials (`Map<string><string>`)
  #### To add socials
  Accepted socials are email, discord, github, linkedin, instagram and twitter.\
  To add them create a new Map for the `socials` exported variable where the keys
  are one of the socials mentioned above and the value is the link to the social page.
-->
<script lang="ts">
  export let name: string;
  export let photo: string = "PeoplePlaceholder.png";
  export let appointment: string;
  export let socials: Map<string, string>;
</script>

<div class="card">
  <img src={photo} alt="{name}'s photo" />
  <h2>{name}</h2>
  <h3>{appointment}</h3>

  {#if socials.size > 0}
    <div class="footer_socials">
      <ul>
        {#if socials.has("email")}
          <li>
            <a href="mailto:{socials.get('email')}">
              <i>
                <i class="fa-solid fa-envelope fa-2xl" />
              </i>
            </a>
          </li>
        {/if}
        {#if socials.has("github")}
          <li>
            <a href={socials.get("github")}
              ><i class="fa-brands fa-github fa-2xl" />
            </a>
          </li>
        {/if}
        {#if socials.has("telegram")}
          <li>
            <a href={socials.get("telegram")}>
              <i class="fa-brands fa-telegram fa-2xl" />
            </a>
          </li>
        {/if}
        {#if socials.has("discord")}
          <li>
            <a href={socials.get("discord")}>
              <i class="fa-brands fa-discord fa-2xl" />
            </a>
          </li>
        {/if}
        {#if socials.has("instagram")}
          <li>
            <a href={socials.get("instagram")}>
              <i class="fa-brands fa-square-instagram fa-2xl" />
            </a>
          </li>
        {/if}
        {#if socials.has("linkedin")}
          <li>
            <a href={socials.get("linkedin")}>
              <i class="fa-brands fa-linkedin fa-2xl" />
            </a>
          </li>
        {/if}
      </ul>
    </div>
  {:else}
    <!--This fake icon allows for alignment with other cards that contain socials-->
    <div class="footer_socials">
      <ul>
        <li>
          <i>
            <i
              class="fa-solid fa-envelope fa-2xl"
              style="color: transparent;"
            />
          </i>
        </li>
      </ul>
    </div>
  {/if}
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: fill;
    border-radius: 100px;
    margin: 8px;
  }
  h2 {
    text-align: center;
  }
  h3 {
    text-align: center;
    margin-bottom: 8px;
  }
  h3:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 200px;
    padding-top: 5px;
    border-bottom: 2px solid #5fb030;
  }
</style>
