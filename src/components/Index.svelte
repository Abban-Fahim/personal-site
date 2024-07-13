<script>
	import "./../styles/generic.scss";
	let navElement;
	let navIcon;

	function toggleNav() {
		navElement.classList.toggle("hidden");
		navIcon.classList.toggle("hidden");
	}
</script>

<header>
	<a id="logo" href="/personal-site/"><img src="/personal-site/m-abban.png" width="128" alt="Logo" /></a>
	<button type="button" id="collapser" on:click={toggleNav}>
		<i bind:this={navIcon} class="bi bi-plus" />
	</button>
	<nav bind:this={navElement} class="hidden">
		<a href="/personal-site/projects">projects</a>
		<a href="/personal-site/blog">blog</a>
		<div>
			<a target="__blank" href="https://github.com/Abban-Fahim/"><i class="bi bi-github" /></a>
			<a target="__blank" href="https://www.instagram.com/abbanfahim__/"><i class="bi bi-instagram" /></a>
			<a target="__blank" href="https://www.linkedin.com/in/abban-fahim/"><i class="bi bi-linkedin" /></a>
		</div>
	</nav>
</header>
<slot />
