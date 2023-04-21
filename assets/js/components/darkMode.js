function darkMode() {
    const dark = document.querySelector('.lightMode')
    // // const menu = document.querySelector('.nav__menu')
    // const all = document.querySelector('.all');
    //
    dark.addEventListener('click', function (e) {

        if (e.target.closest('.lightMode')) {
            // all.classList.toggle('darkMode')
            document.body.classList.toggle('dark')
            dark.innerHTML="<i class='bx bxs-sun'></i>"
            dark.classList.add('darkMode')
            dark.classList.remove('lightMode')

        }
        if (e.target.closest('.darkMode')) {
            // all.classList.toggle('darkMode')
            document.body.classList.toggle('dark')
            dark.innerHTML="<i class='bx bxs-moon'></i>"
            dark.classList.add('lightMode')
            dark.classList.remove('darkMode')

        }

    })
}
export default darkMode