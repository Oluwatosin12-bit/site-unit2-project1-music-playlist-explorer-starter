const randomShow = document.getElementById('playlist-random');
     if (randomShow) {
                const randomPlaylist = data.playlists[Math.floor(Math.random()*8)];
                const card = document.createElement('div');
                card.className = 'playlist-home';
                card.innerHTML = `
                
               <span> <img src="${randomPlaylist.playlist_art}"/>
                <h3>${randomPlaylist.playlist_name}</h3></span>
               `;
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