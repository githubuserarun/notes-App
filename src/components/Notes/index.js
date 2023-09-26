import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  BgContainer,
  H1,
  InputContainer,
  Input,
  TextArea,
  Button,
  OutputContainer,
  Ul,
  EMPTY,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNoteList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNote = event => {
    setNotes(event.target.value)
  }
  const onSubmitNotes = event => {
    event.preventDefault()
    const newList = {
      id: v4(),
      title,
      notes,
    }
    setTitle('')
    setNotes('')

    setNoteList(prev => [...prev, newList])
  }
  console.log(notesList)

  return (
    <BgContainer>
      <H1>Notes</H1>
      <InputContainer onSubmit={onSubmitNotes}>
        <Input
          value={title}
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <TextArea
          value={notes}
          type="text"
          placeholder="Take a Note..."
          onChange={onChangeNote}
        />
        <Button type="submit">Add</Button>
      </InputContainer>
      <OutputContainer>
        {notesList.length === 0 ? (
          <EMPTY>
            <img
              width="100px"
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <h1>No Notes Yet</h1>
            <p>Notes you add will appear here</p>
          </EMPTY>
        ) : (
          <Ul>
            {notesList.map(each => (
              <NoteItem key={each.id} data={each} />
            ))}
          </Ul>
        )}
      </OutputContainer>
    </BgContainer>
  )
}
export default Notes
