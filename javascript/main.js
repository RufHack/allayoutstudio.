document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector('.card-text').textContent;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>tidak ada informasi yang tersedia</i>";

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    const nohp = "+62 895-3976-33383";
    let teksPesan = `Permisi Kak...
    Saya ingin memesan *${judul.trim()}* dengan harga *${harga.trim()}*. Apakah masih tersedia?`;
    let linkWA = `https://api.whatsapp.com/send?phone=${nohp}&text=${encodeURIComponent(
      teksPesan
    )}`;
    document.querySelector(".btnBeli").href = linkWA;

    document.querySelector(".btnBeli").href = pesan;
    
  });
});
