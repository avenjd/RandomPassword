let copyText = document.querySelector('.copy-text');
copyText.querySelector('button').addEventListener('click', function () {
	let input = copyText.querySelector('input.input-copy-text');
	let randomPass = getRandomPassword(20);
	input.value = randomPass;
	input.select();
	document.execCommand('copy');
	copyText.classList.add('active');
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove('active');
	}, 2000);
});

function getRandomPassword(lengthOfPassword) {
	const chars =
		'0123456789abcdefghijklmnopqrstuvwxyz!@#$%^_+-&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let password = '';
	const array = new Uint32Array(lengthOfPassword);
	window.crypto.getRandomValues(array);
	for (let i = 0; i < lengthOfPassword; i++) {
		password += chars[array[i] % chars.length];
	}
	return password;
}
