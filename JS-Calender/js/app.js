const button = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');

const calendarMonths = 12;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url("${path}")`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#333";
}


const createCalendar = () => {
    console.log('test');

    for(let i = 0; i < calendarMonths; i++){
        const calendarDoor = document.createElement('div');
        calendarDoor.classList.add('image');  
        calendarDoor.style.gridArea = "door" + (i + 1); 


        const calendarDoorText = document.createElement('div');
        calendarDoorText.classList.add('text');

        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);

        let picNumber = i + 1;
        let picPath = `./img/pic${picNumber}.jpg`;
        console.log(picPath);

        calendarDoorText.addEventListener('click', openDoor.bind(null, picPath));
    }
}

button.addEventListener('click', createCalendar);