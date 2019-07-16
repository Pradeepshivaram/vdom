export default (tagName, { attr = {}, children = [] }) => {
    const vElem = Object.create(null);
    Object.assign(vElem, {
        tagName,
        attr,
        children
    })
    return vElem;
}