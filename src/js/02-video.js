import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime)
}

player.on('timeupdate', throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000));
