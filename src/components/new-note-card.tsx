export function NewNoteCard() {
  return (
    <button className="flex flex-col rounded-md bg-slate-700 p-5 space-y-3 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none text-left">
      <span className="text-sm top-0 font-medium text-slate-200">
        Adicionar note
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </button>
  )
}
