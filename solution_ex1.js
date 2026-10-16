let danhSachThietBi = [
  {
    id: 1,
    name: "Dieu hoa phong khach",
    isActive: true,
    powerWatts: 1500
  },
  {
    id: 2,
    name: "Den ngu",
    isActive: true,
    powerWatts: 20
  }
];

function findDeviceById(danhSach, id) {
  for (let i = 0; i < danhSach.length; i++) {
    if (danhSach[i].id === id) {
      return danhSach[i];
    }
  }
  return null;
}

function updateDevice(danhSach, id, duLieuMoi) {
  let thietBi = findDeviceById(danhSach, id);

  if (thietBi === null) {
    return false;
  }

  if (duLieuMoi.name !== undefined) {
    thietBi.name = duLieuMoi.name;
  }

  if (duLieuMoi.isActive !== undefined) {
    thietBi.isActive = duLieuMoi.isActive;
  }

  if (duLieuMoi.powerWatts !== undefined) {
    thietBi.powerWatts = duLieuMoi.powerWatts;
  }

  return true;
}

console.log("Truoc khi cap nhat:");
console.log(danhSachThietBi);

updateDevice(danhSachThietBi, 1, {
  isActive: false
});

updateDevice(danhSachThietBi, 2, {
  powerWatts: 0
});

console.log("Sau khi cap nhat:");
console.log(danhSachThietBi);