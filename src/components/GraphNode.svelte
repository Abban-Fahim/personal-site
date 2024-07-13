<script>
	import { Anchor, Edge, Node } from "svelvet";
	export let id;
	export let title;
	export let to;
	export let from;
	export let pos;
	console.log(id, pos);
</script>

<Node {id} position={pos} borderRadius={25}>
	<p>{title}</p>
	<div>
		<Anchor connections={to} locked dynamic />
	</div>
</Node>
