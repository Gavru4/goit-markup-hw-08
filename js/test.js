{
  /* <div class="backdrop is-hidden" data-modal>
    <div class="modal-form">
        <button class="modal-close-btn" data-modal-close type="button">
            <svg class="madal-close-icon" width="18" height="18">
                <use href="#icon-close"></use>
            </svg>
        </button>

        <div class="img-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-Qim9uZti-fsVDTgeJX5wOxKBUJxqiu-pPB7kFHenxzi1p9XkBH3ZvWmoIHRN3WCyIU&usqp=CAU"
                alt="">
        </div>
        <div class="main-img-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-Qim9uZti-fsVDTgeJX5wOxKBUJxqiu-pPB7kFHenxzi1p9XkBH3ZvWmoIHRN3WCyIU&usqp=CAU"
                alt="">
        </div>

        <div class="card-discription">
            <ul class="modal__list">
                <li class="modal__item">
                    <h2 class="modal__header">INFO</h2>
                    <p class="modal__description">Atlas Weekend is the largest music festival in Ukraine.
                        More than 200 artists will create
                        a proper music festival atmosphere on 10 stages</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHEN</h2>
                    <p class="modal__description">2021-06-09</p>
                    <p class="modal__description">20:00 (Kyiv/Ukraine)</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHERE</h2>
                    <p class="modal__description">Kyiv, Ukraine</p>
                    <p class="modal__description">VDNH</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHO</h2>
                    <p class="modal__description">The Black Eyed Peas</p>
                </li>
            </ul>
            <h2 class="modal__header">PRICES</h2>
            <ul class="prices-list">
                <li>
                    <p class="price">Standart 300-500 UAH</p>
                    <a class="buttons buy-tiket" href="#">BUY TICKETS</a>
                </li>
                <li><img src="#" alt="">
                    <p class="price">VIP 1000-1500 UAH</p>
                    <a class="buttons buy-tiket" href="#">BUY TICKETS</a>
                </li>
            </ul>

        </div>
        <a class="buttons more-from btn-position" href="#">MORE FROM THIS AUTHOR</a>

    </div>
</div>




const modalForm = document.querySelector('.modal-form');

function renderModalMarkup(arr) {
  // getImg(data)
  const markup = arr
    .map(item => {
      `<div class="img-wrapper">
        <img src="${item.images[0].url}" alt="">
      </div>
      <div class="main-img-wrapper">
          <img src="${item.images[1].url}" alt="">
      </div>
      <div class="card-discription">
          <ul class="modal__list">
              <li class="modal__item">
                    <h2 class="modal__header">INFO</h2>
                    <p class="modal__description">${item.name}
</p>
                </li>
                <li class="modal__item"
                    <h2 class="modal__header">WHEN</h2>
                    <p class="modal__description">${item.dates.start.localDate}</p>
                    <p class="modal__description">${item.sales.public.startDateTime}${item._embedded.venues[0].timezone}(Kyiv/Ukraine)</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHERE</h2>
                    <p class="modal__description">${item._embedded.venues[0].country.name},${item._embedded.venues[0].city}</p>
                    <p class="modal__description">${item._embedded.venues[0].name}</p>
                </li>
                <li class="modal__item">
                    <h2 class="modal__header">WHO</h2>
                    <p class="modal__description">${item.name}</p>
                </li>
            </ul>
            <h2 class="modal__header">PRICES</h2>
            <ul class="prices-list">
                <li>
                    <p class="price">${item.priceRanges[0].type}${item.priceRanges[0].min}${item.priceRanges[0].max}${item.priceRanges[0].currency}</p>
                    <a class="buttons buy-tiket" href="#">BUY TICKETS</a>
                </li>
                <li><img src="#" alt="">
                    <p class="price">${item.priceRanges[1].type}${item.priceRanges[1].min}${item.priceRanges[1].max}${item.priceRanges[1].currency}</p>
                    <a class="buttons buy-tiket" href="#">BUY TICKETS</a>
                </li>
            </ul>

        </div>`;
    })
    .join('');
  modalForm.innerHTML = markup;
}

.modal-form {
  position: relative;
  width: 272px;
  min-height: 915px;
  margin: 0 auto;

  border-radius: 150px 0px;

  background-color: var(--modal-background-color);

  @media screen and (min-width: 480px) and (max-width: 780px) {
    width: 595px;
    height: 831px;

    border-radius: 300px 0px;
  }
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    width: 930px;
    height: 1023px;

    border-radius: 300px 0px;
  }
}
.modal-close-btn {
  position: absolute;
  right: 25px;
  top: 25px;

  border-radius: 50%;
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    right: 30px;
    top: 30px;
  }
}
// .small-img {
//   background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-Qim9uZti-fsVDTgeJX5wOxKBUJxqiu-pPB7kFHenxzi1p9XkBH3ZvWmoIHRN3WCyIU&usqp=CAU);
//   background-size: cover;
// }
.img-wrapper {
  display: inline-block;
  width: 102px;
  height: 102px;

  position: absolute;
  top: 75px;
  left: 86px;

  border-radius: 50%;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  @media screen and (min-width: 480px) and (max-width: 780px) {
    width: 70px;
    height: 70px;

    left: 263px;
    top: 28px;
  }

  @media screen and (min-width: 780px) and (max-width: 1280px) {
    width: 132px;
    height: 132px;

    left: 400px;
    top: 62px;
  }
}
.main-img-wrapper {
  display: none;

  @media screen and (min-width: 480px) and (max-width: 780px) {
    display: inline-block;
    position: absolute;
    top: 141px;
    left: 50px;

    width: 233px;
    height: 416px;
    border: 1px solid;
  }
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    display: inline-block;
    position: absolute;
    top: 235px;
    left: 30px;

    width: 360px;
    height: 641px;
    border: 1px solid;
  }
}
.card-discription {
  text-align: center;
  position: absolute;
  top: 195px;

  @media screen and (min-width: 480px) and (max-width: 780px) {
    text-align: start;

    top: 141px;
    left: 313px;
  }
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    text-align: start;
    top: 235px;
    left: 450px;
  }
}
.modal__header {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  color: var(--title-text-color);

  margin-bottom: 5px;
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    margin-bottom: 7px;
  }
}
.modal__description {
  font-family: Montserrat;
  font-size: 16px;
  line-height: 1.25;

  color: var(--secondary-text-color);

  margin-bottom: 3px;
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 5px;
  }
}
.modal__item {
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 480px) and (max-width: 780px) {
    padding-left: 0;
  }
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
}
.prices-list {
  margin-bottom: 25px;
  li {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 480px) and (max-width: 780px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    li {
      margin-bottom: 30px;
    }
  }
}
.price {
  margin-bottom: 10px;
  @media screen and (min-width: 780px) and (max-width: 1280px) {
    margin-bottom: 20px;
  }
}
.btn-position {
  position: absolute;
  bottom: 104px;
  left: 20px;
  @media screen and (min-width: 480px) and (max-width: 780px) {
    bottom: 56px;
    left: 170px;
  }

  @media screen and (min-width: 780px) and (max-width: 1280px) {
    bottom: 62px;
    left: 337px;
  }
} */
// }


// .buttons {
//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.25;

//   text-decoration: none;
//   text-transform: uppercase;

//   border-radius: 5px;
// }

// .buy-tiket {
//   display: inline-block;
//   padding: 10px 20px;

//   color: #ffffff;
//   background: #4c00fe;
// }

// .more-from {
//   display: inline-block;
//   padding: 10px 3px;

//   color: #4c00fe;
//   border: 1px solid #4c00fe;

//   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

//   @media screen and (min-width: 480px) and (max-width: 780px) {
//     padding-left: 10px 15px;
//   }
// }