document.addEventListener("DOMContentLoaded", function() {
    const playlistsContainer = document.getElementById('playlist-info');
    const randomShow = document.getElementById('playlist-random');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalSongsList = document.getElementById('modal-songs-list');
    const shuffleButton = document.getElementById('shuffle')
    // const chosenPlaylist = document.getElementById('random-playlist')
    let currentPlaylist = [];
       
    

        // handles each playlist cards
        if(playlistsContainer) {
            data.playlists.forEach(data => {
                const card = document.createElement('div');
                card.className = 'playlist-card';
                card.innerHTML = `<img src="${data.playlist_art}"/>
                <h3>${data.playlist_name}</h3>
                <p>${data.playlist_creator}</p>
                <div class="playlist-action" style="display:flex">
                    <span class="like-count">
                        <i id = "like-icon"  class="fa-solid fa-heart like-icon";></i> 
                        <p class="count-display"> ${data.likeCount}</p>
                    </span>
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

                // deletes playlist
                const deleteButton = card.querySelector('.delete');
                deleteButton.addEventListener('click', (event)=>{
                    event.stopPropagation();
                    card.remove();
                })

            });
        }
            
          //random playlist for home page
            if (randomShow) {
                const randomPlaylist = data.playlists[Math.floor(Math.random()*8)];
                console.log(randomPlaylist)
                const card = document.createElement('div');
                card.className = 'playlist-home';
                card.innerHTML = `
                
               <span> <img src="${randomPlaylist.playlist_art}"/>
                <h3>${randomPlaylist.playlist_name}</h3></span>
               `;
                console.log(card)
                randomShow.appendChild(card);

                const songsList = document.createElement('div');
                    songsList.className = 'home-songs';
                    randomPlaylist.songs.forEach(song =>{
                        const songItem = document.createElement('div');
                        songItem.className = 'song-item';
                        songItem.innerHTML = `
                    
                            <span class="song-details">
                            
                                <div class="song-names"> 
                                    <h3>${song.title}</h3> 
                    
                                </div>
                            </span>
                            
                        
                        `;
                        songsList.appendChild(songItem);
                    });
                randomShow.appendChild(songsList);
            
            }

    // shuffle songs functions (randomness and button)
    function shuffleList(array) {
        for (let i = array.length-1; i>0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    if(playlistsContainer){
    shuffleButton.addEventListener('click', () => {
        const shuffledSongs = shuffleList(currentPlaylist.slice());
        modalSongs(shuffledSongs);
    })
    }

    // Modal visibility
    function showModal(data) {
        modalImage.src = data.playlist_art;
        modalTitle.textContent = data.playlist_name;
        modalDescription.textContent = data.playlist_creator;
        currentPlaylist = data.songs;
        modalSongs(currentPlaylist);
        
        modal.style.display = 'block';
    }


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
    if(playlistsContainer){
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    }

    // closes modal by tapping outside popup box
    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }); 
});

    




// To-do:
//home slider
//put random playlist on home page
