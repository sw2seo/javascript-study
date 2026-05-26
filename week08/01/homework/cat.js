const addCatBtn = document.querySelector('#add-cat-btn');
const catCount = document.querySelector('#cat-count');
const gallery = document.querySelector('#gallery');
let count = 0;

async function catGallery() {

    addCatBtn.disabled = true;
    addCatBtn.textContent = '가져오는 중...';

    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
        const data = await response.json();

        addDeleteBtn(data[0].url);

        // // 이게 왜 다 필요 없는지..?
        // const catImg = document.createElement('img');
        // catImg.src = data[0].url;
        // gallery.appendChild(catImg);


    } catch (error) {
        console.error('고양이 없음', error);
    } finally {
        addCatBtn.disabled = false; 
        addCatBtn.textContent = '고양이 추가';
    }
}

function addDeleteBtn(url) {
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '삭제';

    const el = document.createElement('div');
    el.classList.add('cat-card');

    const catImg = document.createElement('img');
    catImg.src = url;

    deleteBtn.addEventListener('click', function (e) {
        console.log(e);
        el.remove();
        count--;
        catCount.textContent = count;
        console.log('삭제됨');
    });


    el.appendChild(catImg);
    el.appendChild(deleteBtn);

    gallery.appendChild(el);

    count++;
    catCount.textContent = count;
}

addCatBtn.addEventListener('click', catGallery);

