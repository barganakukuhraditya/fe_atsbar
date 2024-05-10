export function generateJadwal(jadwal) {
  return `
        <td>
            <span class="fw-normal">${jadwal.hari}</span>
        </td>
        <td>
            <span class="fw-normal">${jadwal.nama_matkul}</span>
        </td>
        <td>
            <span class="fw-normal">${jadwal.kode}</span>
        </td>
        <td>
            <span class="fw-normal">${jadwal.waktu_mulai}</span>
        </td>
        <td>
            <span class="fw-normal">${jadwal.waktu_selesai}</span>
        </td>
        <td>
            <span class="fw-normal">${jadwal.ruangan}</span>
        </td>
        <td>
            <span class="fw-normal">${jadwal.dosen}</span>
        </td>
        <td>
            <span class="fw-normal">${jadwal.nidn}</span>
        </td>
    `;
}
