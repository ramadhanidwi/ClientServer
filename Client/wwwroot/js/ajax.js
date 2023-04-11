//$.ajax({
//    url: "https://imdb-api.com/en/API/Top250Movies/k_8229i62k"
//}).done((result) => {
//    console.log(result.items);
//    let text = "";
//    $.each(result.items, function (key, val) {
//        text += `<tr>
//                    <td>${key + 1}</td>
//                    <td>${val.fullTitle}</td>
//                    <td><button class="btn btn-primary" onclick="detail('${val.title}')" data-bs-toggle="modal" data-bs-target="#modalML">Detail</button></td>
//                </tr>`;
//    })
//    $("#tbodyML").html(text)
//});
////buat loop untuk isi detail
//function detail(stringTitle) {
//    let txt = `
//                <li> Nama : ${stringTitle}</li>`;


//    $(".modal-body").html(txt);
//    $("h1#exampleModalLabel.modal-title").html(stringTitle);

//}



//nyoba tampil avatar
//$.ajax({
//    url: "https://api.dazelpro.com/mobile-legends/hero/"
//}).done((result) => {
//    console.log(result.hero);
//    let text = "";
//    $.each(result.hero, function (key, val) {
//        if (key <= 9) {
//            text += `<tr>
//                    <td>${key + 1}</td>
//                    <td>${val.hero_name}</td>
//                    <td><button class="btn btn-primary" onclick="detail('${val.hero_name}')" data-bs-toggle="modal" data-bs-target="#modalMovie">Detail</button></td>
//                </tr>`;
//        }
//    })
//    $("#tbodyMovie").html(text)
//});

////nyoba fungsi detail
//function detail(stringTitle) {
//    let txt = `
//                <li> Nama : ${stringTitle}</li>`;

//    $(".modal-body").html(txt);
//    $("h1#exampleModalLabel.modal-title").html(stringTitle);

//}

//munculin gambar
//function detail(stringTitle, stringImage) {
//    let txt = `
//                <li> ${stringImage} </li>
//                `
//                //<li> Nama : ${stringName}</li>
//                //<li> Avatar : ${stringAvatar}</li>
//                //<li>Role : ${stringRole}</li>
//                //<li>Specially : ${stringSpecially}</li>`;


//        $(".modal-body").html(txt);
//        $("h1#exampleModalLabel.modal-title").html(stringTitle);

/*}*/

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Coba Baru

//$.ajax({
//    url: "https://imdb-api.com/en/API/Top250Movies/k_7y96nw5j"
//}).done((result) => {
//    console.log(result.items);
//    let text = "";
//    $.each(result.items, function (key, val) {
//        if (key<= 9) {
//            text += `<tr>
//                    <td style="color:white">${key + 1}</td>
//                    <td style="color:white">${val.title}</td>
//                    <td><button class="btn btn-primary" onclick="detail('${val.image}', '${val.fullTitle}','${val.year}')" data-bs-toggle="modal" data-bs-target="#modalMovie">Detail</button></td>
//                </tr>`;
//        }
//    })
//    $("#tbodyMovie").html(text)
//});

////buat loop untuk isi detail
//function detail(a, b, c) {
//    document.getElementById('update_img').setAttribute('src', a)
//    document.getElementById('update_title').innerHTML = b
//    document.getElementById('update_year').innerHTML = c
//}


//Create Data Table
//$(document).ready(function () {                                             //akan di inisialisasi sekali ketika html di load
//    let table = $('#tableMovie').DataTable({
//        ajax: {
//            url: "https://imdb-api.com/en/API/Top250Movies/k_8229i62k",   //object ajax sudah di tentukan dari sananya, masukan URL APi
//            dataSrc: "items",                                             //berisi array of object dari data yang ada pada APi
//            dataType: "JSON"
//        },
//        columns: [                          //disesuaikan dengan jumlah column yang ada pada index cshtml, berisi object object yang ada pada APi
//            {
//                data: null,
//                render: function (data, type, row, nomor) {
//                    return nomor.row + nomor.settings._iDisplayStart + 1;
//                }
//            },
//            { data: "title" },
//            { data: "crew"},
//            {
//                row: "",
//                render: function (data, type, row) {
//                    return `<button class="btn btn-primary" onclick="detail('${row.image}','${row.fullTitle}','${row.year}')"
//                            data-bs-toggle="modal" data-bs-target="#modalMovie">Detail</button>`;
//                }
//            }
//        ],
//        dom: '<"top"fi>rt<"bottom"lp><"clear">',
//        dom: 'Bfrtip',
//        buttons: [
//            {
//                extend: 'csv',
//                text: 'Excel',
//                className: 'btn btn-success mb--2'
//            },
//            {
//                extend: 'pdf',
//                className: 'btn btn-danger'
//            },
//            {
//                extend: 'print',
//                className: 'btn btn-primary'
//            },
//            {
//                extend: 'colvis',
//                text : 'Column Visibility'
//            }
//        ],
//        "bDestroy": true,
//    });
//    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
//});

///*buat loop untuk isi detail*/
//function detail(imageSrc, titleSrc, yearSrc) {
//    document.getElementById('update_img').setAttribute('src', imageSrc)
//    document.getElementById('update_title').innerHTML = titleSrc
//    document.getElementById('update_year').innerHTML = yearSrc
//}


