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

        wrap.appendChild(title, desc);
        target.appendChild(wrap);
    }

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
            })

            console.log(formatedResult);
            return formatedResult;
        })
        .then(result => { 
            result.forEach(item => {
                renderRepos(item.name, item.html_url, item.description);

            })
        });
})()


