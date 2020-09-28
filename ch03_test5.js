var Person= {};

Person.age = 20;
Person.name = '소녀시대';
Person.add = function(a,b){
    return a+b;
};

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person['name']);
console.log('더하기 : %d', Person.add(10,10));
