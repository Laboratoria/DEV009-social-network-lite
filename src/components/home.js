function home(navigateTo) {
    const section = document.createElement('section')
    const title = document.createElement('h2')
    const button = document.createElement('button');
    button.textContent = 'login';
    button.addEventListener('click', ()=> {
        navigateTo('/login');
    });

    title.textContent = ' Bienvenida a mi red social';
    
    section.append(title, button);
    return section;
}

export default home;