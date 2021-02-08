import ICONS from '../../Icons';

function onMouseUp(event: React.MouseEvent, name: string) {
  const selection = window.getSelection();
  console.log(selection);
}

const Toolbar = () => (
  <div className="flex flex-row">
    { (Object.keys(ICONS) as Array<keyof typeof ICONS>).map((item) => (
        <div className="ml-5" 
          role="button" 
          key={item} 
          onClick={(e) => onMouseUp(e, item)}
        >
          <svg viewBox="0 0 16 16" width={16} height={16}>
            <path
              fillRule="evenodd"
              d={ICONS[item].path}
            />
          </svg>
        </div>
    ))}
  </div>
)

export default Toolbar;