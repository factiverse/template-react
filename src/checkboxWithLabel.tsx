import * as React from 'react';

interface MyProps {
  labelOn: string;
  labelOff: string;
}

interface MyState {
  isChecked: boolean;
}

/**
 * test
 */
export default class CheckboxWithLabel extends React.Component<
  MyProps,
  MyState
> {
  /**
   * test
   * @param {MyProps} props test
   */
  constructor(props: MyProps) {
    super(props);
    this.state = { isChecked: false };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * test
   */
  onChange(): void {
    this.setState({ isChecked: !this.state.isChecked });
  }

  /**
   * test
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}
