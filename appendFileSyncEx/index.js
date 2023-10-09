// CH3-9
// 「appendFileSync(檔名, 要寫入的內容)」 可以把指定的內容加在該檔名原先的內容之後，不會像writeFileSync覆蓋就有內容，如果該檔名不存在則會自動建立一個

const fs = require('fs');
// fs.writeFileSync('note.txt', 'Hello world! ');
fs.appendFileSync('note.txt', 'data to append\n');
