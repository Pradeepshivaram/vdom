import createElement from './createElement';
import render from './render';

const vNode = createElement('div',{
    attr : {
        id : 'first'
    },
    children : [
        createElement('p', {
            attr: {
                id :'second'
            }
        })
    ]
});

const rDom = render(vNode);

console.log(vNode);
console.log(rDom);
