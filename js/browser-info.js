function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName, browserVersion;

    // Визначення браузера
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName
            = "Safari";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
    } else if (userAgent.indexOf("Edg")
        > -1) {
        browserName = "Edge";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
        browserName = "Internet Explorer";
    } else {
        browserName
            = "Невідомий браузер";
    }

    // Визначення версії браузера (спрощений варіант)
    const regex = new RegExp(`${browserName}/([\\d.]+)`);
    const match = userAgent.match(regex);
    if (match) {
        browserVersion = match[1];
    }

    return { name: browserName, version: browserVersion };
}

const browserInfo = getBrowserInfo();
console.log(`Браузер: ${browserInfo.name}, версія: ${browserInfo.version}`);
