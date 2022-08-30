
const phoneHunter = () =>{
  const searchInput = document.getElementById('searchInput');
  const searchResult = searchInput.value
  const url = (`https://openapi.programming-hero.com/api/phones?search=${searchResult}`)
  fetch(url)
    .then(res => res.json())
    .then(data => searchbtn(data.data))
    spinner (true);
}

const searchbtn = (phones) =>{
  const mainDiv = document.getElementById('mainDiv');
  const seeMoreBtn = document.getElementById('seemoreBtn');
  if(phones.length !== 0 ){
  mainDiv.innerText = '';
  const sixPhones = phones.slice(0,6);
  for (const phone of sixPhones){
    const newdiv = document.createElement('div');
    newdiv.classList.add('col');
    newdiv.innerHTML =`
    <div class="card p-4 mt-4">
        <img src="${phone.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h3>${phone.brand}</h3>
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button type="button" class="btn btn-danger">Know More</button>
          </div>
    </div>
    `
    mainDiv.appendChild(newdiv);
  }
  seeMoreBtn.classList.remove('d-none');
  }else{
    const noPhone = document.getElementById('Nophone');
    noPhone.classList.remove('d-none');
    seeMoreBtn.classList.add('d-none');
    mainDiv.innerText = '';
  }
  spinner (false);
}


// for see more Button...... 

const seeMore = () =>{
  const searchInput = document.getElementById('searchInput');
  const searchResult = searchInput.value
  const url = (`https://openapi.programming-hero.com/api/phones?search=${searchResult}`)
  fetch(url)
    .then(res => res.json())
    .then(data => okay(data.data))

}

const okay = (x) =>{
  const mainDiv = document.getElementById('mainDiv');
  mainDiv.innerText = '';
  for (const phone of x){
    const newdiv = document.createElement('div');
    newdiv.classList.add('col');
    newdiv.innerHTML =`
    <div class="card p-4 mt-4">
        <img src="${phone.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h3>${phone.brand}</h3>
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button type="button" class="btn btn-danger">Know More</button>
          </div>
    </div>
    `
    mainDiv.appendChild(newdiv);
  }
  const seeMoreBtn = document.getElementById('seemoreBtn');
  seeMoreBtn.classList.add('d-none');

}


// spinner function here ..............
const spinner = isloading =>{
  const spinner = document.getElementById('spinner');
  if(isloading){
    spinner.classList.remove('d-none');
  }else{
    spinner.classList.add('d-none');
  }
}
