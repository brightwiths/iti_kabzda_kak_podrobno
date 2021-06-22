import React from 'react';

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean
  onChange: () => void
  /**
   * optional color of header text
   */
  color?: string
  items: ItemType[]
  onClick: (value: any) => void
}

export const Accordion: React.FC<AccordionPropsType> = React.memo((props) => {
    console.log('Accordion rendering')

    return <div>
      <AccordionTitle title={props.titleValue}
                      color={props.color}
                      onChange={props.onChange}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>

  }
)

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
  color?: string
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = React.memo((props) => {
  console.log('AccordionTitle rendering')
  return <h3
    style={{color: props.color ? props.color : 'black'}}
    onClick={(e) => props.onChange()}>--{props.title}--</h3>
})

export type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const AccordionBody: React.FC<AccordionBodyPropsType> = React.memo((props) => {
  console.log('AccordionBody rendering')
  return <ul>
    {props.items.map((i, index) => <li onClick={() => {
      props.onClick(i.value)
    }} key={index}>{i.title}</li>)}
  </ul>
})
