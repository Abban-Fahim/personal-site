<script>
	import { whatILike } from "../components/data";
	import Waterfall from "./waterfall.svelte";
	import { Canvas } from "@threlte/core";
	import BruhCorp from "./BruhCorp.svelte";
	import { onMount } from "svelte";
	import Graph from "./Graph.svelte";

	let BCWidth, BCHeight;
	const BCRatio = 9 / 16;

	onMount(() => {
		BCWidth = (document.body.clientWidth ^ 2.6) * 0.8;
		BCHeight = BCWidth * BCRatio;
	});
</script>

<main>
	<div class="flexCentred" style="justify-content: space-between;">
		<div style="padding: 25px; width: 70vw;">
			<h3>About me</h3>
			<p>I'm <strong>Muhammad Abban</strong>, a student and aspiring researcher, hoping to improve this world a tiny bit with my skills and effort.</p>
			<p>I completed my bachelor's in <strong>robotics</strong> at Heriot-Watt University, Dubai, in the spring of 2026, where I worked with <strong><a href="https://claudiozito.net/">Dr. Claudio Zito</a></strong> on grasp generation through probabilistic methods. For my honours thesis I worked on vision-based reinforcement learning for quadruped locomotion, supervise by <strong><a href="https://scholar.google.com/citations?hl=en&user=kLGaH8YAAAAJ">Dr. Nidhal Abdulaziz</a></strong>.</p>
		</div>
		<img src="/moi.jpg" alt="a pic of me outdoors, in some amazing weather" style="width: 280px; border: 12px #17ad98 groove;">
	</div>
	
	<div class="flexCentred" style="justify-content: space-around;">
		<h3>My skills</h3>
		<div style="width: 100%; text-align: center;">
			<Graph />
		</div>
	</div>
	
	<div style="justify-content: space-around;">
		<p>My research interests revolve around applying <strong>neuromorphic computing</strong> to <strong>robot learning</strong> and <strong>computer vision</strong> to create more <strong>energy-effecient</strong> and <strong>intelligent</strong> systems.
		<p>Outside of academic work, I like to drink a lot of tea, am passionate about open-source, and sometimes read and compose music.</p>
	</div>

	<!-- <h1>Hi there!</h1>
	<h2>I'm <strong>Muhammad Abban</strong></h2>
	<h2 dir="rtl">اسمي <strong> محمد ابان</strong></h2>
	<h4 class="flexCentred big-pad">
		Things i like: 
		<Waterfall longestWord="setting ambitious goals" words={whatILike} />
	</h4>
	<div class="flexCentred" style="justify-content: center; flex-direction: column;">
		<h4>I'm a Robotics Engineer</h4><br>
		<h4>studying at Heriot-Watt University</h4>
	</div>
	<div class="flexCentred" style="justify-content: space-around;">
		<h4>
			And a founder of <strong> <a href="https://bruh-corp.github.io/">Bruh Corp.</a></strong>
		</h4>
		<img src="/bru.gif" alt="Gif of Bruh Corp logo" />
	</div> -->
	<!-- <div class="flexCentred" style="justify-content: space-around;">
		<Canvas size={{ width: BCWidth, height: BCHeight }}>
			<BruhCorp />
		</Canvas>
	</div> -->
</main>
