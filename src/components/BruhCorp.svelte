<script>
	import { T, useFrame } from "@threlte/core";
	import { interactivity, Text, OrbitControls } from "@threlte/extras";
	import { spring } from "svelte/motion";
	import { writable } from "svelte/store";
	import { MeshBasicMaterial, MeshStandardMaterial } from "three";

	let text = "Bruh Corp";

	interactivity();
	const scale = spring(1, { damping: 0.5 });

	let rotation = 0;
	useFrame((ctx, dt) => {
		rotation += dt;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
>
	<OrbitControls
		enableDamping
		enablePan={false}
		maxPolarAngle={Math.PI / 2}
		minPolarAngle={-Math.PI / 5}
		maxAzimuthAngle={Math.PI / 9}
		minAzimuthAngle={-Math.PI / 9}
		enableZoom={false}
	/>
</T.PerspectiveCamera>

<T.DirectionalLight position={[0, 15, 10]} castShadow />

<T.Mesh
	rotation.y={rotation}
	rotation.z={1 / rotation}
	position.y={1}
	scale={$scale}
	castShadow
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
/>

<Text
	position.x={-2}
	position.y={1}
	scale={$scale}
	{text}
	castShadow
	font="https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2"
	fontSize={1}
	anchorX={0.5}
	textAlign="center"
	color="#4c1140"
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
	material={new MeshStandardMaterial({ emissive: "#a8cd23", emissiveIntensity: 1.5 })}
/>
