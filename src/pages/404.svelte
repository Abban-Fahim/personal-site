<script>
    import { Link } from "svelte-routing";
    import Face from "../components/face-slash.png";
</script>

<main>
    <img src={Face} alt="hmmmmm.png" />
    <h1>How'd you end up here?</h1>
    <h2>Go find something that actually <Link to="/">exists</Link></h2>
</main>
