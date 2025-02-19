const imageUrl = 'https://lh6.googleusercontent.com/_TFp7jzjLG1G1UNKLdY7bJI7Muwh_9qP8bb7YgVuyLTv5gp8imuHMO09bt2PyThoMwfhM2Ai478GsWcxlU5CzjE=w16383';

function bgImgLoaded() {
  if (!globals.headerBgImgLoaded) {
    globals.headerBgImgLoaded = new Date().getTime();
  } else {
    globals.headerBgImgLoaded();
  }
}

if (imageUrl) {
  const img = new Image();
  img.src = imageUrl;
  img.onload = bgImgLoaded;
  globals.headerBgImgExists = true;
} else {
  globals.headerBgImgExists = false;
}

// PayPal Button Rendering
const paypalButtons = [
  'TX2MBW8C3SXEE',
  'PY38NUTLZCQGG',
  'CJRQ4JBX4E2AL'
];

paypalButtons.forEach(buttonId => {
  paypal.HostedButtons({
    hostedButtonId: buttonId,
  }).render(`#paypal-container-${buttonId}`);
});
