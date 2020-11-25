const container = document.querySelector('.container');
const img = document.querySelector('img');
const userName = document.querySelector('.userName');
const userAge = document.querySelector('.userAge');
const userAdress = document.querySelector('.userAdress');

const bold = [userName]; // bold text = Victor Crest
const noBold = [userAge, userAdress]; // nobold text = 26, london

container.addEventListener('mousemove', e => {
	let ax = -(window.innerWidth / 2 - e.pageX) / 20;
	let ay = (window.innerHeight / 2 - e.pageY) / 10;
	let azNearText = '200px';
	let azFarText = '150px';

	container.style = `width:200%;
                       height: 500px;
                       transform: rotateY(${ax}deg) rotateX(${ay}deg);
                       -webkit-transform: rotateY(${ax}deg) rotateX(${ay}deg);
                       -moz-transform: rotateY(${ax}deg) rotateX(${ay}deg);
                       -o-transform: rotateY(${ax}deg) rotateX(${ay}deg)`;
	img.style = `transform: scale(1.3) rotateY(${ax}deg) rotateX($  {ay}deg) translateZ(${azNearText});
	-webkit-transform:  scale(1.3) rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azNearText});
	-moz-transform:  scale(1.3) rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azNearText});
	-o-transform:  scale(1.3) rotateY(${ax}deg) rotateX($  {ay}deg) translateZ(${azNearText});`;
	bold.forEach(element => {
		element.style = `transform: scale(1.3) rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azNearText});
                -webkit-transform: rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azNearText});
                -moz-transform: rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azNearText});
                -o-transform: transform: scale(1.3) rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azNearText});`;
	});
	noBold.forEach(element => {
		element.style = `transform: rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azFarText});
                -webkit-transform: rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azFarText});
                -moz-transform: rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azFarText});
                -o-transform: rotateY(${ax}deg) rotateX(${ay}deg) translateZ(${azFarText});`;
	});
});
const body = document.querySelector('body');
body.addEventListener(
	'mousemove',
	e => {
		container.style = `width: 200%;
                       height: 400px;
                       transform: rotateY(0) rotateX(0);
                       -webkit-transform: rotateY(0) rotateX(0);
                       -moz-transform: rotateY(0) rotateX(0);
                       -o--transform: rotateY(0) rotateX(0);`;

		bold.forEach(element => {
			element.style = `rotateY(0) rotateX(0) translateZ(0);
                            -webkit-transform: rotateY(0) rotateX(0) translateZ(0);
                            -moz-transform: rotateY(0) rotateX(0) translateZ(0);
                            -o-transform: rotateY(0) rotateX(0) translateZ(0)`;
		});
		noBold.forEach(element => {
			element.style = `transform: rotateY(0) rotateX(0) translateZ(0);
                            -webkit-transform: rotateY(0) rotateX(0) translateZ(0);
                            -moz-transform: rotateY(0) rotateX(0) translateZ(0);
                            -o-transform: rotateY(0) rotateX(0) translateZ(0)`;
		});
		img.style = `transform: scale(1.3);
                    -webkit-transform:scale(1.3);
                    -moz-transform: scale(1.3);
                    -o-transform: scale(1.3)`;
	},
	true
);

container.addEventListener('mouseleave', e => {
	container.style = `width: 200%;
                       height: 400px;
                       transform: rotateY(0) rotateX(0);
                       -webkit-transform: rotateY(0) rotateX(0);
                       -moz-transform: rotateY(0) rotateX(0)`;
	bold.forEach(element => {
		element.style = `rotateY(0) rotateX(0) translateZ(0);
                        -webkit-transform: rotateY(0) rotateX(0) translateZ(0);
                        -moz-transform: rotateY(0) rotateX(0) translateZ(0)`;
	});
	noBold.forEach(element => {
		element.style = `transform: rotateY(0) rotateX(0) translateZ(0);
                        -webkit-transform: rotateY(0) rotateX(0) translateZ(0);
                        -moz-transform: rotateY(0) rotateX(0) translateZ(0)`;
	});
	img.style = `transform: scale(1.3);
                -webkit-transform:scale(1.3);
                -moz-transform: scale(1.3)`;
});
