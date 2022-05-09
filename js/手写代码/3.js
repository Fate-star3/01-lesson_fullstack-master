// - 实现日期格式化函数 
    // '2020-12-01'  yyyy/MM/dd      2020/12/01
    // '2020-04-01'  yyyy/MM/dd      2020/01/01
    // '2020-04-01'  yyyy年MM月dd日  2020年04月01日

    const dateFormat = (date, format) => {
        // console.log(typeof date, Object.prototype.toString.call(date));
        // console.log(date.getDate() < 10 ? '0' + date.getDate() :date.getDate());
        var day = date.getDate(); // 日子
        if (day < 10) {
            day = '0' + day
        }
        var month = date.getMonth() + 1; // 月份从0开始
        if (month < 10) {
            month = '0' + month
        }
        var year = date.getFullYear();
        format = format.replace('yyyy', year);
        // console.log(format, '--------------');
        format = format.replace('MM', month);
        format = format.replace('dd', day);
        return format;
    }
    
    console.log(dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd'));
    console.log(dateFormat(new Date('2020-12-01'), 'yyyy年MM月dd日'));