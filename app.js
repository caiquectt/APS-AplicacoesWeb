const reviews = [
  {
    id: 1,
    name: "Fernanda Alencar",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Encontrei o Cake Box por indicação de um amigo, e me surpreendi. Os doces são deliciosos, e em toda ocasião especial, faço um pedido. Recomendo.",
  },
  {
    id: 2,
    name: "Anna Beatriz",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Fiz um pedido de um bolo para o meu aniversário e não me arrependi. Além da decoração bonita, o bolo estava maravilhoso. Voltarei a pedir novamente.",
  },
  {
    id: 3,
    name: "Alex Silva",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sou cliente a anos, e todo inicio de mês, faço um pedido com sobremesas variadas para satisfazer minha vontade de comer doces. A qualidade da Cake Box é sem igual.",
  },
  {
    id: 4,
    name: "Lucas Ferreira",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Estava a procura de uma confeitaria que pudesse entregar para minha casa, e encontrei a Cake Box nas redes sociais. A qualidade é excelente e o envio foi rápido. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
