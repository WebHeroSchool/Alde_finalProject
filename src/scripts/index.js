(function () {
    const name = 'aldeowl';

    function renderRepos(name, href, descrip){
        let target = document.querySelector('.git__list');

        let wrap = document.createElement('div');
        wrap.classList.add('git__item');
        
        let title = document.createElement('a');
        title.classList.add('git__item-title');

        let desc = document.createElement('p');
        desc.classList.add('git__item-text');

        title.innerHTML = name;
        title.setAttribute('href', href);

        desc.innerHTML = descrip;

        wrap.appendChild(title);
        wrap.appendChild(desc);
        target.appendChild(wrap);
    }
    function getRepos (name){
        fetch(`https://api.github.com/users/${name}/repos`)
            .then(res => res.json())
            .then(json => {
                const formatedResult = [];
    
                json.map(item => {
                    const {
                        name,
                        html_url,
                        description
                    }= item;
    
                    formatedResult.push({
                        name,
                        html_url,
                        description
                    });
                });
    
                console.log(formatedResult);
                return formatedResult;
            })
            .then(result => { 
                result.forEach(item => {
                    renderRepos(item.name, item.html_url, item.description);
    
                });
            });
    }
    function scrollToItem (){
        let worksBtn = document.querySelector('#myworks');
        let worksWind = document.querySelector('.works');
        
        worksBtn.addEventListener('click', () => {
            worksWind.scrollIntoView({behavior: 'smooth'});
        });

        let skillsBtn = document.querySelector('#skills');
        let skillsWind = document.querySelector('.skills');
        
        skillsBtn.addEventListener('click', () => {
            skillsWind.scrollIntoView({behavior: 'smooth'});
        });

        let gitBtn = document.querySelector('#git');
        let gitWind = document.querySelector('.git');
        
        gitBtn.addEventListener('click', () => {
            gitWind.scrollIntoView({behavior: 'smooth'});
        });
    }
    function mobileMenu () {
        let menuBtn = document.querySelector('.mobile-menu__btn');
        let menuBtnFirstLine = document.querySelector('.mobile-menu__item');
        let menuBtnSecondLine = document.querySelector('.mobile-menu__item-second');
        let menuBtnThirdLine = document.querySelector('.mobile-menu__item-third');

        let profile = document.querySelector('.mobile-menu__profile');
        let profileSection = document.querySelector('.about');
        
        let works = document.querySelector('.mobile-menu__works');
        let worksSection = document.querySelector('.works');

        let skills = document.querySelector('.mobile-menu__skills');
        let skillsSection = document.querySelector('.skills');

        let git = document.querySelector('.mobile-menu__git');
        let gitSection = document.querySelector('.git');

        let linkid = document.querySelector('.mobile-menu__linkid');
        let mail = document.querySelector('.mobile-menu__mail');
        let phone = document.querySelector('.mobile-menu__phone');
        
        menuBtn.addEventListener('click', () => {
            profile.classList.toggle('mobile-menu__active');
            works.classList.toggle('mobile-menu__active');
            skills.classList.toggle('mobile-menu__active');
            git.classList.toggle('mobile-menu__active');
            linkid.classList.toggle('mobile-menu__active');
            mail.classList.toggle('mobile-menu__active');
            phone.classList.toggle('mobile-menu__active');

            menuBtnFirstLine.classList.toggle('mobile-menu__item-active');
            menuBtnSecondLine.classList.toggle('mobile-menu__item-second-active');
            menuBtnThirdLine.classList.toggle('mobile-menu__item-third-active');
        });
        
        profile.addEventListener('click', () => {
            profileSection.scrollIntoView({behavior: 'smooth'});
        });
        works.addEventListener('click', () => {
            worksSection.scrollIntoView({behavior: 'smooth'});
        });
        skills.addEventListener('click', () => {
            skillsSection.scrollIntoView({behavior: 'smooth'});
        });
        git.addEventListener('click', () => {
            gitSection.scrollIntoView({behavior: 'smooth'});
        });
    }
    mobileMenu();
    getRepos(name);
    scrollToItem();
})();


