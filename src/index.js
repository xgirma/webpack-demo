import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    let button = document.createElement('button');
    let br = document.createElement('br');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then( module => {
        let print = module.default;
        print();
    });

    return element;
}

document.body.appendChild(component());
