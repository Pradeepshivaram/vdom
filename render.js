
const render= (vNode) => {
    // create element
    const $ele = document.createElement(vNode.tagName);

    // add all attributes as specified in vnode
    for(const [k, v] of Object.entries(vNode.attr)){
        $ele.setAttribute(k, v);
    }

    // add children as specified in vnode

    for( const child of vNode.children) {
        $ele.appendChild(render(child));
    }
    return $ele;

}

export default render;