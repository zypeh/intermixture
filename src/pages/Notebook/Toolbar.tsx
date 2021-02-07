import ICONS from '../../Icons';

const Toolbar = () => (
  <div className="flex flex-row">
    { (Object.keys(ICONS) as Array<keyof typeof ICONS>).map(item => (
        <div className="ml-5" role="button" key={ item }>
          <svg viewBox="0 0 16 16" width={16} height={16}>
            <path
              fillRule="evenodd"
              d={ ICONS[item].path }
            ></path>
          </svg>
        </div>
    ))}
  </div>
)

export default Toolbar;