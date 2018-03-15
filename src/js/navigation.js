const navigation = () => {
  const button = document.querySelector(".navigation-button");
  const menu = document.querySelector(".mobile-menu");
  const body = document.querySelector("body");

  const close = () => {
    menu.style.animation = "fadeOut 0.4s ease-in forwards";
    const hide = () => {
      menu.style.display = "none";
      menu.removeEventListener('animationend', hide);
    };
    menu.addEventListener('animationend', hide);
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("active");
    body.classList.remove("active");
  }

  button.addEventListener("click", () => {
    button.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("active");
    menu.style.display = "block";
    
    if (menu.classList.contains("active")) {
      menu.style.animation = "fadeIn 0.4s ease-in forwards";
      button.setAttribute("aria-expanded", "true");
    } else {
      close();
    }
  });

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode == 27) {
      close();
      
    }
  };
}

navigation();