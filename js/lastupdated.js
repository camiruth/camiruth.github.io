        let d = new Date();
        let y = d.getFullYear();
        document.getElementById("currentyear").textContent = y;

        let m = new Date(document.lastModified);
        let month = m.getMonth() + 1;
        let day = m.getDate();
        let year = m.getFullYear();
        let hour = m.getHours();
        let minutes = m.getMinutes();
        let seconds = m.getSeconds();
        let dateString = month + "/" + day + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
        document.getElementById("lastupdated").textContent = dateString;