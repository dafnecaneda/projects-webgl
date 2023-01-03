const state = {
  top: 0,
  pages: 0,
  threshold: 4,
  mouse: [0, 0],
  content: [
    {
      tag: 'Full Stack',
      text: `PetStorage\n`,
      secondtext: `Technologies implemented:\nReactJs, NodeJs, ExpressJs API,\n MySQL, Bootstrap`,
      thirdtext: `Applaying all my Full Stack abilities I have created this SPA where you can create an account, add your Pets, and add their Medical Records. With password recovery service and Contact Us form available.`,
      images: ['/images/asd.png', '/images/ps2.jpg', '/images/ps3.jpg'],
    },
    {
      tag: 'Full Stack',
      text: `PetAmbulance\n`,
      secondtext: `Technologies implemented:\nNodeJs, ExpressJs API, \nMySQL, Bootstrap`,
      thirdtext: `With this CRUD Web Appliction you can create an account,  add your Pets and use the Contact Form to contact a Vet.`,
      images: ['/images/pa.jpg', '/images/pa2.jpg', '/images/pa3.jpg'],
    },
    {
      tag: 'WebGL Experiments',
      text: `ThreeJS Journey\n`,
      secondtext: `My Experience diving into WebGL, 3D models and ThreeJs, inspired me to create this portfolio.`,
      thirdtext: `I been reflecting on my professional skills and where I would like to go in my career has a developer, I wanted to learn a skill that could bring a new feeling to the regular user, a full inmersive and friendly experience, I have come across Bruno Simon's Three.Js Journey Course, and since then I have loved creating fun and interactive 3D web elements to give a more in depth feeling to the user when scrolling through web pages.`,
      images: ['/images/portfolio1.jpg', '/images/portfolio2.jpg', '/images/galaxy1.jpg'],
    },
  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'I am always pushing myself to learn new skills and keep motivated, discovering new ideas and concepts about web development and design.',
      image: '/images/cAKwexj.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'I am currently looking for a web developer role with a visa sponshorship.',
      image: '/images/04zTfWB.jpg',
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-12, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
    {
      points: [
        [20, 0, 0],
        [11.5, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
  ],
}

export default state