//------------------------------- Menggunakan APi Local Host ----------------------------------------------------

//$(document).ready(function () {
//    $('#tableMovie').DataTable({
//        ajax: {
//            url: "https://localhost:7049/api/Employee",   //object ajax sudah di tentukan dari sananya, masukan URL APi
//            dataSrc: "data",                             //berisi array of object dari data yang ada pada APi
//            dataType: "JSON"
//        },
//        columns: [
//            { data: "nik" },
//            { data: "firstName" },
//            { data: "lastName" },
//            { data: "birthDate" },
//            { data: "gender" },
//            { data: "hiringDate" },
//            { data: "email" },
//            { data: "phoneNumber" },
//            { data: "managerId" }
//        ],
//        "bDestroy": true,
//    })
//});


$(document).ready(function () {                                             //akan di inisialisasi sekali ketika html di load
    let table = $('#tableEmpl').DataTable({
        ajax: {
            url: "https://localhost:7049/api/Employee",   //object ajax sudah di tentukan dari sananya, masukan URL APi
            dataSrc: "data",                                             //berisi array of object dari data yang ada pada APi
            dataType: "JSON"
        },
        columns: [                          //disesuaikan dengan jumlah column yang ada pada index cshtml, berisi object object yang ada pada APi
            {
                data: null,
                render: function (data, type, row, nomor) {
                    return nomor.row + nomor.settings._iDisplayStart + 1;
                }
            },
            { data: "firstName" },
            { data: "lastName" },
            { data: "gender" },
            { data: "email" },
            { data: "phoneNumber" },
            {
                row: "",
                render: function (data, type, row) {
                    return `<td>
				<button id="butDetail" type="button" class="btn btn-success btn-xs dt-edit" onclick="Detail()" style="margin-right:16px;"> <i class="fa fa-folder-open-o"></i>
					<span class="glyphicon glyphicon-pencil" aria-hidden="true">Detail</span>
				</button>

				<button type="button" class="btn btn-primary btn-xs dt-edit" style="margin-right:16px;"> <i class='far fa-edit'></i>
					<span class="glyphicon glyphicon-pencil" aria-hidden="true">Edit</span>
				</button>

				<button type="button" class="btn btn-danger btn-xs dt-delete"><i class='far fa-trash-alt'></i>
					<span class="glyphicon glyphicon-remove" aria-hidden="true">Delete</span>
				</button>

			    </td>`;
                }
            }
        ],
        dom: '<"top"i>rt<"bottom"flp><"clear">',
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'csvHtml5',
                text: '<i class="fa fa-file-text-o"></i>',
                titleAttr: 'CSV'
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fa fa-file-pdf-o"></i>',
                titleAttr: 'PDF'
            },
            {
                extend: 'copyHtml5',
                text: '<i class="fa fa-files-o"></i>',
                titleAttr: 'Copy'
            },
            {
                extend: 'colvis',
                text: 'Column Visibility'
            }
        ],
        "bDestroy": true,
    });
    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
    $("#add").html(`<button id="addEmpl" class="btn btn-primary" onclick ="Create()" data-bs-toggle="modal" data-bs-target="#modalEmpl"> 
            <i class="fas fa-plus"></i> Add Employee </button>`)
});

//Detail Function to get Data From Open APi 
function detail(imagesrc, titlesrc, yearsrc) {
    document.getelementbyid('update_img').setattribute('src', imagesrc)
    document.getelementbyid('update_title').innerhtml = titlesrc
    document.getelementbyid('update_year').innerhtml = yearsrc
}


//Detail Function to Get Data From APi Local
function Detail(imagesrc, titlesrc, yearsrc) {
    document.getelementbyid('update_img').setattribute('src', imagesrc)
    document.getelementbyid('update_title').innerhtml = titlesrc
    document.getelementbyid('update_year').innerhtml = yearsrc
}
function Create() {
    $('#exampleModalLabel').html("Create");

    $('#formCreate').click();
}

//Triger Function Insert 
$("#submit").click(Insert)


//Build Function Insert 
function Insert() {
    let obj = {}; //sesuaikan sendiri nama objectnya dan beserta isinya
    //ini ngambil value dari tiap inputan di form nya
    obj.nik = $("#nik").val();
    obj.firstName = $("#fname").val();
    obj.lastName = $("#lname").val();
    obj.birthDate = $("#birthDate").val();
    obj.gender = parseInt($("#gender").val());
    obj.hiringDate = $("hiringDate").val();
    obj.email = $("#email").val();
    obj.phoneNumber = $("#phone").val();
    obj.managerId = $("#managerId").val();
    console.log(obj);
    //isi dari object kalian buat sesuai dengan bentuk object yang akan di post
    $.ajax({
        url: "https://localhost:7049/api/Employee",
        type: "POST",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(obj),//jika terkena 415 unsupported media type (tambahkan headertype Json & JSON.Stringify();)
    }).done(() => {
        Swal.fire({
            position: 'central',
            icon: 'success',
            title: "Your Employee's Data Saved!",
            showConfirmButton: false,
            timer: 1500
        })
        $('#tableEmpl').DataTable().ajax.reload()
    }).fail((error) => {
        //alert pemberitahuan jika gagal
        alert(error)
    })
}

//JS Modal 
(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


