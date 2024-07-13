export const projects = [
	{
		title: "Robotics projects",
		projs: [
			{
				title: "Tic-Tac-Toe playing robot",
				desc: "A robotic manipulator that plays tic-tac-toe with humans, and always wins!",
				links: [
					{ type: "github", link: "https://github.com/Abban-Fahim/b38ro-project/"}
				]
			},
			{
				title: "B.U.R.G.E.R",
				desc: "Coming soon...",
				links: [
					{ type: "linkedin", link: "https://www.linkedin.com/posts/abu-dhabi-university_roboticscompetition-innovationchallenge-activity-7188491442758041601-AlAq/"}
				]
			}
		]
	},
	{
		title: "Web projects",
		projs: [
			{
				img: "/notezzz.png",
				title: "Notezzz",
				desc: "A simple web-based note-taking app",
				links: [
					{ type: "globe", link: "https://notezzz.web.app/" },
					{ type: "github", link: "https://github.com/Abban-Fahim/notezzz/" },
				],
			},
			{
				img: "/ez-mcq.png",
				title: "EZ MCQs",
				desc: "An app to help you prepare for the IGCSE/A-levels Science MCQs",
				links: [
					{ type: "globe", link: "https://mcqsite-1-c6352381.deta.app/" },
					{ type: "github", link: "https://github.com/Abban-Fahim/MCQ/" },
				],
			},
		]
	}
];

export const whatILike = [
	"music production",
	"my privacy",
	"Linux and FOSS",
	"socialism",
	"videogames",
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
		"robo,Robotics and Simulations,-3,1",
		"ros,ROS,-7,4",
		"py,Python,-5.2,5.4",
		"web,Web Dev,8,1",
		"node,Node JS,10,3",
		"react,React,8,3",
		"svelte,Svelte,9,5",
		"love,LÖVE 2D,5,4",
		"unity,Unity,4.5,6",
		"cpp,C++,-3,7",
		"rust,Rust lang,6,6",
		"matlab,MATLAB,-9,3",
		"game,Game Dev,3,1",
		"mcu,Microcontrollers,-12,4",
		"avr,Arduino Platform,-13,6",
		"esp,ESP32,-13,8",
		"pio,PlatformIO,-10,6",
		"linux,Linux,-1,3",
		"bash,Bash scripting,0,6",
		// edges defined below
		"robo->ros",
		"robo->cpp",
		"robo->linux",
		"robo->matlab",
		"robo->unity",
		"ros->py",
		"ros->cpp",
		"eee->robo",
		"eee->matlab",
		"eee->mcu",
		"mcu->avr",
		"mcu->pio",
		"mcu->esp",
		"game->love",
		"game->unity",
		"game->cpp",
		"game->py",
		"web->node",
		"web->svelte",
		"web->react",
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