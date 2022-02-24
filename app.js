let listItems=[...document.querySelectorAll('li')];

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            //each letter code
            let letters = [...entry.target.querySelectorAll('span')];
            letters.forEach((letter, idx) => {
                setTimeout(()=>{
                    letter.classList.add('active');
                }, idx * 10)
            })
            // finish each letter code
            entry.target.children[0].classList.add('active');
        }
    })
}

listItems.forEach(item => {
//each letter code
  let newString = '';
  let itemText = item.children[0].innerText.split('');
  itemText.map(letter =>(newString += letter == '' ?`<span class='gap'></span>`:`<span>${letter}</span>`))
  item.innerHTML= newString; 
  // finish each letter code
  observer.observe(item);
})
