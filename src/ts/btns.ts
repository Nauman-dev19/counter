export function btns() {
	class btn {
		name: string;
		btnClass1: string;
		btnClass2: string;

		constructor(name: string, btnClass1: string, btnClass2: string) {
			this.name = name;
			this.btnClass1 = btnClass1;
			this.btnClass2 = btnClass2;
		}
		btnGenerater() {
			const counterBtns = document.querySelector(`.counter-btns`);
			const button = document.createElement(`button`);
			const buttonName = document.createTextNode(this.name);
			button.classList.add(this.btnClass1, this.btnClass2);
			button.appendChild(buttonName);
			counterBtns?.appendChild(button);
			console.log(button);
		}
	}
	const btn1 = new btn(`increase`, `btn-succes`, `add`);
	const btn2 = new btn(`decrease`, `btn-danger`, `minus`);
	const btn3 = new btn(`reset`, `btn-warning`, `zero`);
	let btnArray: Array<btn> = [];
	btnArray.push(btn1, btn2, btn3);
	function callForaction() {
		btnArray.forEach((element) => {
			element.btnGenerater();
		});
	}
	callForaction();
	console.log(`hij`);
}
