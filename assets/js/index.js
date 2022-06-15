let item = Array.from(document.getElementsByClassName('item'))

console.log(item);

let pionInitiale = 2
let pionVide = 0

// 
for (let i = 0; i < item.length; i++) {
        item[i].textContent = pionInitiale //1
}


// 
for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', () => {
                let lova = +item[i].textContent;
                console.log(lova)
                console.log(item[i].textContent);
                if ((item[i].textContent !== '0') && (item[i].textContent)) {
                        for (let j = +item[i].textContent; j > 0; j--) {
                                item[i-j].textContent ++;
                                item[i].textContent = pionVide //0
                        }
                }
        })
}