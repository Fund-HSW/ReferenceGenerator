let separatorElement = document.createElement("hr");
const refDiv = document.createElement("div");

refDiv.id = "references";

document.body.appendChild(separatorElement);
document.body.append(refDiv);

let refList = document.getElementsByTagName("ref");

let i = 0;

for (let item of refList) {
    console.log(item.innerHTML)
    const refText = item.innerHTML
    
    const anchor = document.createElement("a")
    const anchorContent = document.createElement("sup")
    anchorContent.innerText = ++i

    item = anchor.appendChild(anchorContent)

    const refPara = document.createElement("p")
    const refParaLink = document.createElement("a")
    const refParaText = document.createElement("p")

    refParaLink.id = `fn${i}`
    refParaLink.setAttribute(`href`,`ref${i}`)

    refParaLink.textContent = i
    refParaText.textContent = refText

    refPara.appendChild(refParaLink)
    refPara.appendChild(refParaText)

    refDiv.appendChild(refPara)
};
