import data from './cards.json' with { type: 'json' };

const grid = document.querySelector('.restaurant-grid');

function renderData(data) {
    grid.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const cuisineContent = data[i].cuisine.length > 25 ? data[i].cuisine.slice(0, 25) + '...' : data[i].cuisine;
        const costContent = "₹" + data[i].priceForTwo + " for two";
        const locationContent = data[i].location.length > 25 ? data[i].location.slice(0, 25) + '...' : data[i].location;
        const nameContent = data[i].name.length > 25 ? data[i].name.slice(0, 25) + "..." : data[i].name;
        const ratingContent = data[i].rating == null ? "-" : data[i].rating;

        const content = `
        <div class="restaurant-card">
            <div class="card-media">
                <img src="${data[i].image}" alt="">
            </div>
            <div class="card-header">
                <h1 class="res-name">${nameContent}</h1>
                <div class="res-rating">
                    <span>${ratingContent}</span>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="card-details">
                <h2 class="res-cuisine">${cuisineContent}</h2>
                <h2 class="res-cost">${costContent}</h2>
            </div>
            <div class="card-footer">
                <h2 class="res-location">${locationContent}</h2>
                <h2 class="res-distance">${data[i].distance}</h2>
            </div>
        </div>
        `;

        const newCard = document.createElement('div');
        newCard.innerHTML = content;
        const cardElement = newCard.querySelector('.restaurant-card');
        
        // Xử lý logic màu sắc cho Rating
        const ratingColor = cardElement.querySelector('.res-rating');
        const ratingStar = ratingColor.querySelector('i');

        if (ratingContent == "-") {
            ratingColor.style.backgroundColor = 'grey';
        }
        if (ratingContent == "New") {
            ratingColor.style.backgroundColor = '#90ff9483';
            ratingColor.style.color = '#258a28';
            ratingColor.style.fontWeight = '300';
            ratingStar.style.color = '#258a28';
            ratingColor.style.border = 'solid 1px #258a28';
        }

        // Xử lý Badge Promoted và Discount
        const imgContent = cardElement.querySelector('.card-media');
        if (data[i].isPromoted == true) {
            const newPromoted = document.createElement('h5');
            newPromoted.textContent = 'Promoted';
            newPromoted.setAttribute("class", "sponsored-label");
            imgContent.appendChild(newPromoted);
        }
        if (data[i].discount != null) {
            const newDiscount = document.createElement('div');
            newDiscount.innerHTML = `
                <div class="promo-badge">
                    <i class="fa-solid fa-percent"></i>
                    <h3>Flat ${data[i].discount}% OFF</h3>
                </div>`;
            imgContent.appendChild(newDiscount);
        }

        grid.appendChild(cardElement);
    }
}

renderData(data);

const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    const newData = data.filter(item => {
        return item.name.toLowerCase().includes(value);
    });
    renderData(newData);
});