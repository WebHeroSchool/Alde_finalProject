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
    getRepos(name);
    scrollToItem();
})();


