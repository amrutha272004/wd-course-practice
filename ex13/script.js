function createcard(thumbnail, duration, title, views, cname, monthsold) {
    let viewStr;

    if (views < 1000) {
        viewStr = views;
    }
    else if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    }
    else {
        viewStr = (views / 1000).toFixed(1) + "K";
    }




    let html = `<div class="container">
        <div class="img">
            <img src="${thumbnail}" alt="thumbnail" width="150px">
        
            <div class="duration">${duration}</div>
            <div class="text">
            <h3>${title}</h3>
            <p> ${cname} views &#183 ${viewStr}  views &#183; ${monthsold} months ago</p>
            </div>
        
        </div>`;
    document.querySelector(".container").innerHTML +=html;
}

    createcard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg", "1:25", "ammu", 12000,  "ammudeveloper", 1)
createcard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg", "12:25", "ammu", 12000, "ammudeveloper", 1)
createcard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg", "12:25", "ammu", 12000, "ammudeveloper", 1)
createcard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg", "12:25", "ammu", 12000, "ammudeveloper", 1)

