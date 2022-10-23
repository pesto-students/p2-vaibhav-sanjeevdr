function runner(genFn) {
    const itr = genFn();

    function run(arg){
        
        const result = itr.next(arg);

        if(result.done){
            return result.value;
        } else {
            return Promise.resolve(result.value).then(run);
        }
    }

    return run();
}

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

function* init(){
    const res1 = yield doTask1(3000,10);
    console.log(res1);

    const res2 = yield doTask2(3000,res1+10);
    console.log(res2);

    const res3 = yield doTask3(3000,res2+10);
    console.log(res3);

    return res3;
}

runner(init);