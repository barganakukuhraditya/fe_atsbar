import { jadwalurl } from '../config/url.js';
import { generateJadwal } from '../temp/jadwalmatkul.js';

function displayJadwal(matkulData) {
  const tableBody = document.getElementById('tabeljadwal');
  tableBody.innerHTML = '';

  matkulData.forEach((matkul) => {
    const row = document.createElement('tr');
    row.className = 'bg-white border-b dark:bg-zinc-800 dark:border-zinc-700';
    row.innerHTML = generateJadwal(matkul);
    tableBody.appendChild(row);
  });
}

export function getJadwal() {
  console.log('Fetching Mahasiswa Data...');
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(jadwalurl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched Mahasiswa Data:', data.data);
      displayJadwal(data.data);
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
    });
}
