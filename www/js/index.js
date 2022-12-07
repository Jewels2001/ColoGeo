var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/pics/',
            url: 'pages/pics.html',
        },
        {
            path: '/mapA/',
            url: 'pages/mapA.html',
        },
        {
            path: '/settings/',
            url: 'pages/settings.html',
        },
        {
            path: '(.*)',
            url: 'pages/404.html',
        },
    ],
});
var mainView = app.views.create('.view-main')


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    checkCOTD();
    var options = {
        quality: 80,
        encodingType: Camera.EncodingType.PNG,
        destinationType: Camera.DestinationType.FILE_URI,

    };
    console.log(navigator.camera);


    $("#takePic").on("click", takePic);

    function takePic() {
        console.log("click");
        navigator.camera.getPicture(onSuccess, onError, options);
    }

    function onSuccess(imageData) {
        console.log("Success! :)");
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var image = fileEntry.toURL()
            console.log(image);
            // do something with URL, assign to src or create an html 
            //$('#photo1').href = myNewImage;
            $("#photos").append("<img src='" + image + "'>");
            $("#add").append(test
                // `<li class="item-content"> <div class="item media"> <div class="square"></div></div><div class="item-inner"><div class="item-title-row"> <img src='` + image + "'>" + " </div> <div class='item-subtitle'></div></div></li >"
            )
            //$("#takePic").after("<img src='" + image + "'>");
            // $("#myimg").attr("src", imageData);
            // $("#gallery").append("<img src='" + imgData + "'>");
        }, onError);
    }

    function onError(message) {
        console.log("Error :(");
        alert("Photo not taken because " + message);
    }

}

function checkCOTD() {
    console.log("This happened");
    // Generate color of the day
    var cotd = "FFFFFF";
    let x = (Math.random() * 0xfffff * 1000000).toString(16);
    cotd = '#' + x.slice(0, 6);

    // set color of the day
    $("#cotd1").css("background-color", cotd);
    $("#cotd2").append(cotd);
}

function cotd(color) {


    return "#FFFFFF";
}