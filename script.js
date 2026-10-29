 
const form = document.getElementById("formWorkshop");
const nama = document.getElementById("namaWorkshop");
const email = document.getElementById("emailWorkshop");
const sesi = document.getElementById("sesiWorkshop");
const jumlahKarakter = document.getElementById("jumlahKarakter");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesan = document.getElementById("pesanWorkshop");

nama.addEventListener("input", function () {
    jumlahKarakter.textContent = nama.value.length;
});

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        ringkasanSesi.textContent = "Sesi belum dipilih.";
    } else {
        ringkasanSesi.textContent = "Sesi pilihan: " + sesi.value;
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaIsi = nama.value.trim();
    const emailIsi = email.value.trim();
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (namaIsi === "") {
    pesan.textContent = "Nama wajib diisi.";
} else if (namaIsi.length < 3) {
    pesan.textContent = "Nama minimal 3 karakter.";
} else if (!polaEmail.test(emailIsi)) {
    pesan.textContent = "Masukkan email yang valid.";
} else if (sesi.value === "") {
    pesan.textContent = "Silakan pilih sesi workshop.";
} else {
    pesan.textContent =
        "Pendaftaran berhasil! Nama: " + namaIsi +
        ", sesi: " + sesi.value + ".";
}
});

const teksSembunyi = document.getElementById("teksSembunyi");
const tombolSembunyi = document.getElementById("tombolSembunyi");

tombolSembunyi.addEventListener("click", function () {
    teksSembunyi.classList.toggle("sembunyi");
});

