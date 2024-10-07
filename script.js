document.getElementById('formulir').addEventListener('submit', function(Event) {
    Event.preventDefault(); // Mencegah form dari pengiriman default

    let data   = document.getElementById('data');
    let inputan = document.getElementById('inputan').value;


    let hasilData = document.createElement('li');
    hasilData.innerHTML = inputan;

    let remove = document.createElement('button');
    remove.style.backgroundColor = "red";
    remove.style.color = "white";
    remove.style.borderRadius = "5px";
    remove.textContent = "Hapus";
    remove.style.marginLeft = "80px";  

    if (inputan === "") {
        alert("masukkan datanya dulu !!!");
        return;
    }
 
    hasilData.appendChild(remove);

    data.appendChild(hasilData);

    remove.addEventListener('click',function() {
        hasilData.remove();
        alert('Data Berhasil Dihapus');
    })
    
})