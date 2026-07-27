 
        let tablinks = document.getElementsByClassName("tab-links");
        let tabcontents = document.getElementsByClassName("tab-contents");

        function openTab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
        
        let sidemenu = document.getElementById("sideMenu");
        function openMenu(){
            sidemenu.style.right = "0";
        }
        function closeMenu(){
            sidemenu.style.right = "-200px";
        }
        

        //scrolling back to top smoothly
        const scrllBtn = document.getElementById("backToTop");

        window.addEventListener("scroll", () => {
        scrllBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrllBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
});
    