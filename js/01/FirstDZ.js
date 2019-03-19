
var  steptometer = 0.7; //Перевод шагов в метры
var stepvalue; //Переменная Шаг2Метров
var Ves= 0.5; //Формула подсчета калорий
var vesvalue; //Переменная количество калорий

do{
	var stepvalue = prompt ("Сколько вы прошли шагов?","");
	var vesvalue  = prompt ("Введите свой Вес в 'КГ'");
	stepvalue	  = stepvalue * steptometer; 
	vesvalue      = stepvalue / 1000 * 0.5 * vesvalue;
	
	alert("Метров : "  + stepvalue );
	alert("Или КМ/: " + stepvalue / 1000);
	alert("сожженные Ккал : " + vesvalue );
}while(stepvalue !== null)