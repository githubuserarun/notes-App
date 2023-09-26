import {List, H1, Para} from './styledComponents'

const NoteItem = props => {
  const {data} = props
  const {title, notes} = data
  return (
    <List>
      <H1>{title}</H1>
      <Para>{notes}</Para>
    </List>
  )
}
export default NoteItem
