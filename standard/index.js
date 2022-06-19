const burgerMenu = document.getElementById("burger-menu")
const menuContent = document.getElementById("menu")

burgerMenu.addEventListener("click", () => {
  const menuHideClass = "menu-hide"
  const menuClass = "menu"

  if (menuContent.classList.value === menuHideClass) {
    menuContent.classList.replace(menuHideClass, menuClass)
  } else {
    menuContent.classList.replace(menuClass, menuHideClass)
  }
})
