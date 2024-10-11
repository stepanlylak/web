function generateMenu() {
    const pages = ["Головна", "Сучасна класифікація", "Поширення", "Живлення", "Розмноження", "Еволюція"];
    let linksHtml = "";
    let selectHtml = ""

    // Визначаємо рівень вкладеності поточної сторінки
    let page = window.location.pathname.replace(/.*\/web\//, '')
    let pageLevel = page.split("/").length - 1;

    for (let i = 0; i < pages.length; i++) {
        let href, current;

        if(i === 0) {
            href = "../".repeat(pageLevel) + (i === 0 ? "index.html" : `page-${i}/index.html`);
        } else {
            href = "../".repeat(pageLevel) + `pages/page-${i}/index.html`;
        }

        if (pageLevel > 0) {
            current = href.includes(page);
        } else {
            current = i === 0;
        }


        linksHtml += `<span onclick="navigate('${href}')" onmouseover="mouseover(event, ${current});" onmouseout="mouseout(event, ${current});">${pages[i]}</span>`;
        selectHtml += `<option value="${href}" ${ current ? 'selected' : ''}>${pages[i]}</option>`
        if (i < pages.length - 1) {
            linksHtml += " | ";
        }
    }

    const menuHtml = `<nav>${linksHtml}</nav><select name="select" onchange="selectOnChange(event);">${selectHtml}</select>`;

    document.querySelector('body > header').insertAdjacentHTML("afterbegin", menuHtml);
}

generateMenu();

function navigate(route) {
    window.location.href = route;
}

function mouseover(event, current) {
    if(current) return;
    event.target.style.color = 'red';
}
function mouseout(event, current) {
    if(current) return;
    event.target.style.color = '#232323';
}

function selectOnChange(event) {
navigate(event.target.value);
}
