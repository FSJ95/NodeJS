$.get("videos?page=1", (response) => {
    response.response.map((video) => {
        const link = `<a href="/player/${video.fileName}">${video.title}</a>`
        $("#link-wrapper").append(link);
    });
});