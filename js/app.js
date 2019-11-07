$(function () {
    const key = "XZcghvRmHEXkbzbDf8QQxkocgmBGo5ndYeLKTIpR";
    const address = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos/";
    const $gallery = $(".gallery");

    function loadImages(sols) {
        $.ajax({
            url: address,
            dataType: "json",
            data: {
                api_key: key,
                sol: sols,
                page: 1
            }
        }).done(function (response) {
            console.log(response.photos);
            insertImages(response.photos);
        })
    }

    loadImages(2050);
    loadImages(2051);
    loadImages(2049);
    loadImages(0);

    const insertImages = (images) => {
        images.forEach( el => {
            const $newLi = $(`
                   <a data-fancybox="gallery" class="imagecontainer" href="${el.img_src}">
                   <img src="${el.img_src}" class="image">
                   </a>
            `);
            $gallery.append($newLi)
        });
    }
});
