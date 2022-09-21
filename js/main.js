function validateForm()
{
    // Validasi Nama
    let name = document.getElementById("name").value;
    let birthplace = document.getElementById("birthplace").value;
    let birthdate = document.getElementById("birthdate").value;
    let provinsi = document.getElementById("provinsi").value;
    let kecamatan = document.getElementById("kecamatan").value;
    let kelurahan = document.getElementById("kelurahan").value;
    let telp = document.getElementById("telp").value;
    let pos = document.getElementById("pos").value;
    let agama = document.getElementById("agama").value;
    let pekerjaan = document.getElementById("pekerjaan").value;
    let hub = document.getElementById("hub").value;
    let namaPJ = document.getElementById("namaPJ").value;
    let pendidikanPJ = document.getElementById("pendidikanPJ").value;
    let pekerjaanPJ = document.getElementById("pekerjaanPJ").value;


    var letters = /^[a-zA-Z\s]*$/;  
    var number = /^[0-9]*$/;

    if(name == "" ||  birthplace == "" || birthdate == "" || provinsi == "" || kecamatan == "" ||
        kelurahan == "" || telp == "" || pos == "" || agama == "" || pekerjaan == "" || hub == "" || namaPJ == "" 
        || pendidikanPJ == "" || pekerjaanPJ == "" )
    {
        alert("Masih ada data kosong, lengkapi!")
        
    }
    
    else if(!letters.test(name))
    {
        alert("Nama hanya bisa berisi huruf");
       
    }
    
    else if(!letters.test(birthplace))
    {
        alert("Tempat lahir hanya bisa berisi huruf");
      
    }

    else if(!letters.test(provinsi))
    {
        alert("Provinsi hanya bisa berisi huruf");
        
    }

    else if(!letters.test(kecamatan))
    {
        alert("Kecamatan hanya bisa berisi huruf");
 
    }

    else if(!letters.test(kelurahan))
    {
        alert("Kelurahan hanya bisa berisi huruf");

    }

    else if(!number.test(telp))
    {
        alert("Nomor Telepon hanya bisa berisi angka");
    }

    else if(!number.test(pos))
    {
        alert("Kode pos hanya bisa berisi angka");
    }

    else if(!letters.test(agama))
    {
        alert("Agama hanya bisa berisi huruf");
     
    }

    else if(!letters.test(pekerjaan))
    {
        alert("Pekerjaan hanya bisa berisi huruf");
     
    }

    else if(!letters.test(hub))
    {
        alert("Hubungan Dengan Pasien hanya bisa berisi huruf");

    }

    else if(!letters.test(namaPJ))
    {
        alert("Nama Penanggung Jawab hanya bisa berisi huruf");

    }

    else if(!letters.test(pendidikanPJ))
    {
        alert("Pendidikan Penanggung Jawab hanya bisa berisi huruf");

    }

    else if(!letters.test(pekerjaanPJ))
    {
        alert("Pekerjaan Penanggung Jawab hanya bisa berisi huruf");

    }

    else if(document.getElementById("pos").value.length != 5 )
    {
        alert("Kode pos wajib memiliki panjang 5");
    }

    else if(document.getElementById("telp").value.length >13)
    {
        alert("No Telp wajib memiliki panjang kurang dari 13");
    }

    else if(document.getElementById("telp").value.length < 10)
    {
        alert("No Telp wajib memiliki panjang tidak kurang dari 10");
    }

    else{
        alert("Berhasil registrasi Redirecting to Login View");
        window.location = "success.html";
    }
}