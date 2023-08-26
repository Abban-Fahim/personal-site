<script>
    import { Router, Link, Route } from "svelte-routing";
    import Projects from "./pages/Projects.svelte";
    import Logo from "./components/m-abban.png";
    import Home from "./pages/Home.svelte";
    import NotFound from "./pages/404.svelte";
    import BlogTemplate from "./pages/BlogTemplate.svelte";
    import Blog from "./pages/Blog.svelte";

    let navElement;
    let navIcon;

    function toggleNav() {
        navElement.classList.toggle("hidden");
        navIcon.classList.toggle("hidden");
    }
</script>

<Router>
    <header>
        <Link id="logo"><img src={Logo} width="128" alt="Logo" /></Link>
        <button type="button" id="collapser" on:click={toggleNav}>
            <i bind:this={navIcon} class="bi bi-plus" />
        </button>
        <nav bind:this={navElement} class="hidden">
            <Link to="work">projects</Link>
            <Link to="blog">blog</Link>
            <div>
                <a target="__blank" href="https://github.com/Abban-Fahim/"
                    ><i class="bi bi-github" /></a
                >
                <a
                    target="__blank"
                    href="https://www.instagram.com/abbanfahim__/"
                    ><i class="bi bi-instagram" /></a
                >
                <a
                    target="__blank"
                    href="https://www.linkedin.com/in/abban-fahim/"
                    ><i class="bi bi-linkedin" /></a
                >
            </div>
        </nav>
    </header>
    <Route path="/blog/:slug" let:params>
        <BlogTemplate slug={params.slug} />
    </Route>
    <Route component={Blog} path="/blog" />
    <Route component={Projects} path="/work" />
    <Route component={Home} path="/" />
    <Route component={NotFound} />
</Router>
