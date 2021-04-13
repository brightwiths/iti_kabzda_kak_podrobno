import React, {useState} from 'react';

type AccordionPropsType = {
  titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering')

  // const collapsed = false;
  let [collapsed, setCollapsed] = useState(false);

  return <div>
    <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)} }/>
    {!collapsed && <AccordionBody/>}
  </div>

}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={() => { props.onClick() } }>--{props.title}--</h3>
}

function AccordionBody() {
  return <ul>
    <li>1 gl</li>
    <li>2 hf</li>
    <li>3 hi</li>
  </ul>
}

export default UncontrolledAccordion;