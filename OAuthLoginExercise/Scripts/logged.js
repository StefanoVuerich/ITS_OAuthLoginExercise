$(function () {

    var myLocation = location.href;
    var username = location.href.substring(location.href.lastIndexOf('=') + 1)
    if (myLocation != username) {
        $('#welcomeMessage').html('Welcome ' + username)
        sessionStorage.setItem('Username',username)
    } else {
        var username=sessionStorage.getItem('Username')
        if (username  != null) 
            $('#welcomeMessage').html('Welcome ' + username)
        else
            $('#welcomeMessage').html('Welcome')
    }
   
    RicercaDati();
    $('#allRecordsTab').click(function (e) {
        e.preventDefault()
        $('#tableBody').empty()
        $(this).tab('show')
        RicercaDati()
    })

    $('#insertRecordTab').click(function (e) {
        e.preventDefault()
        $('insertRecordTab').empty()
        $(this).tab('show')
    })

    $('#insertRecord').on('click', function (e) {
        e.preventDefault()
        var objToSend = new Object()
        objToSend.id = $('#recordID').val()
        objToSend.name = $('#recordName').val()
        objToSend.description = $('#recordDescription').val()
        objToSend.price = $('#recordPrice').val()
        Insert(objToSend)
    })

    $('#findRecordByIDBtn').on('click', function (e) {
        e.preventDefault();
        $('#findByIDFeedback').html('')
        $('#singleEntityTableBody').empty()
        var id = $('#findRecordID').val();
        if (id === "") {
            $('#findByIDFeedback').html('Inserire un ID')
        } else {
            SearchByID(id)
        }
    })
});

function RicercaDati() {
    $.ajax({
        type: 'GET',
        url: '../api/records',
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('token')) },
        success: function (data) {
            for (var x in data) {

                var row = '<tr><td>'
                        + data[x].ID + '</td><td>'
                        + data[x].Name + '</td><td>'
                        + data[x].Description + '</td><td>'
                        + data[x].Price + '</td></tr>';

                $('#tableBody').append(row);
            }
        },
        error: function (xhr) {

        }
    });
}

function Insert(record) {

    $('#inserFeedback').html('')

    $.ajax({
        type: 'POST',
        url: '../api/records',
        data: JSON.stringify(record),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('token')) },
        success: function (data) {
            $('#insertForm').children().children(':input').val('')
            $('#inserFeedback').html('Record inserito correttamente')
            setTimeout(function () { $('#inserFeedback').html('') }, 5000);
        },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    });

}

function SearchByID(id) {
    $.ajax({
        type: 'GET',
        url: '../api/records/' + id,
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('token')) },
        success: function (data) {
            if (data != null) {
                var entity = '<tr><td>'
                        + data.ID + '</td><td>'
                        + data.Name + '</td><td>'
                        + data.Description + '</td><td>'
                        + data.Price + '</td></tr>';

                $('#singleEntityTableBody').append(entity);
            } else
                $('#findByIDFeedback').html("Nessun record trovato")
        },
        error: function (xhr) {
            $('#findByIDFeedback').html("Errore nella ricerca")
        }
    });
}