import React from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

interface MyProps {
  page: string;
}

interface MyState {
  class: string;
}

/**
 * test
 */
export default class Link extends React.Component<MyProps, MyState> {
  /**
   * test
   * @param {MyProps} props test
   */
  constructor(props: MyProps) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  /**
   * test
   */
  _onMouseEnter(): void {
    this.setState({ class: STATUS.HOVERED });
  }

  /**
   * test
   */
  _onMouseLeave(): void {
    this.setState({ class: STATUS.NORMAL });
  }

  /**
   * test
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    return (
      <a
        className={this.state.class}
        href={this.props.page || "#"}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
