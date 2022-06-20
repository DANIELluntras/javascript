const num =3884764.23

const timed={
  style: 'currency',
  unit:'celsius',
  currency:'EUR',
  useGrouping:false,

}
console.log(timed)



console.log('US: ',new Intl.NumberFormat('en-US',timed).format(num));
console.log('Germany: ',new Intl.NumberFormat('de-DE',timed).format(num));
console.log('Syria: ',new Intl.NumberFormat('ar-SY',timed).format(num));
console.log('Romania: ',new Intl.NumberFormat('ro-RO',timed).format(num));
console.log(navigator.language,new Intl.NumberFormat(navigator.language).format(num)
);
