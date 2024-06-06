document.addEventListener("DOMContentLoaded", function() {
    const playlistsContainer = document.getElementById('playlist-info');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    // const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalSongsList = document.getElementById('modal-songs-list');
    const shuffleButton = document.getElementById('shuffle')

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
            });

    // shuffle songs
    // let currentPlaylist = null;
    // shuffleIcon.addEventListener('click', () => {
    //     if (currentPlaylist) {
    //         shufflePlaylist(currentPlaylist);
    //     }
    // });

    // function shufflePlaylist(data){
    //     data.songs.sort(() => Math.random() - 0.5);
    //     showModal(data.songs);
    // }

    // to delete a playlist
    // const deletePlaylist = card.querySelector('.delete');
    // deletePlaylist.addEventListener('click', (event)=>{
    //     event.stopPropagation();
    //     card.remove();
    // });

            

        // handles modal visibility
    function showModal(data) {
        modalTitle.textContent = data.playlist_name;
        modalDescription.textContent = data.playlist_creator;
        modalSongsList.innerHTML = '';
        data.songs.forEach(song =>{
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
        modal.style.display = 'block';
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
// -commit Work?
// delete playlist
// shuffle
//home slider
