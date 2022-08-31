<script>
  import { Router, Link, Route } from "svelte-routing";
  import Projects from "./pages/Projects.svelte";
  import Logo from "./components/abban-logo.svg";
  import ContactPage from "./pages/ContactPage.svelte";
  import Home from "./pages/Home.svelte";
</script>

<Router basepath="/personal-site">
  <header>
    <Link to="/" id="logo"><img src={Logo} alt="Logo" /></Link>
    <nav>
      <Link to="work">My projects</Link>
      <Link to="contact">Contact</Link>
      <a href="https://abban-fahim.github.io/blog/">My Blog</a>
    </nav>
  </header>
  <Route component={Projects} path="/work" />
  <Route component={ContactPage} path="/contact" />
  <Route component={Home} path="/" />
</Router>

<style>
</style>
