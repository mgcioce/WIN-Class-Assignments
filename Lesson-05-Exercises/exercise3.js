// 1. An array called `photoList` that contains the names of the photos as strings
// 2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
// 3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
// 	4. logs the current photo name.
// 	4. Otherwise, log "End of slideshow";
// 4. A `prevPhoto()` function that does the same thing, but backwards.
// 5. A function `getCurrentPhoto()` that returns the current photo from the list.

// 1. create an empty property named `playInterval`
// 2. A `play()` function that moves to the next photo ever 2000ms until the end.<br> *Tip - use `playInterval = setInterval(fn,ms)`*.
// 3. A `pause()` function that stops the slideshow <br> *Tip - use `clearInterval(playInterval)`*
// 4. Automatically pause the slideshow if it gets to the end of the photolist while playing.


let slideShow = {
    photoList: ['pic1.jpg','pic2.jgp','pic3.jpg','pic4.jpg','pic5.jpg'],
    currentPhotoIndex: 0,
    playInterval: 0,
    nextPhoto: function(){
        if (this.currentPhotoIndex == this.photoList.length - 1) {
            console.log("End of slideshow");
        } else {
            ++this.currentPhotoIndex;
        }
    },
    prevPhoto: function(){
        if (this.currentPhotoIndex == 0) {
            console.log("beginning of slideshow");
        } else {
            --this.currentPhotoIndex;
        }
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    },
    play: function(interval) {
        if (interval <= 1000 || typeof interval == 'undefined' || interval == null) {
            this.playInterval = 2000;
        } else {
            this.playInterval = interval;
        }
        function asyncPlay() {
            console.log(this.getCurrentPhoto());
            this.nextPhoto();
        }
        asyncPlay = asyncPlay.bind(this);
        id = setInterval(asyncPlay,this.playInterval);
        setTimeout( () => {
            clearInterval(id);
        }, this.playInterval * (this.photoList.length + 1) );
    } 
}

slideShow.play();

