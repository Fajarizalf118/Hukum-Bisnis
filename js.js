
    function openTab(evt, tabName) {
        let i, tabcontent, tabbuttons;
        tabcontent = document.querySelectorAll(".tab-content");
        tabcontent.forEach(tab => tab.classList.remove('active'));
        
        tabbuttons = document.querySelectorAll(".tab-button");
        tabbuttons.forEach(button => button.classList.remove('active'));
        
        document.getElementById(tabName).classList.add('active');
        evt.currentTarget.classList.add('active');
    }

    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const body = item.querySelector('.accordion-body');
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + 'px';
            } else {
                body.style.maxHeight = '0';
            }
        });
    });

    let mybutton = document.getElementById("scrollToTopBtn");
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }