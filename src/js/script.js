const mainCard = document.getElementById('main-card');
const dialogText = document.getElementById('dialog-text');
const contentTitle = document.getElementById('content-title');
const contentImg = document.getElementById('content-img');


document.getElementById('yesBtn').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('refreshBtn').style.display = 'block';
    mainCard.className = 'w-[610px] h-[329px] bg-[#E12E2E] rounded-[30px]';
    dialogText.textContent = 'Anda adalah seorang Teknisi';
    contentTitle.textContent = 'Anda Berbohong!';
    contentImg.src = '../../assets/img/teknisi.svg';
});

document.getElementById('noBtn').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('refreshBtn').style.display = 'block';
    mainCard.className = 'w-[610px] h-[329px] bg-[#6FD240] rounded-[30px]';
    dialogText.textContent = 'Anda adalah seorang Mahasiswa';
    contentTitle.textContent = 'Anda Benar!';
    contentImg.src = '../../assets/img/mahasiswa.svg';
});

document.getElementById('refreshBtn').addEventListener('click', function() {
    location.reload();
});