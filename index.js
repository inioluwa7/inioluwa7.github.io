const sections = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});


const webDesign = document.getElementsByClassName('webDesign');
const graphicsDesign = document.getElementsByClassName('graphicsDesign');
const allDesign = document.getElementsByClassName('allDesign');
const wd = document.querySelectorAll('.wd');
const gd = document.querySelectorAll('.gd');

graphicsDesign[0].addEventListener('click', () => {
    if (gd[0].classList.contains('active')) {
        gd.forEach(element => {
            element.classList.remove('active');
          });
    }

    wd.forEach(element => {
        element.classList.add('active');
      });
});

webDesign[0].addEventListener('click', () => {
    if (wd[0].classList.contains('active')) {
        wd.forEach(element => {
            element.classList.remove('active');
          });
    }

    gd.forEach(element => {
        element.classList.add('active');
      });
});


allDesign[0].addEventListener('click', () => {
    if (gd[0].classList.contains('active')) {
        gd.forEach(element => {
            element.classList.remove('active');
          });
    } else if (wd[0].classList.contains('active')) {
        wd.forEach(element => {
            element.classList.remove('active');
          });
    } 
})