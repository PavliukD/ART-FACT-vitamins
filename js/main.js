
//слайдер для отзывов
(() => {
    const list = document.querySelector('.reviews-list')
    const items = list.children
    const buttons = document.querySelectorAll('.reviews-button')


    let itemCouner = 0

    const step = items[0].clientWidth

    items[0].dataset.active = 'true'

    buttons[0].addEventListener('click', () => {
        console.log('click')
        if (itemCouner === 0) {
            return
        }
        itemCouner --
        console.log('left')
        for (let i = itemCouner + 1; i < items.length; i++){
            if (items[i].dataset.active === 'true') {
                items[i].dataset.active = 'false'
                items[i - 1].dataset.active = 'true'
                list.style.transform= `translateX(-${step*itemCouner}px)`
                break
            }
        }

    })

    buttons[1].addEventListener('click', () => {
        if (itemCouner === items.length -1 ) {
            console.log('return')
            return
        }
        console.log('right')
        itemCouner ++
        for (let i = 0; i < items.length; i++){
            if (items[i].dataset.active === 'true') {
                items[i].dataset.active = 'false'
                items[i + 1].dataset.active = 'true'
                list.style.transform= `translateX(-${step*itemCouner}px)`
                break
            }
        }  
    })
})();


// открытие модалок
(() => {
    const items = document.querySelectorAll('.catalog-list-item')

    items.forEach(item => {
        const button = item.querySelector('.catalog-product-fast-link')
        const backdrop = item.querySelector('.catalog-backdrop')
        const close = item.querySelector('.close-modal')

        button.addEventListener('click', () => {
            backdrop.classList.remove('is-hidden')
        })

        backdrop.addEventListener('click', (e) => {
            if (e.target !== e.currentTarget){
                return
            }
            backdrop.classList.add('is-hidden')
        })

        close.addEventListener('click', () => {
            backdrop.classList.add('is-hidden')
        })
    })
})();