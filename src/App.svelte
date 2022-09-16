<script>
  import { Router, Link, Route } from "svelte-routing";
  import Projects from "./pages/Projects.svelte";
  import Logo from "./components/abban-logo.svg";
  import ContactPage from "./pages/ContactPage.svelte";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/404.svelte";

  let navElement;
  let navIcon;

  function toggleNav() {
    navElement.classList.toggle("hidden");
    navIcon.classList.toggle("hidden");
  }
</script>

<Router basepath="/personal-site">
  <header>
    <Link to="/" id="logo"><img src={Logo} width={64} alt="Logo" /></Link>
    <button type="button" id="collapser" on:click={toggleNav}
      ><i bind:this={navIcon} class="bi bi-plus hidden" /></button
    >
    <nav bind:this={navElement}>
      <Link to="work">My projects</Link>
      <Link to="contact">Contact</Link>
      <a target="__blank" href="https://abban-fahim.github.io/blog/">My Blog</a>
      <div>
        <a target="__blank" href="https://github.com/Abban-Fahim/"><i class="bi bi-github" /></a>
        <a target="__blank" href="https://www.instagram.com/abbanfahim__/"><i class="bi bi-instagram" /></a>
        <a target="__blank" href="https://www.linkedin.com/in/abban-fahim/"><i class="bi bi-linkedin" /></a>
      </div>
    </nav>
  </header>
  <Route component={Projects} path="/work" />
  <Route component={ContactPage} path="/contact" />
  <Route component={Home} path="/" />
  <Route component={NotFound} />
</Router>
