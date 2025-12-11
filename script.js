// Data musik Nusantara yang lengkap
const musicData = {
    songs: [
        // Trending Songs
        {
            id: 1,
            title: "Gambang Suling",
            artist: "Ki Nartosabdo",
            cover: "https://asset.kompas.com/crops/Kf36nc3c0RBfm4N7a3jfRdeiQ0A=/121x6:1000x592/750x500/data/photo/2022/02/18/620fa8b6a8b86.jpg",
            audio: "Video-Lirik-Lagu-Daerah-Gambang-Suling.mp3.mp3", // Placeholder audio URL
            duration: 225,
            genre: "tradisional",
            region: "Jawa",
            liked: false,
            trending: true
        },
        {
            id: 2,
            title: "Bengawan Solo",
            artist: "Gesang Martohartono",
            cover: "https://i1.sndcdn.com/artworks-000030417482-mr0h6m-t500x500.jpg",
            audio: "Gesang-Bengawan-Solo-Lyric.mp3.mp3",
            duration: 180,
            genre: "keroncong",
            region: "Jawa Tengah",
            liked: false,
            trending: true
        },
        {
            id: 3,
            title: "Duda Kalimantan",
            artist: "Rhoma Irama",
            cover: "https://i.ytimg.com/vi/p2TJVzvvdU8/hqdefault.jpg",
            audio: "audio/song3.mp3",
            duration: 320,
            genre: "dangdut",
            region: "Nasional",
            liked: false,
            trending: true
        },
        {
            id: 4,
            title: "Goyang Dua Jari",
            artist: "Saidah & OM Sagita",
            cover: "https://i.scdn.co/image/ab67616d0000b2739519813921b0480c1d73c59c",
            audio: "Sandrina-Goyang-2-Jari-(Official Music Video).mp3.mp3",
            duration: 280,
            genre: "dangdut koplo",
            region: "Jawa Timur",
            liked: false,
            trending: true
        },

        // Traditional Songs
        {
            id: 5,
            title: "Lir Ilir",
            artist: "Sunan Kalijaga",
            cover: "https://almuhtada.org/wp-content/uploads/2024/03/Picture6.jpg",
            audio: "LIR-ILIR.mp3.mp3",
            duration: 210,
            genre: "tradisional",
            region: "Jawa",
            liked: false,
            trending: false
        },
        {
            id: 6,
            title: "Butet",
            artist: "Lagu Batak",
            cover: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/03/21/2082964114.png",
            audio: "Butet - Lagu Daerah Sumatera Utara (dengan Lirik).mp3.mp3",
            duration: 195,
            genre: "tradisional",
            region: "Sumatera Utara",
            liked: false,
            trending: false
        },
        {
            id: 7,
            title: "Soleram",
            artist: "Lagu Melayu",
            cover: "https://inca.ac.id/wp-content/uploads/2025/03/suku-melayu-6143ea1306310e657c711402.jpg",
            audio: "SOLERAM-(Lagu-Daerah-Riau)-Lirik-Lagu-Wajib-Nasional-Indonesia-Full-Lyrics-Video.mp3.mp3",
            duration: 180,
            genre: "tradisional",
            region: "Riau",
            liked: false,
            trending: false
        },
        {
            id: 8,
            title: "Ampar-Ampar Pisang",
            artist: "Lagu Banjar",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROa0s_2f4q9dHJddQp3nhxR6ZykcH3Kvee6w&s",
            audio: "AMPAR AMPAR PISANG (Lagu Daerah Kalimantan Selatan) Lirik Lagu Wajib Nasional Indonesia Musik Lyrics.mp3",
            duration: 185,
            genre: "tradisional",
            region: "Kalimantan",
            liked: false,
            trending: false
        },

        // Modern Songs
        {
            id: 9,
            title: "Bintang di Surga",
            artist: "Peterpan",
            cover: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            audio: "audio/song9.mp3",
            duration: 245,
            genre: "pop",
            region: "Nasional",
            liked: false,
            trending: false
        },
        {
            id: 10,
            title: "Dia",
            artist: "Anji",
            cover: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            audio: "ANJI-DIA-(OFFICIAL LIRIK VIDEO).mp3.mp3",
            duration: 265,
            genre: "pop",
            region: "Nasional",
            liked: false,
            trending: false
        },
        {
            id: 11,
            title: "Ya Maulana",
            artist: "Sabyan Gambus",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            audio: "audio/song11.mp3",
            duration: 290,
            genre: "gambus",
            region: "Nasional",
            liked: false,
            trending: false
        },
        {
            id: 12,
            title: "Menepi",
            artist: "Payung Teduh",
            cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            audio: "audio/song12.mp3",
            duration: 220,
            genre: "folk",
            region: "Nasional",
            liked: false,
            trending: false
        },

        // More Songs
        {
            id: 13,
            title: "Kroncong Moritsko",
            artist: "Keroncong Tugu",
            cover: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            audio: "audio/song13.mp3",
            duration: 195,
            genre: "keroncong",
            region: "Jakarta",
            liked: false,
            trending: false
        },
        {
            id: 14,
            title: "Yamko Rambe Yamko",
            artist: "Lagu Papua",
            cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            audio: "Yamko Rambe Yamko (Lirik Vokal Terjemahan).mp3",
            duration: 210,
            genre: "tradisional",
            region: "Papua",
            liked: false,
            trending: false
        },
        {
            id: 15,
            title: "Manuk Dadali",
            artist: "Lagu Sunda",
            cover: "https://i.scdn.co/image/ab67616d00001e02fd4fb8fb010ed38abc6e4ab8",
            audio: "Aty Surya - Manuk Dadali.mp3",
            duration: 190,
            genre: "tradisional",
            region: "Jawa Barat",
            liked: false,
            trending: false
        },
        {
            id: 16,
            title: "Cinta Sampai Mati",
            artist: "Maya & Meggi Z",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            audio: "audio/song16.mp3",
            duration: 310,
            genre: "dangdut koplo",
            region: "Jawa Timur",
            liked: false,
            trending: false
        }
    ]
};

