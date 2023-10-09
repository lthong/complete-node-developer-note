// CH3-9
// writeFileSync(檔名, 要寫入的內容)」 可以把指定的內容寫入該檔名中，如果檔案存在，則會蓋掉舊的內容，如果該檔名不存在則會自動建立一個

const fs = require('fs');
// 在 note.txt 寫入一行「Hello world!」的內容
fs.writeFileSync('note.txt', 'Hello world!');
