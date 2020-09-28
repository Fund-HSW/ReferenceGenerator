let separatorElement = document.createElement("hr");
const refDiv = document.createElement("div");

refDiv.id = "references";

document.body.appendChild(separatorElement);
document.body.append(refDiv);

let refList = document.getElementsByTagName("ref");

for (curId=1; refList.length != 0; ++curId) {
    console.log(`the inner HTML of refList ${refList[0].innerHTML}`)
    const fnText = refList[0].innerHTML
    
    const refLink = document.createElement("a")
    const refCont = document.createElement("sup")
    refLink.id = `ref${curId}`
    refLink.setAttribute("href",`#fn${curId}`)
    refCont.innerText = `[${curId}]`
    refLink.appendChild(refCont)

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

    refList[0].outerHTML = refLink.outerHTML;
};
