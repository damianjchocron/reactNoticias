import $ from 'jquery';

class AjaxRequest {
    AjaxGetAll(obj, json = 'json') {
        var url = obj.url
        $.ajax({
            method: "GET",
            url: url,
            dataType: json,
            data: obj.data
        })
            .done(function (result) {
                obj.callBack(result);
            });
    }

    AjaxPost(obj, json = 'json') {
        var url = obj.url
        $.ajax({
            method: "POST",
            url: url,
            contentType: "application/json",
            dataType: json,
            data: JSON.stringify(obj.data)
        })
            .done(function (result) {
                obj.callBack(result);
            });
    }

    AjaxGetItem(obj, json = 'json') {
        var url = obj.url + "/" + obj.data.id;
        $.ajax({
            method: "GET",
            url: url,
            dataType: json
        })
            .done(function (result) {
                obj.callBack(result);
            });
    }

    AjaxDeleteItem(obj, json = 'json') {
        var url = obj.url + "/" + obj.data.id;
        $.ajax({
            method: "DELETE",
            url: url,
            dataType: json
        })
            .done(function (result) {
                obj.callBack(result);
            })
            .fail(function (error) {
                console.log(error);
            })
    }

    AjaxPutItem(id, obj, json = 'json') {
        var url = obj.url + "/" + id;
        $.ajax({
            method: "PUT",
            url: url,
            contentType: "application/json",
            dataType: json,
            data: JSON.stringify(obj.data)
        })
            .done(function (result) {
                obj.callBack(result);
            })
            .fail(function (error) {
                console.log(error);
            })
    }

    AjaxFileUpload(obj, json = "json") {
        var url = obj.url;
        var fd = new FormData();
        fd.append('fichero', obj.file);
        fd.append('id', obj.id);
        $.ajax({
            method: "POST",
            url: url,
            contentType: false,
            processData: false,
            dataType: json,
            data: fd,
            complete: function (result) {
                obj.callBack(result);
            },
        })
    }
}

export default AjaxRequest;