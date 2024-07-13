<script>
	import { Anchor, Background, Node, Svelvet, Controls } from "svelvet";
	import GraphNode from "./GraphNode.svelte";
	import { skills, main } from "./data";
	import { onMount } from "svelte";

	let h = 300;
	onMount(async () => {
		console.log("loaded");
		h = document.body.clientWidth * 0.35;
	});
</script>

<Svelvet id="my-canvas" height={h} TD controls fitView={true}>
	{#each main() as skill}
		<GraphNode {...skill} />
	{/each}
	<Background bgColor={"#4a464d"} slot="background" style="none"></Background>
</Svelvet>
