import { ChangeEvent, useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string
  date: Date
  text: string
}

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes') // set localStorage items on const

    if (notesOnStorage) {
      // verify if has notes on storage
      return JSON.parse(notesOnStorage)
    }

    return [] // if hasn't notes: return a empty array
  })

  function onNoteCreate(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      text: content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    setSearch(query)
  }

  const filteredNotes =
    search !== ''
      ? notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Logo NLW" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          onChange={handleChangeSearch}
        />
      </form>

      <div className="h-[1px] bg-slate-700"></div>

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreate={onNoteCreate} />

        {filteredNotes.map((note) => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}
