function samplePromise(){
    return Promise.resolve("Ksatria");

}

const name = await samplePromise();
console.info(name);