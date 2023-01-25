class MobileNavbar {
    constructor (mobileMenu ,navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }
    animatedLinks() {
        this.navLinks.forEach((link, index)=> {
          link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards $ 
          {index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this
    }
}

const MobileNavBar = new MobileNavbar(
    ".mobileMenu",
    ".nav-list",
    ".nav-list li",
)

const allLinks = document.querySelectorAll("nav-list");

for(const link of allLinks){
    link.addEventListener("click", clickHandler);
}

function clickHandler(e){
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    console.log(href)
    scroll({
        top: offsetTop,
        behavior: "smooth"
    })
}