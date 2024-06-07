document.addEventListener("DOMContentLoaded", function() {
    const playlistsContainer = document.getElementById('playlist-info');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    // const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalSongsList = document.getElementById('modal-songs-list');
    const shuffleButton = document.getElementById('shuffle')
 

    let currentPlaylist = [];

            data.playlists.forEach(data => {
                const card = document.createElement('div');
                card.className = 'playlist-card';
                card.innerHTML = `<img src="${data.playlist_art}"/>
                <h3>${data.playlist_name}</h3>
                <p>${data.playlist_creator}</p>
                <div class="playlist-action">
                    <div class="like-count">
                        <span><i id = "like-icon"  class="fa-solid fa-heart like-icon";></i><span>
                        <p class="count-display"> ${data.likeCount}</p>
                    <div>
                    <span class="delete" id="delete"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i></span>
                </div>`;
                
                card.addEventListener('click', ()=> showModal(data));
                playlistsContainer.appendChild(card);

                const likeIcon = card.querySelector('.like-icon');
                const counter = card.querySelector('.count-display')
                let count = 0

                // increase like count
                likeIcon.addEventListener('click', (event) =>{
                    event.stopPropagation();
                    count++
                    counter.textContent = count
                    
                })

                card.addEventListener('click', (event) =>{
                    if(event.target != likeIcon) {
                        showModal(data);
                    }
                })

                // delete playlist
                const deleteButton = card.querySelector('.delete');
                deleteButton.addEventListener('click', (event)=>{
                    event.stopPropagation();
                    card.remove();
                })
            });


    // shuffle songs functions
    function shuffleList(array) {
        for (let i = array.length-1; i>0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showModal(data) {
        modalTitle.textContent = data.playlist_name;
        console.log(modalTitle);
        modalDescription.textContent = data.playlist_creator;
        // console.log(modalDescription);
        currentPlaylist = data.songs;
        console.log(currentPlaylist.slice());
        modalSongs(currentPlaylist);
        
        modal.style.display = 'block';
    }

    shuffleButton.addEventListener('click', () => {
        const shuffledSongs = shuffleList(currentPlaylist.slice());
        console.log(shuffledSongs);
        modalSongs(shuffledSongs);
    })

        // handles modal visibility
    function modalSongs(songs) {
        modalSongsList.innerHTML = '';
        songs.forEach(song =>{
            const songItem = document.createElement('div');
            songItem.className = 'song-item';
            songItem.innerHTML = `
        
                <span class="song-details">
                <div> <img class= "song-img" src="${song.cover_art}"/> </div>
                    <div class="song-names"> 
                        <h2>${song.title}</h2> 
                        <p>${song.artist}<p> 
                    </div>
                </span>
                <div><p>${song.duration} </p></div>
            
            `;
            modalSongsList.appendChild(songItem);
        });
    }


    // closes modal with x icon
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    // closes modal by tapping outside popup box
    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }); 
});

    




// To-do:
//home slider
