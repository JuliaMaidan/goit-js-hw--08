import localStorageAPI from './localStorage';

import Player from '@vimeo/player';

import { throttle } from 'throttle-debounce';

const iframe = document.querySelector('iframe')
const player = new Player(iframe);

player.on('timeupdate', throttle(1000, updateTime));

function updateTime (e) {
    const watched = e.seconds;
        
    localStorageAPI.save('videoplayer-current-time', watched)
}

player.setCurrentTime(localStorageAPI.load('videoplayer-current-time')).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});

