import { getJadwal } from './controller/getjadwal.js';

function loadIndex() {
  getJadwal();
}

window.onload = loadIndex;
