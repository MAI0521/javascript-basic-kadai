const todayDate = () => {
    date = new Date();
    month = date.getMonth() + 1;
    day = date.getDate();
    year = date.getFullYear();
    let output =  year.toString() + '年' + month.toString() + '月' + day.toString() + '日';
    console.log(output);
}

todayDate();