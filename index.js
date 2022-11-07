const express = require('express');
const app = express();
const previousUsage = process.cpuUsage();

app.get('/restart', (req, res) => {
    const startDate = Date.now();
    setTimeout(function() {
        console.log(calculatePercentage(process.cpuUsage(previousUsage), startDate), "it is less than 70 percent ");
    }, 2000);
   
    while (Date.now() - startDate < 1500);//make your cpu above 70% usage
    const usage = process.cpuUsage(previousUsage);
    const result = calculatePercentage(usage, startDate)
    console.log(result, "check");
    if (result > 70) {
        res.send("restarting the server please check pm2 logs")
        process.exit(1)
    }

});


app.listen(8090, () => {
    console.log('listening on port 8090');
});

function calculatePercentage(usage, startDate) {
    return 100 * (usage.user + usage.system) / ((Date.now() - startDate) * 1000)
}
