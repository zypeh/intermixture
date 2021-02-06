import React, { useEffect, useRef } from 'react'

interface IEditableNode {
  onChange?: any;
  children: JSX.Element[] | JSX.Element;
}

const EditableNode = (props: IEditableNode) => {
  const { onChange } = props;
  const element = useRef<HTMLInputElement>();

  const elements: any[] = React.Children.toArray(props.children);
  
  const onMouseUp = () => {
    const value = element.current?.value || element.current?.innerText;
    if (onChange) {
      onChange(value);
    }
  }

  useEffect(() => {
    const value = element.current?.value || element.current?.innerText;
    if (onChange) {
      onChange(value);
    }
  }, []);

  return React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp
  });
}

export default EditableNode