//$(document).ready(function () {                                             //akan di inisialisasi sekali ketika html di load
//    let table = $('#tableUniv').DataTable({
//        ajax: {
//            url: "https://localhost:7049/api/Universities",   //object ajax sudah di tentukan dari sananya, masukan URL APi
//            dataSrc: "data",                                             //berisi array of object dari data yang ada pada APi
//            dataType: "JSON"
//        },
//        columns: [                          //disesuaikan dengan jumlah column yang ada pada index cshtml, berisi object object yang ada pada APi
//            {
//                data: null,
//                render: function (data, type, row, nomor) {
//                    return nomor.row + nomor.settings._iDisplayStart + 1;
//                }
//            },
//            { data: "name" },
//            {
//                row: "",
//                render: function (data, type, row) {
//                    return `<td>
//				<button id="butDetail" type="button" class="btn btn-success btn-xs dt-edit" onclick="Detail()" style="margin-right:16px;"> <i class="fa fa-folder-open-o"></i>
//					<span class="glyphicon glyphicon-pencil" aria-hidden="true">Detail</span>
//				</button>

//				<button type="button" class="btn btn-primary btn-xs dt-edit" style="margin-right:16px;"> <i class='far fa-edit'></i>
//					<span class="glyphicon glyphicon-pencil" aria-hidden="true">Edit</span>
//				</button>

//				<button type="button" class="btn btn-danger btn-xs dt-delete"><i class='far fa-trash-alt'></i>
//					<span class="glyphicon glyphicon-remove" aria-hidden="true">Delete</span>
//				</button>

//			    </td>`;
//                }
//            }
//        ],
//        dom: '<"top"i>rt<"bottom"flp><"clear">',
//        dom: 'Bfrtip',
//        buttons: [
//            {
//                extend: 'csvHtml5',
//                text: '<i class="fa fa-file-text-o"></i>',
//                titleAttr: 'CSV'
//            },
//            {
//                extend: 'pdfHtml5',
//                text: '<i class="fa fa-file-pdf-o"></i>',
//                titleAttr: 'PDF'
//            },
//            {
//                extend: 'copyHtml5',
//                text: '<i class="fa fa-files-o"></i>',
//                titleAttr: 'Copy'
//            },
//            {
//                extend: 'colvis',
//                text: 'Column Visibility'
//            }
//        ],
//        "bDestroy": true,
//    });
//    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
//    $("#addUniv").html(`<button id="addUniv" class="btn btn-primary" onclick ="Create()" data-bs-toggle="modal" data-bs-target="#modalEmpl"> 
//            <i class="fas fa-plus"></i> Add University </button>`)
//});

////Detail Function to get Data From Open APi 
//function detail(imagesrc, titlesrc, yearsrc) {
//    document.getelementbyid('update_img').setattribute('src', imagesrc)
//    document.getelementbyid('update_title').innerhtml = titlesrc
//    document.getelementbyid('update_year').innerhtml = yearsrc
//}


////Detail Function to Get Data From APi Local
//function Detail(imagesrc, titlesrc, yearsrc) {
//    document.getelementbyid('update_img').setattribute('src', imagesrc)
//    document.getelementbyid('update_title').innerhtml = titlesrc
//    document.getelementbyid('update_year').innerhtml = yearsrc
//}
//function Create() {
//    $('#exampleModalLabel').html("Create");

//    $('#formCreate').click();
//}

////Triger Function Insert 
//$("#submit").click(Insert)


////Build Function Insert 
//function Insert() {
//    let obj = {}; //sesuaikan sendiri nama objectnya dan beserta isinya
//    //ini ngambil value dari tiap inputan di form nya
//    obj.nik = $("#nik").val();
//    obj.firstName = $("#fname").val();
//    obj.lastName = $("#lname").val();
//    obj.birthDate = $("#birthDate").val();
//    obj.gender = parseInt($("#gender").val());
//    obj.hiringDate = $("hiringDate").val();
//    obj.email = $("#email").val();
//    obj.phoneNumber = $("#phone").val();
//    obj.managerId = $("#managerId").val();
//    console.log(obj);
//    //isi dari object kalian buat sesuai dengan bentuk object yang akan di post
//    $.ajax({
//        url: "https://localhost:7049/api/Employee",
//        type: "POST",
//        dataType: "json",
//        contentType: "application/json;charset=utf-8",
//        data: JSON.stringify(obj),//jika terkena 415 unsupported media type (tambahkan headertype Json & JSON.Stringify();)
//    }).done(() => {
//        Swal.fire({
//            position: 'central',
//            icon: 'success',
//            title: "Your Employee's Data Saved!",
//            showConfirmButton: false,
//            timer: 1500
//        })
//        $('#tableEmpl').DataTable().ajax.reload()
//    }).fail((error) => {
//        //alert pemberitahuan jika gagal
//        alert(error)
//    })
//}

////JS Modal 
//(function () {
//    'use strict'
//    const forms = document.querySelectorAll('.requires-validation')
//    Array.from(forms)
//        .forEach(function (form) {
//            form.addEventListener('submit', function (event) {
//                if (!form.checkValidity()) {
//                    event.preventDefault()
//                    event.stopPropagation()
//                }

//                form.classList.add('was-validated')
//            }, false)
//        })
//})()

//Create "Create" Function hit on controller 
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "@Url.Action("Index")",        //Gimana Masukin URL nya? 
        dataType: "JSON",
        success: function (result) {
            console.log(result)
        },
        error: function (req, status, error) {
            console.log(status)
        }
    });

    $.ajax({
        type: "POST",
        url: "@Url.Action("Create")",
        dataType: "JSON",
        data: { name: $("inpName").val() },
        success: function (result) {
            console.log(result)
        },
        error: function (req, status, error) {
            console.log(status)
        }
    })
});
