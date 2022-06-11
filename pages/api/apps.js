const array = [
    {
        img: '/notezzz.png',
        title: "Notezzz",
        desc: "A cross platform note-taking app",
        links: [
            {type: "globe", link: "https://notezzz.web.app"},
            {type: "github", link: "https://github.com/Abban-Fahim/notezzz"}
        ]
    },
    {
        img: '/ez-mcq.png', 
        title: "EZ MCQs", 
        desc: "A little app to help you prepare for the IGCSE Science MCQs",
        links: [
            {type: "globe", link: "https://ez-mcq.herokuapp.com"},
            {type: "github", link: "https://github.com/Abban-Fahim/MCQ"}
        ]
    },
];

export default function (req, res) {
    res.status(200).json(array)   
}