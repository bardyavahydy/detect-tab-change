const $ = document
const titlePageElm = $.querySelector('#title')
const passElm = $.querySelector('.pass')

$.addEventListener("visibilitychange", () => {
    if($.visibilityState === "visible") titlePageElm.innerText = 'Active Tab'
    else titlePageElm.innerText = 'Inactive Tab'
    
    passElm.innerText = `(failed)`
    passElm.classList.add('failed')
});