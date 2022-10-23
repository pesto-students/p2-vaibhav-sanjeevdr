function doTask1(ms, value){
	return new Promise((resolve) => {
		setTimeout(() => resolve(value), ms);
	});
}

function doTask2(ms, value){
	return new Promise((resolve) => {
		setTimeout(() => resolve(value+10), ms);
	});
}

function doTask3(ms, value){
	return new Promise((resolve) => {
		setTimeout(() => resolve(value+10), ms);
	});
}

async function init(){
    const res1 = await doTask1(3000, 10);
    console.log(res1);

    const res2 = await doTask2(3000, res1);
    console.log(res2);

    const res3 = await doTask3(3000, res2);
    console.log(res3);

    return res3;
}

init();