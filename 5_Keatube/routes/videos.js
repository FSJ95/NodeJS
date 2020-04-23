const router = require("express").Router();
const uuid = require("uuid").v4;

console.log(uuid());
// todo what data should be inside of each video object
const videos = [{
    title: "Ocean Waves",
    description: "Watch the waves and enjoy",
    fileName: "fe604d2c-fb98-4f83-ab7a-510aa531899b.mp4",
    thumbnail: "",
    category: "Nature",
    tags: ["waves", "ocean", "coast"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}];

const videosPerPage = 10;

router.get("/videos", (req, res) => {
    //Number of videos per page and current page number
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page - 1) * videosPerPage
    const end = start + videosPerPage

    return res.send({
        response: videos.slice(start, end)
    });
});

router.get("/videos/:videoId", (req, res) => {
    return res.send({
        response: videos.find(video => video.fileName === req.params.videoId)
    });
});

module.exports = router;