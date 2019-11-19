export const getClass = rules => {

    // TODO: add rules validation

    rules = rules.replace(/\s/g, '');
    const className = rules.split(/[^0-9a-z]/g)
        .filter(str => str !== '')
        .sort()
        .join('');
    //
    // let styleElementsArray = Array.from(document.head.getElementsByTagName('style'));
    let styleElement = document.createElement('style');
    styleElement.innerText = `.${className} {${rules}}`;
    document.head.appendChild(styleElement);

    return className;
}
