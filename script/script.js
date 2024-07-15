const modalFunc = () => {
    const modal = document.querySelector('.card-modal-overlay')
const basketBtn = document.querySelector('#basket-btn')

const openModal = () => {
    modal.classList.add('open')
}

const closeModal = () => {
    modal.classList.remove('open')
}

basketBtn.addEventListener('click', () => {
    openModal()
})

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('card-modal-overlay') ||
        event.target.closest('.card-modal-close')
    ) {
        closeModal()
    }
})
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            ratting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image1.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            ratting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image2.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            ratting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image3.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            ratting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image4.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            ratting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image5.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            ratting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image6.jpg'
        }
    ]
   
    const loading = () => {
        container.innerHTML='<p style="text-align: center; display: block; grid-column:1/-1;">Загрузка</p>'
    }

    const renderRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./menu.html?id=${card.id}" class="card">
                        <img class="card-img" src="img/${card.image}" alt="position ${card.image}">
                        <div class="card-title">
                            <h3>${card.title}</h3>
                            <div class="time">
                                <p>${card.time} мин</p>
                            </div>
                        </div>
                        <div class="info">
                            <div class="grade">
                                <img src="img/star.svg" alt="star">
                                <p>${card.ratting}</p>
                            </div>
                            <div class="price">
                                <p>От ${card.price} ₽</p>
                                <img src="img/Ellipse 1.svg" alt="ellipse">
                                <p>${card.type}</p>
                            </div>
                        </div>
                    </a>
                `)
        })
    }
    if (container){
        loading()
    
        setTimeout(() => {
            renderRests(restArray)
        }, 500)
    }
}

const menuFunc = () => {
    const containerMenu = document.querySelector('#menu-container')

    const menuArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            price: 250,
            info: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            image: 'image.jpg'
        },
        {
            id: 1,
            title: 'Ролл угорь стандарт',
            price: 395,
            info: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            image: 'image (1).jpg'
        },
        {
            id: 2,
            title: 'Ролл угорь стандарт',
            price: 250,
            info: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            image: 'image (2).jpg'
        },
        {
            id: 3,
            title: 'Ролл угорь стандарт',
            price: 250,
            info: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            image: 'image (3).jpg'
        },
        {
            id: 4,
            title: 'Ролл угорь стандарт',
            price: 250,
            info: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            image: 'image (4).jpg'
        },
        {
            id: 5,
            title: 'Ролл угорь стандарт',
            price: 250,
            info: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            image: 'image (5).jpg'
        }
    ]
   
    const loading = () => {
        containerMenu.innerHTML='<p style="text-align: center; display: block; grid-column:1/-1;">Загрузка</p>'
    }

    const renderMenu = (array) => {
        containerMenu.innerHTML = ''

        array.forEach((card) => {
            containerMenu.insertAdjacentHTML('beforeend', `
                    <a href="./menu.html?id=${card.id}" class="card">
                    <img class="card-img" src="img/menu/${card.image}" alt="position image">
                    <div class="card-title-menu">
                        <h3>${card.title}</h3>
                        <p>${card.info}</p>
                    </div>
                    <div class="buy">
                        <div class="buy-inp">В корзину
                            <img src="img/menu/shopping-cart-white.svg" alt="basket">
                        </div>
                        <h3>${card.price} ₽</h3>
                    </div>
                </a>
                `)
        })
    }
    if (containerMenu){
        loading()
    
        setTimeout(() => {
            renderMenu(menuArray)
        }, 500)
    }
}

modalFunc()
restsFunc()
menuFunc()