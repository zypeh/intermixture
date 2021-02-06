import EditableNode from './EditableNode';

const Notebook = () => {
  return(
    <div className="flex flex-col h-screen">
    <div className="flex">
      <aside 
        id="sidebar" 
        className="h-screen sticky top-0
          border-r border-gray-200 flex-col 
          justify-between p-8 md:w-48 lg:w-64"
      >
        <nav>
          <ul className="mt-8">
            <li>Tiltle 1</li>
            <li>
              <ul className="ml-6">
                <li>Subtitle 1</li>
                <li>Subtitle 2</li>
              </ul>
            </li>
            <li>Title 2</li>
            <li>Title 3</li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-5">
        <EditableNode>
          <div className="focus:outline-none mt-10">
            Content start here...
          </div>
        </EditableNode>
      </main>
    </div>
    </div>
  )
}

export default Notebook