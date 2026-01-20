// Fungsi buat Tab Bio/Keluarga
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Fungsi buat collapsible (Accordion)
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Fungsi buat Tab di dalam Skill (Desc/Note/Scaling)
function skillTab(btn, type) {
    let card = btn.closest('.skill-card');
    let btns = card.querySelectorAll('.s-tab-btn');
    let contents = card.querySelectorAll('.s-content');
    
    btns.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    
    btn.classList.add('active');
    card.querySelector('.s-content.' + type).classList.add('active');
}
