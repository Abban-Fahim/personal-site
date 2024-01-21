export const projects = [
	{
		img: "/notezzz.png",
		title: "Notezzz",
		desc: "A simple web-based note-taking app",
		links: [
			{ type: "globe", link: "https://notezzz.web.app" },
			{ type: "github", link: "https://github.com/Abban-Fahim/notezzz" },
		],
	},
	{
		img: "/ez-mcq.png",
		title: "EZ MCQs",
		desc: "A little app to help you prepare for the IGCSE/A-levels Science MCQs",
		links: [
			{ type: "globe", link: "https://mcq.abbanf.tech/" },
			{ type: "github", link: "https://github.com/Abban-Fahim/MCQ" },
		],
	},
];

export const whatILike = [
	"producing music",
	"being a nerd",
	"helping people",
	"setting ambitious goals",
	"socialism ☭",
	"video-games",
	"math",
];

export const skills = [
	{ id: "robotics", title: "Robotics", to: ["engineering", "ros"], from: [], pos: { x: 0, y: 0 } },
	{ id: "engineering", title: "Engineering", to: [], from: ["robotics"], pos: { x: 300, y: 100 } },
	{ id: "ros", title: "ROS", to: ["python"], from: ["robotics"], pos: { x: -300, y: 100 } },
	{ id: "python", title: "Python", to: [], from: ["robotics"], pos: { x: -600, y: 100 } },
];

// Script run for generating above object

export function main() {
	let obj = [];
	const connections = [
		"eee,Electrical Engineering,-10,1",
		"robo,Robotics,-3,1",
		"ros,ROS,-7,3",
		"py,Python,-10,7",
		"web,Web Dev,8,1",
		"node,Node JS,10,3",
		"svelte,Svelte,9,5",
		"lua,Lua,5,4",
		"cpp,C++,-3,8",
		"rust,Rust Lang,6,6",
		"matlab,MATLAB,-11,5",
		"game,Game Dev,3,1",
		"mcu,Microcontrollers,-12,4",
		"avr,Arduino Platform,-13,6",
		"linux,Linux,-1,3",
		"bash,Bash Scripting,0,6",
		// edges defined below
		"robo->ros",
		"robo->cpp",
		"robo->linux",
		"robo->matlab",
		"ros->py",
		"eee->robo",
		"eee->matlab",
		"eee->mcu",
		"mcu->avr",
		"game->lua",
		"game->cpp",
		"game->py",
		"web->node",
		"web->svelte",
		"web->rust",
		"linux->bash",
		"linux->rust",
	];
	connections.forEach((c) => {
		let connArray = c.split("->");
		if (connArray.length > 1) {
			obj[obj.findIndex((val) => val.id === connArray[0])].to.push(connArray[1]);
			obj[obj.findIndex((val) => val.id === connArray[1])].from.push(connArray[0]);
		} else {
			connArray = c.split(",");
			obj.push({
				id: connArray[0],
				title: connArray[1],
				to: [],
				from: [],
				pos: { x: Number(connArray[2]) * 100, y: Number(connArray[3]) * 100 },
			});
		}
	});
	return obj;
}
console.log(main());
