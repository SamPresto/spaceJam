const data = [
    {
        id: 1,
        img: "images/pfp1.png",
        name: "Mike Williams",
        job: "Founder/CEO",
        text: "He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't.",
    },
    
    {
        id: 2,
        img: "images/pfp2.png",
        name: "Jhoanathan Mandi",
        job: "Tik Tok Manager",
        text: "She wondered if the note had reached him. She scolded herself for not handing it to him in person. She trusted her friend, but so much could happen. She waited impatiently for word.",
    },

    {
        id: 3,
        img: "images/pfp3.png",
        name: "Scott Roberts",
        job: "Cashier",
        text: "He heard the loud impact before he ever saw the result. It had been so loud that it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the crack in the windshield. It seemed to be an analogy of the current condition of his life.",
    },

    {
        id: 4,
        img: "images/pfp4.png",
        name: "Wise Guy",
        job: "Assistant",
        text: "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
    }
]


const img = document.querySelector('#pfp');
const author = document.querySelector('.name');
const job = document.querySelector('.position');
const info = document.querySelector('.description');

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');


let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = data[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}



nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > data.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = data.length - 1;
    }
    showPerson(currentItem);
});