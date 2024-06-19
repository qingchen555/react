import Home from './home'
import Search from './search'
import Like from './like'
import Create from './create'

export default function Icon(props) {
  switch (props.name) {
    case 'Home':
      return <Home />
    case 'Search':
      return <Search />
    case 'Like':
      return <Like />
    case 'Create':
      return <Create />
    default:
      return null
  }
}
