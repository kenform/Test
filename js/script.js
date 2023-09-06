// Получение всех кнопок
const btns = document.querySelectorAll('.button');
for (let btn of btns) {
	btn.onclick = () => {
		btn.classList.toggle('active');
	};
}
