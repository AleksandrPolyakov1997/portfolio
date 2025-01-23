import './style/normalize.css';
import './style/fonts.scss';
import './style/style.scss';
import './images/how-to-learn.jpg';
import './images/russian-travel.jpg';
import './images/mesto.jpg';
import './images/icons/github.png'

let projects = [
  {
    name: "how-to-learn",
    tags: "#ui/ux",
    image: "how-to-learn.jpg"
  },
  {
    name: "russian-travel",
    tags: "#ui/ux",
    image: "russian-travel.jpg"
  },
  {
    name: "mesto",
    tags: "#javascript, #ui/ux",
    image: "mesto.jpg"
  },
]

const projectContainer = document.querySelector('.project-container');

projects.forEach((project) => {
  projectContainer.innerHTML += `
  <div class="project-card" data-tags="#all, ${project.tags}">
    <img src="./images/${project.image}" alt="${project.name}" class="card-image">
    <div class="card-content">
      <h3 class="project-name">${project.name}</h3>
      <span class="tags">${project.tags}</span>
    </div>
  </div>
  `
})

const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            } else{
                card.classList.add('hide');
            }
        })
        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})