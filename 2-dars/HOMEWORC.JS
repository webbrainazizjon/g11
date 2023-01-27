// ================ HOMEVORC ===============
// let a = 1;
// let b = 1;
// let c = ++a;// bunda javob 2 chiqadi a 1ga teng ++a qilganimizda ++ 1ga oshirib beradi
// let d = b++; // bunda javob 1 chiqadi chunki bu Single Thread bo'yicha o'qib boryabdi
// console.log(d);

// let a = 2;
// let x = 1 + (a *= 2);// bunda a qiymatga 2 ko'paytirilyabdi va 4 keyin 1 qo'shilyabdi
// console.log(x);

// console.log("" + 1 + 0); //bunda 1 stringga aylanib unga 0 qo'shilyabdi => 10
// console.log("" - 1 + 0); //bunda 1ga 0 qo'shilyabdi va -1 qolyabdi => -1
// console.log(true + false);// bunda true 1ga teng false 0 shunda 1qiymat chiqadi =>1
// console.log(6 / "3");//bunda 6 3 ga bo'linyabdi => 2
// console.log("2" * "3");// bunda 2 3 ga ko'paytirilyabdi  => 6
// console.log(4+5+"px");// bunda 4ga 5 qo'shilyabdi keyin px qo'shilib shunda 9px chiqadi => 9px
// console.log("$" +4+5); //bunda "$"ga 4qo'shilyabdi $5 stringga aylanadi keyin 5qo'shilib => $45chiqadi
// console.log("4" - 2); //bunda 4dan 2 ayrilyabdi 2 qoladi => 2
// console.log("4px" - 2); // bunda string yani hariflar ham bor 2ga bo'linmaydi NaN chiqadi => NaN
// console.log("-9" +5);//bunda stringga 5 qo'shilyabdi -95 chiqyabdi chunki -string bor
// console.log("-9" -5);// bunda -9 -5 qo'shilyabdi -14 chiqadi chunki ikkalsida ham bir xil belgi bor
// console.log(null + 1);// bunda null 0ga teng shunda 1ni o'zi qoladi => 1
// console.log(undefined + 1);// bunfda unda 1ga bo'linmaydi chunki unda qiymatga ega emas javob => NaN
// console.log("\t\n" -2); bunda 1chi qiymat string 2ga bo'linmaydi shunda => -2


// console.log(5>4); //bunda true chiqadi chunki 5 4dan katta
// console.log("apple">"pineapple");// bunda a dan p katta shuning uchun false chiqadi
// console.log("2">"12");bunda ham 2da 1katta shuning uchun true chiqadi
// console.log(undefined == null);// bunda ikkala qiymat ham 0ga teng shuning uchun true bo'ladi
// console.log(undefined === null);// bunda qiymatlarning taypiga qaraladi ikkalasi boshqa boshqa data turiga kiradi falsebo'ladi
// console.log(null == "\n0\n");//bunda 2chi qiymat string bo'lyabdi shuning uchun false qaytaradi
// console.log(null === "\n0\n");//bunda ham ikkalsi alohida data turiga kiradi shuning uchun false qaytaradi