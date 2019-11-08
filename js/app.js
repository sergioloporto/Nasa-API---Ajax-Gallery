$(function () {
    const key = "XZcghvRmHEXkbzbDf8QQxkocgmBGo5ndYeLKTIpR";
    const address = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos/";
    const $gallery = $(".gallery");
    let isLoaded = false;

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
            insertImages(response.photos);
            isLoaded = true;
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
    };


    $(window).scroll(function(el) {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {

            if (isLoaded === true) {

            console.log("aaaaaaaaa")

            // loadImages(0);

            }


        /* You can improve this code with following lines in ajax call:
        new_element.hide().appendTo('.your_div').fadeIn(); $(window).scrollTop($(window).scrollTop()-1);
        First line appends elements in nice way, second assures that your function never stops at the bottom of the page. */

        }
    });


});
