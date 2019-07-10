import * as React from "react";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default class Index extends React.PureComponent {
  static async getInitialProps() {}
  render() {
    return <div>{publicRuntimeConfig.MESSAGE}</div>;
  }
}