// State variables
let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let isRepeating = false;
let volume = 70;
let likedSongs = new Set();
let collectionSongs = new Set();

// DOM Elements
const player = {
    audio: document.getElementById('audioPlayer'),
    cover: document.getElementById('currentCover'),
    title: document.getElementById('currentTitle'),
    artist: document.getElementById('currentArtist'),
    likeBtn: document.getElementById('likeBtn'),
    playBtn: document.getElementById('playBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    shuffleBtn: document.getElementById('shuffleBtn'),
    repeatBtn: document.getElementById('repeatBtn'),
    progressBar: document.getElementById('progressBar'),
    progressFill: document.getElementById('progressFill'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    volumeSlider: document.getElementById('volumeSlider')
};

// Initialize the app
function initApp() {
    loadSongs();
    setupEventListeners();
    updateGreeting();
    loadFavorites();
    loadCollection();
}

// Load songs to different sections
function loadSongs() {
    const trendingSongs = musicData.songs.filter(song => song.trending);
    const traditionalSongs = musicData.songs.filter(song => song.genre === 'tradisional');
    const modernSongs = musicData.songs.filter(song => ['pop', 'dangdut', 'gambus', 'folk'].includes(song.genre));

    renderSongGrid('trendingSongs', trendingSongs);
    renderSongGrid('traditionalSongs', traditionalSongs);
    renderSongGrid('modernSongs', modernSongs);
    renderExploreSongs();
}

// Render song grid
function renderSongGrid(containerId, songs) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = songs.map(song => `
        <div class="song-card" data-id="${song.id}">
            <img src="${song.cover}" alt="${song.title}" class="song-cover">
            <div class="play-overlay">
                <button class="play-overlay-btn" data-id="${song.id}">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
        </div>
    `).join('');
}

// Render songs list
function renderSongsList(containerId, songs) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = songs.map((song, index) => `
        <div class="song-row" data-id="${song.id}">
            <div class="song-number">${index + 1}</div>
            <img src="${song.cover}" alt="${song.title}" class="song-row-img">
            <div class="song-row-info">
                <div class="song-row-title">${song.title}</div>
                <div class="song-row-artist">${song.artist}</div>
            </div>
            <div class="song-row-duration">${formatTime(song.duration)}</div>
            <div class="song-row-like ${likedSongs.has(song.id) ? 'liked' : ''}" data-id="${song.id}">
                <i class="${likedSongs.has(song.id) ? 'fas' : 'far'} fa-heart"></i>
            </div>
        </div>
    `).join('');
}

// Render explore songs
function renderExploreSongs() {
    renderSongsList('exploreSongs', musicData.songs);
}

// Load favorites
function loadFavorites() {
    const favorites = musicData.songs.filter(song => likedSongs.has(song.id));
    renderSongsList('favoritesList', favorites);
}

// Load collection
function loadCollection() {
    const collection = musicData.songs.filter(song => collectionSongs.has(song.id));
    renderSongsList('collectionList', collection);
}

