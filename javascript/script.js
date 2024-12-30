const input = document.getElementById('input');
const qrCode = document.getElementById('qrCode');
const sizeSlider = document.getElementById('sizeSlider');
const qrColorSlider = document.getElementById('colorPicker');
const bgColorSlider = document.getElementById('bgColorPicker');

function generateQRCode() {
  qrCode.innerHTML = ''; // Clear previous QR code
  const size = sizeSlider.value;
  const qrColor = qrColorSlider.value;
  const bgColor = bgColorSlider.value;

  if (input.value) {
    const qrcode = new QRCode(qrCode, {
      text: input.value,
      width: size,
      height: size,
      colorDark: qrColor,
      colorLight: bgColor,
  });
  }
}

input.addEventListener('input', generateQRCode);
sizeSlider.addEventListener('input', generateQRCode);
qrColorSlider.addEventListener('input', generateQRCode);
bgColorSlider.addEventListener('input', generateQRCode);
