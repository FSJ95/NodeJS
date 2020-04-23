const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1);

$.get("../videos/" + videoId, (response) => {
    console.log(response);
    const player =
        `<h1>${response.response.title}</h1>
    <p>${response.response.description}</p>
     <p>${response.response.description}</p>
    <video width="320" height="240" controls>
        <source src="/${videoId}">
        Your browser does not support the video tag.
    </video>
    <p>${response.response.tags}</p>`;

    $("#player-wrapper").append(player);
});