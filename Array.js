let lang = ['C', 'C++', 'JAVA', 'JAVASCRIPT'];
console.log(lang[3]);
lang[4] = 'PYTHON';
console.log(lang);

for (let element in lang)
    console.log(element);

for (let element of lang)
    console.log(element);
