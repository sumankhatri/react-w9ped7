

//export default ({ name }) => <h1>Hello {name}!</h1>;

import * as React from 'react';

export interface HelloProps { name: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.name}!</h1>;
    }
}


