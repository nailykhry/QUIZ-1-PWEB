function validateForm()
{
    // Validasi Nama
    let name = document.forms["myForm"]["name"].value;
    let birthplace = document.forms["myForm"]["birthplace"].value;
    let birthdate = document.forms["myForm"]["birthdate"].value;
    let provinsi = document.forms["myForm"]["provinsi"].value;
    let kecamatan = document.forms["myForm"]["kecamatan"].value;
    let kelurahan = document.forms["myForm"]["kelurahan"].value;
    let telp = document.forms["myForm"]["telp"].value;
    let pos = document.forms["myForm"]["pos"].value;
    let agama = document.forms["myForm"]["agama"].value;
    let pekerjaan = document.forms["myForm"]["pekerjaan"].value;
    let hub = document.forms["myForm"]["hub"].value;
    let namaPJ = document.forms["myForm"]["namaPJ"].value;
    let pendidikanPJ = document.forms["myForm"]["pendidikanPJ"].value;
    let pekerjaanPJ = document.forms["myForm"]["pekerjaanPJ"].value;


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
        return false;
    }

    else if(!number.test(pos))
    {
        alert("Kode pos hanya bisa berisi angka");
        return false;
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