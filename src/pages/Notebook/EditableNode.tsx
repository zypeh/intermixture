import React from 'react';

class EditableNode extends React.Component<{}, { content: string }> {
  constructor(props: any) {
    super(props);
    this.state = {content: ''};
  }
  private contentRef = React.createRef<HTMLInputElement>();
  private firstChildNode: any = React.Children.toArray(this.props.children)[0];

  handleOnChange = () => {
    const value = this.contentRef.current?.value 
                || this.contentRef.current?.innerText;
    localStorage.setItem('content', value);
  }

  componentDidMount() {
    const storedContent = localStorage.getItem('content') || '';
    this.setState({content: storedContent});
  }

  render() {
    return React.cloneElement(this.firstChildNode, {
      contentEditable: true,
      suppressContentEditableWarning: true,
      ref: this.contentRef,
      onKeyUp: this.handleOnChange,
      value: this.state.content
    });
  }
}

export default EditableNode;