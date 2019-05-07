import * as React from 'react';

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { blogs: [] };
    }

    async componentWillMount() {
        let r = await fetch('/api/blogs');
        let blogs = await r.json();
        this.setState({ blogs })
    }

    render() {
        return (
            <main className="container">
                {this.state.blogs.map((blog: any) => (
                    <h1 key={blog.id} className="m-3 text-center text-primary">{blog.title}</h1>
                ))}
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    blogs: any;
}