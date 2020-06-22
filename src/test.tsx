import * as React from "react";
interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  componentDidMount() {
    new Set();
    this.say(1, 2);
  }
  say(a: any, b: any) {
    return new Promise((res) => {});
  }
  render() {
    return <div>Hello world3</div>;
  }
}
export default App;
