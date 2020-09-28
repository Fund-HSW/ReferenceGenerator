let separatorElement = document.createElement("hr");
const refDiv = document.createElement("div");

refDiv.id = "references";

document.body.appendChild(separatorElement);
document.body.append(refDiv);

let refList = document.getElementsByTagName("ref");

let i = 0;

for (let item of refList) {
    console.log(item.innerHTML)
    const fnText = item.innerHTML
    const refListId = i
    const curId = ++i
        
    const refLink = document.createElement("a")
    const refCont = document.createElement("sup")
    refLink.id = `ref${curId}`
    refLink.setAttribute("href",`#fn${curId}`)
    refCont.innerText = `[${curId}]`
    refLink.appendChild(refCont)

    refList[refListId] = refLink;

    const fnPara = document.createElement("p")
    const fnParaLink = document.createElement("a")
    const fnParaText = document.createElement("p")

    fnParaLink.id = `fn${curId}`
    fnParaLink.setAttribute("href",`#ref${curId}`)

    fnParaLink.textContent = curId
    fnParaText.textContent = fnText

    fnPara.appendChild(fnParaLink)
    fnPara.appendChild(fnParaText)

    refDiv.appendChild(fnPara)
};
