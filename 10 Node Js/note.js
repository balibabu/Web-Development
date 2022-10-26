const fs=require('fs');
fs.copyFileSync('file1.txt','file2.txt');
console.log('done execution');
// const reader = new FileReader();
// console.log(reader.readAsDataURL('file1.txt'));
fs.readFile('D:/Works_Space/Repos/Web-Development/Games/TheSimonGame/index.html', 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + 'file1.txt');
    console.log(data)
  });