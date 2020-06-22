import * as React from "react";
interface IAppProps {
}
interface IAppState {
}
declare class App extends React.Component<IAppProps, IAppState> {
    componentDidMount(): void;
    say(a: any, b: any): Promise<unknown>;
    render(): JSX.Element;
}
export default App;
