import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
  <section id="about">
    <BentoGrid>
      {
        gridItems.map(({id,title,description,className,titleClassName}) => (
          <BentoGridItem
          id = {id}
          key={id}
          title= {title}
          description= {description} 
          className = {className}
          titleClassName = {titleClassName}/>
        ))
      }
    </BentoGrid>
  </section>
  )
}

export default Grid