// Setup event listeners
function setupEventListeners() {
    // Audio element events
    player.audio.addEventListener('timeupdate', updateProgressBar);
    player.audio.addEventListener('ended', function() {
        if (isRepeating) {
            player.audio.currentTime = 0;
            playSong();
        } else {
            playNext();
        }
    });
    player.audio.addEventListener('loadedmetadata', function() {
        player.duration.textContent = formatTime(player.audio.duration);
    });

    // Navigation
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            switchPage(page);

            // Update active state
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 2) {
            const results = musicData.songs.filter(song =>
                song.title.toLowerCase().includes(searchTerm) ||
                song.artist.toLowerCase().includes(searchTerm)
            );
            renderSongGrid('trendingSongs', results);
        } else if (searchTerm.length === 0) {
            loadSongs();
        }
    });

    // Song card clicks
    document.addEventListener('click', function(e) {
        // Play button on song card
        if (e.target.closest('.play-overlay-btn')) {
            const songId = parseInt(e.target.closest('.play-overlay-btn').getAttribute('data-id'));
            playSongById(songId);
        }

        // Song card click
        if (e.target.closest('.song-card')) {
            const songId = parseInt(e.target.closest('.song-card').getAttribute('data-id'));
            playSongById(songId);
        }

        // Song row click
        if (e.target.closest('.song-row')) {
            const songId = parseInt(e.target.closest('.song-row').getAttribute('data-id'));
            playSongById(songId);
        }

        // Like button in song row
        if (e.target.closest('.song-row-like')) {
            const songId = parseInt(e.target.closest('.song-row-like').getAttribute('data-id'));
            toggleLike(songId, e.target.closest('.song-row-like'));
        }
    });

    // Player controls
    player.playBtn.addEventListener('click', togglePlay);
    player.prevBtn.addEventListener('click', playPrev);
    player.nextBtn.addEventListener('click', playNext);
    player.likeBtn.addEventListener('click', toggleCurrentLike);
    player.shuffleBtn.addEventListener('click', toggleShuffle);
    player.repeatBtn.addEventListener('click', toggleRepeat);

    // Progress bar
    player.progressBar.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        updateProgress(pos);
    });

    // Volume
    player.volumeSlider.addEventListener('input', function(e) {
        volume = e.target.value;
        updateVolume();
    });

    // Genre cards
    document.querySelectorAll('.genre-card').forEach(card => {
        card.addEventListener('click', function() {
            const genre = this.getAttribute('data-genre');
            filterByGenre(genre);
        });
    });
}

// Switch pages
function switchPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const page = document.getElementById(`${pageName}-page`);
    if (page) {
        page.classList.add('active');
    }
}

// Play song by ID
function playSongById(songId) {
    const songIndex = musicData.songs.findIndex(song => song.id === songId);
    if (songIndex !== -1) {
        currentSongIndex = songIndex;
        loadSong(currentSongIndex);
        playSong();
    }
}

// Load song
function loadSong(index) {
    const song = musicData.songs[index];
    player.audio.src = song.audio;
    player.audio.volume = volume / 100;
    player.cover.src = song.cover;
    player.title.textContent = song.title;
    player.artist.textContent = song.artist;
    player.duration.textContent = formatTime(song.duration);
    player.likeBtn.innerHTML = `<i class="${likedSongs.has(song.id) ? 'fas' : 'far'} fa-heart"></i>`;
    player.likeBtn.classList.toggle('liked', likedSongs.has(song.id));
}

// Play song
function playSong() {
    player.audio.play().then(() => {
        isPlaying = true;
        player.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        showNotification(`Memutar: ${musicData.songs[currentSongIndex].title}`);
    }).catch(error => {
        console.error('Error playing audio:', error);
        showNotification('Gagal memutar lagu');
    });
}

// Pause song
function pauseSong() {
    player.audio.pause();
    isPlaying = false;
    player.playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Toggle play/pause
function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Play previous song
function playPrev() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = musicData.songs.length - 1;
    }
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

// Play next song
function playNext() {
    currentSongIndex++;
    if (currentSongIndex >= musicData.songs.length) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

// Update progress bar based on audio element
function updateProgressBar() {
    const currentTime = player.audio.currentTime;
    const duration = player.audio.duration;
    const progressPercent = (currentTime / duration) * 100;
    player.progressFill.style.width = `${progressPercent}%`;
    player.currentTime.textContent = formatTime(currentTime);
}

// Update progress manually
function updateProgress(position) {
    const duration = player.audio.duration;
    player.audio.currentTime = position * duration;
}

// Toggle like for current song
function toggleCurrentLike() {
    const songId = musicData.songs[currentSongIndex].id;
    toggleLike(songId, player.likeBtn);
}

// Toggle like for any song
function toggleLike(songId, element) {
    if (likedSongs.has(songId)) {
        likedSongs.delete(songId);
        element.classList.remove('liked');
        element.innerHTML = '<i class="far fa-heart"></i>';
        showNotification('Dihapus dari favorit');
    } else {
        likedSongs.add(songId);
        element.classList.add('liked');
        element.innerHTML = '<i class="fas fa-heart"></i>';
        showNotification('Ditambahkan ke favorit');
    }

    // Update favorites page
    loadFavorites();
}

// Toggle shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    player.shuffleBtn.classList.toggle('active', isShuffled);
    showNotification(isShuffled ? 'Mode acak aktif' : 'Mode acak nonaktif');
}

// Toggle repeat
function toggleRepeat() {
    isRepeating = !isRepeating;
    player.repeatBtn.classList.toggle('active', isRepeating);
    showNotification(isRepeating ? 'Mode ulang aktif' : 'Mode ulang nonaktif');
}

// Update volume
function updateVolume() {
    player.audio.volume = volume / 100;
}

// Filter by genre
function filterByGenre(genre) {
    const filteredSongs = musicData.songs.filter(song => song.genre === genre);
    renderSongsList('exploreSongs', filteredSongs);
    showNotification(`Menampilkan musik ${genre}`);
}

// Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update greeting based on time
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Selamat Datang";

    if (hour < 12) greeting = "Selamat Pagi";
    else if (hour < 15) greeting = "Selamat Siang";
    else if (hour < 19) greeting = "Selamat Sore";
    else greeting = "Selamat Malam";

    document.getElementById('greetingText').textContent = greeting;
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', initApp);
