        let videoLinks = [];
        let lastVideo = "";

        function changeVideo() {
            const video = document.getElementById("video1");
            const input = document.getElementById("me").value;
            if (input) {
                videoLinks.push(input);
                saveLinks();
                updateVideo(input);
            }
        }

        function updateVideo(link) {
            const video = document.getElementById("video1");
            const sources = video.getElementsByTagName('source');
            sources[0].src = link + ".mp4";
            sources[1].src = link + ".ogg";
            video.load();
            document.getElementById("message").innerText = "Video source changed to: " + link;
        }

        function recallVideo() {
            if (videoLinks.length > 0) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * videoLinks.length);
                } while (videoLinks[randomIndex] === lastVideo);
                lastVideo = videoLinks[randomIndex];
                updateVideo(lastVideo);
            } else {
                document.getElementById("message").innerText = "No video links stored.";
            }
        }

        function saveLinks() {
            const json = JSON.stringify(videoLinks);
            localStorage.setItem('videoLinks', json);
        }

        function loadLinks() {
            const json = localStorage.getItem('videoLinks');
            if (json) {
                videoLinks = JSON.parse(json);
            }
        }

        window.onload = loadLinks;