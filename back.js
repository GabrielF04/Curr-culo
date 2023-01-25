class MobileNavbar {
    constructor (mobileMenu ,navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }
    animatedLinks() {
        this.navLinks.forEach((link)=> {
          link.style.animation
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
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

const MobileNavBar = new MobileNavBar(
    ".mobileMenu",
    ".nav-list",
    ".nav-list li",
)