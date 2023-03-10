let pegawai = "zhafira";
let jabatan = "manager";
let status = "menikah";

if (jabatan == "manager") {
  let gajipokok = 10000000;
  let tunjangan_jabatan = gajipokok * 0.1;
  let bpjs = gajipokok * 0.1;
  let tunjangan_menikah = status == "menikah" ? gajipokok * 0.1 : 0;

  let gaji = gajipokok + bpjs + tunjangan_jabatan + tunjangan_menikah;

  console.table({
    name: pegawai,
    jabatan: jabatan,
    status: status,
    gaji: gaji,
  });
} else if (jabatan == "asisten manajer") {
  let gajipokok = 8000000;
  let tunjangan_jabatan = gajipokok * 0.1;
  let bpjs = gajipokok * 0.1;
  let tunjangan_menikah = status == "menikah" ? gajipokok * 0.1 : 0;

  let gaji = gajipokok + bpjs + tunjangan_jabatan + tunjangan_menikah;

  console.table({
    name: pegawai,
    jabatan: jabatan,
    status: status,
    gaji: gaji,
  });
} else if (jabatan == "staff") {
  let gajipokok = 5000000;
  let tunjangan_jabatan = gajipokok * 0.1;
  let bpjs = gajipokok * 0.1;
  let tunjangan_menikah = status == "menikah" ? gajipokok * 0.1 : 0;

  let gaji = gajipokok + bpjs + tunjangan_jabatan + tunjangan_menikah;
  console.table({
    name: pegawai,
    jabatan: jabatan,
    status: status,
    gaji: gaji,
  });
}
