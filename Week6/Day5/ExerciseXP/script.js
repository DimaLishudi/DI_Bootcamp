const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

const robotsContainer = document.getElementById("robotsContainer");
const searchInput = document.querySelector("input");
const form = document.querySelector("form");

function displayRobots(query) {
    query = query.toLowerCase();
    const displayed = robots.filter((robot) => robot.name.toLowerCase().includes(query));

    robotsContainer.innerHTML = "";
    for (let robot of displayed) {
        // Robot template:
        // <div class="robot">
        //     <img src="https://robohash.org/1?200x200" alt="Robot">
        //     <div class="title">Leanne Graham</div>
        //     <div class="info">'Sincere@april.biz'</div>
        // </div>
        const robotElement = document.createElement("div");
        robotElement.setAttribute("class", "robot");
        const img = document.createElement("img");
        img.setAttribute("src", robot.image);
        img.setAttribute("alt", "Robot named " + robot.name);
        
        const title = document.createElement("div");
        title.setAttribute("class", "title");
        title.innerHTML = robot.name;

        const info = document.createElement("div");
        info.setAttribute("class", "info");
        info.innerHTML = robot.email;

        robotElement.appendChild(img);
        robotElement.appendChild(title);
        robotElement.appendChild(info);
        robotsContainer.append(robotElement);
    }
}

displayRobots("");

console.log(searchInput);

searchInput.addEventListener("input", (event) => {
    event.preventDefault()
    displayRobots(searchInput.value);
})