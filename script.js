//Zadacha 11
var number = Math.floor(10*Math.random()) + 1;
console.log(number);
var count=2;
document.getElementById('check').onclick=function (){
	if (count>0){
		var usernumb = document.getElementById('numb').value;
		usernumb=parseInt(usernumb);
		var out=document.getElementById('out');
		if (usernumb==number){
			out.innerHTML='Вы угадали!!!';
		}
		else if (usernumb>number){
			out.innerHTML='Больше!';
		}
		else {
			out.innerHTML='Меньше!';
		}
		document.getElementById('count').innerHTML='Осталось попыток:'+count;
		count=count-1;
	}
	else {
		alert('Попытки закончились! Страница будет перезагружена.');
		location.reload();
	}
}