export const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(el) {
        document.querySelector(`#${id}`).scrollIntoView({ 
            behavior: 'smooth' 
        });
    } else {
        console.error(`error element with id - ${id} not found`);
    }
}