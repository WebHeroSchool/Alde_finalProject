(function () {
    const name = 'aldeowl';

    function preloader () {
        window.onload = function () {
            let preloader = document.getElementById('preloader');
            preloader.style.display = 'none';
        };
    }
    function renderRepos(name, href, descrip){
        let target = document.querySelector('.git__list');

        let wrap = document.createElement('div');
        wrap.classList.add('git__item');
        
        let title = document.createElement('a');
        title.classList.add('git__item-title');
        title.setAttribute('target', '_blank');

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
                return formatedResult;
            })
            .then(result => { 
                result.forEach(item => {
                    renderRepos(item.name, item.html_url, item.description);
    
                });
            });
    }
    function scrollToItem (){
        let aboutMe = document.querySelector('#footerAboutMe');
        let aboutMeSection = document.querySelector('.about');
        
        aboutMe.addEventListener('click', () => {
            aboutMeSection.scrollIntoView({behavior: 'smooth'});
        });

        let worksBtn = document.querySelector('#myworks');
        let footerWorks = document.querySelector('#footerWorks');
        let worksWind = document.querySelector('.works');
        
        worksBtn.addEventListener('click', () => {
            worksWind.scrollIntoView({behavior: 'smooth'});
        });
        footerWorks.addEventListener('click', () => {
            worksWind.scrollIntoView({behavior: 'smooth'});
        });

        let skillsBtn = document.querySelector('#skills');
        let footerSkills = document.querySelector('#footerSkills');
        let skillsWind = document.querySelector('.skills');
        
        skillsBtn.addEventListener('click', () => {
            skillsWind.scrollIntoView({behavior: 'smooth'});
        });
        footerSkills.addEventListener('click', () => {
            skillsWind.scrollIntoView({behavior: 'smooth'});
        });

        let gitBtn = document.querySelector('#git');
        let footerGit = document.querySelector('#footerGit');
        let gitWind = document.querySelector('.git');
        
        gitBtn.addEventListener('click', () => {
            gitWind.scrollIntoView({behavior: 'smooth'});
        });
        footerGit.addEventListener('click', () => {
            gitWind.scrollIntoView({behavior: 'smooth'});
        });
    }
    function mobileMenu () {
        let menuBtn = document.querySelector('.mobile-menu__btn');
        let menuBtnFirstLine = document.querySelector('.mobile-menu__item');
        let menuBtnSecondLine = document.querySelector('.mobile-menu__item_second');
        let menuBtnThirdLine = document.querySelector('.mobile-menu__item_third');

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
            menuBtnSecondLine.classList.toggle('mobile-menu__item_second-active');
            menuBtnThirdLine.classList.toggle('mobile-menu__item_third-active');
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
    preloader();
    mobileMenu();
    getRepos(name);
    scrollToItem();
})();


