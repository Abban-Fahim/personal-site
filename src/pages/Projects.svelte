<script>
  import { projects } from "../components/data";
</script>

<main>
  <h3>Web related projects</h3>
  <div class="grid">
    {#each projects as project}
      <div class="item">
        <h5>{project.title}</h5>
        <p>{project.desc}</p>
        {#each project.links as link}
          <a class="project-link" href={link.link}><i class={"bi bi-" + link.type} /></a>
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  .project-link {
    margin: 6px;
    font-size: 24px;
  }
</style>
