const copyText = document.querySelector('.copy-text')
const input = document.querySelector('.input-copy-text')
const passLength = document.querySelector('#length')
const passLengthDisplay = document.querySelector('#pass-length')
const decrementBtn = document.querySelector('#decrement-btn')
const incrementBtn = document.querySelector('#increment-btn')
const refreshBtn = document.querySelector('#refresh-btn')
const copyBtn = document.querySelector('#copy-btn')
const showBtn = document.querySelector('#show-btn')

passLengthDisplay.textContent = passLength.value

passLength.addEventListener('input', () => {
	passLengthDisplay.textContent = passLength.value
	generatePassword(passLength.value)
})

decrementBtn.addEventListener('click', () => {
	if (passLength.value > 5) {
		passLength.value--
		passLengthDisplay.textContent = passLength.value
		generatePassword(passLength.value)
	}
})

incrementBtn.addEventListener('click', () => {
	if (passLength.value < 25) {
		passLength.value++
		passLengthDisplay.textContent = passLength.value
		generatePassword(passLength.value)
	}
})

refreshBtn.addEventListener('click', () => {
	generatePassword(passLength.value)
})

const copy = () => {
	navigator.clipboard.writeText(input.textContent).then(function () {
		copyText.classList.add('active')
		window.getSelection().removeAllRanges()
		setTimeout(() => {
			copyText.classList.remove('active')
		}, 2000)
	})
}

const showPass = () => {
	let eyeIcon = document.querySelector('.eye')
	if (eyeIcon.classList.contains('fa-eye-slash')) {
		eyeIcon.classList.remove('fa-eye-slash')
		eyeIcon.classList.add('fa-eye')
		input.classList.remove('filter')
	} else {
		eyeIcon.classList.add('fa-eye-slash')
		eyeIcon.classList.remove('fa-eye')
		input.classList.add('filter')
	}
}

showBtn.addEventListener('click', showPass)
copyBtn.addEventListener('click', copy)
input.addEventListener('click', copy)

const generatePassword = (lengthOfPassword) => {
	const chars =
		'0123456789abcdefghijklmnopqrstuvwxyz!@#$%^_±&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let password = ''
	const array = new Uint32Array(lengthOfPassword)
	window.crypto.getRandomValues(array)
	for (let i = 0; i < lengthOfPassword; i++) {
		password += chars[array[i] % chars.length]
	}
	input.textContent = password
}

document.addEventListener('DOMContentLoaded', generatePassword(8))
