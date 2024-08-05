(function(){
    //Instead of being a node [...] allows to convert to an array
    const sliders = [...document.querySelectorAll('.profile_body')];

    const buttonNext = document.querySelector('#next');
    const buttonPrevious = document.querySelector('#previous');
    //console.log(sliders);
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonPrevious.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        //console.log(add);
        const currentProfile = document.querySelector('.profile_body--show').dataset.id;
        //console.log(currentProfile);
        value = Number(currentProfile);
        value += add;
        //console.log(value);

        sliders[Number(currentProfile)-1].classList.remove('profile_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        //console.log(value);

        sliders[value-1].classList.add('profile_body--show');
    }

})();