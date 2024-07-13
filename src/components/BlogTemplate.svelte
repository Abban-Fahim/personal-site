<script>
  import "./../styles/generic.scss";
  import Index from "./../components/Index.svelte";
  export let entry;
  const { title, date } = entry.data;
</script>

<Index>
  <h6 id="details">{title} -- {date}</h6>
  <article>
    <slot />
  </article>
</Index>
