<script>
    import ErrorPage from "./404.svelte";

    export let slug;
    const md = import("../blog/" + slug + ".md");
    console.log(md);
</script>

{#await md}
    Loading...
{:then md}
    <div id="details">
        <h6>{md.attributes.title} -- {md.attributes.date}</h6>
    </div>
    <article>
        {@html md.html}
    </article>
{:catch e}
    <ErrorPage />
{/await}
