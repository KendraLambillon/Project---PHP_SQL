(function(){
    const titleContacto = [...document.querySelectorAll('.contacto_title')];
    //console.log(titleContacto);

    titleContacto.forEach(contacto => {
        contacto.addEventListener('click', ()=>{
            let height = 0;
            let answer = contacto.nextElementSibling;
            let addPadding = contacto.parentElement.parentElement;

            addPadding.classList.toggle('contact_item--add');
            contacto.children[0].classList.toggle('contacto_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight; //mininum height of the element
            }

            answer.style.height = `${height}px`;

        });
    });

})();